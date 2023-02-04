const tresHoras = 60 * 60 * 3 * 1000;
const data = new Date();
const dataZero = new Date(0 + tresHoras);

console.log(data.toString());
console.log(dataZero.toString());

console.log("Dia:", data.getDate());
console.log(data.getMilliseconds());
