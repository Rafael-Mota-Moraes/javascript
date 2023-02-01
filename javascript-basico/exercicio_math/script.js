const numero = Number(prompt("Digite seu número:"));

const h1 = document.getElementById("titulo");
const dados = document.getElementById("dados");

h1.innerHTML = `Seu número é: ${numero}`;
dados.innerHTML += `
  Raíz quadrada: ${numero ** (1 / 2)} <br>
  ${numero} é inteiro: ${Number.isInteger(numero)} <br>
  É NaN: ${isNaN(numero)} <br>
  Arredondado para baixo: ${Math.floor(numero)} <br>
  Arredondado para cima: ${Math.ceil(numero)} <br>
  Com duas casas decimais: ${numero.toFixed(2)} <br>
`;
