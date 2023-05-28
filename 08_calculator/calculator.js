const add = function(num1, num2) {
	return Number(num1 +num2);
};

const subtract = function(num1,num2) {
  return Number(num1 - num2);
};

const sum = function(numbers) {
    let sum=0;
    for(number of numbers){
      sum =sum +number;
    }
    return Number(sum);
};

const multiply = function(numbers) {
    let product =1;
    for(number of numbers){
      product = product*number;
    }
    return Number(product);
};

const power = function(num1,num2) {
	return Number(Math.pow(num1,num2));
};

const factorial = function(number) {
	let fact=1;
  if (number >1){
    for (let i =2; i<=number; ++i){
      fact= fact*i;
    }
  } 
  return Number(fact);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
