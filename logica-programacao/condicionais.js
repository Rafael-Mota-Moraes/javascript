const hora = 10.59;

if (hora >= 0 && hora <= 11) {
  console.log("Bom Dia!");
} else if (hora >= 12 && hora <= 17) {
  console.log(" Boa tarde!");
} else if (hora >= 18 && hora <= 23) {
  console.log("Boa Noite");
} else {
  console.log("Hora inválida");
}
