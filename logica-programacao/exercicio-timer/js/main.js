function criaHoraDosSegundos(segundos) {
  const data = new Date(segundos * 1000);
  return data.toLocaleTimeString("pt-BR", { hour12: false, timeZone: "GMT" });
}

const relogio = document.querySelector(".relogio");
const iniciar = document.querySelector(".iniciar");
const pauzar = document.querySelector(".pauzar");
const zerar = document.querySelector(".zerar");
let segundos = 0;
let timer;

function iniciaRelogio() {
  timer = setInterval(function () {
    segundos++;
    relogio.innerHTML = criaHoraDosSegundos(segundos);
  }, 1000);
}

iniciar.addEventListener("click", function (event) {
  relogio.classList.remove("pauzado");
  clearInterval(timer);
  iniciaRelogio();
});

pauzar.addEventListener("click", function (event) {
  relogio.classList.add("pauzado");
  clearInterval(timer);
});

zerar.addEventListener("click", function (event) {
  relogio.classList.remove("pauzado");
  clearInterval(timer);
  segundos = 0;
  relogio.innerHTML = "00:00:00";
});
