const locations = require('./data');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/:num?', function (req, res, next) {

  let num = Math.max(0, parseInt(req.params.num || 0));
  num = num % 21;

  res.json({
    location: {
      a: locations[0].slice(0, num),
      b: locations[1].slice(0, num)
    }
  })
});

app.listen(3001, () => console.log('Server ready on port 3001.'));

module.exports = app;