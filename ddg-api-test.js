 const { image_search } = require('../src/api')

image_search({ query: "birds", moderate: true }).then(results=>console.log(results))