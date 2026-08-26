//  S3 url: https://bitquery-blockchain-dataset.s3.us-east-1.amazonaws.com/ripple/payments_tx/93154950_93154999.parquet
/* More files in S3
bitquery-blockchain-dataset/
└── ripple/
    └── payments_tx/
        ├── 93154950_93154999.parquet
        └── ...
*/
// `operation` is the XRPL AffectedNodes change type: CreatedNode | ModifiedNode | DeletedNode.
// Join across ripple topics on tx_hash. Issued currency codes longer than 3 chars are
// 40-char hex, e.g. 4D656F7752500000000000000000000000000000 -> "MeowRP".
// Use delivered_value, NOT amount_value: amount_value is a requested ceiling.
// XRPL partial payments make amount_value overstate native XRP volume ~27,000,000x.
module.exports = [
  {
    "block":93154950,
    "tx_date":1735689600000,
    "tx_time":1735696002,
    "tx_index":0,
    "tx_hash":"7faf94992ab79ff808bce0c59ac116e926475dd1c23dba3ffd929bff35b98884",
    "blockchain_id":12,
    "sender":"rDS1L3jEEGfveAW9pF1oH49eTz7Jn4fYeU",
    "receiver":"rDS1L3jEEGfveAW9pF1oH49eTz7Jn4fYeU",
    "amount_currency_id":254129793,
    "amount_currency_address":"-",
    "amount_currency_name":"4441593100000000000000000000000000000000",
    "amount_currency_symbol":"4441593100000000000000000000000000000000",
    "amount_currency_token_type":"issued",
    "amount_value":1000000.0,
    "amount_issuer":"rffj3okJSkSAAqj3xMkado9vP2XujDyhwF",
    "delivered_currency_id":254129793,
    "delivered_currency_address":"-",
    "delivered_currency_name":"4441593100000000000000000000000000000000",
    "delivered_currency_symbol":"4441593100000000000000000000000000000000",
    "delivered_currency_token_type":"issued",
    "delivered_value":35767.354978092,
    "delivered_issuer":"rffj3okJSkSAAqj3xMkado9vP2XujDyhwF",
    "send_max_currency_id":413663,
    "send_max_currency_address":"-",
    "send_max_currency_name":"XRP Ledger Native Token",
    "send_max_currency_symbol":"XRP",
    "send_max_currency_token_type":"-",
    "send_max_value":10.0,
    "send_max_issuer":"",
    "deliver_min_currency_id":254129793,
    "deliver_min_currency_address":"-",
    "deliver_min_currency_name":"4441593100000000000000000000000000000000",
    "deliver_min_currency_symbol":"4441593100000000000000000000000000000000",
    "deliver_min_currency_token_type":"issued",
    "deliver_min_value":24797.16619491,
    "deliver_min_issuer":"rffj3okJSkSAAqj3xMkado9vP2XujDyhwF",
    "tag":0,
    "invoice":"",
    "flags":131072,
    "partial":1
  }
];
