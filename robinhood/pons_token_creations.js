// https://bitquery-blockchain-dataset.s3.us-east-1.amazonaws.com/datashare/robinhood/pons/token_creations/68914550_68914599.parquet
/* More files in S3
bitquery-blockchain-dataset/
└── datashare/robinhood/pons/token_creations/
    ├── 68914550_68914599.parquet
    └── ...
*/
// One row per token contract created by a Pons launch, joining the creation call to the
// TokenLaunched event, the token's ERC-20 metadata and its initial mint.
// Token is the contract created; Token_Factory is the contract that deployed it and Deployer
// is the wallet that paid for the launch.
// InitialSupply is the first mint from the zero address, decimal adjusted as a string.
// Token_Symbol repeats across tokens -- join on Token, never on the symbol.

module.exports = {
  "ChainId": 4663,
  "Block_Date": 1789948800000,
  "Block_Time": 1790005504,
  "Block_Number": 68914550,
  "Transaction_Index": 10,
  "Transaction_Hash": "0xdd149d9591b2128cfdd7b173819bc7c8b6b1ccbee76a0c5a55e5a44176899c05",
  "Transaction_From": "0xb69f2c8c4e3b9141fa4efd614091a616ed9d8526",
  "Call_Index": 90,
  "Call_GasUsed": 847413,
  "Call_Success": "true",
  "Token": "0x4a0840159364e150cb7d6190c83ad953e9be02da",
  "Token_Factory": "0x3711cea4feade896c913c68f01eda97cb06d1a42",
  "Deployer": "0xf9dc851daf8d499a83394ed2724b2e4bb348b1dc",
  "Curve": "0x29f93a8ef21e7c8fa4022cf2056b290fb8a43782",
  "PairToken": "0xd0601ce157db5bdc3162bbac2a2c8af5320d9eec",
  "LaunchConfigId": "0",
  "GraduationThreshold": "41600000000000000000",
  "Token_Name": "Super Inu",
  "Token_Symbol": "SI",
  "Token_Decimals": 18,
  "Token_ProtocolName": "erc20",
  "Token_Fungible": "true",
  "Token_HasURI": "false",
  "InitialSupply": "1000000000000000000000000000",
  "InitialSupply_Receiver": "0x29f93a8ef21e7c8fa4022cf2056b290fb8a43782",
  "InitCode_Bytes": 8074
}
