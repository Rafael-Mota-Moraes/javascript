const produto = { nome: "Caneca", preco: 1.8 };

// const outraCoisa = { ...produto, material: "porcelana" };
// const caneca = Object.assign({}, produto, { material: "porcelana" });
// Object.freeze(produto);
// produto.nome = "Caderno";

console.log(produto);
console.log(Object.keys(produto));

console.log(Object.getOwnPropertyDescriptor(produto, "nome"));
