// This is a data sample for Hyperliquid Core `twap_statuses` provided via cloud
//

// Sample slice: BNB market, blocks 1159309631-1159385352 (~90 min of HyperCore, 2026-09-24).
// That slice holds 3 BNB TwapStatuses records. TwapId 2250263 appears twice:
// once when activated and once when finished.
//
// Contact sales@bitquery.io for a full export.

module.exports = [
  {
    "Block_Number": 1159309631,
    "Block_Time": 1790248352992506967,
    "Time": 1790248352992506967,
    "TwapId": 2250263,
    "State_Coin": "BNB",
    "State_User": "0x325edd95bb016c36027ce3b9f7595af7094a9564",
    "State_Side": "B",
    "State_Sz": "122.0",
    "State_ExecutedSz": "0.0",
    "State_ExecutedNtl": "0.0",
    "State_Minutes": 90,
    "State_Timestamp": 1790248352992,
    "State_ReduceOnly": false,
    "State_Randomize": true,
    "State_Extra": {},
    "Status": "activated",
    "StatusError": null,
    "Extra": {}
  },
  {
    "Block_Number": 1159369493,
    "Block_Time": 1790252624051227495,
    "Time": 1790252624051227495,
    "TwapId": 2250375,
    "State_Coin": "BNB",
    "State_User": "0x76c2cd1b8a249f465f8445c455cb78e0eed36f1e",
    "State_Side": "B",
    "State_Sz": "439.0",
    "State_ExecutedSz": "0.0",
    "State_ExecutedNtl": "0.0",
    "State_Minutes": 210,
    "State_Timestamp": 1790252624051,
    "State_ReduceOnly": false,
    "State_Randomize": false,
    "State_Extra": {},
    "Status": "activated",
    "StatusError": null,
    "Extra": {}
  },
  {
    "Block_Number": 1159385352,
    "Block_Time": 1790253754010015484,
    "Time": 1790253754010015484,
    "TwapId": 2250263,
    "State_Coin": "BNB",
    "State_User": "0x325edd95bb016c36027ce3b9f7595af7094a9564",
    "State_Side": "B",
    "State_Sz": "122.0",
    "State_ExecutedSz": "122.0",
    "State_ExecutedNtl": "93969.64597",
    "State_Minutes": 90,
    "State_Timestamp": 1790248352992,
    "State_ReduceOnly": false,
    "State_Randomize": true,
    "State_Extra": {},
    "Status": "finished",
    "StatusError": null,
    "Extra": {}
  }
];
