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

// esperaAi("Fase 1", rand(0, 3))
//   .then((valor) => {
//     console.log(valor);
//     return esperaAi("Fase 2", rand(0, 3));
//   })
//   .then((valor) => {
//     console.log(valor);
//   })
//   .catch((error) => console.log(error));

async function executa() {
  try {
    const fase1 = await esperaAi("Fase 1", rand(0, 3));
    console.log(fase1);
    const fase2 = await esperaAi("Fase 2", rand(0, 3));
    console.log(fase2);
    const fase3 = await esperaAi("Fase 3", rand(0, 3));
    console.log(fase3);
    console.log("Terminou");
  } catch (error) {
    console.log(error);
  }
}
executa();
