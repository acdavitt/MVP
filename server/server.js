const express = require('express');
const queries = require('./db/index.js');
const triposoReq = require('./getPOIByCity.js');

const PORT = 3001;
const app = express();

app.use(express.json());
app.use(express.static('dist'));

app.get('/cities/:city', (req, res) => {
  console.log('get body', req.params.city)
  queries.retrieve(req.params.city)
  .then(pois => res.send(pois))
  .catch(err => res.status(400).send('Unable to retrieve city info') )
})

app.post('/cities', (req, res) => {
  triposoReq.getPOIByCity(req.body.city)
  .then((pois) => {
    console.log('city', req.body.city)
    console.log('pois.res', pois.results)
    queries.save(req.body.city, pois.results)
  })
  .then(result => res.send('Added city to db'))
  .catch(err => res.status(404).send('Unable to add city info'))
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})