//  S3 url: https://bitquery-blockchain-dataset.s3.us-east-1.amazonaws.com/bsc/events/77611000_77611049.parquet
// ├── events/
// │   │   ├── 77611000_77611049.parquet
// │   │   ├── 77611050_77611099.parquet
// │   │   └── 77611100_77611149.parquet
module.exports = [
  {
    "Arguments":"[[0, \"sender\", [], \"address\", [\"address\", \"73b4c818892283e5fc37fee7b91ff7245b236d3c\", \"\", 0, 0, \"false\"]], [1, \"recipient\", [], \"address\", [\"address\", \"73b4c818892283e5fc37fee7b91ff7245b236d3c\", \"\", 0, 0, \"false\"]], [2, \"amount0\", [], \"int256\", [\"int256\", \"\", \"29059176261278340\", 0, 0, \"false\"]], [3, \"amount1\", [], \"int256\", [\"int256\", \"\", \"-5717300123289439993502\", 0, 0, \"false\"]], [4, \"sqrtPriceX96\", [], \"uint160\", [\"uint160\", \"\", \"35140923822004848872703763341767\", 0, 0, \"false\"]], [5, \"liquidity\", [], \"uint128\", [\"uint128\", \"\", \"66684215094427273919970\", 0, 0, \"false\"]], [6, \"tick\", [], \"int24\", [\"int24\", \"\", \"121901\", 0, 0, \"false\"]], [7, \"protocolFeesToken0\", [], \"uint128\", [\"uint128\", \"\", \"958952816622\", 0, 0, \"false\"]], [8, \"protocolFeesToken1\", [], \"uint128\", [\"uint128\", \"\", \"0\", 0, 0, \"false\"]]]",
    "Block_Date":1769385600000,
    "Block_Number":77611000,
    "Block_Time":1769470276,
    "Call_CallPath":[
      7
    ],
    "Call_CallerIndex":0,
    "Call_Create":"false",
    "Call_Error":"",
    "Call_From":"0x73b4c818892283e5fc37fee7b91ff7245b236d3c",
    "Call_Gas":245321,
    "Call_GasUsed":78140,
    "Call_Index":8,
    "Call_InternalCalls":4,
    "Call_Reverted":"false",
    "Call_SelfDestruct":"false",
    "Call_Signature_Abi":"{\"inputs\":[{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"zeroForOne\",\"type\":\"bool\"},{\"internalType\":\"int256\",\"name\":\"amountSpecified\",\"type\":\"int256\"},{\"internalType\":\"uint160\",\"name\":\"sqrtPriceLimitX96\",\"type\":\"uint160\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"swap\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"amount0\",\"type\":\"int256\"},{\"internalType\":\"int256\",\"name\":\"amount1\",\"type\":\"int256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}",
    "Call_Signature_Name":"swap",
    "Call_Signature_Signature":"swap(address,bool,int256,uint160,bytes)",
    "Call_Signature_SignatureHash":"128acb08",
    "Call_Signature_SignatureType":"false",
    "Call_To":"0x7ccc3010e52fbca54467ff68eec4be78420571c5",
    "Call_Value":"0.000000000000000000",
    "ChainId":56,
    "Fee_SenderFee":"0.000007091604954639",
    "Log_EnterIndex":13,
    "Log_ExitIndex":12,
    "Log_Index":0,
    "Log_LogAfterCallIndex":8,
    "Log_Pc":5644,
    "Log_Signature_Abi":"{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"int256\",\"name\":\"amount0\",\"type\":\"int256\"},{\"indexed\":false,\"internalType\":\"int256\",\"name\":\"amount1\",\"type\":\"int256\"},{\"indexed\":false,\"internalType\":\"uint160\",\"name\":\"sqrtPriceX96\",\"type\":\"uint160\"},{\"indexed\":false,\"internalType\":\"uint128\",\"name\":\"liquidity\",\"type\":\"uint128\"},{\"indexed\":false,\"internalType\":\"int24\",\"name\":\"tick\",\"type\":\"int24\"},{\"indexed\":false,\"internalType\":\"uint128\",\"name\":\"protocolFeesToken0\",\"type\":\"uint128\"},{\"indexed\":false,\"internalType\":\"uint128\",\"name\":\"protocolFeesToken1\",\"type\":\"uint128\"}],\"name\":\"Swap\",\"type\":\"event\"}",
    "Log_Signature_Name":"Swap",
    "Log_Signature_Signature":"Swap(address,address,int256,int256,uint160,uint128,int24,uint128,uint128)",
    "Log_Signature_SignatureHash":"19b47279256b2a23a1665c810c8d55a1758940ee09377d4f8d26497a3577dc83",
    "Log_Signature_SignatureType":"false",
    "Log_SmartContract":"0x7ccc3010e52fbca54467ff68eec4be78420571c5",
    "LogHeader_Address":"0x7ccc3010e52fbca54467ff68eec4be78420571c5",
    "LogHeader_Data":"00000000000000000000000000000000000000000000000000673d2ab684da84fffffffffffffffffffffffffffffffffffffffffffffeca1085a56c2be7816200000000000000000000000000000000000001bb8a72e48c437e267a8da6e1c7000000000000000000000000000000000000000000000e1ef56320449743fde2000000000000000000000000000000000000000000000000000000000001dc2d000000000000000000000000000000000000000000000000000000df460abfee0000000000000000000000000000000000000000000000000000000000000000",
    "LogHeader_Index":0,
    "LogHeader_Removed":"false",
    "Topics_Hash":[
      "19b47279256b2a23a1665c810c8d55a1758940ee09377d4f8d26497a3577dc83",
      "00000000000000000000000073b4c818892283e5fc37fee7b91ff7245b236d3c",
      "00000000000000000000000073b4c818892283e5fc37fee7b91ff7245b236d3c"
    ],
    "Transaction_From":"0x7369a524e1bf1548713c88d6ae9878ffb4e01ba9",
    "Transaction_Hash":"0xd39a1e7666d4f53b8cd83a558bbec6ad27d785223efe12d3c69431ef8c6aaedc",
    "Transaction_Index":14,
    "Transaction_To":"0x73b4c818892283e5fc37fee7b91ff7245b236d3c",
    "TransactionStatus_Success":"true"
  }
];
