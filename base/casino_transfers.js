// https://bitquery-blockchain-dataset.s3.us-east-1.amazonaws.com/base/casino_transfers/2026-09.parquet  (PLACEHOLDER: not uploaded yet)
/* More files in S3 under:
bitquery-blockchain-dataset/base/casino_transfers/  (one Parquet file per calendar month, ZSTD)
*/
// One row per casino deposit or withdrawal (native coin, USDT, USDC). Casino = Bitquery hot-wallet labels.
// direction + wallet_role: deposit/deposit_address, deposit/hot_wallet, withdrawal/hot_wallet.
// amount is a decimal STRING; amount_usd is a float. Filter tokens by token_address, never by symbol.
// Sample: Rainbet + BC.Game wallets, September 2026 run, rows from 30 Sep.
module.exports = [
  {
    "chain": "base",
    "block_number": 51984734,
    "block_time": "2026-09-30 09:00:15",
    "tx_hash": "0x34974a1afcc0dc4483c96a07eba67f5e2d5597b4d85956120ba304c2f772526a",
    "casino": "rainbet",
    "direction": "deposit",
    "wallet_role": "deposit_address",
    "from_address": "0x8d18d00074dd99de3e3f22210b705b9b0a19835a",
    "to_address": "0x024effc6897c5bf4fd7344e9fc417091e7d2b9a1",
    "token_symbol": "ETH",
    "token_address": "",
    "amount": "0.009999969935274987",
    "amount_usd": 26.69,
    "price_source": "prices_base_dict"
  },
  {
    "chain": "base",
    "block_number": 51974361,
    "block_time": "2026-09-30 03:14:29",
    "tx_hash": "0xa9225a6738950b43709dd2fe0bcf69fde84fbdf7c53add84646dff1885486517",
    "casino": "rainbet",
    "direction": "deposit",
    "wallet_role": "deposit_address",
    "from_address": "0x4b5c71082d027d16d2a146465d66f9eec11634f6",
    "to_address": "0xfb5b9edca7a51437a60b0b13c7f734bcea700297",
    "token_symbol": "USDC",
    "token_address": "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",
    "amount": "28.200000",
    "amount_usd": 28.2,
    "price_source": "stablecoin_1usd"
  },
  {
    "chain": "base",
    "block_number": 52008708,
    "block_time": "2026-09-30 22:19:23",
    "tx_hash": "0x988d1f3480a070f240c744184090c57c7e14b868924b03f79a964e597ce508e7",
    "casino": "rainbet",
    "direction": "deposit",
    "wallet_role": "hot_wallet",
    "from_address": "0xa0bd59911c74e8c4d04823bbef0c391a80a3b8e7",
    "to_address": "0x307576dd4f73f91bb8c4a2edb762938e8e067d31",
    "token_symbol": "ETH",
    "token_address": "",
    "amount": "0.006613778357670092",
    "amount_usd": 17.71,
    "price_source": "prices_base_dict"
  },
  {
    "chain": "base",
    "block_number": 51985665,
    "block_time": "2026-09-30 09:31:17",
    "tx_hash": "0x6443ec801ec6766dee68e5ce6e0c4b101bfd3673f1cc048a2703fb14759eafae",
    "casino": "rainbet",
    "direction": "deposit",
    "wallet_role": "hot_wallet",
    "from_address": "0x904a4cc0543c2c9f09c4fb3b8464c6e442bc40d0",
    "to_address": "0x307576dd4f73f91bb8c4a2edb762938e8e067d31",
    "token_symbol": "ETH",
    "token_address": "",
    "amount": "0.009999714868099336",
    "amount_usd": 26.8,
    "price_source": "prices_base_dict"
  },
  {
    "chain": "base",
    "block_number": 51972114,
    "block_time": "2026-09-30 01:59:35",
    "tx_hash": "0x120e50b9dd2c5ca5230af23dfe235304ab6d2eb6c706823ea562982252e54edb",
    "casino": "rainbet",
    "direction": "withdrawal",
    "wallet_role": "hot_wallet",
    "from_address": "0x307576dd4f73f91bb8c4a2edb762938e8e067d31",
    "to_address": "0xf66f198968f10ae9d1da2845df54f53e3fc4a312",
    "token_symbol": "USDC",
    "token_address": "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",
    "amount": "62.070000",
    "amount_usd": 62.07,
    "price_source": "stablecoin_1usd"
  },
  {
    "chain": "base",
    "block_number": 52007640,
    "block_time": "2026-09-30 21:43:47",
    "tx_hash": "0x8463c8e73b1b99aa769e3b50c5611851041d3f7da9e00731c4539e43628de788",
    "casino": "rainbet",
    "direction": "withdrawal",
    "wallet_role": "hot_wallet",
    "from_address": "0x307576dd4f73f91bb8c4a2edb762938e8e067d31",
    "to_address": "0xe2de67aca2c93a540203fc7ade8138532dde3469",
    "token_symbol": "USDC",
    "token_address": "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",
    "amount": "94.560000",
    "amount_usd": 94.56,
    "price_source": "stablecoin_1usd"
  }
];
