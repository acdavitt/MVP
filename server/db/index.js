const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/cities', {useNewUrlParser: true , useUnifiedTopology: true});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('db connected!')
});

let citiesSchema = mongoose.Schema({

});