// https://bitquery-blockchain-dataset.s3.us-east-1.amazonaws.com/optimism/dex_trades/153654213_153654262.parquet
// more files in
//   bitquery-blockchain-dataset/
// ├── optimism/
// │   ├── dex_trades/
// │   │   └── 153654213_153654262.parquet
// files are named <start_block>_<end_block>.parquet; 50 blocks per file, sorted ascending
// Optimism: one row per swap, with both sides, pool and protocol, fees, transaction details and a USD value where a price exists. Coverage from June 2023. Same 54 columns as ethereum_dex_trades; see that table for the column descriptions.
// Trade_Buy_Amount and Trade_Sell_Amount are decimal strings; casting to float loses precision.

module.exports = [
    {
      "Block_Date": 1782864000000,
      "Block_Number": 153654213,
      "Block_Time": 1782887403,
      "Fee_SenderFee": "0.000000596097945348",
      "Trade_Buy_Amount": "156.873582",
      "Trade_Buy_AmountInUSD": 156.81051825889918,
      "Trade_Buy_Buyer": "0x478946bcd4a5a22b316470f5486fafb928c0ba25",
      "Trade_Buy_Currency_Decimals": 6,
      "Trade_Buy_Currency_Fungible": "true",
      "Trade_Buy_Currency_HasURI": "false",
      "Trade_Buy_Currency_Name": "USD Coin",
      "Trade_Buy_Currency_ProtocolName": "erc20",
      "Trade_Buy_Currency_SmartContract": "0x0b2c639c533813f4aa9d7837caf62653d097ff85",
      "Trade_Buy_Currency_Symbol": "USDC",
      "Trade_Buy_Ids": [],
      "Trade_Buy_OrderId": "",
      "Trade_Buy_Price": 0.0006374758760804254,
      "Trade_Buy_PriceInUSD": 0.9995979964229998,
      "Trade_Buy_Seller": "0x98374401eab7eca7c5b8243a834c0dc6b4dd4c69",
      "Trade_Dex_Delegated": "true",
      "Trade_Dex_OwnerAddress": "0xcc0bddb707055e04e497ab22a59c2af4391cd12f",
      "Trade_Dex_Pair_Decimals": 0,
      "Trade_Dex_Pair_Name": "",
      "Trade_Dex_Pair_SmartContract": "0x",
      "Trade_Dex_Pair_Symbol": "",
      "Trade_Dex_ProtocolFamily": "Uniswap",
      "Trade_Dex_ProtocolName": "uniswap_v3",
      "Trade_Dex_ProtocolVersion": "3",
      "Trade_Dex_SmartContract": "0x478946bcd4a5a22b316470f5486fafb928c0ba25",
      "Trade_Fees": "[]",
      "Trade_Index": 0,
      "Trade_PoolId": "",
      "Trade_Sell_Amount": "0.100003124119324445",
      "Trade_Sell_AmountInUSD": 156.81051825889918,
      "Trade_Sell_Buyer": "0x98374401eab7eca7c5b8243a834c0dc6b4dd4c69",
      "Trade_Sell_Currency_Decimals": 18,
      "Trade_Sell_Currency_Fungible": "true",
      "Trade_Sell_Currency_HasURI": "false",
      "Trade_Sell_Currency_Name": "Wrapped Ether",
      "Trade_Sell_Currency_ProtocolName": "erc20",
      "Trade_Sell_Currency_SmartContract": "0x4200000000000000000000000000000000000006",
      "Trade_Sell_Currency_Symbol": "WETH",
      "Trade_Sell_Ids": [],
      "Trade_Sell_OrderId": "",
      "Trade_Sell_Price": 1568.6868123521551,
      "Trade_Sell_PriceInUSD": 1568.0561946423968,
      "Trade_Sell_Seller": "0x478946bcd4a5a22b316470f5486fafb928c0ba25",
      "Trade_Sender": "0x98374401eab7eca7c5b8243a834c0dc6b4dd4c69",
      "Transaction_From": "0x1b824b7309884440ab1cdee08695abfc939b888a",
      "Transaction_Hash": "0x3e5d99b342e5c1b4e9b3db88e585d8ad65721e7d0e5e6d2678c7c9702ee4fd3c",
      "Transaction_Index": 1,
      "Transaction_To": "0x98374401eab7eca7c5b8243a834c0dc6b4dd4c69",
      "TransactionStatus_Success": "true",
      "Trade_Success": "true"
    }
]