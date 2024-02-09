// loops -- for, while, do..while, for..in, for..of
/// for
i = 0;
for(let i = 0;i < 5;i++) {  // mesma coisa que digitar 5 linhas de console.log('estou aprendendo')
    console.log('estou aprendendo', i);
}

for(let i = 0; i <=5; i++) {
    if(i % 2 !== 0) {
        console.log(i);
    }
}

/// while -- primeiro verifica, depois executa, ao contrario do do...while
let z = 5;

while (z >= 1) {
    if(z % 2 !== 0){
        console.log(z);
    }
    z--;
}

/// do..while -- pouco usado, ele executa e depois verifica, ao contrario do while
let x = 0;
do {
    console.log('digitando', x)
    x++;
} while (x < 3)

/// for..in -- busca informaçoes em um objeto
const carro = {
    marca: 'mazda',
    modelo: 'rx7'
};

for(let key in carro) {
    console.log(key, carro.marca, carro['modelo']); // as duas formas de acessar a informaçao
}


const cores =['vermelho','azul','preto','branco'];

for (let index in cores) {
    console.log(index, cores[index]);
}

/// for...of 
for(let cor of cores) {
    console.log(cor);
}

const paredes = ['frente','tras','janela','porta'];
for(let parede of paredes) {
    console.log(parede);
}