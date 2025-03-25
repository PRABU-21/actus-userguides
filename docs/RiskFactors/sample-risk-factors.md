---
sidebar_position: 2
---
## 1. Introduction

The **ACTUS Basic Quickstart** installs a MongoDB NoSQL database in a **Docker container** running on your workstation. This guide will help you:

- **View the database contents**
- **Initialize and manage the risk factor store**
- **Delete existing collections before new tests**

## 2. Install MongoDB Command Line Client

To interact with the MongoDB database, install the **MongoDB CLI** by following the official instructions:  
[Install MongoDB CLI](https://www.mongodb.com/docs/mongocli/v1.28/install/)

Once installed, open a terminal and start the MongoDB shell by running:

```bash
mongo
```



While you are in the **mongo client shell**, the following commands are available:

 ```bash
 show dbs
 ```  
  _Will list the currently available databases._

 ```bash
 use <DBNAME>
 ```  
  _Will make the database `<DBNAME>` active and the target of all commands._

```bash
 db
 ```
  _Will display the name of the currently active database._

If you have run previous ACTUS QuickStart validation tests in this environment, a database with `<DBNAME> = riskdata` will have been created. MongoDB also creates other default databases during its installation. The ACTUS QuickStart validations may have created collections named **referenceIndex**, **scenario**, and **twoDimensionalPrepaymentData** in the **riskdata** database. These collections can be dropped using the following commands:

```bash
> db.referenceIndex.drop()
> db.scenario.drop()
> db.twoDimensionalPrepaymentData.drop()
```

After deleting any existing collections, run:
```bash
show collections
```

This command should return a null list, confirming that the current riskdata database is now empty and ready for new tests.


To exit the shell, press **`Ctrl+C`** or use your terminal’s escape command.


## Inserting sample risk data into the persistent riskdata store –  reference indexes

After clearing the **riskdata** store, we’ll add sample reference indexes (market projections) using commands from the **Test_B/** folder in your ACTUS Quickstart setup.

```bash
  cd ACTUS_QUICKSTART_HOME/docker-actus-rf20/actus-riskserver-ce/actus-riskserver/Test_B/
```
### Instructions

1. **Open a Terminal:**  
   Navigate to the **Test_B/** folder. On Windows, you can use Linux PowerShell.

```bash
  cd ACTUS_QUICKSTART_HOME/docker-actus-rf20/actus-riskserver-ce/actus-riskserver/Test_B/
```

2. **Populate the database**  
   Run the following command in the terminal:

   ```bash
   source putUst5Y_falling.txt
   ```

   this will create a new reference Index  with id=”MSFT_rising” 



A **referenceIndex** in ACTUS represents a projection of possible future values of a market asset, such as Microsoft stock. For risk analysis, different projections can be used, each identified uniquely. For example:

- `MSFT_steady`
- `MSFT_falling`

These projections allow for the simulation of financial contracts such as **FUTURES, OPTIONS, purchases, or sales** under various market risk scenarios.

## Attributes of an ACTUS Reference Index

Each **referenceIndex** has the following attributes:

- **`riskFactorID`** – Uniquely identifies the market reference index.
- **`marketObjectCode`** – Identifies the MarketObject whose future values are projected.
- **`base`** – Indicates scaling: whether projected values are absolute or percentage-based.
- **`data`** – A time series of `<date, value>` pairs.

## Example: MSFT Rising Reference Index

The command in the file `Test_B/putMSFT_rising.txt` contains the JSON data for storing in MongoDB. Pretty-printing the JSON yields:

```json
{
  "riskFactorID": "MSFT_rising",
  "marketObjectCode": "MSFT",
  "base": 1.0,
  "data": [
    {"time": "2023-06-01T00:00:00", "value": 105},
    {"time": "2023-09-01T00:00:00", "value": 112},
    {"time": "2024-01-01T00:00:00", "value": 129}
  ]
}
