// https://bitquery-blockchain-dataset.s3.us-east-1.amazonaws.com/dash/outputs/2544350_2544449.parquet
// more files in
//   bitquery-blockchain-dataset/
// ├── dash/
// │   ├── blocks/2544350_2544449.parquet
// │   ├── inputs/2544350_2544449.parquet
// │   ├── outputs/2544350_2544449.parquet
// │   └── transactions/2544350_2544449.parquet
// files are named <start_block>_<end_block>.parquet

module.exports = [
    {
      "tx_date":1790208000000,
      "tx_time":1790279657,
      "blockchain_id":7,
      "block":2544350,
      "date":"2026-09-24",
      "tx_hash":"2907adfd3b1643ca7f78255c6a9459553e86826b9ea995f920a5d502fb3443c3",
      "transaction_index":0,
      "output_index":0,
      "output_address":"XssjzLKgsfATYGqTQmiJURQzeKdpL5K1k3",
      "output_address_annotation":null,
      "direction":"mining",
      "output_script":"OP_DUP OP_HASH160 bc89d6071dabc5b4494d303af761a052a5c70d57 OP_EQUALVERIFY OP_CHECKSIG",
      "script_type":"pubkeyhash",
      "script_template":5,
      "req_sigs":0,
      "value_decimal":0.41094511,
      "value_in_usd":25.6307636441,
      "value":41094511
    }
]