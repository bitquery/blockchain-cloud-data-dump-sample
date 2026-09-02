// This is a data sample for Hyperliquid Core `oracle_updates` provided via cloud
// Source: Bitquery blockchain data lake (SeaweedFS, S3 interface)
//   bucket : streaming-hyperliquid-proto
//   prefix : hyperliquidcore.blocks/<block_number floored to 1e6>/
//   object : <start_block>_<end_block>_<hash>.blocks.lz4  (1000 blocks per file)
//
// Decoded from protobuf message `HyperCoreBlocks` (hyperliquid/hypercore.proto),
// field `OracleUpdates`. Schema: https://github.com/bitquery/streaming_protobuf
//
// Sample slice: blocks 1075858000-1075858999 (1000 blocks, ~73s of HyperCore).
// That slice holds 24 OracleUpdates records; the 1 below are the first of them.
//
// Contact sales@bitquery.io for a full historical export.

module.exports = [
  {
    "Block_Number": 1075858790,
    "Block_Time": 1784285089230456679,
    "UpdateClass": "Deployer",
    "MarkPxInputs": [
      {
        "Coin": "mkts:AAPL",
        "Px": "292.11"
      },
      {
        "Coin": "mkts:BABA",
        "Px": "116.54"
      },
      {
        "Coin": "mkts:BMNR",
        "Px": "15.749"
      },
      {
        "Coin": "mkts:EUR",
        "Px": "1.1612"
      },
      {
        "Coin": "mkts:GLDMINE",
        "Px": "73.889"
      },
      {
        "Coin": "mkts:GOLD",
        "Px": "4348.8"
      },
      {
        "Coin": "mkts:GOOGL",
        "Px": "358.55"
      },
      {
        "Coin": "mkts:JPN225",
        "Px": "56942.0"
      },
      {
        "Coin": "mkts:MU",
        "Px": "1080.7"
      },
      {
        "Coin": "mkts:NVDA",
        "Px": "211.07"
      },
      {
        "Coin": "mkts:PLTR",
        "Px": "130.51"
      },
      {
        "Coin": "mkts:RTX",
        "Px": "181.52"
      },
      {
        "Coin": "mkts:SEMI",
        "Px": "543.11"
      },
      {
        "Coin": "mkts:SILVER",
        "Px": "70.451"
      },
      {
        "Coin": "mkts:SMALL2000",
        "Px": "292.75"
      },
      {
        "Coin": "mkts:TENCENT",
        "Px": "465.0"
      },
      {
        "Coin": "mkts:TSLA",
        "Px": "386.5"
      },
      {
        "Coin": "mkts:US500",
        "Px": "745.17"
      },
      {
        "Coin": "mkts:USBOND",
        "Px": "86.038"
      },
      {
        "Coin": "mkts:USENERGY",
        "Px": "58.247"
      },
      {
        "Coin": "mkts:USOIL",
        "Px": "114.1"
      },
      {
        "Coin": "mkts:USTECH",
        "Px": "696.24"
      },
      {
        "Coin": "mkts:XIAOMI",
        "Px": "26.311"
      }
    ],
    "SpotPxInputs": [
      {
        "Coin": "mkts:US500",
        "Px": "745.35"
      },
      {
        "Coin": "mkts:USTECH",
        "Px": "696.19"
      }
    ],
    "ExternalPerpPxInputs": [
      {
        "Coin": "mkts:US500",
        "Px": "745.35"
      },
      {
        "Coin": "mkts:USTECH",
        "Px": "696.19"
      }
    ],
    "OraclePxs_CoinToMarkPx": [
      {
        "Coin": "mkts:AAPL",
        "Px": "292.11",
        "LastUpdateTime": 1784285089230456679,
        "DailyPx": "292.11",
        "Extra": {}
      },
      {
        "Coin": "mkts:BABA",
        "Px": "116.54",
        "LastUpdateTime": 1784285089230456679,
        "DailyPx": "116.54",
        "Extra": {}
      },
      {
        "Coin": "mkts:BMNR",
        "Px": "15.749",
        "LastUpdateTime": 1784285089230456679,
        "DailyPx": "15.749",
        "Extra": {}
      },
      {
        "Coin": "mkts:EUR",
        "Px": "1.1612",
        "LastUpdateTime": 1784285089230456679,
        "DailyPx": "1.1612",
        "Extra": {}
      },
      {
        "Coin": "mkts:GLDMINE",
        "Px": "73.889",
        "LastUpdateTime": 1784285089230456679,
        "DailyPx": "73.889",
        "Extra": {}
      },
      {
        "Coin": "mkts:GOLD",
        "Px": "4348.8",
        "LastUpdateTime": 1784285089230456679,
        "DailyPx": "4348.8",
        "Extra": {}
      },
      {
        "Coin": "mkts:GOOGL",
        "Px": "358.55",
        "LastUpdateTime": 1784285089230456679,
        "DailyPx": "358.55",
        "Extra": {}
      },
      {
        "Coin": "mkts:JPN225",
        "Px": "56942.0",
        "LastUpdateTime": 1784285089230456679,
        "DailyPx": "56942.0",
        "Extra": {}
      },
      {
        "Coin": "mkts:MU",
        "Px": "1080.7",
        "LastUpdateTime": 1784285089230456679,
        "DailyPx": "1080.7",
        "Extra": {}
      },
      {
        "Coin": "mkts:NVDA",
        "Px": "211.07",
        "LastUpdateTime": 1784285089230456679,
        "DailyPx": "211.07",
        "Extra": {}
      },
      {
        "Coin": "mkts:PLTR",
        "Px": "130.51",
        "LastUpdateTime": 1784285089230456679,
        "DailyPx": "130.51",
        "Extra": {}
      },
      {
        "Coin": "mkts:RTX",
        "Px": "181.52",
        "LastUpdateTime": 1784285089230456679,
        "DailyPx": "181.52",
        "Extra": {}
      },
      {
        "Coin": "mkts:SEMI",
        "Px": "543.11",
        "LastUpdateTime": 1784285089230456679,
        "DailyPx": "543.11",
        "Extra": {}
      },
      {
        "Coin": "mkts:SILVER",
        "Px": "70.451",
        "LastUpdateTime": 1784285089230456679,
        "DailyPx": "70.451",
        "Extra": {}
      },
      {
        "Coin": "mkts:SMALL2000",
        "Px": "292.75",
        "LastUpdateTime": 1784285089230456679,
        "DailyPx": "292.75",
        "Extra": {}
      },
      {
        "Coin": "mkts:TENCENT",
        "Px": "465.0",
        "LastUpdateTime": 1784285089230456679,
        "DailyPx": "465.0",
        "Extra": {}
      },
      {
        "Coin": "mkts:TSLA",
        "Px": "386.5",
        "LastUpdateTime": 1784285089230456679,
        "DailyPx": "386.5",
        "Extra": {}
      },
      {
        "Coin": "mkts:US500",
        "Px": "745.17",
        "LastUpdateTime": 1784285089230456679,
        "DailyPx": "749.0",
        "Extra": {}
      },
      {
        "Coin": "mkts:USBOND",
        "Px": "86.038",
        "LastUpdateTime": 1784285089230456679,
        "DailyPx": "86.038",
        "Extra": {}
      },
      {
        "Coin": "mkts:USENERGY",
        "Px": "58.247",
        "LastUpdateTime": 1784285089230456679,
        "DailyPx": "58.247",
        "Extra": {}
      },
      {
        "Coin": "mkts:USOIL",
        "Px": "114.1",
        "LastUpdateTime": 1784285089230456679,
        "DailyPx": "114.1",
        "Extra": {}
      },
      {
        "Coin": "mkts:USTECH",
        "Px": "696.24",
        "LastUpdateTime": 1784285089230456679,
        "DailyPx": "702.92",
        "Extra": {}
      },
      {
        "Coin": "mkts:XIAOMI",
        "Px": "26.311",
        "LastUpdateTime": 1784285089230456679,
        "DailyPx": "26.311",
        "Extra": {}
      }
    ],
    "OraclePxs_CoinToOraclePx": [
      {
        "Coin": "mkts:AAPL",
        "Px": "292.11",
        "LastUpdateTime": 1783754556030463742,
        "DailyPx": "292.11",
        "Extra": {}
      },
      {
        "Coin": "mkts:BABA",
        "Px": "116.54",
        "LastUpdateTime": 1783754556030463742,
        "DailyPx": "116.54",
        "Extra": {}
      },
      {
        "Coin": "mkts:BMNR",
        "Px": "15.749",
        "LastUpdateTime": 1783754556030463742,
        "DailyPx": "15.749",
        "Extra": {}
      },
      {
        "Coin": "mkts:EUR",
        "Px": "1.1612",
        "LastUpdateTime": 1783754556030463742,
        "DailyPx": "1.1612",
        "Extra": {}
      },
      {
        "Coin": "mkts:GLDMINE",
        "Px": "73.889",
        "LastUpdateTime": 1783754556030463742,
        "DailyPx": "73.889",
        "Extra": {}
      },
      {
        "Coin": "mkts:GOLD",
        "Px": "4348.8",
        "LastUpdateTime": 1783754556030463742,
        "DailyPx": "4348.8",
        "Extra": {}
      },
      {
        "Coin": "mkts:GOOGL",
        "Px": "358.55",
        "LastUpdateTime": 1783754556030463742,
        "DailyPx": "358.55",
        "Extra": {}
      },
      {
        "Coin": "mkts:JPN225",
        "Px": "56942.0",
        "LastUpdateTime": 1783754556030463742,
        "DailyPx": "56942.0",
        "Extra": {}
      },
      {
        "Coin": "mkts:MU",
        "Px": "1080.7",
        "LastUpdateTime": 1783754556030463742,
        "DailyPx": "1080.7",
        "Extra": {}
      },
      {
        "Coin": "mkts:NVDA",
        "Px": "211.07",
        "LastUpdateTime": 1783754556030463742,
        "DailyPx": "211.07",
        "Extra": {}
      },
      {
        "Coin": "mkts:PLTR",
        "Px": "130.51",
        "LastUpdateTime": 1783754556030463742,
        "DailyPx": "130.51",
        "Extra": {}
      },
      {
        "Coin": "mkts:RTX",
        "Px": "181.52",
        "LastUpdateTime": 1783754556030463742,
        "DailyPx": "181.52",
        "Extra": {}
      },
      {
        "Coin": "mkts:SEMI",
        "Px": "543.11",
        "LastUpdateTime": 1783754556030463742,
        "DailyPx": "543.11",
        "Extra": {}
      },
      {
        "Coin": "mkts:SILVER",
        "Px": "70.451",
        "LastUpdateTime": 1783754556030463742,
        "DailyPx": "70.451",
        "Extra": {}
      },
      {
        "Coin": "mkts:SMALL2000",
        "Px": "292.75",
        "LastUpdateTime": 1783754556030463742,
        "DailyPx": "292.75",
        "Extra": {}
      },
      {
        "Coin": "mkts:TENCENT",
        "Px": "465.0",
        "LastUpdateTime": 1783754556030463742,
        "DailyPx": "465.0",
        "Extra": {}
      },
      {
        "Coin": "mkts:TSLA",
        "Px": "386.5",
        "LastUpdateTime": 1783754556030463742,
        "DailyPx": "386.5",
        "Extra": {}
      },
      {
        "Coin": "mkts:US500",
        "Px": "745.35",
        "LastUpdateTime": 1784285089230456679,
        "DailyPx": "749.12",
        "Extra": {}
      },
      {
        "Coin": "mkts:USBOND",
        "Px": "86.038",
        "LastUpdateTime": 1783754556030463742,
        "DailyPx": "86.038",
        "Extra": {}
      },
      {
        "Coin": "mkts:USENERGY",
        "Px": "58.247",
        "LastUpdateTime": 1783754556030463742,
        "DailyPx": "58.247",
        "Extra": {}
      },
      {
        "Coin": "mkts:USOIL",
        "Px": "114.1",
        "LastUpdateTime": 1783754556030463742,
        "DailyPx": "114.1",
        "Extra": {}
      },
      {
        "Coin": "mkts:USTECH",
        "Px": "696.19",
        "LastUpdateTime": 1784285089230456679,
        "DailyPx": "702.92",
        "Extra": {}
      },
      {
        "Coin": "mkts:XIAOMI",
        "Px": "26.311",
        "LastUpdateTime": 1783754556030463742,
        "DailyPx": "26.311",
        "Extra": {}
      }
    ],
    "OraclePxs_CoinToExternalPerpPx": [
      {
        "Coin": "mkts:AAPL",
        "Px": "292.11",
        "LastUpdateTime": 0,
        "DailyPx": "292.11",
        "Extra": {}
      },
      {
        "Coin": "mkts:BABA",
        "Px": "116.54",
        "LastUpdateTime": 0,
        "DailyPx": "116.54",
        "Extra": {}
      },
      {
        "Coin": "mkts:BMNR",
        "Px": "15.749",
        "LastUpdateTime": 0,
        "DailyPx": "15.749",
        "Extra": {}
      },
      {
        "Coin": "mkts:EUR",
        "Px": "1.1612",
        "LastUpdateTime": 0,
        "DailyPx": "1.1612",
        "Extra": {}
      },
      {
        "Coin": "mkts:GLDMINE",
        "Px": "73.889",
        "LastUpdateTime": 0,
        "DailyPx": "73.889",
        "Extra": {}
      },
      {
        "Coin": "mkts:GOLD",
        "Px": "4348.8",
        "LastUpdateTime": 0,
        "DailyPx": "4348.8",
        "Extra": {}
      },
      {
        "Coin": "mkts:GOOGL",
        "Px": "358.55",
        "LastUpdateTime": 0,
        "DailyPx": "358.55",
        "Extra": {}
      },
      {
        "Coin": "mkts:JPN225",
        "Px": "56942.0",
        "LastUpdateTime": 0,
        "DailyPx": "56942.0",
        "Extra": {}
      },
      {
        "Coin": "mkts:MU",
        "Px": "1080.7",
        "LastUpdateTime": 0,
        "DailyPx": "1080.7",
        "Extra": {}
      },
      {
        "Coin": "mkts:NVDA",
        "Px": "211.07",
        "LastUpdateTime": 0,
        "DailyPx": "211.07",
        "Extra": {}
      },
      {
        "Coin": "mkts:PLTR",
        "Px": "130.51",
        "LastUpdateTime": 0,
        "DailyPx": "130.51",
        "Extra": {}
      },
      {
        "Coin": "mkts:RTX",
        "Px": "181.52",
        "LastUpdateTime": 0,
        "DailyPx": "181.52",
        "Extra": {}
      },
      {
        "Coin": "mkts:SEMI",
        "Px": "543.11",
        "LastUpdateTime": 0,
        "DailyPx": "543.11",
        "Extra": {}
      },
      {
        "Coin": "mkts:SILVER",
        "Px": "70.451",
        "LastUpdateTime": 0,
        "DailyPx": "70.451",
        "Extra": {}
      },
      {
        "Coin": "mkts:SMALL2000",
        "Px": "292.75",
        "LastUpdateTime": 0,
        "DailyPx": "292.75",
        "Extra": {}
      },
      {
        "Coin": "mkts:TENCENT",
        "Px": "465.0",
        "LastUpdateTime": 0,
        "DailyPx": "465.0",
        "Extra": {}
      },
      {
        "Coin": "mkts:TSLA",
        "Px": "386.5",
        "LastUpdateTime": 0,
        "DailyPx": "386.5",
        "Extra": {}
      },
      {
        "Coin": "mkts:US500",
        "Px": "745.35",
        "LastUpdateTime": 1784285089230456679,
        "DailyPx": "749.12",
        "Extra": {}
      },
      {
        "Coin": "mkts:USBOND",
        "Px": "86.038",
        "LastUpdateTime": 0,
        "DailyPx": "86.038",
        "Extra": {}
      },
      {
        "Coin": "mkts:USENERGY",
        "Px": "58.247",
        "LastUpdateTime": 0,
        "DailyPx": "58.247",
        "Extra": {}
      },
      {
        "Coin": "mkts:USOIL",
        "Px": "114.1",
        "LastUpdateTime": 0,
        "DailyPx": "114.1",
        "Extra": {}
      },
      {
        "Coin": "mkts:USTECH",
        "Px": "696.19",
        "LastUpdateTime": 1784285089230456679,
        "DailyPx": "702.92",
        "Extra": {}
      },
      {
        "Coin": "mkts:XIAOMI",
        "Px": "26.311",
        "LastUpdateTime": 0,
        "DailyPx": "26.311",
        "Extra": {}
      }
    ],
    "OraclePxs_Extra": {},
    "Extra": {}
  }
];
