function meuEscopo() {
  const form = document.querySelector(".form");
  const resultado = document.querySelector(".resultado");

  const pessoas = [];

  form.addEventListener("submit", function (evento) {
    evento.preventDefault();
    const nome = form.querySelector(".nome");
    const sobrenome = form.querySelector(".sobrenome");
    const peso = form.querySelector(".peso");
    const altura = form.querySelector(".altura");

    pessoas.push({
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value
    });

    resultado.innerHTML += `
      <p>
        Nome: ${nome.value}<br>
        Sobrenome: ${sobrenome.value}<br> 
        Peso: ${peso.value} <br>
        Altura: ${altura.value}
      </p>
      <hr>
    `;
  });
}

meuEscopo();
