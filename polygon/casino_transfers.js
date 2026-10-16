// https://bitquery-blockchain-dataset.s3.us-east-1.amazonaws.com/polygon/casino_transfers/2026-09.parquet  (PLACEHOLDER: not uploaded yet)
/* More files in S3 under:
bitquery-blockchain-dataset/polygon/casino_transfers/  (one Parquet file per calendar month, ZSTD)
*/
// One row per casino deposit or withdrawal (native coin, USDT, USDC). Casino = Bitquery hot-wallet labels.
// direction + wallet_role: deposit/deposit_address, deposit/hot_wallet, withdrawal/hot_wallet.
// amount is a decimal STRING; amount_usd is a float. Filter tokens by token_address, never by symbol.
// Sample: BC.Game + Shuffle wallets, September 2026 run, rows from 29-30 Sep.
module.exports = [
  {
    "chain": "polygon",
    "block_number": 94659464,
    "block_time": "2026-09-29 15:05:36",
    "tx_hash": "0x4336a8329faa5a2cfec737dfae142194e94f5767534d6a7985063af7ca3a74b0",
    "casino": "bcgame",
    "direction": "deposit",
    "wallet_role": "deposit_address",
    "from_address": "0x3f9d54802fc34d9fd7748f194e0b4c5014835f7b",
    "to_address": "0xf55db4193dcd58e82f08174852fa880077ff0b05",
    "token_symbol": "USDT",
    "token_address": "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
    "amount": "13.993731",
    "amount_usd": 13.99,
    "price_source": "stablecoin_1usd"
  },
  {
    "chain": "polygon",
    "block_number": 94679158,
    "block_time": "2026-09-29 23:17:57",
    "tx_hash": "0x22601a6417f3a301c6de3d9e73b5174d446a5a18b5dcc37ae09e05e45335e11f",
    "casino": "shuffle",
    "direction": "deposit",
    "wallet_role": "deposit_address",
    "from_address": "0xbf5e3c7afbe37d13b040adb11d497bdbe061c87b",
    "to_address": "0x57aeb49aebeb64f13fbe1e987c236a76da4d02e2",
    "token_symbol": "USDC",
    "token_address": "0x3c499c542cef5e3811e1192ce70d8cc03d5c3359",
    "amount": "29.991364",
    "amount_usd": 29.99,
    "price_source": "stablecoin_1usd"
  },
  {
    "chain": "polygon",
    "block_number": 94720909,
    "block_time": "2026-09-30 16:41:44",
    "tx_hash": "0x055279220b7b5aa4694dbfab6bb1e12b0a98f06760873406012875db9d106bb0",
    "casino": "shuffle",
    "direction": "withdrawal",
    "wallet_role": "hot_wallet",
    "from_address": "0xdfaa75323fb721e5f29d43859390f62cc4b600b8",
    "to_address": "0x6fcd5ffb2f217d88aa6c72ba3dd499734cf14bda",
    "token_symbol": "POL",
    "token_address": "",
    "amount": "69.931657000000000000",
    "amount_usd": 7.96,
    "price_source": "prices_matic_dict"
  },
  {
    "chain": "polygon",
    "block_number": 94723527,
    "block_time": "2026-09-30 17:47:11",
    "tx_hash": "0xd6a568823d88e4a722bcca4d977ee8b7103e04367dd5b44abcd284d0865adbd9",
    "casino": "shuffle",
    "direction": "withdrawal",
    "wallet_role": "hot_wallet",
    "from_address": "0xdfaa75323fb721e5f29d43859390f62cc4b600b8",
    "to_address": "0x327fa156c270937d442ae012eee2d56dde865119",
    "token_symbol": "USDC",
    "token_address": "0x3c499c542cef5e3811e1192ce70d8cc03d5c3359",
    "amount": "139.566833",
    "amount_usd": 139.57,
    "price_source": "stablecoin_1usd"
  },
  {
    "chain": "polygon",
    "block_number": 94693940,
    "block_time": "2026-09-30 05:27:30",
    "tx_hash": "0xe0eaa4ba0ffcad671016a5628d93503d67af2888f8b4b5c530f0d5a2b9af858c",
    "casino": "shuffle",
    "direction": "deposit",
    "wallet_role": "hot_wallet",
    "from_address": "0x3a6cb833ff83638ed5712036c84a02b5e27d3622",
    "to_address": "0xdfaa75323fb721e5f29d43859390f62cc4b600b8",
    "token_symbol": "USDT",
    "token_address": "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
    "amount": "100.194093",
    "amount_usd": 100.19,
    "price_source": "stablecoin_1usd"
  },
  {
    "chain": "polygon",
    "block_number": 94694087,
    "block_time": "2026-09-30 05:31:11",
    "tx_hash": "0x40b2816fa2b9903d68ebd22aeb8426333938ae68ea5482d40a12d23a1b7e3f00",
    "casino": "shuffle",
    "direction": "deposit",
    "wallet_role": "hot_wallet",
    "from_address": "0x8358c834d4228dfba87f9cf74b74ac4b080992d8",
    "to_address": "0xdfaa75323fb721e5f29d43859390f62cc4b600b8",
    "token_symbol": "USDT",
    "token_address": "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
    "amount": "152.892000",
    "amount_usd": 152.89,
    "price_source": "stablecoin_1usd"
  }
];
