const express = require('express');
const queries = require('./db/index.js');
const triposoReq = require('./getPOIByCity.js');

const PORT = 3001;
const app = express();

app.use(express.json());
app.use(express.static('dist'));

app.post('/cities', (req, res) => {
  triposoReq.getPOIByCity(req.body.city)
  .then(pois => queries.addCity(req.body.city, pois.results))
  .then(result => res.send('Added city to db'))
  .catch(err => res.status(404).send('Unable to add city info'))
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})