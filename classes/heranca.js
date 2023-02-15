class DispositivoEletronico {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }

  ligar() {
    if (this.ligado) {
      console.log(`${this.nome} já está ligado`);
      return;
    }
    this.ligado = true;
  }

  desligar() {
    if (!this.ligado) {
      console.log(`${this.nome} já está desligado`);
      return;
    }
    this.ligado = false;
  }
}

// const d1 = new DispositivoEletronico("Smartphone");
// d1.ligar();
// d1.ligar();
// console.log(d1);

class Smartphone extends DispositivoEletronico {
  constructor(nome, cor, modelo) {
    super(nome);
    this.cor = cor;
    this.modelo = modelo;
  }
}

class Tablet extends DispositivoEletronico {
  constructor(nome, temWiFi) {
    super(nome);
    this.temWiFi = temWiFi;
  }
}

const s1 = new Smartphone("Samsumg", "preto", "S10");
console.log(s1);
