const frutas = ["Banana", "Maçã", "Pêra"];

for (let i in frutas) {
  console.log(frutas[i]);
}

const pessoa = {
  nome: "Rafael",
  sobrenome: "Moreira",
  idade: 30
};
console.log();

for (let key in pessoa) {
  console.log(pessoa[key]);
}
