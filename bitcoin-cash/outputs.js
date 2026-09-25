// https://bitquery-blockchain-dataset.s3.us-east-1.amazonaws.com/bitcoincash/outputs/970026_970075.parquet
// more files in
//   bitquery-blockchain-dataset/
// ├── bitcoincash/
// │   ├── blocks/970026_970075.parquet
// │   ├── inputs/970026_970075.parquet
// │   ├── outputs/970026_970075.parquet
// │   └── transactions/970026_970075.parquet
// files are named <start_block>_<end_block>.parquet

module.exports = [
    {
      "tx_date":1790208000000,
      "tx_time":1790262787,
      "blockchain_id":4,
      "block":970026,
      "date":"2026-09-24",
      "tx_hash":"65922155ea6fa50c6e716aae038eb9948f328a6a2a30e61072c56675733ec80d",
      "transaction_index":0,
      "output_index":0,
      "output_address":"qrcuqadqrzp2uztjl9wn5sthepkg22majyxw4gmv6p",
      "output_address_annotation":null,
      "direction":"mining",
      "output_script":"OP_DUP OP_HASH160 f1c075a01882ae0972f95d3a4177c86c852b7d91 OP_EQUALVERIFY OP_CHECKSIG",
      "script_type":"pubkeyhash",
      "script_template":5,
      "req_sigs":1,
      "value_decimal":3.12637177,
      "value_in_usd":1050.6231105211,
      "value":312637177
    }
  ]
  