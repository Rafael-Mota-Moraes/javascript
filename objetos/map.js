const pessoas = [
  { id: 3, nome: "Rafael" },
  { id: 1, nome: "Maria" },
  { id: 2, nome: "Helena" }
];

// const novasPessoas = {};

// for (const { id, nome } of pessoas) {
//   novasPessoas[id] = { id, nome };
// }

// console.log(novasPessoas);

const novasPessoas = new Map();

for (const { id, nome } of pessoas) {
  novasPessoas.set(id, { id, nome });
}

console.log(novasPessoas);
