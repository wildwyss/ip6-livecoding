// Prototype:
// The prototype is just a function
const Prototype = () => null;

// Add a new function to this prototype
Prototype.getName = function () {
  return this.name;
};

// Creating an object with a name
const tobi = { name : "Tobi" };

// Setting the prototype
Object.setPrototypeOf(tobi, Prototype);

console.log(tobi.getName());
// => Logs 'Tobi'
