class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
  }

  aumentarVolume() {
    this.volume += 2;
  }

  diminuirVulume() {
    this.volume -= 2;
  }

  static trocaPilha() {
    console.log("Trocando pilhas...");
  }
}

const c1 = new ControleRemoto("TV Smart");

c1.aumentarVolume();
c1.aumentarVolume();
c1.aumentarVolume();

// c1.trocaPilha(); // Não vai funcionar!!!
ControleRemoto.trocaPilha();

console.log(c1);
