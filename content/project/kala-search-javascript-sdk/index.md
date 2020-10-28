---
title: Kala Search JavaScript SDK
date: "2020-09-15"
featureImage: "./kala-search-javascript-sdk.png"
description: "Kala Search JavaScript SDK"
---

## Overview
[Kala Search JavaScript SDK](https://github.com/Kalasearch/kalasearch-javascript-sdk) is a client for [Kala Search](https://kalasearch.cn/) written in JavaScript. User can use their API Key and application ID acquried from [Kala Dashboard](https://dashboard.kalasearch.cn/) to perform various operations to customize their search engine needs.

> *Kala Search* offers powerful, fast, easy to use and deploy **in-app search engine**. Without spending extra time in developing their own search engine, users can simply set up their search feature within minutes with the help of Kala Search API and SDK.

## Main Features
- Basic search
- Custom search
- Create new index
- Add new documentation to a index
- Delete documentation from a index

## Examples 
Import Kala Search JavaScript SDK and provide `appId` and `apiKey` to set up a new client:

```javascript
import KalaSearch from 'kalasearch-javascript-sdk'

const client = new KalaSearch({
  apiKey: 'your-apiKey',
  appId: 'your-appId'
})

const index = client.getIndex('your-index-id')
```

To do a basic search:
```javascript
;(async () => {
  try {
    let response = await index.search('bill'); // highlight-line
    console.log(response) // => see search result
  } catch(err) {
    console.log(err) // => catch error 
  }
})()
```

To do a custom search with highlighted fields:
```javascript
;(async () => {
  try {
    let response = await index.search(
      'bill',
      highlightFields: ['name','story'] // highlight-line
    )
    console.log(response) // => see search result with highlight
  } catch(err) {
    console.log(err) // => catch error 
  }
})()
```

## Source Code
[Check it out on Github](https://github.com/Kalasearch/kalasearch-javascript-sdk)