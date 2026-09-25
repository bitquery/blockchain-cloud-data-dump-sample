// https://bitquery-blockchain-dataset.s3.us-east-1.amazonaws.com/litecoin/inputs/3183784_3183823.parquet
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
      "tx_hash":"061d897a1f99aeab50719312fd33abb6d2fa79b8ef9c5c8f62a78f940838543e",
      "transaction_index":0,
      "input_index":0,
      "output_tx_hash":"",
      "output_index":0,
      "input_address":"",
      "input_address_annotation":null,
      "input_script":"03a89430194d696e656420627920416e74506f6f6cb900510264c26dc201fabe6d6d360a4104b2cce5e40403b5c517f89784dbea6579d644831d555a6769568c7ba020000000000000000000ab7176010000",
      "input_script_type":"coinbase",
      "script_template":1,
      "value_decimal":6.26085674,
      "value_in_usd":449.9314407581,
      "value":626085674
    }
]