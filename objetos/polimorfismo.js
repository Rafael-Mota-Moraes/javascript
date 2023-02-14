function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

Conta.prototype.sacar = function (valor) {
  if (this.saldo < valor) {
    this.verSaldo();
    return;
  }

  this.saldo -= valor;
  this.verSaldo();
};

Conta.prototype.depositar = function (valor) {
  this.saldo += valor;
  this.verSaldo();
};

Conta.prototype.verSaldo = function () {
  console.log(`Ag/c: ${this.agencia}/${this.conta}`);
  console.log(`Saldo: R$${this.saldo.toFixed(2)}`);
};

// const c1 = new Conta(10, 10, 100);
// c1.depositar(50);
// c1.sacar(149);
// c1.sacar(2);

function CC(agencia, conta, saldo, limite) {
  this.limite = limite;
  Conta.call(this, agencia, conta, saldo);
}

CC.prototype = Object.create(Conta.prototype);

CC.prototype.sacar = function (valor) {
  if (valor > this.saldo + this.limite) {
    this.verSaldo();
    return;
  }

  this.saldo -= valor;
  this.verSaldo();
};

function CP(agencia, conta, saldo) {
  Conta.call(this, agencia, conta, saldo);
}

CP.prototype = Object.create(Conta.prototype);

const cc = new CC(1, 1, 0, 100);

// cc.depositar(10);
cc.sacar(110);

const cp = new CP(12, 33, 0);
cp.sacar(10);
