const paragrafos = document.querySelector(".paragrafos");
const ps = paragrafos.querySelectorAll("p");

const corBody = getComputedStyle(document.body).backgroundColor;

for (let p of ps) {
  p.style.color = corBody;
}
