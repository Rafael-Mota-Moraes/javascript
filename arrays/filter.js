// Filter, map e reduce -> Principais funções do array

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosMaiores = numeros.filter((num) => num > 10);
console.log(numerosMaiores);

const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Letícia", idade: 19 },
  { nome: "Rosana", idade: 32 },
  { nome: "Wallace", idade: 47 }
];

const filtrados = pessoas.filter((pessoa) => pessoa.nome.length > 5);
console.log(filtrados);

const maisVelhos = pessoas.filter((pessoa) => pessoa.idade > 50);
console.log(maisVelhos);

const nomeTerminaComA = pessoas.filter((pessoa) =>
  pessoa.nome.toLowerCase().endsWith("a")
);

console.log(nomeTerminaComA);
