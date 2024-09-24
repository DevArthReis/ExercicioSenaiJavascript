const pessoa = {
    idade:18,
    nome:"Arthur",
    nascimento:"27/02/2004",
    cidade:"Ceilandia norte",
    profissao:"Dsenvolvedor Back-End"

}
for (let chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`); // Imprime a chave e o valor correspondente
}