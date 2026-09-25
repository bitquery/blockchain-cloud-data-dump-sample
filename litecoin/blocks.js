// https://bitquery-blockchain-dataset.s3.us-east-1.amazonaws.com/litecoin/blocks/3183784_3183823.parquet
// more files in
//   bitquery-blockchain-dataset/
// ├── litecoin/
// │   ├── blocks/3183784_3183823.parquet
// │   ├── inputs/3183784_3183823.parquet
// │   ├── outputs/3183784_3183823.parquet
// │   └── transactions/3183784_3183823.parquet
// files are named <start_block>_<end_block>.parquet

module.exports = [
    {
      "tx_date":1790208000000,
      "tx_time":1790288122,
      "blockchain_id":6,
      "block":3183784,
      "median_time":1790287755,
      "nonce":2409980931,
      "difficulty":93267777.89265765,
      "hash":"9c71aa6fc640e2f30ad712372c885d25f453c2c9e39ed1af97bd21d2a4075878",
      "strippedsize":70085,
      "size":107446,
      "weight":317526,
      "version":536870912,
      "txcount":320,
      "chainwork":"00000000000000000000000000000000000000000000355ed242657ed4f97bb8"
    }
]