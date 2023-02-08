function retornaFuncao(nome) {
  // const nome = "Rafael";
  return function () {
    return nome;
  };
}

const funcao = retornaFuncao("Rafael");
