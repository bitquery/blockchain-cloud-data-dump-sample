// https://bitquery-blockchain-dataset.s3.us-east-1.amazonaws.com/cardano/transactions/13984160_13984259.parquet
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
        "block_hash":"67957103fa625678d26ce498386716dbaa25f0cae22c9576a96ac5bfd138e3f5",
        "tx_hash":"1c729d0363134ed1daa66fabe6b98f5b96b790bd9a79aaa2bc631b3bfaaf184c",
        "tx_index":1,
        "size":650,
        "input_count":1,
        "output_count":2,
        "withdrawal_count":0,
        "mint_count":0,
        "input_value_decimal":1025.342585,
        "output_value_decimal":1025.158328,
        "fee_value_decimal":0.184257,
        "withdrawal_value_decimal":0.0,
        "deposit_value_decimal":0.0,
        "input_value":1025342585,
        "output_value":1025158328,
        "fee_value":184257,
        "withdrawal_value":0,
        "deposit_value":0,
        "input_value_in_usd":253.7315742431,
        "output_value_in_usd":253.6859779523,
        "fee_value_in_usd":0.0455962908,
        "invalid_before":"",
        "invalid_hereafter":"198727735",
        "metadata":"[{\"key\":\"674\",\"value\":{\"msg\":[\"CarDeM\",\"SteelSwap: 1.18.0\"]}}]"
      }
]