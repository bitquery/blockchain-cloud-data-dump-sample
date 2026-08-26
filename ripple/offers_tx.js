//  S3 url: https://bitquery-blockchain-dataset.s3.us-east-1.amazonaws.com/ripple/offers_tx/93154950_93154999.parquet
/* More files in S3
bitquery-blockchain-dataset/
└── ripple/
    └── offers_tx/
        ├── 93154950_93154999.parquet
        └── ...
*/
// `operation` is the XRPL AffectedNodes change type: CreatedNode | ModifiedNode | DeletedNode.
// Join across ripple topics on tx_hash. Issued currency codes longer than 3 chars are
// 40-char hex, e.g. 4D656F7752500000000000000000000000000000 -> "MeowRP".
// DEX offers. Compare pre_taker_* with taker_* to size a fill.
// DeletedNode rows keep the offer's final state, they are not zeroed.
module.exports = [
  {
    "block":93154950,
    "tx_date":1735689600000,
    "tx_time":1735696002,
    "tx_index":2,
    "tx_hash":"e218eb06a3b719a68b3bfd61bd66fa91c25c39545df07b8fc0246df3a51d07cb",
    "blockchain_id":12,
    "tx_sender":"rELS4xDgjp8ZfR6MQGfPVhB5Pn42pvYJKW",
    "tx_type":"OfferCreate",
    "operation":"CreatedNode",
    "account":"rELS4xDgjp8ZfR6MQGfPVhB5Pn42pvYJKW",
    "taker_gets_currency_id":6823129,
    "taker_gets_currency_address":"-",
    "taker_gets_currency_name":"ELS",
    "taker_gets_currency_symbol":"ELS",
    "taker_gets_currency_token_type":"issued",
    "taker_pays_currency_id":413663,
    "taker_pays_currency_address":"-",
    "taker_pays_currency_name":"XRP Ledger Native Token",
    "taker_pays_currency_symbol":"XRP",
    "taker_pays_currency_token_type":"-",
    "taker_gets_value":42394.4379862804,
    "taker_pays_value":50.0,
    "pre_taker_gets_value":0.0,
    "pre_taker_pays_value":0.0,
    "book_directory":"E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C7599580430A875D25B9A",
    "book_node":"",
    "expiration":789011442,
    "sequence":69198942,
    "prev_txn_id":"",
    "prev_ledger_seq":0,
    "flags":0
  }
];
