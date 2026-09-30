// https://bitquery-blockchain-dataset.s3.us-east-1.amazonaws.com/base/dex_trades/51730927_51730976.parquet
// more files in
//   bitquery-blockchain-dataset/
// ├── base/
// │   ├── dex_trades/
// │   │   └── 51730927_51730976.parquet
// files are named <start_block>_<end_block>.parquet; 50 blocks per file, sorted ascending
// Base: one row per swap, with both sides, pool and protocol, fees, transaction details and a USD value where a price exists. Coverage from July 2023. Same 54 columns as ethereum_dex_trades; see that table for the column descriptions.
// Trade_Buy_Amount and Trade_Sell_Amount are decimal strings; casting to float loses precision.

module.exports = [
    {
      "Block_Date": 1790208000000,
      "Block_Number": 51730927,
      "Block_Time": 1790231401,
      "Fee_SenderFee": "0.000005441995095460",
      "Trade_Buy_Amount": "0.532378447611987968",
      "Trade_Buy_AmountInUSD": 1409.0304127630016,
      "Trade_Buy_Buyer": "0xb2cc224c1c9fee385f8ad6a55b4d94e92359dc59",
      "Trade_Buy_Currency_Decimals": 18,
      "Trade_Buy_Currency_Fungible": "true",
      "Trade_Buy_Currency_HasURI": "false",
      "Trade_Buy_Currency_Name": "Wrapped Ether",
      "Trade_Buy_Currency_ProtocolName": "erc20",
      "Trade_Buy_Currency_SmartContract": "0x4200000000000000000000000000000000000006",
      "Trade_Buy_Currency_Symbol": "WETH",
      "Trade_Buy_Ids": [],
      "Trade_Buy_OrderId": "",
      "Trade_Buy_Price": 2647.0316169280395,
      "Trade_Buy_PriceInUSD": 2646.670651457216,
      "Trade_Buy_Seller": "0x51c72848c68a965f66fa7a88855f9f7784502a7f",
      "Trade_Dex_Delegated": "true",
      "Trade_Dex_OwnerAddress": "0x5e7bb104d84c7cb9b682aac2f3d509f5f406809a",
      "Trade_Dex_Pair_Decimals": 0,
      "Trade_Dex_Pair_Name": "",
      "Trade_Dex_Pair_SmartContract": "0x",
      "Trade_Dex_Pair_Symbol": "",
      "Trade_Dex_ProtocolFamily": "Aerodrome",
      "Trade_Dex_ProtocolName": "aerodrome_slipstream",
      "Trade_Dex_ProtocolVersion": "3",
      "Trade_Dex_SmartContract": "0xb2cc224c1c9fee385f8ad6a55b4d94e92359dc59",
      "Trade_Fees": "[[\"0.000300261444453161\", 0.7946931527983323, [18, \"Wrapped Ether\", \"erc20\", \"4200000000000000000000000000000000000006\", \"WETH\"], \"0x83d55acdc72027ed339d267eebaf9a41e47490d5\", \"0xb2cc224c1c9fee385f8ad6a55b4d94e92359dc59\"]]",
      "Trade_Index": 0,
      "Trade_PoolId": "",
      "Trade_Sell_Amount": "1409.222583",
      "Trade_Sell_AmountInUSD": 1409.0304127630016,
      "Trade_Sell_Buyer": "0x51c72848c68a965f66fa7a88855f9f7784502a7f",
      "Trade_Sell_Currency_Decimals": 6,
      "Trade_Sell_Currency_Fungible": "true",
      "Trade_Sell_Currency_HasURI": "false",
      "Trade_Sell_Currency_Name": "USD Coin",
      "Trade_Sell_Currency_ProtocolName": "erc20",
      "Trade_Sell_Currency_SmartContract": "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",
      "Trade_Sell_Currency_Symbol": "USDC",
      "Trade_Sell_Ids": [],
      "Trade_Sell_OrderId": "",
      "Trade_Sell_Price": 0.00037778166063635096,
      "Trade_Sell_PriceInUSD": 0.999863633865,
      "Trade_Sell_Seller": "0xb2cc224c1c9fee385f8ad6a55b4d94e92359dc59",
      "Trade_Sender": "0x83d55acdc72027ed339d267eebaf9a41e47490d5",
      "Transaction_From": "0x9d18d8333b7a7ed78163191b8091aad2e165ea33",
      "Transaction_Hash": "0x7285a924b863988bcdaf88832705e2ccf0237664c76b510f7f1022bb5a379b8f",
      "Transaction_Index": 1,
      "Transaction_To": "0x83d55acdc72027ed339d267eebaf9a41e47490d5",
      "TransactionStatus_Success": "true",
      "Trade_Success": "true"
    },
]