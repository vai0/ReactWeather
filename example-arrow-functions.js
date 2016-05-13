// function add(a, b) {
//   return a + b;
// }

// var addStatement = (a, b) => {
//   return a + b;
// };
//
// var addExpression = (a, b) => a + b;
//
// console.log('addStatement', addStatement(2, 3));
// console.log('addExpression', addExpression(3, 5));

var names = ['Justin', 'Jennifer', 'Jerry'];

var person = {
  name: 'Raymond',
  greet: function () {
    var that = this;
    names.forEach(function(name) {
      console.log(`${that.name} says hello to ${name}`);
    });
  }
}

// person.greet();

function subtract(a, b) {
  console.log(a - b);
}

// subtract(10, 8);
