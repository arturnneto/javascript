// operadores logicos -- aritimeticos, atribuiçao, comparaçao, logicos e bitwise
///aritmeticos -- +, -, *, /, **
let salario = 100;
console.log(salario + salario);
console.log(salario - salario);
console.log(salario * salario);
console.log(salario / salario);
console.log(2 ** 3);

/// ++ --
let idadeB = 20;
console.log(++idade);
console.log(idade++); // caso o ++ seja antes, o novo valor ja sai no print da linha, se for depois só no proximo
console.log(idade);

/// atribuiçao
let valorMouse = 100;
console.log(valorMouse);

valorMouse += valorMouse; // faz o mesmo que valorMouse = valorMouse + valorMouse ---- funciona com -= tambem ou *= ou /=
console.log(valorMouse);

///igualdade
console.log(1 === 1);
console.log('1' === 1); // compara o tipo tambem
console.log(1 == 1); // compara apenas valor
console.log('1' == 1); // nao é recomendado, isso vai dar true

///ternario -- ex: se um cliente tiver mais de 100 pontos, ele é um cliente premium
let pontos = 100;
let tipoCliente = pontos > 100 ? 'premium' : 'comum'; // funciona assim: let variavel = variavelMedida > 100 ? 'premium' <- caso seja true : 'comum' <- caso seja false
console.log(tipoCliente);