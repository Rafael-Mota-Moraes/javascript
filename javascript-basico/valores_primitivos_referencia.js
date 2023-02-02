/**
 * Primitivos (Imutáveis) - string, number, boolean, undefined, null, (bigint, symbol)
 * Referência (Mutável) - array, object, function
 */

let nome = "Rafael";
nome = "Luiz";
nome[0] = "R";
// strings são IMUTÁVEIS!!
console.log(nome);

let a = "A";
let b = a; // Cópia

console.log(a, b);

a = "Outro valor";
console.log(a, b);

let c = [1, 2, 3];
let d = c;
d[1] = 5;
d.pop();
console.log(c, d);
