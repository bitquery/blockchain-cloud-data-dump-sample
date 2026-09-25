// https://bitquery-blockchain-dataset.s3.us-east-1.amazonaws.com/litecoin/outputs/3183784_3183823.parquet
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
      "date":"2026-09-24",
      "tx_hash":"061d897a1f99aeab50719312fd33abb6d2fa79b8ef9c5c8f62a78f940838543e",
      "transaction_index":0,
      "output_index":0,
      "output_address":"LcNS6c8RddAMjewDrUAAi8BzecKoosnkN3",
      "output_address_annotation":null,
      "direction":"mining",
      "output_script":"OP_DUP OP_HASH160 bc14b37375146785074671bbaf5804133e5827e5 OP_EQUALVERIFY OP_CHECKSIG",
      "script_type":"pubkeyhash",
      "script_template":5,
      "req_sigs":1,
      "value_decimal":6.26085674,
      "value_in_usd":449.9314407581,
      "value":626085674
    }
]