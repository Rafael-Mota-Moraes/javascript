const nome = prompt("Digite seu nome completo:");

document.body.innerHTML += `
  Seu nome é: ${nome} <br>
  Seu nome tem ${nome.length} letras <br>
  A segunda letra do seu nome é ${nome[1]} <br>
  O primeiro índice da letra  "a" no seu nome é ${nome.indexOf("a")} <br>
  O ultimo índice da letra "a" no seu nome é ${nome.lastIndexOf("")} <br>
  As últimas 3 letras do nome são: ${nome.slice(-3)} <br>
  As palavras do seu nome são: ${nome.split(" ").join("|")}
`;
