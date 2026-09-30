// https://bitquery-blockchain-dataset.s3.us-east-1.amazonaws.com/ethereum/dex_trades/26047176_26047225.parquet
// more files in
//   bitquery-blockchain-dataset/
// ├── ethereum/
// │   ├── dex_trades/
// │   │   └── 26047176_26047225.parquet
// files are named <start_block>_<end_block>.parquet; 50 blocks per file, sorted ascending
// Ethereum: one row per swap, with both sides, pool and protocol, fees, transaction details and a USD value where a price exists. Coverage from July 2016.
// Trade_Buy_Amount and Trade_Sell_Amount are decimal strings; casting to float loses precision.

module.exports = [
    {
      "Block_Date": 1790208000000,
      "Block_Number": 26047176,
      "Block_Time": 1790231411,
      "Fee_SenderFee": "0.000036282668897055",
      "Trade_Buy_Amount": "2.417829464000000000",
      "Trade_Buy_AmountInUSD": 6399.256363127859,
      "Trade_Buy_Buyer": "0x000000000004444c5dc75cb358380d2e3de08a90",
      "Trade_Buy_Currency_Decimals": 18,
      "Trade_Buy_Currency_Fungible": "true",
      "Trade_Buy_Currency_HasURI": "false",
      "Trade_Buy_Currency_Name": "Wrapped Ether",
      "Trade_Buy_Currency_ProtocolName": "erc20_deposable",
      "Trade_Buy_Currency_SmartContract": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
      "Trade_Buy_Currency_Symbol": "WETH",
      "Trade_Buy_Ids": [],
      "Trade_Buy_OrderId": "",
      "Trade_Buy_Price": 2647.0556419689656,
      "Trade_Buy_PriceInUSD": 2646.6946732219403,
      "Trade_Buy_Seller": "0x0000000aa232009084bd71a5797d089aa4edfad4",
      "Trade_Dex_Delegated": "false",
      "Trade_Dex_OwnerAddress": "0x",
      "Trade_Dex_Pair_Decimals": 0,
      "Trade_Dex_Pair_Name": "",
      "Trade_Dex_Pair_SmartContract": "0x",
      "Trade_Dex_Pair_Symbol": "",
      "Trade_Dex_ProtocolFamily": "Uniswap",
      "Trade_Dex_ProtocolName": "uniswap_v4",
      "Trade_Dex_ProtocolVersion": "4",
      "Trade_Dex_SmartContract": "0x000000000004444c5dc75cb358380d2e3de08a90",
      "Trade_Fees": "[]",
      "Trade_Index": 0,
      "Trade_PoolId": "0xe500210c7ea6bfd9f69dce044b09ef384ec2b34832f132baec3b418208e3a657",
      "Trade_Sell_Amount": "6400.129124",
      "Trade_Sell_AmountInUSD": 6399.256363127859,
      "Trade_Sell_Buyer": "0x0000000aa232009084bd71a5797d089aa4edfad4",
      "Trade_Sell_Currency_Decimals": 6,
      "Trade_Sell_Currency_Fungible": "true",
      "Trade_Sell_Currency_HasURI": "false",
      "Trade_Sell_Currency_Name": "USD Coin",
      "Trade_Sell_Currency_ProtocolName": "erc20",
      "Trade_Sell_Currency_SmartContract": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
      "Trade_Sell_Currency_Symbol": "USDC",
      "Trade_Sell_Ids": [],
      "Trade_Sell_OrderId": "",
      "Trade_Sell_Price": 0.0003777782318380613,
      "Trade_Sell_PriceInUSD": 0.999863633865,
      "Trade_Sell_Seller": "0x000000000004444c5dc75cb358380d2e3de08a90",
      "Trade_Sender": "0x0000000aa232009084bd71a5797d089aa4edfad4",
      "Transaction_From": "0xc917c3fa468f2c4b9c84c72caa46420eb9825249",
      "Transaction_Hash": "0x9f27279609e3447b50749a5d3cd209a800f79d8ce8f8b518ecb1679084dd9c33",
      "Transaction_Index": 0,
      "Transaction_To": "0x0000000aa232009084bd71a5797d089aa4edfad4",
      "TransactionStatus_Success": "true",
      "Trade_Success": "true"
    }
]