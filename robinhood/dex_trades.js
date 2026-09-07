// https://bitquery-blockchain-dataset.s3.us-east-1.amazonaws.com/robinhood/dex_trades/56600000_56600049.parquet
/* More files in S3
bitquery-blockchain-dataset/
└── robinhood/
    ├── dex_trades/
    │   ├── 56600000_56600049.parquet
    │   └── ...
*/
// One row per DEX trade. Robinhood Chain is EVM; schema matches the other EVM chains.
// Trade_Buy_Amount / Trade_Sell_Amount are decimal STRINGS -- casting to float loses precision.
// Trade_Fees is a JSON array of [Amount, AmountInUSD, [Currency...], Payer, Recipient].
// Coins traded here include tokenized equities (e.g. NVDA) alongside ordinary ERC-20s.
[
  {
    "Block_Date": 1788739200000,
    "Block_Number": 56600000,
    "Block_Time": 1788760487,
    "Fee_SenderFee": "0.000156478565088000",
    "Trade_Buy_Amount": "0.109165437001276765",
    "Trade_Buy_AmountInUSD": 25.31984,
    "Trade_Buy_Buyer": "0xd4eb21209c4d6093f80b5b84f5c45cc093ea14a3",
    "Trade_Buy_Currency_Decimals": 18,
    "Trade_Buy_Currency_Fungible": "true",
    "Trade_Buy_Currency_HasURI": "false",
    "Trade_Buy_Currency_Name": "NVIDIA • Robinhood Token",
    "Trade_Buy_Currency_ProtocolName": "erc20",
    "Trade_Buy_Currency_SmartContract": "0xd0601ce157db5bdc3162bbac2a2c8af5320d9eec",
    "Trade_Buy_Currency_Symbol": "NVDA",
    "Trade_Buy_Ids": [],
    "Trade_Buy_OrderId": "",
    "Trade_Buy_Price": 231.78041232688022,
    "Trade_Buy_PriceInUSD": 231.70315188480666,
    "Trade_Buy_Seller": "0x65050a9b7e5075a2ba5ced7b1b64ee66262c40dc",
    "Trade_Dex_DelegatedTo": "0xd4eb21209c4d6093f80b5b84f5c45cc093ea14a3",
    "Trade_Dex_OwnerAddress": "0x1f7d7550b1b028f7571e69a784071f0205fd2efa",
    "Trade_Dex_Pair_Decimals": 0,
    "Trade_Dex_Pair_Name": "",
    "Trade_Dex_Pair_SmartContract": "0x0000000000000000000000000000000000000000",
    "Trade_Dex_Pair_Symbol": "",
    "Trade_Dex_ProtocolFamily": "Uniswap",
    "Trade_Dex_ProtocolName": "uniswap_v3",
    "Trade_Dex_ProtocolVersion": "3",
    "Trade_Dex_SmartContract": "0xd4eb21209c4d6093f80b5b84f5c45cc093ea14a3",
    "Trade_Fees": "[[\"0.000054582718500638\",0.01265992,[18,\"NVIDIA \\u2022 Robinhood Token\",\"erc20\",\"d0601ce157db5bdc3162bbac2a2c8af5320d9eec\",\"NVDA\"],\"0x65050a9b7e5075a2ba5ced7b1b64ee66262c40dc\",\"0xd4eb21209c4d6093f80b5b84f5c45cc093ea14a3\"]]",
    "Trade_Index": 0,
    "Trade_PriceAsymmetry": 0.0005109997597245968,
    "Trade_Sell_Amount": "25.302410",
    "Trade_Sell_AmountInUSD": 25.293976,
    "Trade_Sell_Buyer": "0x65050a9b7e5075a2ba5ced7b1b64ee66262c40dc",
    "Trade_Sell_Currency_Decimals": 6,
    "Trade_Sell_Currency_Fungible": "true",
    "Trade_Sell_Currency_HasURI": "false",
    "Trade_Sell_Currency_Name": "Global Dollar",
    "Trade_Sell_Currency_ProtocolName": "erc20",
    "Trade_Sell_Currency_SmartContract": "0x5fc5360d0400a0fd4f2af552add042d716f1d168",
    "Trade_Sell_Currency_Symbol": "USDG",
    "Trade_Sell_Ids": [],
    "Trade_Sell_OrderId": "",
    "Trade_Sell_Price": 0.004314428428014438,
    "Trade_Sell_PriceInUSD": 1.0006888465382966,
    "Trade_Sell_Seller": "0xd4eb21209c4d6093f80b5b84f5c45cc093ea14a3",
    "Trade_Sender": "0x65050a9b7e5075a2ba5ced7b1b64ee66262c40dc",
    "Transaction_From": "0x19c9fe830500760e07cdf20b5d816430487f01e2",
    "Transaction_Hash": "0x75698494ed5d53b274dd044d93caa44d130e9ac4bb409246bddf82b8a0ee4a04",
    "Transaction_Index": 2,
    "Transaction_To": "0x65050a9b7e5075a2ba5ced7b1b64ee66262c40dc",
    "TransactionStatus_Success": "true"
  }
]
