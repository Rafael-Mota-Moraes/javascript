const alunos = ["Luiz", "Maria", "João"];

alunos[0] = "Eduardo";
alunos[5] = "Luiza";
alunos.unshift("Célia");
alunos.push("Marcia");
delete alunos[1];
alunos.pop();

console.log(alunos);
console.log(alunos[0], alunos[1], alunos[2]);
console.log(alunos.length);

console.log(typeof alunos);
console.log(alunos instanceof Array);
