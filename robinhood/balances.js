// https://bitquery-blockchain-dataset.s3.us-east-1.amazonaws.com/robinhood/balances/56600000_56600049.parquet
/* More files in S3
bitquery-blockchain-dataset/
└── robinhood/
    ├── balances/
    │   ├── 56600000_56600049.parquet
    │   └── ...
*/
// Balance SNAPSHOT (levels), not deltas.
// Balance_Amount is a decimal STRING. Balance_RowCount is always 1.
// Native ETH is Currency_SmartContract = "0x".
[
  {
    "Balance_Address": "0x1b2ad295bbb18123ca71fd651a08c301b3d1b6b1",
    "Block_Date": 1788739200000,
    "Currency_Name": "Ethereum",
    "Currency_SmartContract": "0x",
    "Currency_Symbol": "ETH",
    "Currency_ProtocolName": "",
    "Balance_Amount": "0.033223533285033389",
    "Balance_FirstChangeTime": 1788760491,
    "Balance_LastChangeTime": 1788760491,
    "Balance_UpdateCount": 3,
    "Balance_RowCount": 1
  }
]
