// This is a data sample for Hyperliquid Core `twap_statuses` provided via cloud
// Source: Bitquery blockchain data lake (SeaweedFS, S3 interface)
//   bucket : streaming-hyperliquid-proto
//   prefix : hyperliquidcore.blocks/<block_number floored to 1e6>/
//   object : <start_block>_<end_block>_<hash>.blocks.lz4  (1000 blocks per file)
//
// Decoded from protobuf message `HyperCoreBlocks` (hyperliquid/hypercore.proto),
// field `TwapStatuses`. Schema: https://github.com/bitquery/streaming_protobuf
//
// Sample slice: blocks 1075858000-1075858999 (1000 blocks, ~73s of HyperCore).
// That slice holds 3 TwapStatuses records; the 3 below are the first of them.
//
// Contact sales@bitquery.io for a full historical export.

module.exports = [
  {
    "Block_Number": 1075858158,
    "Block_Time": 1784285042032963180,
    "Time": 1784285042032963180,
    "TwapId": 2038831,
    "State_Coin": "HYPE",
    "State_User": "0xbcb881aa8d0b3e786d00d0ae83c52e0ed078dcc3",
    "State_Side": "B",
    "State_Sz": "168.46",
    "State_ExecutedSz": "168.46",
    "State_ExecutedNtl": "10037.45318",
    "State_Minutes": 270,
    "State_Timestamp": 1784268840523,
    "State_ReduceOnly": false,
    "State_Randomize": false,
    "State_Extra": {},
    "Status": "finished",
    "StatusError": null,
    "Extra": {}
  },
  {
    "Block_Number": 1075858158,
    "Block_Time": 1784285042032963180,
    "Time": 1784285042032963180,
    "TwapId": 2039468,
    "State_Coin": "xyz:SPCX",
    "State_User": "0xcac013d36b73330a0fddccf9282f9aae5504088c",
    "State_Side": "A",
    "State_Sz": "13.0",
    "State_ExecutedSz": "13.0",
    "State_ExecutedNtl": "1648.5282",
    "State_Minutes": 30,
    "State_Timestamp": 1784283241005,
    "State_ReduceOnly": false,
    "State_Randomize": false,
    "State_Extra": {},
    "Status": "finished",
    "StatusError": null,
    "Extra": {}
  },
  {
    "Block_Number": 1075858480,
    "Block_Time": 1784285066017039884,
    "Time": 1784285066017039884,
    "TwapId": 2039507,
    "State_Coin": "xyz:CRCL",
    "State_User": "0x535191d6d49922d69cc7829dbb73e48694840db7",
    "State_Side": "B",
    "State_Sz": "300.0",
    "State_ExecutedSz": "300.0",
    "State_ExecutedNtl": "18129.506864",
    "State_Minutes": 15,
    "State_Timestamp": 1784284164034,
    "State_ReduceOnly": false,
    "State_Randomize": false,
    "State_Extra": {},
    "Status": "finished",
    "StatusError": null,
    "Extra": {}
  }
];
