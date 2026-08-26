//  S3 url: https://bitquery-blockchain-dataset.s3.us-east-1.amazonaws.com/ripple/transactions_tx/93154950_93154999.parquet
/* More files in S3
bitquery-blockchain-dataset/
└── ripple/
    └── transactions_tx/
        ├── 93154950_93154999.parquet
        └── ...
*/
// `operation` is the XRPL AffectedNodes change type: CreatedNode | ModifiedNode | DeletedNode.
// Join across ripple topics on tx_hash. Issued currency codes longer than 3 chars are
// 40-char hex, e.g. 4D656F7752500000000000000000000000000000 -> "MeowRP".
// Includes FAILED transactions: filter success = 1 (result = 'tesSUCCESS').
// `fee` is a STRING in DROPS -- divide by 1,000,000 for XRP.
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
    "fee":"12",
    "memos":"",
    "tx_signers":"",
    "source_tag":74920348,
    "account_txn_id":"",
    "sequence":91553291,
    "last_ledger_sequence":93155949,
    "flags":131072,
    "result":"tesSUCCESS",
    "success":1
  }
];
