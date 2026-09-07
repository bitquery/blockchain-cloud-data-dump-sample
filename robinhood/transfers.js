// https://bitquery-blockchain-dataset.s3.us-east-1.amazonaws.com/robinhood/transfers/56600000_56600049.parquet
/* More files in S3
bitquery-blockchain-dataset/
└── robinhood/
    ├── transfers/
    │   ├── 56600000_56600049.parquet
    │   └── ...
*/
// One row per token transfer, native and ERC-20.
// Transfer_Currency_Native = "true" marks native ETH; filter on the contract, not the symbol.
// Transfer_Amount is a decimal STRING; Transfer_AmountInUSD is a float.
[
  {
    "Block_Date": 1788739200000,
    "Block_Number": 56600000,
    "Block_Time": 1788760487,
    "Fee_SenderFee": "0.000156478565088000",
    "Transaction_Hash": "0x75698494ed5d53b274dd044d93caa44d130e9ac4bb409246bddf82b8a0ee4a04",
    "Transaction_Index": 2,
    "TransactionStatus_Success": "true",
    "Transaction_Type": 2,
    "Transfer_Amount": "20473.454520130798111290",
    "Transfer_AmountInUSD": 25.335474,
    "Transfer_Currency_Decimals": 18,
    "Transfer_Currency_DelegatedTo": "0x",
    "Transfer_Currency_Fungible": "true",
    "Transfer_Currency_Name": "cyberbeer",
    "Transfer_Currency_Native": "false",
    "Transfer_Currency_ProtocolName": "erc20",
    "Transfer_Currency_SmartContract": "0x829b217ad539ccc53b18e53c63873333650e60f9",
    "Transfer_Currency_Symbol": "cyberbeer",
    "Transfer_Id": "0",
    "Transfer_Index": 0,
    "Transfer_Sender": "0x19c9fe830500760e07cdf20b5d816430487f01e2",
    "Transfer_Receiver": "0x8366a39cc670b4001a1121b8f6a443a643e40951",
    "Transfer_Type": "token",
    "Transfer_URI": ""
  }
]
