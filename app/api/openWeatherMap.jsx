var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=ac3b97e88da5d953077e55d84f954086&units=imperial';

module.exports = {
  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${location}`;
    return axios.get(requestUrl).then(function(res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        console.log(res);
        return {
          temp: res.data.main.temp,
          name: res.data.name
        };
      }
    }, function(res) {
      throw new Error(res.data.message);
    });
  }
};
