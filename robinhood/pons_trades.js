// https://bitquery-blockchain-dataset.s3.us-east-1.amazonaws.com/datashare/robinhood/pons/trades/68914550_68914599.parquet
/* More files in S3
bitquery-blockchain-dataset/
└── datashare/robinhood/pons/trades/
    ├── 68914550_68914599.parquet
    └── ...
*/
// One row per Pons bonding-curve buy or sell. Pons is Robinhood Chain's bonding-curve
// launchpad: each token trades against its own curve contract until it graduates to Uniswap.
// Same schema as robinhood/dex_trades — this file is that table pre-filtered to Trade_Dex_ProtocolName = 'pons_v2'.
// Trade_Buy_Amount / Trade_Sell_Amount are decimal STRINGS -- casting to float loses precision.
// Trade_Fees is a JSON array of [Amount, AmountInUSD, [Currency...], Payer, Recipient].

module.exports = {
  "Block_Date": 1789948800000,
  "Block_Number": 68914550,
  "Block_Time": 1790005504,
  "Fee_SenderFee": "14357392224000",
  "Trade_Buy_Amount": "1188779093198062571595763",
  "Trade_Buy_AmountInUSD": 40.51437759399414,
  "Trade_Buy_Buyer": "0x65050a9b7e5075a2ba5ced7b1b64ee66262c40dc",
  "Trade_Buy_Currency_Decimals": 18,
  "Trade_Buy_Currency_Fungible": "true",
  "Trade_Buy_Currency_HasURI": "false",
  "Trade_Buy_Currency_Name": "ShadowTX",
  "Trade_Buy_Currency_ProtocolName": "erc20",
  "Trade_Buy_Currency_SmartContract": "0xd4837f2f0259e9ba94242d47a6b66fac842d7a90",
  "Trade_Buy_Currency_Symbol": "SHADOWTX",
  "Trade_Buy_Ids": [],
  "Trade_Buy_OrderId": "",
  "Trade_Buy_Price": 0.0,
  "Trade_Buy_PriceInUSD": 0.0,
  "Trade_Buy_Seller": "0x82cdc863acd05ac35dc8c4a338ed0a85da699262",
  "Trade_Dex_DelegatedTo": "0x82cdc863acd05ac35dc8c4a338ed0a85da699262",
  "Trade_Dex_OwnerAddress": "0x7ed598bcef8bd9edd8c97a195c6d13f40801ec7e",
  "Trade_Dex_Pair_Decimals": 0,
  "Trade_Dex_Pair_Name": "",
  "Trade_Dex_Pair_SmartContract": "0x0000000000000000000000000000000000000000",
  "Trade_Dex_Pair_Symbol": "",
  "Trade_Dex_ProtocolFamily": "Pons",
  "Trade_Dex_ProtocolName": "pons_v2",
  "Trade_Dex_ProtocolVersion": "2",
  "Trade_Dex_SmartContract": "0x82cdc863acd05ac35dc8c4a338ed0a85da699262",
  "Trade_Fees": "[[150438241900673,0.4126592,[\"ETH\"],\"0x65050a9b7e5075a2ba5ced7b1b64ee66262c40dc\",\"0x\"],[150438241900673,0.4126592,[\"ETH\"],\"0x65050a9b7e5075a2ba5ced7b1b64ee66262c40dc\",\"0x\"]]",
  "Trade_Index": 0,
  "Trade_PriceAsymmetry": 0.0,
  "Trade_Sell_Amount": "14742947706266050",
  "Trade_Sell_AmountInUSD": 40.44060134887695,
  "Trade_Sell_Buyer": "0x82cdc863acd05ac35dc8c4a338ed0a85da699262",
  "Trade_Sell_Currency_Decimals": 18,
  "Trade_Sell_Currency_Fungible": "true",
  "Trade_Sell_Currency_HasURI": "false",
  "Trade_Sell_Currency_Name": "Ethereum",
  "Trade_Sell_Currency_ProtocolName": "",
  "Trade_Sell_Currency_SmartContract": "0x0000000000000000000000000000000000000000",
  "Trade_Sell_Currency_Symbol": "ETH",
  "Trade_Sell_Ids": [],
  "Trade_Sell_OrderId": "",
  "Trade_Sell_Price": 0.0,
  "Trade_Sell_PriceInUSD": 0.0,
  "Trade_Sell_Seller": "0x65050a9b7e5075a2ba5ced7b1b64ee66262c40dc",
  "Trade_Sender": "0x65050a9b7e5075a2ba5ced7b1b64ee66262c40dc",
  "Transaction_From": "0xd23c91f4d60a36775741c0b3be451646d7f1576a",
  "Transaction_Hash": "0x8cae974d20e0f553c044ab7c49b823b26886fd1837069ceb381592f9a7bcc480",
  "Transaction_Index": 4,
  "Transaction_To": "0x65050a9b7e5075a2ba5ced7b1b64ee66262c40dc",
  "TransactionStatus_Success": "true"
}
