# Robinhood Chain — Historical Data Dump

Sample records from Bitquery's **Robinhood Chain** dataset. Robinhood Chain is an
EVM network, so these files use the **same schema as the other EVM chains** in this
repository (ethereum, bsc, tron) — a dataset written against Ethereum reads Robinhood
without changes.

## What the sample is

| | |
|---|---|
| Blocks | `56600000` – `56600049` (50 consecutive blocks) |
| Chain ID | `4663` |
| Format | Parquet (ZSTD), one file per 50-block range |
| Datasets | 5 tables, joined on `Block_Number` / `Transaction_Hash` |

Records in that 50-block range:

| Dataset | Records | File |
|---|---:|---|
| Calls | 7,885 | [`calls.js`](calls.js) |
| Events | 2,211 | [`events.js`](events.js) |
| Transfers | 1,374 | [`transfers.js`](transfers.js) |
| Balances | 858 | [`balances.js`](balances.js) |
| DEX trades | 277 | [`dex_trades.js`](dex_trades.js) |

Each `.js` file exports one representative record so the field names and value shapes
stand alone.

## Pons — the launchpad slice

Pons is Robinhood Chain's bonding-curve launchpad, and the third busiest venue on the chain
behind Uniswap v4 and v3. Two extra files carry it, pre-filtered so you do not have to scan
the chain-wide tables to find it.

| Dataset | Records | File | Filtered from |
|---|---:|---|---|
| Pons trades | 375 | [`pons_trades.js`](pons_trades.js) | `dex_trades` where `Trade_Dex_ProtocolName = 'pons_v2'` |
| Pons launches and graduations | 16 | [`pons_launches_graduations.js`](pons_launches_graduations.js) | `events` from the Pons factory `0x7ed598bcef8bd9edd8c97a195c6d13f40801ec7e` |

Both come from blocks `68914550` – `68914599`, a range chosen because it holds a whole token
lifecycle: 8 `TokenLaunched`, 2 `CurveCompleted`, 2 `PoolGraduated`, and the 375 curve trades
around them. The schemas are identical to `dex_trades` and `events`, so a job written against
either reads these without changes.

A token's life shows up as `TokenLaunched` → curve trades → `CurveCompleted` →
`PoolGraduated`. `TokenLaunched` carries `graduationThreshold`, the quote amount the curve
must reach, so progress to graduation is an exact figure rather than an inference. Roughly
one launch in sixty reaches it.

## Object layout

```
bitquery-blockchain-dataset/robinhood/
├── dex_trades/
├── transfers/
├── balances/
├── events/
└── calls/
        ├── <start_block>_<end_block>.parquet
        └── ...
```

The Pons files sit under the `datashare/` prefix the per-protocol datasets use, not
alongside the chain-wide tables:

```
bitquery-blockchain-dataset/datashare/robinhood/pons/
├── trades/
└── launches_graduations/
        ├── <start_block>_<end_block>.parquet
        └── ...
```

## Field notes worth knowing

- **Amounts are decimal strings**, never floats — `Transfer_Amount`, `Trade_Buy_Amount`,
  `Balance_Amount`. The `*InUSD` companions are floats. Parse the strings with `Decimal`.
- **Nested structures are flattened with `_`**, e.g. `Trade_Buy_Currency_Symbol`.
- **JSON-encoded columns are positional arrays.** `Arguments` and `Returns` are
  `[Index, Name, Path, Type, Value]`; `StateChanges` is
  `[Address, ChangeAfterCallIndex, Location, Value]`; `Trade_Fees` is
  `[Amount, AmountInUSD, [Currency…], Payer, Recipient]`.
- **`Topics_Hash` has no `0x` prefix**, while address and hash columns do.
- **Booleans are strings** — `"true"` / `"false"` — in columns such as
  `TransactionStatus_Success` and `Transfer_Currency_Fungible`.
- **Native ETH** is `Currency_SmartContract = "0x"`. Filter on the contract address
  rather than the symbol.
- **Tokenized equities** trade alongside ordinary ERC-20s — `NVDA`, `HOOD` and similar
  appear in `dex_trades` with `erc20` as their protocol name.

## Getting a full export

These files are a slice for schema evaluation. For a historical range, a continuous
feed, or a different delivery target (S3, Snowflake, GCS, Parquet), contact
[sales@bitquery.io](mailto:sales@bitquery.io).

- Live API and streams: [docs.bitquery.io/docs/blockchain/robinhood](https://docs.bitquery.io/docs/blockchain/robinhood/)
- Cloud dataset docs: [docs.bitquery.io/docs/cloud/robinhood](https://docs.bitquery.io/docs/cloud/robinhood/)
