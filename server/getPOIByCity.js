const axios = require('axios');
const config = require('../secrets.js');

const getPOIByCity = async (city) => {
  let POI = await axios.get(`https://www.triposo.com/api/20210317/poi.json?location_id=${city}&tag_labels=sightseeing&account=${config.account}&token=${config.API}`);
  return POI.data;
}

module.exports.getPOIByCity = getPOIByCity;