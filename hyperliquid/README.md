# Hyperliquid Core — Historical Data Dump

Sample records from Bitquery's **Hyperliquid Core (HyperCore)** dataset: the L1
order-book exchange, not HyperEVM. Every file in this directory comes from a single
real slice of production data, so the field names and value shapes here are exactly
what you get in a full export.

## What the sample is

| | |
|---|---|
| Blocks | `1075858000` – `1075858999` (1,000 consecutive blocks) |
| Wall-clock span | ~73.2 seconds of live HyperCore |
| Format | Parquet (Snappy), one file per 200-block range |
| Datasets | 7 event tables, joined on `Block_Number` |

Events in those 73 seconds:

| Dataset | Records | File |
|---|---:|---|
| Order statuses | 142,955 | [`order_statuses.js`](order_statuses.js) |
| Book diffs (L4) | 89,241 | [`book_diffs.js`](book_diffs.js) |
| Fills | 1,552 | [`fills.js`](fills.js) |
| Misc events | 32 | [`misc_events.js`](misc_events.js) |
| Oracle updates | 24 | [`oracle_updates.js`](oracle_updates.js) |
| Core writer actions | 10 | [`core_writer_actions.js`](core_writer_actions.js) |
| TWAP statuses | 3 | [`twap_statuses.js`](twap_statuses.js) |
| Block headers | 1,000 | [`blocks.js`](blocks.js) |

**233,817 events in 73 seconds** — about 3,200 events/second. Extrapolated from this
slice, a full day of HyperCore is on the order of tens of GB. Blocks
land about every 73 ms.

Each `.js` file exports the first N records of its dataset via `module.exports`, with
`Block_Number` and `Block_Time` prepended so records stand alone.

## Why this is not the same as Hyperliquid's own archive

Hyperliquid publishes a free S3 archive at `s3://hyperliquid-archive`. Per
[their docs](https://hyperliquid.gitbook.io/hyperliquid-docs/historical-data), it holds
**L2 book snapshots** and **asset contexts**, and explicitly *"no other historical data
sets are provided via S3 (e.g. candles or spot asset data)"*, uploaded roughly monthly.

This archive is a different shape:

**L4, not L2.** `book_diffs.js` carries per-order deltas — `new` / `update` / `remove`,
each with the owning address, order id, price level and size. An L2 snapshot tells you
the book was 12 deep at a price; an L4 diff stream tells you *which order* moved and
*whose* it was, and lets you rebuild the book at any instant rather than at snapshot
boundaries. Queue position, order lifetime, spoofing patterns and maker behaviour are
only recoverable at L4.

**Every fill, both sides.** `fills.js` has one record per counterparty per match, with
`ClosedPnl`, `Fee`, `FeeToken`, `StartPosition`, `Crossed` (taker flag), builder and
deployer fees, and liquidation details when present. A match appears twice, keyed by
`(BlockNumber, Coin, Tid)` — so taker/maker attribution and per-wallet realized PnL are
computable directly.

**Full order lifecycle, including what never traded.** `order_statuses.js` covers
`open`, `canceled`, `filled`, `triggered` and the various `*Rejected` states, with
`Tif`, `ReduceOnly`, trigger conditions and TP/SL child brackets. Rejects and cancels
are invisible in any trades-only dataset, and they are most of the signal in
microstructure work.

**Markets beyond plain perps.** `Coin` covers plain perps (`HYPE`), HIP-3 perps
(`xyz:…`), spot (`@107`) and outcome tokens (`#1890`) in one stream.

**Same schema as the live stream.** These field definitions are the ones Bitquery's
Kafka topics use. A backtest reading this archive and a production consumer reading the
live stream decode with the same generated code — no second pipeline, no shape drift
between research and production.

## Object layout

```
bitquery-blockchain-dataset/hyperliquid/
├── fills/
├── order_statuses/
├── book_diffs/
├── oracle_updates/
├── misc_events/
├── twap_statuses/
└── core_writer_actions/
        ├── <start_block>_<end_block>.parquet
        └── ...
```

One Parquet file per 200-block range, per dataset. File sizes track market activity —
quiet ranges are a few KB, busy ranges a few MB. Every row carries `Block_Number` and
`Block_Time`, so datasets join on block without a separate blocks table.

## Field notes worth knowing

- **Times differ by field.** `Block_Time` and `OrderStatus.Time` are epoch
  **nanoseconds**; `Fill.Time` and `Order.Timestamp` are epoch **milliseconds**.
- **Money and sizes are decimal strings**, never floats — parse with `Decimal`.
- **`Hash` is not a join key.** One L1 transaction spans many matches, and it is 32 zero
  bytes on both sides of a TWAP trade. Key trades on `(BlockNumber, Coin, Tid)`.
- **`StartPosition` is signed** position before the fill (negative = short), not money.
  Realized PnL is `ClosedPnl`.
- **`Extra`** is a forward-compatibility map. A non-empty `Extra` means the node emitted
  a field not yet modelled — nothing is silently dropped.
- **Address and hash fields** (`User`, `Hash`, `Cloid`, `Builder`) are rendered as
  `0x`-prefixed hex strings.

## Getting a full export

These files are a slice for schema evaluation. For a historical range, a continuous
feed, or a different delivery target (S3, Snowflake, GCS, Parquet), contact
[sales@bitquery.io](mailto:sales@bitquery.io).

- Live API and streams: [docs.bitquery.io/docs/perpetuals/hyperliquid](https://docs.bitquery.io/docs/perpetuals/hyperliquid)
- Data lake overview: [docs.bitquery.io/docs/data-lake](https://docs.bitquery.io/docs/data-lake/)
