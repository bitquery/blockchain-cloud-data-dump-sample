// https://bitquery-blockchain-dataset.s3.us-east-1.amazonaws.com/cardano/blocks/13984160_13984259.parquet
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
      "hash":"67957103fa625678d26ce498386716dbaa25f0cae22c9576a96ac5bfd138e3f5",
      "size":13728,
      "txcount":8,
      "epoch":657,
      "slot":198725972,
      "slot_in_epoch":265172,
      "fees":2685416,
      "fees_decimal":2.685416,
      "slot_leader_hash":"52e22df52e90370f639c99f5c760f0cd67d7f871cd0d0764fae47cd9",
      "slot_leader_description":"Pool-52e22df52e90370f",
      "op_cert":"0798f10a3f394421859e36779fea9cd7c2d939f51942fa5f3acb82233a261145",
      "vrf_key":"ffffeff1d9f2ffefef8cbffcdff4f51feff9efcfeffdefdffdefef9fef2f2fef1f",
      "version":"11.0"
    }
  ]
  