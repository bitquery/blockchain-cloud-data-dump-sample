// https://bitquery-blockchain-dataset.s3.us-east-1.amazonaws.com/bsc/dex_trades/123753184_123753233.parquet
// more files in
//   bitquery-blockchain-dataset/
// ├── bsc/
// │   ├── dex_trades/
// │   │   └── 123753184_123753233.parquet
// files are named <start_block>_<end_block>.parquet; 50 blocks per file, sorted ascending
// BNB Smart Chain: one row per swap, with both sides, pool and protocol, fees, transaction details and a USD value where a price exists. Coverage from September 2020. Same 54 columns as ethereum_dex_trades; see that table for the column descriptions.
// Trade_Buy_Amount and Trade_Sell_Amount are decimal strings; casting to float loses precision.

module.exports = [
    {
      "Block_Date": 1790208000000,
      "Block_Number": 123753184,
      "Block_Time": 1790231400,
      "Fee_SenderFee": "0.000010037250000000",
      "Trade_Buy_Amount": "13587.421400000000001613",
      "Trade_Buy_AmountInUSD": 816.229641597198,
      "Trade_Buy_Buyer": "0xa90105231a00a4d8047347be65b3f134b3706250",
      "Trade_Buy_Currency_Decimals": 18,
      "Trade_Buy_Currency_Fungible": "true",
      "Trade_Buy_Currency_HasURI": "false",
      "Trade_Buy_Currency_Name": "Yei Finance",
      "Trade_Buy_Currency_ProtocolName": "erc20",
      "Trade_Buy_Currency_SmartContract": "0x81d3a238b02827f62b9f390f947d36d4a5bf89d2",
      "Trade_Buy_Currency_Symbol": "CLO",
      "Trade_Buy_Ids": [],
      "Trade_Buy_OrderId": "",
      "Trade_Buy_Price": 0.06009126122543686,
      "Trade_Buy_PriceInUSD": 0.06007244624040276,
      "Trade_Buy_Seller": "0xa0ffb9c1ce1fe56963b0321b32e7a0302114058b",
      "Trade_Dex_Delegated": "false",
      "Trade_Dex_OwnerAddress": "0x",
      "Trade_Dex_Pair_Decimals": 0,
      "Trade_Dex_Pair_Name": "",
      "Trade_Dex_Pair_SmartContract": "0x",
      "Trade_Dex_Pair_Symbol": "",
      "Trade_Dex_ProtocolFamily": "PancakeSwapInfinity",
      "Trade_Dex_ProtocolName": "pancakeswap_infinity",
      "Trade_Dex_ProtocolVersion": "1",
      "Trade_Dex_SmartContract": "0xa0ffb9c1ce1fe56963b0321b32e7a0302114058b",
      "Trade_Fees": "[[\"1.345154718600000000\", 0.0808067345181226, [18, \"Yei Finance\", \"erc20\", \"81d3a238b02827f62b9f390f947d36d4a5bf89d2\", \"CLO\"], \"0xa90105231a00a4d8047347be65b3f134b3706250\", \"0xa0ffb9c1ce1fe56963b0321b32e7a0302114058b\"]]",
      "Trade_Index": 0,
      "Trade_PoolId": "0x8d23f1230c18b8a6e2c7fd5f74fb5b11e3c023018438328022278fd8cd015263",
      "Trade_Sell_Amount": "816.485288727490895820",
      "Trade_Sell_AmountInUSD": 816.229641597198,
      "Trade_Sell_Buyer": "0xa0ffb9c1ce1fe56963b0321b32e7a0302114058b",
      "Trade_Sell_Currency_Decimals": 18,
      "Trade_Sell_Currency_Fungible": "true",
      "Trade_Sell_Currency_HasURI": "false",
      "Trade_Sell_Currency_Name": "Tether USD",
      "Trade_Sell_Currency_ProtocolName": "erc20",
      "Trade_Sell_Currency_SmartContract": "0x55d398326f99059ff775485246999027b3197955",
      "Trade_Sell_Currency_Symbol": "USDT",
      "Trade_Sell_Ids": [],
      "Trade_Sell_OrderId": "",
      "Trade_Sell_Price": 16.64135482609402,
      "Trade_Sell_PriceInUSD": 0.999686893158,
      "Trade_Sell_Seller": "0xa90105231a00a4d8047347be65b3f134b3706250",
      "Trade_Sender": "0xa90105231a00a4d8047347be65b3f134b3706250",
      "Transaction_From": "0x3ec8541c7751b672bc02cba28149e99fe1499e28",
      "Transaction_Hash": "0xd8143a43f3db01c3eed4954263bc34fef55acf1f1632370e032c1f7dc6e84532",
      "Transaction_Index": 1,
      "Transaction_To": "0xa90105231a00a4d8047347be65b3f134b3706250",
      "TransactionStatus_Success": "true",
      "Trade_Success": "true"
    }
]