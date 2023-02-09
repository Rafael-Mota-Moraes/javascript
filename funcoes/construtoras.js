// Função construtora retorna objetos
// Inicia o nome com letra maiúscula

function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.nomeCompleto = () => `${nome} ${sobrenome}`;
}

const p1 = new Pessoa("Rafael", "Moreira");

console.log(p1.nomeCompleto());
