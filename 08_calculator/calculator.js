const add = function(num1,num2) {
	result = num1 + num2;
  return result;
};

const subtract = function(num1,num2) {
	result = num1 - num2;
  return result;
};

const sum = function(suppliedArr) {
  const myArray = suppliedArr
  const initialValue = 0;

const sumWithInitial = myArray.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);
 return sumWithInitial;
};

const multiply = function(suppliedArr) {
  const myArray = suppliedArr
  const initialValue = 1;

const sumWithInitial = myArray.reduce(
  (accumulator, currentValue) => accumulator * currentValue,
  initialValue
);
 return sumWithInitial;
};

const power = function(num1,num2) {
	result = num1 ** num2;
  return result;
};

const factorial = function(num1) {
  if (num1 < 0) 
  return -1;
else if (num1 == 0 ||num1 == 1) 
return 1;
else {
  let result = 1;
  if (num1 == 0 || num1 == 1) {
    return result;
  } else {
    for (var i = num1; i >= 1; i--) {
      result = result * i;
    }
    return result;
  }
}

}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
