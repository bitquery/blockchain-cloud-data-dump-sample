// https://bitquery-blockchain-dataset.s3.us-east-1.amazonaws.com/datashare/robinhood/pons/launches_graduations/68914550_68914599.parquet
/* More files in S3
bitquery-blockchain-dataset/
└── datashare/robinhood/pons/launches_graduations/
    ├── 68914550_68914599.parquet
    └── ...
*/
// One row per Pons lifecycle event: TokenLaunched, TokenCurveSetV2, CurveCompleted,
// PoolGraduated, GraduationTokensPermanentlyLocked, LaunchSwept, Migrated.
// Same schema as robinhood/events — this file is that table pre-filtered to the Pons factory
// 0x7ed598bcef8bd9edd8c97a195c6d13f40801ec7e and those event names.
// TokenLaunched carries graduationThreshold, the quote amount a curve must reach to graduate.
// Arguments is a JSON array of [Index, Name, Path, Type, Value], as in robinhood/events.

module.exports = {
  "Arguments": "[[0,\"token\",[],\"address\",\"0x4a0840159364e150cb7d6190c83ad953e9be02da\"],[1,\"curve\",[],\"address\",\"0x29f93a8ef21e7c8fa4022cf2056b290fb8a43782\"],[2,\"deployer\",[],\"address\",\"0xf9dc851daf8d499a83394ed2724b2e4bb348b1dc\"],[3,\"pairToken\",[],\"address\",\"0xd0601ce157db5bdc3162bbac2a2c8af5320d9eec\"],[4,\"launchConfigId\",[],\"uint256\",\"0\"],[5,\"graduationThreshold\",[],\"uint256\",\"41600000000000000000\"]]",
  "Block_Date": 1789948800000,
  "Block_Number": 68914550,
  "Block_Time": 1790005504,
  "Call_CallPath": [
    2,
    3,
    4
  ],
  "Call_CallerIndex": 55,
  "Call_Create": "false",
  "Call_Error": "",
  "Call_From": "0xe33e9e479df8802cb0866d5d05258bec4cf62948",
  "Call_Gas": 5148656,
  "Call_GasUsed": 3587815,
  "Call_Index": 68,
  "Call_InternalCalls": 25,
  "Call_Reverted": "false",
  "Call_SelfDestruct": "false",
  "Call_Signature_Abi": "{\"inputs\":[{\"components\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"symbol\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"logo\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"description\",\"type\":\"string\"},{\"components\":[{\"internalType\":\"string\",\"name\":\"twitter\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"telegram\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"discord\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"website\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"farcaster\",\"type\":\"string\"}],\"internalType\":\"struct PonsV2LauncherToken.Socials\",\"name\":\"socials\",\"type\":\"tuple\"},{\"internalType\":\"address\",\"name\":\"creatorFeeRecipient\",\"type\":\"address\"},{\"internalType\":\"uint16\",\"name\":\"creatorTaxBps\",\"type\":\"uint16\"},{\"internalType\":\"bool\",\"name\":\"buybackEnabled\",\"type\":\"bool\"},{\"internalType\":\"bytes32\",\"name\":\"expectedEconomics\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"salt\",\"type\":\"bytes32\"}],\"internalType\":\"struct PonsV2LaunchFactory.TokenParams\",\"name\":\"params\",\"type\":\"tuple\"},{\"internalType\":\"uint256\",\"name\":\"launchConfigId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"pairToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"originalDeployer\",\"type\":\"address\"},{\"internalType\":\"address[]\",\"name\":\"snipeTaxExemptions\",\"type\":\"address[]\"}],\"name\":\"launchTokenFor\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"curve\",\"type\":\"address\"}],\"stateMutability\":\"payable\",\"type\":\"function\"}",
  "Call_Signature_Name": "launchTokenFor",
  "Call_Signature_Signature": "launchTokenFor((string,string,string,string,(string,string,string,string,string),address,uint16,bool,bytes32,bytes32),uint256,address,address,address[])",
  "Call_Signature_SignatureHash": "d6a0eef5",
  "Call_Signature_SignatureType": "0",
  "Call_To": "0x7ed598bcef8bd9edd8c97a195c6d13f40801ec7e",
  "Call_Value": "500000000000000",
  "ChainId": 4663,
  "Fee_SenderFee": "351282539664000",
  "Log_EnterIndex": 178,
  "Log_ExitIndex": 175,
  "Log_Index": 0,
  "Log_LogAfterCallIndex": 100,
  "Log_Pc": 19388,
  "Log_Signature_Abi": "{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"curve\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"deployer\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"pairToken\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"launchConfigId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"graduationThreshold\",\"type\":\"uint256\"}],\"name\":\"TokenLaunched\",\"type\":\"event\"}",
  "Log_Signature_Name": "TokenLaunched",
  "Log_Signature_Signature": "TokenLaunched(address,address,address,address,uint256,uint256)",
  "Log_Signature_SignatureHash": "8d4aad4953d0ca700d468f3753aa14432d1b35b43ec6409f051fb6aa43a89607",
  "Log_Signature_SignatureType": "0",
  "Log_SmartContract": "0x7ed598bcef8bd9edd8c97a195c6d13f40801ec7e",
  "LogHeader_Address": "0x7ed598bcef8bd9edd8c97a195c6d13f40801ec7e",
  "LogHeader_Data": "000000000000000000000000d0601ce157db5bdc3162bbac2a2c8af5320d9eec00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000024150e39800400000",
  "LogHeader_Index": 44,
  "LogHeader_Removed": "false",
  "Topics_Hash": [
    "8d4aad4953d0ca700d468f3753aa14432d1b35b43ec6409f051fb6aa43a89607",
    "0000000000000000000000004a0840159364e150cb7d6190c83ad953e9be02da",
    "00000000000000000000000029f93a8ef21e7c8fa4022cf2056b290fb8a43782",
    "000000000000000000000000f9dc851daf8d499a83394ed2724b2e4bb348b1dc"
  ],
  "Transaction_From": "0xb69f2c8c4e3b9141fa4efd614091a616ed9d8526",
  "Transaction_Hash": "0xdd149d9591b2128cfdd7b173819bc7c8b6b1ccbee76a0c5a55e5a44176899c05",
  "Transaction_Index": 10,
  "Transaction_To": "0x6319141dcc29e7dceaab6c4563cca1fb58e8cce2",
  "TransactionStatus_Success": "true"
}
