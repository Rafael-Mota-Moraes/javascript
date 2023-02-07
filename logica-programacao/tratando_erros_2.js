try {
  // Executado quando não há erros
  console.log("Abri um arquivo");
  console.log("Gerou um erro", a);
} catch (error) {
  // Executado quando EXISTEM erros
  console.log("Tratando o erro.");
} finally {
  // Executado SEMPRE
  console.log("Eu sempre sou executado!");
}
