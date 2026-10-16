// https://bitquery-blockchain-dataset.s3.us-east-1.amazonaws.com/ethereum/casino_transfers/2026-09.parquet  (PLACEHOLDER: not uploaded yet)
/* More files in S3 under:
bitquery-blockchain-dataset/ethereum/casino_transfers/  (one Parquet file per calendar month, ZSTD)
*/
// One row per casino deposit or withdrawal (native coin, USDT, USDC). Casino = Bitquery hot-wallet labels.
// direction + wallet_role: deposit/deposit_address, deposit/hot_wallet, withdrawal/hot_wallet.
// amount is a decimal STRING; amount_usd is a float. Filter tokens by token_address, never by symbol.
// Sample: Shuffle + Winna wallets, September 2026 run, rows from 30 Sep.
module.exports = [
  {
    "chain": "ethereum",
    "block_number": 26087062,
    "block_time": "2026-09-30 01:39:11",
    "tx_hash": "0xfd1e8c7b8e2d9b3b15376f99d840b5f09f58f1d38356ee926fd4b5e36af067d0",
    "casino": "shuffle",
    "direction": "deposit",
    "wallet_role": "deposit_address",
    "from_address": "0x828d76e33b9db71538b167a1e3cc988ba9ac4b22",
    "to_address": "0xf3aa89bf417ad90becc16da08affa164690255fe",
    "token_symbol": "ETH",
    "token_address": "",
    "amount": "0.016286045000000000",
    "amount_usd": 43.49,
    "price_source": "prices_eth_dict"
  },
  {
    "chain": "ethereum",
    "block_number": 26093293,
    "block_time": "2026-09-30 22:30:35",
    "tx_hash": "0xf6668fcb9e2154c307f9b638288633cedb5174dd1b99429c5bb84b8d0b0fec04",
    "casino": "shuffle",
    "direction": "deposit",
    "wallet_role": "hot_wallet",
    "from_address": "0x6d7c672d5c63b0d773987eb6fb9d0a27b3306993",
    "to_address": "0xdfaa75323fb721e5f29d43859390f62cc4b600b8",
    "token_symbol": "USDC",
    "token_address": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    "amount": "16.739802",
    "amount_usd": 16.74,
    "price_source": "stablecoin_1usd"
  },
  {
    "chain": "ethereum",
    "block_number": 26092775,
    "block_time": "2026-09-30 20:46:23",
    "tx_hash": "0x35febd258af5a4cb4576fd43e893964b895f9fd4f4a3428e15f2b5e0cd60569d",
    "casino": "shuffle",
    "direction": "deposit",
    "wallet_role": "deposit_address",
    "from_address": "0x34c869786020ab219443a2dd16369a3870ebad3f",
    "to_address": "0xfde1d00671e3ccf425690f4a2a5aeee65905436c",
    "token_symbol": "ETH",
    "token_address": "",
    "amount": "0.039722043888250000",
    "amount_usd": 106.41,
    "price_source": "prices_eth_dict"
  },
  {
    "chain": "ethereum",
    "block_number": 26093394,
    "block_time": "2026-09-30 22:51:11",
    "tx_hash": "0xb24645d55bbed3a2dd76822cf42d9b3a9b5fece827545d718af69ab97faf241e",
    "casino": "shuffle",
    "direction": "withdrawal",
    "wallet_role": "hot_wallet",
    "from_address": "0xdfaa75323fb721e5f29d43859390f62cc4b600b8",
    "to_address": "0x421ed623d2ca4cff81c23a0c1bc876392c286fa4",
    "token_symbol": "USDT",
    "token_address": "0xdac17f958d2ee523a2206206994597c13d831ec7",
    "amount": "170.000000",
    "amount_usd": 170.0,
    "price_source": "stablecoin_1usd"
  },
  {
    "chain": "ethereum",
    "block_number": 26087392,
    "block_time": "2026-09-30 02:45:23",
    "tx_hash": "0x392c885135ac6e300ecd9ba3fdcfc27fb77a04aae228b47f274f17f5b6defe38",
    "casino": "shuffle",
    "direction": "deposit",
    "wallet_role": "hot_wallet",
    "from_address": "0xd21d5da1200843a75f48f42bbc6d5a499ce44b40",
    "to_address": "0xdfaa75323fb721e5f29d43859390f62cc4b600b8",
    "token_symbol": "ETH",
    "token_address": "",
    "amount": "0.080800153544414000",
    "amount_usd": 215.55,
    "price_source": "prices_eth_dict"
  },
  {
    "chain": "ethereum",
    "block_number": 26092609,
    "block_time": "2026-09-30 20:13:11",
    "tx_hash": "0xa1f20fb26a78a0cf9743cca8315c2a7d380ab9078588d787cc1f07e41af60814",
    "casino": "shuffle",
    "direction": "withdrawal",
    "wallet_role": "hot_wallet",
    "from_address": "0xdfaa75323fb721e5f29d43859390f62cc4b600b8",
    "to_address": "0x7523677f71ffcefbebb447618e504896fbec51b1",
    "token_symbol": "USDT",
    "token_address": "0xdac17f958d2ee523a2206206994597c13d831ec7",
    "amount": "150.000000",
    "amount_usd": 150.0,
    "price_source": "stablecoin_1usd"
  }
];
