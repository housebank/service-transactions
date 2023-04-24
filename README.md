# service-transactions
Techbricks  transactions CRUD service 


## Version
`0.0.1`

## Demo

[Demo](https://packages-trotter-wmdfs7yiwa-lz.a.run.app/)

## Getting started

Clone the project:

```

```

Install dependencies:
```
cd service-transactions && yarn install
```

## Get it up and running

In production
```
yarn start
```

In development
```
yarn dev
```

The default port is 8003 so navigate to localhost:8003

## API

GET : Returns an array of all transactions
```
/v1/transactions
```
POST: Returns an array of object of the id of new transaction(s) added, accepts an array of
transaction(s) to be created
```
/v1/transactions
```
GET: Returns an array of object of the transaction requested
```
/v1/transactions/:id
```
PATCH: Returns an array of object of the id of the transaction updated, accepts an object of
transaction to be updated
```
/v1/transactions/:id
```
DELETE: Returns an array of object of the id of the transaction deleted
```
/v1/transactions/:id
```


## Testing


Latest coverage report. 03.02.2023
```
------------------|---------|----------|---------|---------|-------------------
File              | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
------------------|---------|----------|---------|---------|-------------------
All files         |   96.26 |       90 |     100 |      96 |                   
build/filereader |    87.5 |      100 |     100 |    87.5 |                   
index.js        |    87.5 |      100 |     100 |    87.5 | 16                
build/parser     |   97.87 |       90 |     100 |   97.82 |                   
index.js        |   97.87 |       90 |     100 |   97.82 | 18                
filereader       |   85.71 |      100 |     100 |   85.71 |                   
index.ts        |   85.71 |      100 |     100 |   85.71 | 15                
parser           |   97.77 |       90 |     100 |   97.43 |                   
index.ts        |   97.77 |       90 |     100 |   97.43 | 21                
------------------|---------|----------|---------|---------|-------------------`
```
## Design process
