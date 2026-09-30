// https://bitquery-blockchain-dataset.s3.us-east-1.amazonaws.com/arbitrum/dex_trades/508434929_508434978.parquet
// more files in
//   bitquery-blockchain-dataset/
// ├── arbitrum/
// │   ├── dex_trades/
// │   │   └── 508434929_508434978.parquet
// files are named <start_block>_<end_block>.parquet; 50 blocks per file, sorted ascending
// Arbitrum: one row per swap, with both sides, pool and protocol, fees, transaction details and a USD value where a price exists. Coverage from August 2022. Same 54 columns as ethereum_dex_trades; see that table for the column descriptions.
// Trade_Buy_Amount and Trade_Sell_Amount are decimal strings; casting to float loses precision.

module.exports = [
    {
      "Block_Date": 1790208000000,
      "Block_Number": 508434929,
      "Block_Time": 1790231400,
      "Fee_SenderFee": "0.000003390460000000",
      "Trade_Buy_Amount": "10.807389505664540672",
      "Trade_Buy_AmountInUSD": 26.115049673947038,
      "Trade_Buy_Buyer": "0x042691f78269ba3d6325c945044239758aecc275",
      "Trade_Buy_Currency_Decimals": 18,
      "Trade_Buy_Currency_Fungible": "true",
      "Trade_Buy_Currency_HasURI": "false",
      "Trade_Buy_Currency_Name": "Pendle",
      "Trade_Buy_Currency_ProtocolName": "erc20",
      "Trade_Buy_Currency_SmartContract": "0x0c880f6761f1af8d9aa9c466984b80dab9a8c9e8",
      "Trade_Buy_Currency_Symbol": "PENDLE",
      "Trade_Buy_Ids": [],
      "Trade_Buy_OrderId": "",
      "Trade_Buy_Price": 0.0009136756629352909,
      "Trade_Buy_PriceInUSD": 2.4164068168598165,
      "Trade_Buy_Seller": "0xe6b82c6eccdfb2d6bc55bb11a61bae5ab2c3f807",
      "Trade_Dex_Delegated": "false",
      "Trade_Dex_OwnerAddress": "0x0bfbcf9fa4f9c56b0f40a671ad40e0805a091865",
      "Trade_Dex_Pair_Decimals": 0,
      "Trade_Dex_Pair_Name": "",
      "Trade_Dex_Pair_SmartContract": "0x",
      "Trade_Dex_Pair_Symbol": "",
      "Trade_Dex_ProtocolFamily": "PancakeSwap",
      "Trade_Dex_ProtocolName": "pancake_swap_v3",
      "Trade_Dex_ProtocolVersion": "3",
      "Trade_Dex_SmartContract": "0x042691f78269ba3d6325c945044239758aecc275",
      "Trade_Fees": "[[\"0.005403694752832270\", 0.01305752483697352, [18, \"Pendle\", \"erc20\", \"0c880f6761f1af8d9aa9c466984b80dab9a8c9e8\", \"PENDLE\"], \"0xe6b82c6eccdfb2d6bc55bb11a61bae5ab2c3f807\", \"0x042691f78269ba3d6325c945044239758aecc275\"]]",
      "Trade_Index": 0,
      "Trade_PoolId": "",
      "Trade_Sell_Amount": "0.009874448771187954",
      "Trade_Sell_AmountInUSD": 26.115049673947038,
      "Trade_Sell_Buyer": "0xe6b82c6eccdfb2d6bc55bb11a61bae5ab2c3f807",
      "Trade_Sell_Currency_Decimals": 18,
      "Trade_Sell_Currency_Fungible": "true",
      "Trade_Sell_Currency_HasURI": "false",
      "Trade_Sell_Currency_Name": "Wrapped Ether",
      "Trade_Sell_Currency_ProtocolName": "erc20",
      "Trade_Sell_Currency_SmartContract": "0x82af49447d8a07e3bd95bd0d56f35241523fbab1",
      "Trade_Sell_Currency_Symbol": "WETH",
      "Trade_Sell_Ids": [],
      "Trade_Sell_OrderId": "",
      "Trade_Sell_Price": 1094.4802850361384,
      "Trade_Sell_PriceInUSD": 2644.70962168,
      "Trade_Sell_Seller": "0x042691f78269ba3d6325c945044239758aecc275",
      "Trade_Sender": "0xe6b82c6eccdfb2d6bc55bb11a61bae5ab2c3f807",
      "Transaction_From": "0xc38c0a8bb0994895eef0e367657f4e07ab1ed0ea",
      "Transaction_Hash": "0x3df074ea5a71f6c476c8f38b344249a75080eb3c3e03f21bdd33702f1f602261",
      "Transaction_Index": 1,
      "Transaction_To": "0xe6b82c6eccdfb2d6bc55bb11a61bae5ab2c3f807",
      "TransactionStatus_Success": "true",
      "Trade_Success": "true"
    },
]