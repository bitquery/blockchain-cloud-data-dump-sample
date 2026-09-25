// https://bitquery-blockchain-dataset.s3.us-east-1.amazonaws.com/dogecoin/outputs/6388120_6388219.parquet
// more files in
//   bitquery-blockchain-dataset/
// ├── dogecoin/
// │   ├── blocks/6388120_6388219.parquet
// │   ├── inputs/6388120_6388219.parquet
// │   ├── outputs/6388120_6388219.parquet
// │   └── transactions/6388120_6388219.parquet
// files are named <start_block>_<end_block>.parquet

module.exports = [
    {
      "tx_date":1790208000000,
      "tx_time":1790287921,
      "blockchain_id":8,
      "block":6388120,
      "date":"2026-09-24",
      "tx_hash":"f54e1962de47a4cf03534e752c31118fbbe03916af8a425bee1ce60b855fb397",
      "transaction_index":0,
      "output_index":0,
      "output_address":"A8x177ySgB3BMr3LXYHWp7dLKNAjxo4hGJ",
      "output_address_annotation":null,
      "direction":"mining",
      "output_script":"OP_HASH160 b521816f17bd6de8ee432909c149224195fc011b OP_EQUAL",
      "script_type":"scripthash",
      "script_template":28,
      "req_sigs":1,
      "value_decimal":10000.019,
      "value_in_usd":960.7446566415,
      "value":1000001900000
    }
]