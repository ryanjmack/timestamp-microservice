// entry point
const express = require('express');
const app     = express();


app.get('/', (req, res) => {
  res.send('Testing!');
});


app.get('/api/timestamp/', (req, res) => {
  res.json({"message": "Hello json"});
});


app.get('*', (req, res) => {
  res.status(404).send("ERROR!");
});


app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
