const nome = "Rafael";

function falaNome() {
  console.log(nome);
}

function usaFalaNome() {
  const nome = "José";
  falaNome();
}

usaFalaNome();
