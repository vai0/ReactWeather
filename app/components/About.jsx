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
    <h4>About component</h4>
  );
};

module.exports = About;
