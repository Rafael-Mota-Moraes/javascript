const h1 = document.querySelector("#date-heading");
const data = new Date();

h1.innerText = data.toLocaleDateString("pt-BR", { dateStyle: "full" });
