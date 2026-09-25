// https://bitquery-blockchain-dataset.s3.us-east-1.amazonaws.com/cardano/outputs/13984160_13984259.parquet
// more files in
//   bitquery-blockchain-dataset/
// ├── cardano/
// │   ├── blocks/13984160_13984259.parquet
// │   ├── inputs/13984160_13984259.parquet
// │   ├── mints/13984160_13984259.parquet
// │   ├── outputs/13984160_13984259.parquet
// │   └── transactions/13984160_13984259.parquet
// files are named <start_block>_<end_block>.parquet

module.exports = [
    {
      "tx_date":1790208000000,
      "tx_time":1790292263,
      "blockchain_id":51,
      "block":13984160,
      "tx_hash":"7115ed603d2494f327be480a1904df8e52b72089ed2456da13621d6cbaf1485f",
      "transaction_index":0,
      "output_index":0,
      "token_index":-1,
      "output_address":"addr1x8srqftqemf0mjlukfszd97ljuxdp44r372txfcr75wrz26rnxqnmtv3hdu2t6chcfhl2zzjh36a87nmd6dwsu3jenqsslnz7e",
      "stake_key":"stake1u9penqfa4kgmk799avtuyml4ppftcawnlfakaxhgwgevesgpt2eag",
      "direction":"not_change",
      "currency_id":7029218,
      "currency_symbol":"ADA",
      "currency_name":"Cardano",
      "currency_decimals":6,
      "value":675771865881,
      "value_decimal":675771.865881,
      "value_in_usd":167226.7024383456
    }
]