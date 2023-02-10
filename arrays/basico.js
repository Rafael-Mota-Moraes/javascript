const nomes = ["Eduardo", "Maria", "João"];
// nomes[2] = "João";
// delete nomes[2];
const novo = [...nomes];
nomes.unshift("Sérgio");

const fatiado = nomes.slice(1, 3);
console.log(fatiado);

novo.pop();
console.log(nomes);
console.log(novo);

const novosNomes = new Array("Eduardo", "Maria", "João"); // Usando o construtor
// console.log(novosNomes);

const string = "Rafael Moreira";
const nomeCompleto = string.split(" ");
console.log(nomeCompleto);
