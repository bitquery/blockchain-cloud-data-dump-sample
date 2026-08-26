//  S3 url: https://bitquery-blockchain-dataset.s3.us-east-1.amazonaws.com/ripple/account_roots_tx/93154950_93154999.parquet
/* More files in S3
bitquery-blockchain-dataset/
└── ripple/
    └── account_roots_tx/
        ├── 93154950_93154999.parquet
        └── ...
*/
// `operation` is the XRPL AffectedNodes change type: CreatedNode | ModifiedNode | DeletedNode.
// Join across ripple topics on tx_hash. Issued currency codes longer than 3 chars are
// 40-char hex, e.g. 4D656F7752500000000000000000000000000000 -> "MeowRP".
// balance / prev_balance are STRINGS in DROPS -- divide by 1,000,000 for XRP.
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
    "account":"rJAiYjfMXqZYghNxr2A4v4UTupWjjCz3qk",
    "prev_balance":"135000703",
    "balance":"145000703",
    "domain":"",
    "owner_count":1,
    "transfer_rate":0,
    "sequence":0,
    "prev_txn_id":"53e27a1e8c067dfe76ddc43f00c91ba7ef29bc570d8f31b5f914c7500e248e9f",
    "prev_ledger_seq":93154949,
    "flags":26214400
  }
];
