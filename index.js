const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.json());
//app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  let query = req.query;
  if (req.headers.auth != '18pwxx') {
    res.send({
      auth: 'Not authenticated to use:  ' + req.headers.auth,
    });
  } else {
    //console.log(query, req.headers.auth);
    res.send(query);
  }
});

app.post('/', function (req, res) {
  let body_data = req.body;
  res.send(body_data);
});

app.put('/', function (req, res) {
  let body_data = req.body;
  body_data.id = '18pw00';
  res.send(body_data);
});

app.patch('/', function (req, res) {
  let body_data = req.body;
  body_data.id = '21xw16';
  res.send(body_data);
});

app.listen(8000, () => {
  console.log('Starting server........');
});
