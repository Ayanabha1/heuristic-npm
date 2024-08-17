## Overview

This package is designed to seamlessly integrate Retrieval-Augmented Generation (RAG) capabilities into your application. It allows you to send queries directly to our custom backend model, leveraging the power of RAG to retrieve relevant information and generate responses based on that data. By using this package, developers can easily implement advanced search and retrieval functions, making it ideal for applications that require dynamic, context-aware responses.


## Installation

```$ npm i heuristic-npm```


## Usage
```
const heuristic = require("heuristic-npm");
require("dotenv/config");

heuristic.config({ apiKey: process.env.HEURISTIC_API_KEY });

const generateResult = async () => {
  const query = "Converse chuck taylor all star",
    num_results = 1;
  const res = await heuristic.fetchResults({ query, num_results });
  return res;
};

generateResult().then((res) => {
  console.log(res);
});

```

## Why use this package?

This package is designed to simplify the process of integrating RAG-based functionalities into your applications. By using this package, you can focus on building your application's unique features while leveraging the power of RAG for dynamic and intelligent data retrieval.

## Contributors
- **[Ayanabha Misra](https://www.linkedin.com/in/ayanabha-misra-7196091b4/)**
- **[Nitya Singh](https://www.linkedin.com/in/nitya-singh-weltmeister//)**
- **[Kushagra Mathur](https://www.linkedin.com/in/kushagramathur37/)**
