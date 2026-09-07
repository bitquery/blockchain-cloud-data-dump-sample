// https://bitquery-blockchain-dataset.s3.us-east-1.amazonaws.com/robinhood/calls/56600000_56600049.parquet
/* More files in S3
bitquery-blockchain-dataset/
└── robinhood/
    ├── calls/
    │   ├── 56600000_56600049.parquet
    │   └── ...
*/
// One row per contract call, including internal calls.
// Arguments / Returns are JSON arrays of [Index, Name, Path, Type, Value].
// StateChanges is a JSON array of [Address, ChangeAfterCallIndex, Location, Value].
// Call_Value is a decimal STRING in native units.
[
  {
    "Arguments": "[]",
    "Block_Date": 1788739200000,
    "Block_Number": 56600000,
    "Block_Time": 1788760487,
    "Call_CallPath": [],
    "Call_CallerIndex": -1,
    "Call_Create": "false",
    "Call_Delegated": "false",
    "Call_Depth": 0,
    "Call_EnterIndex": 0,
    "Call_Error": "",
    "Call_ExitIndex": 0,
    "Call_From": "0x00000000000000000000000000000000000a4b05",
    "Call_Gas": 0,
    "Call_GasUsed": 80800,
    "Call_Index": 0,
    "Call_Input": "0x6bf6a42d000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000018b8fbd00000000000000000000000000000000000000000000000000000000035fa5c00000000000000000000000000000000000000000000000000000000000000000",
    "Call_InternalCalls": 1,
    "Call_LogCount": 0,
    "Call_Opcode_Code": 0,
    "Call_Opcode_Name": "",
    "Call_Output": "0x",
    "Call_Reverted": "false",
    "Call_SelfDestruct": "false",
    "Call_Signature_Abi": "",
    "Call_Signature_Name": "",
    "Call_Signature_Parsed": "false",
    "Call_Signature_Signature": "",
    "Call_Signature_SignatureHash": "6BF6A42D",
    "Call_Signature_SignatureType": "false",
    "Call_Success": "true",
    "Call_To": "0x00000000000000000000000000000000000a4b05",
    "Call_Value": "0.000000000000000000",
    "Call_ValueInUSD": 0.0,
    "Returns": "[]",
    "StateChanges": "[]",
    "Transaction_Hash": "0xe8245c9226c22256c0b15e0c78544e0d622c8a1588147bbb12f0474935924c7b",
    "Transaction_Index": 0,
    "TransactionStatus_EndError": "",
    "TransactionStatus_FaultError": "",
    "TransactionStatus_Success": "true"
  }
]
