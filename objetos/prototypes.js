// Construtora -> molde (classe)

function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.nomeCompleto = () => `${this.nome} ${this.sobrenome}`;
}

Pessoa.prototype.dentroDoProto = "Ok";

// Instância
const p1 = new Pessoa("Luiz", "O.");
const data = new Date();

console.dir(p1.dentroDoProto);
