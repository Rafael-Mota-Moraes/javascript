const pessoa1 = {
  nome: "Rafael",
  sobrenome: "Moreira",
  idade: 18
};

function criaPessoa(nome, sobrenome, idade) {
  return { nome, sobrenome, idade };
}

const p1 = criaPessoa("Rafael", "Moreira", 18);
console.log(p1);
