// more files in s3 available, file links below
// https://bitquery-blockchain-dataset.s3.us-east-1.amazonaws.com/solana/pumpfun_creation_migrations/2026-07-01.parquet
// ├── solana/
// │   ├── pumpfun_creation_migrations/
// │   │   ├── 2026-07-01.parquet
// │   │   ├── 2026-07-02.parquet
// │   │   └── 2026-07-03.parquet
//
// This dataset contains both Pump.fun token creations and migrations.
// - Creations: Instruction_Program_Method = "create_v2" (legacy "create" also present)
// - Migrations: Instruction_Program_Method = "migrate" or "migrate_v2"
module.exports = [
  // creation (Instruction_Program_Method: create_v2)
  {
    "Transaction_Signature":"3Eh9w8vLMk9TnpV328JnM3fRWxkgDWHMYirRgFGptjVXe54PyM5NoeiUTtuuK6UtRJgFEYZRRywSHajMn5DvWcrh",
    "Transaction_Signer":"4HXb7ivgvjbHC3TBesmmD9LovH8tmTv9DZsq12GMvEpU",
    "Instruction_Program_Method":"create_v2",
    "Pool_Market_BaseCurrency_MintAddress":"7HhgGBpQzRni6WLQ8enABPwqmjkfi5XLAq6Vha2tpump",
    "Pool_Market_BaseCurrency_Name":"The Final 2",
    "Pool_Market_BaseCurrency_TokenCreators_Address":[
      "4HXb7ivgvjbHC3TBesmmD9LovH8tmTv9DZsq12GMvEpU"
    ],
    "Pool_Market_BaseCurrency_Symbol":"2",
    "Pool_Market_BaseCurrency_Decimals":6,
    "Pool_Market_BaseCurrency_Fungible":"true",
    "Pool_Market_BaseCurrency_Uri":"https:\/\/metadata.j7tracker.io\/metadata\/IjgY27XfKr.json",
    "Pool_Market_QuoteCurrency_MintAddress":"11111111111111111111111111111111",
    "Pool_Market_QuoteCurrency_Name":"Solana",
    "Block_Slot":429980967,
    "Block_Time":"2026-07-01T00:00:01.000000Z",
    "Transaction_Result_Success":1,
    "Indexing_OnTrunk":1
  },
  // migration (Instruction_Program_Method: migrate)
  {
    "Transaction_Signature":"5xXx34K9en88Lmjd1sLR8Ebup2NGYcBAanzsSUfAjNaH1JAZPeV9imPQmcWLYu8SPzEhy7xGmsjMzX9oux26PvGC",
    "Transaction_Signer":"LfEcaUf77iEhnz6gFpLqYgDb5Uk6Ekc5n69wu7Qa9Uw",
    "Instruction_Program_Method":"migrate",
    "Pool_Market_BaseCurrency_MintAddress":"2esWdqEsZ6KoTvBqGYt1TgCk4iA4f77H1MVzjV52pump",
    "Pool_Market_BaseCurrency_Name":"The First Black Bull",
    "Pool_Market_BaseCurrency_TokenCreators_Address":[
      "CTuiV799f2ctazjNow9GgknXiv1urYZZLQTBA34RUEiW"
    ],
    "Pool_Market_BaseCurrency_Symbol":"JORDAN",
    "Pool_Market_BaseCurrency_Decimals":6,
    "Pool_Market_BaseCurrency_Fungible":"true",
    "Pool_Market_BaseCurrency_Uri":"https:\/\/ipfs.io\/ipfs\/bafkreideyysugcpyudytkegjso6uzrqvb5da4fqydcq3vnlh7enrpi2uhe",
    "Pool_Market_QuoteCurrency_MintAddress":"11111111111111111111111111111111",
    "Pool_Market_QuoteCurrency_Name":"Solana",
    "Block_Slot":429981247,
    "Block_Time":"2026-07-01T00:01:53.000000Z",
    "Transaction_Result_Success":0,
    "Indexing_OnTrunk":1
  },
  // migration (Instruction_Program_Method: migrate_v2)
  {
    "Transaction_Signature":"3wohdQCq172J2NUWvV1ZXk4wfFjgS2KMRrUKhsMUAxjowhSAB1r5nyPNbe6pLkbrT6q8VwStk36q4iTkaE3N2dRA",
    "Transaction_Signer":"BnnNJJgy9w2MLQ9XBKJKG9FQa2r9qdW7u5VpzEkwUcc3",
    "Instruction_Program_Method":"migrate_v2",
    "Pool_Market_BaseCurrency_MintAddress":"GAefbsZef5zGjacXf65ioie8gzHEnS9xzSWNZsxFpump",
    "Pool_Market_BaseCurrency_Name":"horseradish",
    "Pool_Market_BaseCurrency_TokenCreators_Address":[

    ],
    "Pool_Market_BaseCurrency_Symbol":"Horseradish",
    "Pool_Market_BaseCurrency_Decimals":6,
    "Pool_Market_BaseCurrency_Fungible":"true",
    "Pool_Market_BaseCurrency_Uri":"https:\/\/metadata.j7tracker.io\/metadata\/vlg3MVkUeJ.json",
    "Pool_Market_QuoteCurrency_MintAddress":"So11111111111111111111111111111111111111112",
    "Pool_Market_QuoteCurrency_Name":"Wrapped Solana",
    "Block_Slot":429981124,
    "Block_Time":"2026-07-01T00:01:03.000000Z",
    "Transaction_Result_Success":0,
    "Indexing_OnTrunk":1
  }
];
