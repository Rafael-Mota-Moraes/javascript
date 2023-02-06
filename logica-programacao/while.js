let controle = 0;

while (controle <= 10) {
  // console.log(controle);
  controle++; // Nunca esqueça disso!!
}

function random(min, max) {
  const numero = Math.random() * (max - min) + min;
  return Number(numero.toFixed(0));
}

let rand = random(1, 10);
// let rand = 10;

while (rand !== 10) {
  rand = random(1, 10);

  console.log(rand);
}
rand = 10;
console.log("-----");

do {
  console.log(rand);
} while (rand !== 10);
