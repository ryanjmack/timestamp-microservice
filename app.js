
// entry point
const express = require('express');
const app     = express();
app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
  res.sendFile('index.html');
});


app.get('/api/timestamp/', (req, res) => {
  res.json({"message": new Date().toString()});

});


app.get('*', (req, res) => {
  res.status(404).sendFile("index.html", {root: 'public'});
});


app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
