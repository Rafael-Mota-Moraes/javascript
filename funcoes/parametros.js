function funcao() {
  let total = 0;
  for (let argumento of arguments) {
    total += argumento;
  }

  console.log(total);
}

funcao(1, 2, 3, 4, 5, 6, 7);

function funcao2(a = 0, b = 0) {
  // a = a || 0;
  // b = b || 0;
  console.log(a + b);
}

funcao2(1);
function funcao3({ nome, sobrenome }) {
  console.log(nome, sobrenome);
}

funcao3({ nome: "Rafael", sobrenome: "Moreira" });

function conta(operador, acumulador, ...numeros) {
  for (let numero of numeros) {
    if (operador === "+") {
      acumulador += numero;
    }
    if (operador === "/") {
      acumulador /= numero;
    }
    if (operador === "*") {
      acumulador *= numero;
    }
    if (operador === "-") {
      acumulador -= numero;
    }
  }
  console.log(acumulador);
}

conta("/", 1, 20, 30, 50, 40);
