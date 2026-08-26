//  S3 url: https://bitquery-blockchain-dataset.s3.us-east-1.amazonaws.com/ripple/escrows_tx/93154950_93155149.parquet
/* More files in S3
bitquery-blockchain-dataset/
└── ripple/
    └── escrows_tx/
        ├── 93154950_93155149.parquet
        └── ...
*/
// `operation` is the XRPL AffectedNodes change type: CreatedNode | ModifiedNode | DeletedNode.
// Join across ripple topics on tx_hash. Issued currency codes longer than 3 chars are
// 40-char hex, e.g. 4D656F7752500000000000000000000000000000 -> "MeowRP".
// finish_after / cancel_after use the RIPPLE EPOCH (2000-01-01Z): add 946684800 for Unix time.
module.exports = [
  {
    "block":93155009,
    "tx_date":1735689600000,
    "tx_time":1735696231,
    "tx_index":7,
    "tx_hash":"39919a158b20c2971343b019d2a763d0b312b2d1cd8a8b8d7791f832d8662698",
    "blockchain_id":12,
    "tx_sender":"ray5AvP9mvrPApRRmUwkHYEghTR8Rycyc4",
    "tx_type":"EscrowCreate",
    "operation":"CreatedNode",
    "account":"ray5AvP9mvrPApRRmUwkHYEghTR8Rycyc4",
    "destination":"ray5AvP9mvrPApRRmUwkHYEghTR8Rycyc4",
    "currency_id":413663,
    "currency_address":"-",
    "currency_name":"XRP Ledger Native Token",
    "currency_symbol":"XRP",
    "currency_token_type":"-",
    "amount":2954.815764,
    "condition":"A0258020A74AE8D20788E45155E48A9431FEFC6CB4EF5492DEECD2E661129635CEE14E7881011F",
    "cancel_after":789011450,
    "finish_after":0,
    "source_tag":0,
    "destination_tag":0,
    "prev_txn_id":"",
    "prev_ledger_seq":0,
    "flags":0
  }
];
