//  S3 url: https://bitquery-blockchain-dataset.s3.us-east-1.amazonaws.com/ripple/nftoken_offers_tx/93154950_93155149.parquet
/* More files in S3
bitquery-blockchain-dataset/
└── ripple/
    └── nftoken_offers_tx/
        ├── 93154950_93155149.parquet
        └── ...
*/
// `operation` is the XRPL AffectedNodes change type: CreatedNode | ModifiedNode | DeletedNode.
// Join across ripple topics on tx_hash. Issued currency codes longer than 3 chars are
// 40-char hex, e.g. 4D656F7752500000000000000000000000000000 -> "MeowRP".
// Check which of nftoken_sell_offer / nftoken_buy_offer is set to tell the sides apart.
module.exports = [
  {
    "block":93154950,
    "tx_date":1735689600000,
    "tx_time":1735696002,
    "tx_index":28,
    "tx_hash":"7f324ed7f828836795e63165348ee228c0937d742d3a3cd922b1fe413d6d345a",
    "blockchain_id":12,
    "tx_sender":"rpsDkg6snyHVHQedHpKAVeKNcQifX2BYJb",
    "tx_type":"NFTokenCreateOffer",
    "operation":"CreatedNode",
    "from_account":"rpsDkg6snyHVHQedHpKAVeKNcQifX2BYJb",
    "destination_account":"rpx9JThQ2y37FaGeeJP7PXDUVEXY3PHZSC",
    "nftoken_sell_offer":"",
    "nftoken_buy_offer":"",
    "nftoken_currency_id":232111619,
    "nftoken_currency_address":"-",
    "nftoken_currency_name":"00082710C646CF60BFE2E41F6C48C6B4D355192FA90BE6B2B4E202C3051D2227",
    "nftoken_currency_symbol":"00082710C646CF60BFE2E41F6C48C6B4D355192FA90BE6B2B4E202C3051D2227",
    "nftoken_currency_token_type":"nft",
    "nftoken_value":1.0,
    "currency_id":413663,
    "currency_address":"-",
    "currency_name":"XRP Ledger Native Token",
    "currency_symbol":"XRP",
    "currency_token_type":"-",
    "value":1.0,
    "book_directory":"",
    "book_node":"",
    "expiration":789097592,
    "sequence":91911088,
    "prev_txn_id":"",
    "prev_ledger_seq":0,
    "flags":0
  }
];
