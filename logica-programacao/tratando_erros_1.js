try {
  console.log(naoExisteEssaVariavel);
} catch (error) {
  console.log("Variável não existe!");
  console.log(error.message);
}

function soma(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new Error("X e Y precisam ser números");
  }

  return x + y;
}

try {
  console.log(soma(1, "NaN"));
} catch (error) {
  console.log("Ocorreu um erro: ", error);
}
