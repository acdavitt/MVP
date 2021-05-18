const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/cities', {useNewUrlParser: true , useUnifiedTopology: true});
const db = mongoose.connection;

// const { Seeder } = require('mongo-seeding');
// const database = require('./config.js');

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('db connected!')
});


// const seeder = new Seeder(database.database);
// const collections = seeder.readCollectionsFromPath(
//   path.resolve('./Tenerife.js'),
// );

// seeder
//   .import(collections)
//   .then(() => {
//     console.log('Database seeded');
//   })
//   .catch(err => {
//     console.log('Error', err);
//   });


const citiesSchema = mongoose.Schema({
  city: String,
  pois: [
    {
      name: String,
      image: String,
      thumbnail: String,
      snippet: String,
      link: String
    }
  ]
});

const City = mongoose.model('City', citiesSchema);

const save = (city, POIs) => {
  let formattedPois = []
  for (let poi of POIs) {
    let formattedPoi = {
      name: poi.name,
      image: poi.images[0].sizes.medium.url,
      thumbnail: poi.images[0].sizes.thumbnail.url,
      snippet: poi.snippet,
      link: poi.attribution[1].url
    }
    formattedPois.push(formattedPoi);
  }
  console.log({formattedPois})
  let newCity = new City({
    city: city,
    pois: formattedPois
  })

  City.exists({city: city}, (err, isPresent) => {
    if (err) {
      console.log('Already present in db:', err)
    } else if (!isPresent) {
      newCity.save()
      .then(result => result)
      .catch(err => console.log(err))
    }
  })
};


module.exports.save = save;



