// https://bitquery-blockchain-dataset.s3.us-east-1.amazonaws.com/matic/dex_trades/94364043_94364092.parquet
// more files in
//   bitquery-blockchain-dataset/
// ├── matic/
// │   ├── dex_trades/
// │   │   └── 94364043_94364092.parquet
// files are named <start_block>_<end_block>.parquet; 50 blocks per file, sorted ascending
// Polygon: one row per swap, with both sides, pool and protocol, fees, transaction details and a USD value where a price exists. Coverage from August 2020. Same 54 columns as ethereum_dex_trades; see that table for the column descriptions.
// Trade_Buy_Amount and Trade_Sell_Amount are decimal strings; casting to float loses precision.

module.exports = [
    {
      "Block_Date": 1790208000000,
      "Block_Number": 94364043,
      "Block_Time": 1790231400,
      "Fee_SenderFee": "0.471515337437745568",
      "Trade_Buy_Amount": "0.060000000",
      "Trade_Buy_AmountInUSD": 0.0668028708868137,
      "Trade_Buy_Buyer": "0x882df4b0fb50a229c3b4124eb18c759911485bfb",
      "Trade_Buy_Currency_Decimals": 9,
      "Trade_Buy_Currency_Fungible": "true",
      "Trade_Buy_Currency_HasURI": "false",
      "Trade_Buy_Currency_Name": "Longinus",
      "Trade_Buy_Currency_ProtocolName": "erc20",
      "Trade_Buy_Currency_SmartContract": "0xeb51d9a39ad5eef215dc0bf39a8821ff804a0f01",
      "Trade_Buy_Currency_Symbol": "LGNS",
      "Trade_Buy_Ids": [],
      "Trade_Buy_OrderId": "",
      "Trade_Buy_Price": 1.1133113691088041,
      "Trade_Buy_PriceInUSD": 1.1133811814468952,
      "Trade_Buy_Seller": "0xa304823c775d13fc851379c75e2b6f300e223234",
      "Trade_Dex_Delegated": "false",
      "Trade_Dex_OwnerAddress": "0x5757371414417b8c6caad45baef941abc7d3ab32",
      "Trade_Dex_Pair_Decimals": 18,
      "Trade_Dex_Pair_Name": "Uniswap V2",
      "Trade_Dex_Pair_SmartContract": "0x882df4b0fb50a229c3b4124eb18c759911485bfb",
      "Trade_Dex_Pair_Symbol": "UNI-V2",
      "Trade_Dex_ProtocolFamily": "Uniswap",
      "Trade_Dex_ProtocolName": "uniswap_v2",
      "Trade_Dex_ProtocolVersion": "2",
      "Trade_Dex_SmartContract": "0x882df4b0fb50a229c3b4124eb18c759911485bfb",
      "Trade_Fees": "[[\"0.000180000\", 0.00020040861266044116, [9, \"Longinus\", \"erc20\", \"eb51d9a39ad5eef215dc0bf39a8821ff804a0f01\", \"LGNS\"], \"0xa5e0829caced8ffdd4de3c43696c57f7d7a678ff\", \"0x882df4b0fb50a229c3b4124eb18c759911485bfb\"]]",
      "Trade_Index": 0,
      "Trade_PoolId": "",
      "Trade_Sell_Amount": "0.066798682146528240",
      "Trade_Sell_AmountInUSD": 0.0668028708868137,
      "Trade_Sell_Buyer": "0xa304823c775d13fc851379c75e2b6f300e223234",
      "Trade_Sell_Currency_Decimals": 18,
      "Trade_Sell_Currency_Fungible": "true",
      "Trade_Sell_Currency_HasURI": "false",
      "Trade_Sell_Currency_Name": "(PoS) Dai Stablecoin",
      "Trade_Sell_Currency_ProtocolName": "erc20",
      "Trade_Sell_Currency_SmartContract": "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063",
      "Trade_Sell_Currency_Symbol": "DAI",
      "Trade_Sell_Ids": [],
      "Trade_Sell_OrderId": "",
      "Trade_Sell_Price": 0.8982213132346714,
      "Trade_Sell_PriceInUSD": 1.00006270693,
      "Trade_Sell_Seller": "0x882df4b0fb50a229c3b4124eb18c759911485bfb",
      "Trade_Sender": "0xa5e0829caced8ffdd4de3c43696c57f7d7a678ff",
      "Transaction_From": "0xdb6bd3a941c3b32acd53d6c5edba1226e629a8bb",
      "Transaction_Hash": "0x16c31413d85530ad62ea3bbf57d8e0fdf01a374163e7c025cb9b770f644817c1",
      "Transaction_Index": 14,
      "Transaction_To": "0xa5e0829caced8ffdd4de3c43696c57f7d7a678ff",
      "TransactionStatus_Success": "true",
      "Trade_Success": "true"
    }
]