// https://bitquery-blockchain-dataset.s3.us-east-1.amazonaws.com/bsc/casino_transfers/2026-09.parquet  (PLACEHOLDER: not uploaded yet)
/* More files in S3 under:
bitquery-blockchain-dataset/bsc/casino_transfers/  (one Parquet file per calendar month, ZSTD)
*/
// One row per casino deposit or withdrawal (native coin, USDT, USDC). Casino = Bitquery hot-wallet labels.
// direction + wallet_role: deposit/deposit_address, deposit/hot_wallet, withdrawal/hot_wallet.
// amount is a decimal STRING; amount_usd is a float. Filter tokens by token_address, never by symbol.
// Sample: Stake wallets, 14 Oct 2026 run (a monthly run is too heavy to sample here); direct-to-hot rows left out.
module.exports = [
  {
    "chain": "bsc",
    "block_number": 127623683,
    "block_time": "2026-10-14 16:05:58",
    "tx_hash": "0xad3bc15305715e1082c806f6ebfc18fa5b918ee819aa78b1924d3afab3714345",
    "casino": "stake",
    "direction": "deposit",
    "wallet_role": "deposit_address",
    "from_address": "0x8ad3c28fd1d37ed6871779899d1639333d262030",
    "to_address": "0x00b80fa023daba9fd16a4979c76c7da75acb014d",
    "token_symbol": "USDT",
    "token_address": "0x55d398326f99059ff775485246999027b3197955",
    "amount": "97.000000000000000000",
    "amount_usd": 97.0,
    "price_source": "stablecoin_1usd"
  },
  {
    "chain": "bsc",
    "block_number": 127628174,
    "block_time": "2026-10-14 16:39:40",
    "tx_hash": "0x9fc566dde9f48d64ae4a7f65cb4a430b789682efcbf2e7d963705b45d3ec444d",
    "casino": "stake",
    "direction": "deposit",
    "wallet_role": "deposit_address",
    "from_address": "0x161ba15a5f335c9f06bb5bbb0a9ce14076fbb645",
    "to_address": "0x63feb5eebb6ed59668118bfffebd2130033cdbe5",
    "token_symbol": "USDT",
    "token_address": "0x55d398326f99059ff775485246999027b3197955",
    "amount": "149.990000000000000000",
    "amount_usd": 149.99,
    "price_source": "stablecoin_1usd"
  },
  {
    "chain": "bsc",
    "block_number": 127678653,
    "block_time": "2026-10-14 22:58:18",
    "tx_hash": "0xc978383732a64e85bf3b9b42285a94537c0418820e96eaf7e02210ea21c46f11",
    "casino": "stake",
    "direction": "withdrawal",
    "wallet_role": "hot_wallet",
    "from_address": "0xfa500178de024bf43cfa69b7e636a28ab68f2741",
    "to_address": "0xe042230823aec2d90b1aad7ef92d0b98b20faf49",
    "token_symbol": "BNB",
    "token_address": "",
    "amount": "0.014453110000000000",
    "amount_usd": 10.54,
    "price_source": "prices_bsc_dict"
  },
  {
    "chain": "bsc",
    "block_number": 127554668,
    "block_time": "2026-10-14 07:28:04",
    "tx_hash": "0xb0906e91a45e7ff094a05f40b99ab53c2102590d30f3f8e1a12b87f81d354ed5",
    "casino": "stake-us",
    "direction": "withdrawal",
    "wallet_role": "hot_wallet",
    "from_address": "0x7f7786f189e3de6163e395f1615770b34ac8e35d",
    "to_address": "0x4f419d014b8bf27b55dc16f1206169a356c4c0ed",
    "token_symbol": "USDT",
    "token_address": "0x55d398326f99059ff775485246999027b3197955",
    "amount": "82.732649917267345408",
    "amount_usd": 82.73,
    "price_source": "stablecoin_1usd"
  }
];
