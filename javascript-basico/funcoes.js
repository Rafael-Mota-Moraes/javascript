function saudacao(nome) {
  const bomDia = `Bom dia ${nome}!`;
  console.log(bomDia);
  return bomDia;
}

const funcao = saudacao("Rafael");
console.log(funcao);

function soma(n1 = 0, n2 = 0) {
  return n1 + n2;
}

console.log(soma(2, 3));

const raiz = (numero) => {
  return numero ** 0.5;
};

console.log(raiz(9));
