// operadores logicos
/// e (&&) -- retorna true se os dois forem verdadeiros
console.log(true && true);
console.log(true && false);

let maiorIdade = true;
let carteiraTrab = true;
let podeAplicar = maiorIdade && carteiraTrab;
console.log(podeAplicar)

/// ou (||) -- retorna true se uma das duas forem verdadeiras
let podeAplicarOu = maiorIdade || carteiraTrab;
console.log('pode aplicar: ', podeAplicar)

/// not (!) 
let candidatoRecusado = !podeAplicar;
console.log('candidato recusado: ', candidatoRecusado);

// comparaçoes nao booleanas
/// falsy -- undefined, null, 0, false, '', NaN (not a number)
/// truthy -- todos os outros
false || 1 || 3 // retorna 1, pois ignora o resto dps da primeira condiçao ja que nao importa

let cor = 'Vermelho';
let corPadrao = 'Azul';
let corPerfil = cor || corPadrao; // retornaria vermelho, pois nao tem pq analisar a outra 
                                  // ja que resulta em true
