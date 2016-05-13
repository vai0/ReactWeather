var React = require('react');

var WeatherMessage = (props) => {
  var {location, temp} = props;

  return (
    <h2>It's {temp}&deg; F in {location}!</h2>
  );
};

module.exports = WeatherMessage;
