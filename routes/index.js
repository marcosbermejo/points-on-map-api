const routes = require('./data');
const express = require('express');
const router = express.Router();

let cont = 0;

const data = {
  location: {
    a: [],
    b: []
  }
}

setInterval(() => {

  if (cont === 20) {
    cont = 0;
    data.location.a = []
    data.location.b = []
  }

  data.location.a.push(routes[0][cont])
  data.location.b.push(routes[1][cont])

  cont++;

}, 2000)

router.get('/', function (req, res, next) {
  res.json(data)
});

module.exports = router;
