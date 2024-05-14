// Start coding here
let calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  multiply: (a, b) => {
    return a * b;
  },
  divided: (a, b) => a / b,
};

const addResult = calculator.add(10, 20);
const dividedResult = calculator.divided(3000, 10);

console.log(addResult);
console.log(dividedResult);
