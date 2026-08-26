//  S3 url: https://bitquery-blockchain-dataset.s3.us-east-1.amazonaws.com/ripple/checks_tx/93154950_93155149.parquet
/* More files in S3
bitquery-blockchain-dataset/
└── ripple/
    └── checks_tx/
        ├── 93154950_93155149.parquet
        └── ...
*/
// `operation` is the XRPL AffectedNodes change type: CreatedNode | ModifiedNode | DeletedNode.
// Join across ripple topics on tx_hash. Issued currency codes longer than 3 chars are
// 40-char hex, e.g. 4D656F7752500000000000000000000000000000 -> "MeowRP".
// Checks are rare: this 200-ledger file contains a single row.
module.exports = [
  {
    "block":93155055,
    "tx_date":1735689600000,
    "tx_time":1735696412,
    "tx_index":0,
    "tx_hash":"726f30f8216753a99268dcda3d945257473ed1cf54b52c741d26b56c7d92ee82",
    "blockchain_id":12,
    "tx_sender":"rfnaakrqCzTPwthqtubCJ7m3iQ7Kcd7x3k",
    "tx_type":"CheckCreate",
    "operation":"CreatedNode",
    "account":"rfnaakrqCzTPwthqtubCJ7m3iQ7Kcd7x3k",
    "destination":"rnBKit9uv2L3pH8HQwPKpDJhhwACKct3ro",
    "currency_id":413663,
    "currency_address":"-",
    "currency_name":"XRP Ledger Native Token",
    "currency_symbol":"XRP",
    "currency_token_type":"-",
    "send_max":2100.0,
    "expiration":789371604,
    "invoice_id":"",
    "source_tag":0,
    "destination_tag":59372489,
    "sequence":92885605,
    "prev_txn_id":"",
    "prev_ledger_seq":0,
    "flags":0
  }
];
