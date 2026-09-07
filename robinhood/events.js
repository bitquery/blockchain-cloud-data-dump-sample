// https://bitquery-blockchain-dataset.s3.us-east-1.amazonaws.com/robinhood/events/56600000_56600049.parquet
/* More files in S3
bitquery-blockchain-dataset/
└── robinhood/
    ├── events/
    │   ├── 56600000_56600049.parquet
    │   └── ...
*/
// One row per decoded log. Arguments is a JSON array of [Index, Name, Path, Type, Value].
// Topics_Hash is a list of topic hashes WITHOUT the 0x prefix.
// ChainId is 4663 for Robinhood Chain.
[
  {
    "Arguments": "[[0,\"owner\",[],\"address\",\"0x19c9fe830500760e07cdf20b5d816430487f01e2\"],[1,\"spender\",[],\"address\",\"0x65050a9b7e5075a2ba5ced7b1b64ee66262c40dc\"],[2,\"value\",[],\"uint256\",\"20473454520130798111290\"]]",
    "Block_Date": 1788739200000,
    "Block_Number": 56600000,
    "Block_Time": 1788760487,
    "Call_CallPath": [],
    "Call_CallerIndex": -1,
    "Call_Create": "false",
    "Call_Error": "",
    "Call_From": "0x19c9fe830500760e07cdf20b5d816430487f01e2",
    "Call_Gas": 228320,
    "Call_GasUsed": 24317,
    "Call_Index": 0,
    "Call_InternalCalls": 0,
    "Call_Reverted": "false",
    "Call_SelfDestruct": "false",
    "Call_Signature_Abi": "{\"constant\":false,\"inputs\":[{\"name\":\"spender\",\"type\":\"address\"},{\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"}",
    "Call_Signature_Name": "approve",
    "Call_Signature_Signature": "approve(address,uint256)",
    "Call_Signature_SignatureHash": "095ea7b3",
    "Call_Signature_SignatureType": "false",
    "Call_To": "0x829b217ad539ccc53b18e53c63873333650e60f9",
    "Call_Value": "0.000000000000000000",
    "ChainId": 4663,
    "Fee_SenderFee": "0.000015502460904000",
    "Log_EnterIndex": 2,
    "Log_ExitIndex": 2,
    "Log_Index": 0,
    "Log_LogAfterCallIndex": 0,
    "Log_Pc": 1664,
    "Log_Signature_Abi": "{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"}",
    "Log_Signature_Name": "Approval",
    "Log_Signature_Signature": "Approval(address,address,uint256)",
    "Log_Signature_SignatureHash": "8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925",
    "Log_Signature_SignatureType": "false",
    "Log_SmartContract": "0x829b217ad539ccc53b18e53c63873333650e60f9",
    "LogHeader_Address": "0x829b217ad539ccc53b18e53c63873333650e60f9",
    "LogHeader_Data": "000000000000000000000000000000000000000000000455de41ed0c47c04a3a",
    "LogHeader_Index": 0,
    "LogHeader_Removed": "false",
    "Topics_Hash": [
      "8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925",
      "00000000000000000000000019c9fe830500760e07cdf20b5d816430487f01e2",
      "00000000000000000000000065050a9b7e5075a2ba5ced7b1b64ee66262c40dc"
    ],
    "Transaction_From": "0x19c9fe830500760e07cdf20b5d816430487f01e2",
    "Transaction_Hash": "0x405ce0c6e09a405d6cb96400f44026f6687b6e4182c677cc6ff547168dc2e3ae",
    "Transaction_Index": 1,
    "Transaction_To": "0x829b217ad539ccc53b18e53c63873333650e60f9",
    "TransactionStatus_Success": "true"
  }
]
