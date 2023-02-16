const rand = (min, max) => {
  min *= 100;
  max *= 100;
  return Math.floor(Math.random() * (max - min) + min);
};

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") {
      reject("Caiu no erro!");
      return;
    }

    setTimeout(() => {
      resolve(msg);
      return;
    }, tempo);
  });
}

const promises = [
  "Primeiro Valor",
  esperaAi("Promise 1", 3000),
  esperaAi("Promise 2", 500),
  esperaAi("Promise 3", 1500),
  esperaAi(1000, 1500),
  "Outro Valor"
];

// Promise.all(promises)
//   .then((valores) => {
//     console.log(valores);
//   })
//   .catch((error) => console.log(error));

// Promise.race(promises)
//   .then((valores) => {
//     console.log(valores);
//   })
//   .catch((error) => console.log(error));
