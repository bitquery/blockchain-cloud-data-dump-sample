// https://bitquery-blockchain-dataset.s3.us-east-1.amazonaws.com/ethereum/balances/2025-01-01.parquet
/* More files in S3
bitquery-blockchain-dataset/
└── ethereum/
    └── balances/
        ├── 2025-01-01.parquet
        ├── 2025-01-02.parquet
    
*/
// Daily balance SNAPSHOT (levels), not deltas -- contrast with balance_updates.
// Covers only accounts whose balance changed that day.
// Balance_Amount is a decimal STRING; casting to float loses 18-decimal precision.
// Native ETH is Currency_SmartContract = "0x". Filter on the contract address,
// never on Currency_Symbol: 25 contracts claim symbol "ETH" in this file alone.
module.exports = [
  {
    "Balance_Address":"0x0000000000000000000000000000000000000000",
    "Block_Date":1735689600000,
    "Currency_Name":"Ethereum",
    "Currency_SmartContract":"0x",
    "Currency_Symbol":"ETH",
    "Currency_ProtocolName":"",
    "Balance_Amount":"13438.894497600490502562",
    "Balance_FirstChangeTime":1735696475,
    "Balance_LastChangeTime":1735768259,
    "Balance_UpdateCount":182,
    "Balance_RowCount":1
  }
];
