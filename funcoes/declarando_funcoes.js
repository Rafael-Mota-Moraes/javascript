// Declaração mais literal (ocorre hoisting)
falaOi();
function falaOi() {
  console.log("Olá");
}

// Função = First class objects
// Function expression
const nome = function () {
  return "Rafael";
};

function executaFuncao(funcao) {
  return funcao();
}
console.log(executaFuncao(nome));

// Arrow function

const arrowFunction = () => {
  return "Função arrow";
};

const arrowFunction2 = () => "Não precisa de retorno";
