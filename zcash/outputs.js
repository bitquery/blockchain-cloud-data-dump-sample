// https://bitquery-blockchain-dataset.s3.us-east-1.amazonaws.com/zcash/outputs/3495028_3495127.parquet
// more files in
//   bitquery-blockchain-dataset/
// ├── zcash/
// │   ├── blocks/3495028_3495127.parquet
// │   ├── inputs/3495028_3495127.parquet
// │   ├── outputs/3495028_3495127.parquet
// │   └── transactions/3495028_3495127.parquet
// files are named <start_block>_<end_block>.parquet

module.exports = [
    {
      "tx_date":1790208000000,
      "tx_time":1790287766,
      "blockchain_id":15,
      "block":3495028,
      "date":"2026-09-24",
      "tx_hash":"268c67918484971b10b5d406b1547cbaa165746ca63b6c89bb617d5f52e740cc",
      "transaction_index":0,
      "output_index":0,
      "output_address":"t1SqwRAAdSig6dE4EBPLonAait219VmkUjP",
      "output_address_annotation":null,
      "direction":"mining",
      "output_script":"OP_DUP OP_HASH160 626880df2ad8f35605e17dc8d2c18647d95cc424 OP_EQUALVERIFY OP_CHECKSIG",
      "script_type":"pubkeyhash",
      "script_template":5,
      "req_sigs":1,
      "value_decimal":1.25087031,
      "value_in_usd":1932.6755568387,
      "value":125087031
    }
]