# Blockchain Data Dumps Provided by Bitquery via Snowflake, AWS, Google Cloud

This repository provides sample data files to understand the schema provided by Bitquery when you request data dumps to be provided via any cloud solution.

Each file also mentions the S3 bucket link for you to test end-to-end integration.

## Available datasets

| Chain | Datasets |
| --- | --- |
| [bitcoin](bitcoin/) | blocks, transactions, inputs, outputs, omni transactions/transfers |
| [bsc](bsc/) | blocks, transactions, transfers, events, dex trades, miner rewards |
| [ethereum](ethereum/) | blocks, transactions, transfers, events, calls, balances, dex trades, miner rewards, uncle blocks |
| [hyperliquid](hyperliquid/) | fills, order statuses, L4 book diffs, oracle updates, TWAP statuses, misc events, core writer actions |
| [polymarket](polymarket/) | prediction trades, prediction settlements |
| [ripple](ripple/) | transactions, transfers, payments, offers, escrows, checks, balances |
| [robinhood](robinhood/) | dex trades, transfers, balances, events, calls |
| [solana](solana/) | blocks, transactions, transfers, balance updates, dex trades/pools/orders, rewards, Pump.fun |
| [Stellar](Stellar/) | blocks, transactions, transfers, payments, operations, effects, liquidity pools |
| [tron](tron/) | blocks, transactions, transfers, events, calls, balance updates, dex trades |

All datasets are delivered as flat Parquet records. See
[hyperliquid/README.md](hyperliquid/README.md) for notes on the Hyperliquid Core fields.

Contact [sales@bitquery.io](mailto:sales@bitquery.io) for a full historical export or a
different delivery target.
