# Hyperliquid Core Historical Data Dump

Sample records from Bitquery's **Hyperliquid Core (HyperCore)** dataset: the L1
order-book exchange, not HyperEVM. Every sample is real production data written by the
same exporter that produces a full delivery, so the field names, types and value shapes
here are exactly what you get when you buy the data.

## Tables

The export writes seven tables. Every row carries `Block_Number` and `Block_Time`, so
tables join on block without a separate blocks table.

| Table | Grain | Columns | Sample Parquet | Records |
|---|---|---:|---|---|
| `trades` | one row per side of each match, liquidations excepted | 48 | [`1165214001_1165214024.parquet`](https://bitquery-blockchain-dataset.s3.us-east-1.amazonaws.com/hyperliquid/trades/1165214001_1165214024.parquet) (100 rows) | [`trades.js`](trades.js) |
| `perp_liquidations` | one row per side of each liquidation match | 48 | none, see below | |
| `twaps` | one row per TWAP order status change | 32 | [`1165214012_1165214910.parquet`](https://bitquery-blockchain-dataset.s3.us-east-1.amazonaws.com/hyperliquid/twaps/1165214012_1165214910.parquet) (7 rows) | [`twaps.js`](twaps.js) |
| `order_updates` | one row per order status change | 51 | [`1078000000_1078000000.parquet`](https://bitquery-blockchain-dataset.s3.us-east-1.amazonaws.com/hyperliquid/order_updates/1078000000_1078000000.parquet) (100 rows) | [`order_updates.js`](order_updates.js) |
| `book_updates` | one row per L4 book change of a single order | 36 | [`1078000000_1078000001.parquet`](https://bitquery-blockchain-dataset.s3.us-east-1.amazonaws.com/hyperliquid/book_updates/1078000000_1078000001.parquet) (100 rows) | [`book_updates.js`](book_updates.js) |
| `price_updates` | one row per coin and price kind in each oracle push | 20 | [`1078000012_1078000012.parquet`](https://bitquery-blockchain-dataset.s3.us-east-1.amazonaws.com/hyperliquid/price_updates/1078000012_1078000012.parquet) (100 rows) | [`price_updates.js`](price_updates.js) |
| `perp_fundings` | one row per account and market at each hourly funding settlement | 23 | [`1165214467_1165214467.parquet`](https://bitquery-blockchain-dataset.s3.us-east-1.amazonaws.com/hyperliquid/perp_fundings/1165214467_1165214467.parquet) (100 rows) | [`perp_fundings.js`](perp_fundings.js) |

Where the samples come from:

- `trades`, `twaps` and `perp_fundings`: the 1,000-block pack `1165214000`–`1165214999`
  (29 September 2026). That pack held 11,082 trade rows, 7 TWAP status rows and one hourly
  funding settlement of 411,880 rows across 327 markets.
- `order_updates`, `book_updates` and `price_updates`: the first 100 rows from block
  `1078000000` onwards (19 July 2026).
- `perp_liquidations` has no public sample. Liquidations are rare (a few hundred rows in a
  busy 1,000-block pack), and the table has the same execution, fee and position columns as
  `trades` plus `Liquidation_MarkPx`, `Liquidation_Method` and `Liquidation_LiquidatedUser`.

Each `.js` file shows the first 10 records of its Parquet sample via `module.exports`.

## Why this is not the same as Hyperliquid's own archive

Hyperliquid publishes a free S3 archive at `s3://hyperliquid-archive`. Per
[their docs](https://hyperliquid.gitbook.io/hyperliquid-docs/historical-data), it holds
**L2 book snapshots** and **asset contexts**, and states that no other historical data
sets are provided that way. It is uploaded roughly monthly.

This dataset is a different shape:

**L4, not L2.** `book_updates` carries per-order deltas (`new`, `update`, `remove`), each
with the owning address, order id, price and size. An L2 snapshot tells you the book was
12 deep at a price; an L4 stream tells you which order moved and whose it was, and lets
you rebuild the book at any block. Queue position, order lifetime and maker behaviour are
only recoverable at L4.

**Every fill, both sides.** `trades` has one row per side of each match, with price,
size, direction, a taker flag (`Trade_Execution_IsAggressor`), fees, builder and deployer
fees, the signed position before the fill and the realized PnL. A match appears twice,
keyed by `(Block_Number, Trade_Market_CoinRaw, Trade_Execution_Tid)`, so maker and taker
attribution and per-wallet PnL come straight out of the file. Liquidation fills are in
`perp_liquidations`, not in `trades`, so include both for complete PnL.

**Full order lifecycle, including what never traded.** `order_updates` covers `open`,
`canceled`, `filled`, `triggered` and the `*Rejected` states, with time in force,
reduce-only, trigger conditions and position TP/SL flags. Rejects and cancels are
invisible in any trades-only dataset.

**Funding per account.** `perp_fundings` has every account's payment at each hourly
settlement: the rate, the signed position and the USDC paid or received.

**Markets beyond plain perps.** `*_Market_CoinRaw` covers plain perps (`HYPE`), HIP-3
perps (`xyz:DRAM`), spot (`@107`) and outcome tokens (`#1890`) in one column, and
`*_Market_Kind` says which (`perp`, `hip3`, `spot` or `outcome`).

**Same schema as the live stream.** These field definitions are the ones Bitquery's
Hyperliquid Kafka topics use, so a backtest reading this archive and a production
consumer reading the stream decode with the same code.

## Object layout

```
bitquery-blockchain-dataset/hyperliquid/
├── trades/
├── perp_liquidations/
├── twaps/
├── order_updates/
├── book_updates/
├── price_updates/
└── perp_fundings/
        ├── <start_block>_<end_block>.parquet
        └── ...
```

Parquet with ZSTD compression. File sizes track market activity, and a block range with
no events for a table produces no file for it.

## Field notes worth knowing

- **Times differ by field.** `Block_Time`, `Order_EventTime` and `Twap_Interval_EventTime`
  are epoch **nanoseconds**. `Trade_Execution_EventTime`, `Liquidation_Execution_EventTime`,
  `Order_PlacedTime` and `Twap_Interval_StartTime` are epoch **milliseconds**.
  `Recording_Time` is epoch seconds.
- **Money and sizes are decimal strings**, never floats. Parse them with `Decimal`.
- **The hash is not a join key.** One L1 transaction spans many matches, and TWAP fills
  carry 32 zero bytes. Key matches on block, market and `Tid`.
- **`*_Position_SizeBefore` is the signed position** before the fill (negative is short),
  not money. Realized PnL is `*_Position_RealizedPnl`.
- **Flags are 0 or 1** (`UInt8`), for example `Trade_Execution_IsAggressor` and
  `Order_ReduceOnly`.
- **Some columns are always empty in a given table.** They are part of the shared
  Hyperliquid schema, for example `Trade_MarkPx`, the `*_Position_Size`, `_EntryPrice` and
  `_Funding` columns, and `Liquidation_Liquidator`. Signer, vault and leverage fields are
  filled when the source data carries them.
- **`Indexing_*`, `Recording_*`, `ChainId` and `Block_Date`** are pipeline bookkeeping.
- **Addresses and hashes** are `0x`-prefixed hex strings.

## Getting a full export

Buy the last 30 days on the [Bitquery Data Store](https://bitquery.io/datastore/datasets?network=hyperliquid):
[Hyperliquid](https://bitquery.io/datastore/datasets/hyperliquid) (all seven tables),
[Hyperliquid Trades](https://bitquery.io/datastore/datasets/hyperliquid-trades) (`trades`,
`perp_liquidations`, `twaps`),
[Hyperliquid Order Book](https://bitquery.io/datastore/datasets/hyperliquid-order-book)
(`order_updates`, `book_updates`, `price_updates`) or
[Hyperliquid Funding](https://bitquery.io/datastore/datasets/hyperliquid-ledger)
(`perp_fundings`). For a continuous feed or another delivery target, contact
[sales@bitquery.io](mailto:sales@bitquery.io).

- Cloud dataset docs: [docs.bitquery.io/docs/cloud/hyperliquid](https://docs.bitquery.io/docs/cloud/hyperliquid)
- Live API and streams: [docs.bitquery.io/docs/perpetuals/hyperliquid](https://docs.bitquery.io/docs/perpetuals/hyperliquid)
