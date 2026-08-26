//  S3 url: https://bitquery-blockchain-dataset.s3.us-east-1.amazonaws.com/ripple/balances/93154950_93154999.parquet
/* More files in S3
bitquery-blockchain-dataset/
└── ripple/
    └── balances/
        ├── 93154950_93154999.parquet
        └── ...
*/
// `operation` is the XRPL AffectedNodes change type: CreatedNode | ModifiedNode | DeletedNode.
// Join across ripple topics on tx_hash. Issued currency codes longer than 3 chars are
// 40-char hex, e.g. 4D656F7752500000000000000000000000000000 -> "MeowRP".
// balance / prev_balance are floats in XRP (contrast account_roots_tx, which uses drops).
module.exports = [
  {
    "block":93154950,
    "tx_date":1735689600000,
    "tx_time":1735696002,
    "tx_index":0,
    "tx_hash":"7faf94992ab79ff808bce0c59ac116e926475dd1c23dba3ffd929bff35b98884",
    "blockchain_id":12,
    "tx_sender":"rDS1L3jEEGfveAW9pF1oH49eTz7Jn4fYeU",
    "tx_type":"Payment",
    "operation":"ModifiedNode",
    "account":"rDS1L3jEEGfveAW9pF1oH49eTz7Jn4fYeU",
    "currency_id":413663,
    "currency_address":"-",
    "currency_name":"XRP Ledger Native Token",
    "currency_symbol":"XRP",
    "currency_token_type":"-",
    "issuer":"",
    "prev_balance":98.761859,
    "balance":88.761847,
    "prev_ledger_seq":93154945,
    "flags":0
  }
];
