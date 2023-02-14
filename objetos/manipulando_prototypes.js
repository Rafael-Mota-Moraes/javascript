// new Object

const objA = {
  chaveA: "A"
};

const objB = {
  chaveB: "B"
};

const objC = new Object();

objC.chaveC = "C";

// console.log(objA.__proto__ === Object.prototype);

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);
// console.log(objB.chaveA);
// console.log(objC.chaveA);
// console.log(objC.chaveB);
// console.log(objC.__proto__);

function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.desconto = function (porcentagem) {
  this.preco = this.preco - this.preco * (porcentagem / 100);
};

Produto.prototype.aumento = function (porcentagem) {
  this.preco = this.preco + this.preco * (porcentagem / 100);
};

const p1 = new Produto("Camisa", 100);
p1.desconto(15);
p1.aumento(15);

// console.log(p1);

const p2 = {
  nome: "Caneca",
  preco: 15
};

Object.setPrototypeOf(p2, Produto.prototype);

p2.aumento(100);
console.log(p2);

const p3 = Object.create(Produto.prototype, {
  preco: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 42
  },
  tamanho: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 50
  }
});

p3.aumento(100);

console.log("p3: ", p3);
