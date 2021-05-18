const express = require('express');
const queries = require('./db/queries');

const PORT = 3004;
const app = express();

app.use(express.json());
app.use(express.static('dist'));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})