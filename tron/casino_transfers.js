// https://bitquery-blockchain-dataset.s3.us-east-1.amazonaws.com/tron/casino_transfers/2026-09.parquet  (PLACEHOLDER: not uploaded yet)
/* More files in S3 under:
bitquery-blockchain-dataset/tron/casino_transfers/  (one Parquet file per calendar month, ZSTD)
*/
// One row per casino deposit or withdrawal (native coin, USDT, USDC). Casino = Bitquery hot-wallet labels.
// direction + wallet_role: deposit/deposit_address, deposit/hot_wallet, withdrawal/hot_wallet.
// amount is a decimal STRING; amount_usd is a float. Filter tokens by token_address, never by symbol.
// Sample: Roobet + Rollbit wallets, September 2026 run, rows from 30 Sep.
module.exports = [
  {
    "chain": "tron",
    "block_number": 86687407,
    "block_time": "2026-09-30 02:18:36",
    "tx_hash": "db8e86cad031cf6123234aba2be9c34317a9b17d904ceb53196ab65e81f756b7",
    "casino": "rollbit",
    "direction": "deposit",
    "wallet_role": "deposit_address",
    "from_address": "TXZo8z615csTXSmp1RubChsj1VMV29mX2F",
    "to_address": "TRHsBZ218wxeWCYPQHe18Bz7fyszJBitNH",
    "token_symbol": "USDT",
    "token_address": "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",
    "amount": "327.217548",
    "amount_usd": 327.22,
    "price_source": "stablecoin_1usd"
  },
  {
    "chain": "tron",
    "block_number": 86708111,
    "block_time": "2026-09-30 19:35:06",
    "tx_hash": "1137ee769f400abe0a6e54d46a5364c7fdd1f2ad3d4f683b579ee2044c1c1870",
    "casino": "rollbit",
    "direction": "deposit",
    "wallet_role": "deposit_address",
    "from_address": "TU4vEruvZwLLkSfV9bNw12EJTPvNr7Pvaa",
    "to_address": "TAzMk4TxfHSDjHXqeHWWWPnM2D3BZKeGyf",
    "token_symbol": "USDT",
    "token_address": "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",
    "amount": "32.000000",
    "amount_usd": 32.0,
    "price_source": "stablecoin_1usd"
  },
  {
    "chain": "tron",
    "block_number": 86687027,
    "block_time": "2026-09-30 01:59:36",
    "tx_hash": "4724692d09604dead7e2152c7be4cabc4fda48ba8250574cdd275a8c52fa9694",
    "casino": "roobet",
    "direction": "deposit",
    "wallet_role": "deposit_address",
    "from_address": "TXZ4ED9sevtE4EyR7tA7uRTsCTUgWQ2mu6",
    "to_address": "TK76ayaL5Afgeu9Mi2M5CDAZTwnztXXucJ",
    "token_symbol": "USDT",
    "token_address": "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",
    "amount": "450.000000",
    "amount_usd": 450.0,
    "price_source": "stablecoin_1usd"
  },
  {
    "chain": "tron",
    "block_number": 86699692,
    "block_time": "2026-09-30 12:33:27",
    "tx_hash": "05671a29dddaef45475cfe0d529f6efddd75b4f64b665351582717a55142c747",
    "casino": "rollbit",
    "direction": "deposit",
    "wallet_role": "deposit_address",
    "from_address": "TBANGoVLjeZ2WNy7njzKznKt1YEbG33joA",
    "to_address": "TSVQGWK6xPZn2FBZ7z8xWSooNE4dCHampg",
    "token_symbol": "TRX",
    "token_address": "",
    "amount": "46.000000",
    "amount_usd": 15.65,
    "price_source": "market.prices hourly"
  },
  {
    "chain": "tron",
    "block_number": 86703854,
    "block_time": "2026-09-30 16:02:06",
    "tx_hash": "61562f9b108cf33ab2da9783b8fd3876ef548936835df6a4c7a4bae316f84384",
    "casino": "roobet",
    "direction": "withdrawal",
    "wallet_role": "hot_wallet",
    "from_address": "TMuAFEbahMYiGpVVhJY7ebU7Ad19w38BbX",
    "to_address": "TCwL4KK9xptWdispVr86ZL74prmFopCcDN",
    "token_symbol": "USDT",
    "token_address": "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",
    "amount": "1312.827816",
    "amount_usd": 1312.83,
    "price_source": "stablecoin_1usd"
  },
  {
    "chain": "tron",
    "block_number": 86703211,
    "block_time": "2026-09-30 15:29:57",
    "tx_hash": "bae1033276a0c45621d8ba5c4ddbbccae88ea69ecd889b2648b557da1737c7a8",
    "casino": "rollbit",
    "direction": "withdrawal",
    "wallet_role": "hot_wallet",
    "from_address": "TYsQqVyppXjpB9HxFLp9PY3GwLkAHDgH7R",
    "to_address": "TDxxUaHyndUGrF25eJr65jF4TGQsksPnDn",
    "token_symbol": "USDT",
    "token_address": "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",
    "amount": "160.000000",
    "amount_usd": 160.0,
    "price_source": "stablecoin_1usd"
  }
];
