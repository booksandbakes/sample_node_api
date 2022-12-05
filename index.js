const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/login', function (req, res) {
  const user = req.body;
  jwt.sign({ user: user }, 'secretkey', (err, token) => {
    res.json({ token });
  });
});

app.post('/api/post', verifytoken, function (req, res) {
  jwt.verify(req.token, 'secretkey', (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({ msg: 'post created', authData });
    }
  });

  //res.send({ msg: 'post_api' });
});

function verifytoken(req, res, next) {
  var auth = req.headers['auth'];
  if (auth != null) {
    req.token = auth;
    next();
  } else {
    res.send({ msg: 'Not authorized' });
  }
}

app.listen(8000, () => {
  console.log('Starting server........');
});
