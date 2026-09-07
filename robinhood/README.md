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
