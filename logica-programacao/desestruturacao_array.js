let a = "a";
let b = "b";
let c = "c";

const valores = [b, c, a];

[a, b, c] = valores;

console.log(a, b, c);

const nums = [1, 2, 3, 3, 4, 5, 6, 8, 10, 9];

const [primeiro, , segundo, ...resto] = nums;
console.log(primeiro, segundo, "\n", resto);
