// Função que retorna um objeto

function criaPessoa(nome, sobrenome, altura, peso) {
  return {
    nome,
    sobrenome,
    fala: function (assunto) {
      return `${this.nome} está falando sobre ${assunto}.`;
    },
    altura,
    peso,
    get imc() {
      return this.peso / this.altura ** 2;
    },
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    }
  };
}

const p1 = criaPessoa("Rafael", "Moreira", 1.64, 85);
console.log(p1.fala("programação"));
console.log(p1.nomeCompleto);
console.log(p1.imc);
