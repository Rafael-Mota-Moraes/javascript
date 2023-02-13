function Produto(nome, preco, estoque) {
  Object.defineProperty(this, "estoque", {
    enumerable: true,
    value: estoque,
    writable: false,
    configurable: true
  });

  Object.defineProperties(this, {
    nome: {
      enumerable: true,
      value: nome,
      writable: true,
      configurable: true
    },
    preco: {
      enumerable: true,
      value: preco,
      writable: true,
      configurable: true
    }
  });
}

const p1 = new Produto("camiseta", 20, 3);
p1.estoque = 10;
console.log(p1);
