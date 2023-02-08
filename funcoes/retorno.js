// return
// Retorna Um Valor

function soma(a, b) {
  return a + b;
}

function soma2(a, b) {
  console.log(a + b);
}

console.log(soma(2, 5));
// Vai executar a função e printar o retorno (undefined)
console.log(soma2(1, 2));

function criaPessoa(nome, sobrenome) {
  return { nome, sobrenome };
}

const p1 = criaPessoa("Rafael", "Moreira");

function falaFrase(comeco) {
  function falaResto(resto) {
    return comeco + " " + resto;
  }

  return falaResto;
}

const olaMundo = falaFrase("Olá");
console.log(olaMundo("mundo!"));
