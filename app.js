
// entry point
const express = require('express');
const app     = express();

app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
  res.sendFile('index.html');
});


app.get('/api/timestamp/:dateString?', (req, res) => {
  let dateString = req.params.dateString;
  let dateObj;

  if (!dateString) { // no dateString param
    dateObj = new Date();
  }
  else if (/^\d+$/.test(dateString)) { // dateString consists of only digits
    // new Date takes in milliseconds since epoch though
    let milliseconds = Number(dateString) * 1000;
    dateObj = new Date(milliseconds);
  }
  else { // could be 'YYYY-MM-DD' format
    dateObj = new Date(dateString);
  }

  // If it's a valid date getTime() should not return NaN
  if (isNaN(dateObj.getTime())) {
    res.json({"error" : "Invalid Date"});
  }
  else {
    res.json({"unix": dateObj.getTime(), "utc": dateObj.toUTCString()});
  }
});


// serve index.html on any other route
app.get('*', (req, res) => {
  res.status(404).sendFile("index.html", {root: __dirname + '/public'});
});


app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
