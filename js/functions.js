// funcoes -- verbo + substantivo

let corSite = "azul";

function resetaCor(){
    corSite = "";
};

console.log(corSite);
resetaCor();
console.log(corSite);

// parametros na funçao

function escolherCor(cor){
    corSite = cor;
};

console.log(corSite);
escolherCor("vermelho");
console.log(corSite);

// mais de um parametro

function escolherCorDois(cor, tonalidade){
    corSite = cor + ' ' + tonalidade;
};

console.log(corSite);
escolherCorDois("vermelho","forte");
console.log(corSite);

// tipos de funçoes
/// realiza tarefa, devolve nada

function dizerNome(){
    console.log("Artur");
};

dizerNome();

/// realiza tarefa e devolve informaçao

function multiplicarPorDois(valor){
    return valor * 2;
};

let resultado = multiplicarPorDois(5);
console.log(resultado);

// mini desafio

let carrosFavoritos = ["RX7", "Evo 9"]
console.log(carrosFavoritos);

function novoFavorito(carro){
    carrosFavoritos.push(carro)
};

novoFavorito("911");
console.log(carrosFavoritos);