// https://bitquery-blockchain-dataset.s3.us-east-1.amazonaws.com/solana/casino_transfers/2026-09.parquet  (PLACEHOLDER: not uploaded yet)
/* More files in S3 under:
bitquery-blockchain-dataset/solana/casino_transfers/  (one Parquet file per calendar month, ZSTD)
*/
// One row per casino deposit or withdrawal (native coin, USDT, USDC). Casino = Bitquery hot-wallet labels.
// direction + wallet_role: deposit/deposit_address, deposit/hot_wallet, withdrawal/hot_wallet.
// amount is a decimal STRING; amount_usd is a float. Filter tokens by token_address, never by symbol.
// Sample: Stake wallets, 30 Sep 2026, built piece by piece from the same rule.
module.exports = [
  {
    "chain": "solana",
    "block_number": 451927766,
    "block_time": "2026-09-30 09:44:14",
    "tx_hash": "3XsytCKh29tm46B7PqkkMbswLz8PMs135XRc4JKYJsqdHnxGR3t44JRrmj5pQHhK2wJwMdc5AS3gTPrBQ8PDFD7A",
    "casino": "stake",
    "direction": "withdrawal",
    "wallet_role": "hot_wallet",
    "from_address": "G9X7F4JzLzbSGMCndiBdWNi5YzZZakmtkdwq7xS3Q3FE",
    "to_address": "ELYMdEUUan4TZorcLhnGZwNSBWNL6GbYWEPhJkhBLM3o",
    "token_symbol": "SOL",
    "token_address": "",
    "amount": "0.010000000",
    "amount_usd": 1.18,
    "price_source": "market.prices hourly"
  },
  {
    "chain": "solana",
    "block_number": 451928465,
    "block_time": "2026-09-30 09:47:20",
    "tx_hash": "ptTfrK5HG4kaihcsU8WfWXxzM3DTgbzzEkb1e7GErLeZueNEJNAU15QpaVukyzZ4xbgnZdR33rAJm4Z7L9jWzzm",
    "casino": "stake",
    "direction": "withdrawal",
    "wallet_role": "hot_wallet",
    "from_address": "G9X7F4JzLzbSGMCndiBdWNi5YzZZakmtkdwq7xS3Q3FE",
    "to_address": "Dh4w7vMnMnK7VU1KmEt1xcozVx8E9XGUnR2pVgP8pokq",
    "token_symbol": "USDC",
    "token_address": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
    "amount": "55.000000",
    "amount_usd": 55.0,
    "price_source": "stablecoin_1usd"
  },
  {
    "chain": "solana",
    "block_number": 451927985,
    "block_time": "2026-09-30 09:45:13",
    "tx_hash": "SgtjrSXAxkkhGAiybR6BkGmydqfpgBTDKHJvBkcg2L3goSAKbuB9yweTPHhgDbTEJPSHfyn9tEBgs3yKAqE8oLN",
    "casino": "stake",
    "direction": "withdrawal",
    "wallet_role": "hot_wallet",
    "from_address": "G9X7F4JzLzbSGMCndiBdWNi5YzZZakmtkdwq7xS3Q3FE",
    "to_address": "BSxcw8Jcp3bEGHAbrEr3fkWzfCP9iUAz7YJeRkvAkGBF",
    "token_symbol": "USDT",
    "token_address": "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
    "amount": "603.025940",
    "amount_usd": 603.03,
    "price_source": "stablecoin_1usd"
  },
  {
    "chain": "solana",
    "block_number": 452033428,
    "block_time": "2026-09-30 17:35:33",
    "tx_hash": "4C5D6z2H73RcX2Yfq7VkbSPtbymzpQ9VQXiGiBX2WCiS7U2DnPaiVyFBregs8XWsR9jsfXRBcaeVeMM7jNvjqFxN",
    "casino": "stake",
    "direction": "deposit",
    "wallet_role": "deposit_address",
    "from_address": "A3vYeBJdQCNizV4HapeGvtNdHBXgZ8ZeTc9Ft7Gmpn6f",
    "to_address": "2aApB5MKmiSnGfHXJqPFqhqxzux8qucY94VNaUCbPjeF",
    "token_symbol": "SOL",
    "token_address": "",
    "amount": "6.000000000",
    "amount_usd": 721.12,
    "price_source": "market.prices hourly"
  },
  {
    "chain": "solana",
    "block_number": 451971732,
    "block_time": "2026-09-30 13:00:01",
    "tx_hash": "nRQ5eghq74uYbALiRtaiVPzn6CCQeGcv8YjTgyrkfd82B7h312qnyThvnJQaVBFm42YkvJ4EB7URq8hEyiXKhoo",
    "casino": "stake",
    "direction": "deposit",
    "wallet_role": "deposit_address",
    "from_address": "QT3EFRuVnCV9aVMgZrAsfbqBo4LqYkQp4EAPKY5kYLk",
    "to_address": "4THUdHsrhikcwiGYhttdcEQtxgi2KonEtvhnYgE7s6XP",
    "token_symbol": "USDC",
    "token_address": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
    "amount": "347.510000",
    "amount_usd": 347.51,
    "price_source": "stablecoin_1usd"
  },
  {
    "chain": "solana",
    "block_number": 451842109,
    "block_time": "2026-09-30 03:22:54",
    "tx_hash": "39uqnPjmY4dLoAyYm5SFnMpXnz36RExJbLUSemGLWY47RDFKVJYcYSKA9Nf7eefornHcETqvfmYFwpvB1wikRi8V",
    "casino": "stake",
    "direction": "deposit",
    "wallet_role": "deposit_address",
    "from_address": "FfxU1AEhdz2q16TAmzgG6wdYP3NKsFz5gkYt4DprYBsH",
    "to_address": "EhRZUdAWpG3cBeqfCzFyWrhQ5zyQsaTBrmncQKkz9ELS",
    "token_symbol": "USDT",
    "token_address": "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
    "amount": "100.080000",
    "amount_usd": 100.08,
    "price_source": "stablecoin_1usd"
  }
];
