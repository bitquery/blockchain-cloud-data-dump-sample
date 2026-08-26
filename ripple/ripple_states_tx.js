//  S3 url: https://bitquery-blockchain-dataset.s3.us-east-1.amazonaws.com/ripple/ripple_states_tx/93154950_93154999.parquet
/* More files in S3
bitquery-blockchain-dataset/
└── ripple/
    └── ripple_states_tx/
        ├── 93154950_93154999.parquet
        └── ...
*/
// `operation` is the XRPL AffectedNodes change type: CreatedNode | ModifiedNode | DeletedNode.
// Join across ripple topics on tx_hash. Issued currency codes longer than 3 chars are
// 40-char hex, e.g. 4D656F7752500000000000000000000000000000 -> "MeowRP".
// Trust lines. `balance` is SIGNED from low_account's perspective:
// positive = low_account holds the asset, negative = high_account does.
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
    "low_account":"rffj3okJSkSAAqj3xMkado9vP2XujDyhwF",
    "high_account":"rJAiYjfMXqZYghNxr2A4v4UTupWjjCz3qk",
    "currency_id":254129793,
    "currency_address":"-",
    "currency_name":"4441593100000000000000000000000000000000",
    "currency_symbol":"4441593100000000000000000000000000000000",
    "currency_token_type":"issued",
    "balance":-482871.4640785797,
    "pre_balance":-518638.8190566717,
    "prev_txn_id":"53e27a1e8c067dfe76ddc43f00c91ba7ef29bc570d8f31b5f914c7500e248e9f",
    "prev_ledger_seq":93154949,
    "flags":16908288
  }
];
