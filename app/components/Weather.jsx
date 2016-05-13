var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
    // return {
    //   location: 'Jennifer\'s place',
    //   temp: 88
    // }
  },
  handleSearch: function(location) {
    var that = this;

    this.setState({ isLoading: true });

    openWeatherMap.getTemp(location).then(function(response) {
      that.setState({
        location: response.name,
        temp: response.temp,
        isLoading: false
      });
    }, function(errorMessage) {
      that.setState({ isLoading: false });
      alert(errorMessage);
    });
  },
  render: function () {
     var {location, temp, isLoading} = this.state;

    function renderMessage() {
      if (isLoading) {
        return <h3>fetching data...</h3>;
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp}/>;
      }
    }

    return (
      <div>
        <h4>Weather Component</h4>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
