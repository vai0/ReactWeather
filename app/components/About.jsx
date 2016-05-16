var React = require('react');

//Original Component structure
// var About = React.createClass({
//   render: function () {
//     return (
//       <h4>About component</h4>
//     );
//   }
// });

//Stateless function component in a standard named function form.
// function About(props) {
//     return (
//       <h4>About component</h4>
//     );
// };

//ES6 arrow function structure
var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>This is a weather application built on React.</p>
      <p>Here are some of the tools used:</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - Javascript framework
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - API to grab weather data by city name.
        </li>
      </ul>
    </div>
  );
};

module.exports = About;
