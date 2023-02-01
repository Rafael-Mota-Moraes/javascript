let num1 = 150;
let num2 = 2.5;
let num3 = 19.293892743219;

console.log(num1.toString() + num2);
console.log(num1.toString(2));
console.log(num3.toFixed(0));
console.log(Number.isInteger(num1), Number.isInteger(num2));
console.log(isNaN(num1 * "Oi"));

// IEEE 754-2008
console.log(0.7 + 0.1 + 0.1 + 0.1);
