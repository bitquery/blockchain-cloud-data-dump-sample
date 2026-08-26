//  S3 url: https://bitquery-blockchain-dataset.s3.us-east-1.amazonaws.com/ripple/transfers_tx/93155850_93155899.parquet
/* More files in S3
bitquery-blockchain-dataset/
└── ripple/
    └── transfers_tx/
        ├── 93155750_93155799.parquet
        ├── 93155800_93155849.parquet
        ├── 93155850_93155899.parquet
        ├── 93155900_93155949.parquet
        └── 93155950_93155999.parquet
*/
// block = XRP Ledger ledger index. One transaction produces several rows;
// the `direction` column classifies each: payment | fee | trade | nft_trade | mint | other.
// Issued-currency symbols longer than 3 chars are 40-char hex, e.g.
// 4D656F7752500000000000000000000000000000 -> "MeowRP"
module.exports = [
  {
    "block":93155850,
    "currency_from_address":"-",
    "currency_from_id":253069357,
    "currency_from_name":"4D656F7752500000000000000000000000000000",
    "currency_from_symbol":"4D656F7752500000000000000000000000000000",
    "currency_from_tokenType":"issued",
    "currency_to_address":"-",
    "currency_to_id":253069357,
    "currency_to_name":"4D656F7752500000000000000000000000000000",
    "currency_to_symbol":"4D656F7752500000000000000000000000000000",
    "currency_to_tokenType":"issued",
    "tx_date":1735689600000,
    "sender":"rMPEuuvWf6MvCu77NpUF37GUkdbwr9Nhhk",
    "receiver":"",
    "direction":"other",
    "tx_hash":"632eb653dd972bf7820e0b6776095d5a88272017bd48edf02efd7e7b577d9365",
    "tx_hash_bin":"632eb653dd972bf7820e0b6776095d5a88272017bd48edf02efd7e7b577d9365",
    "tx_index":0,
    "tx_sender_raw":"rP74BHccLyf2TCGZrEr1hfyUVCnciFGri2",
    "tx_type_raw":"Payment",
    "transaction_type":"Payment",
    "transaction_sender":"rP74BHccLyf2TCGZrEr1hfyUVCnciFGri2",
    "tx_time":1735699511,
    "amount_from":0.0000000006,
    "amount_to":0.0000000006
  }
];
