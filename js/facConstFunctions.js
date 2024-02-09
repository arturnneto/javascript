// factory functions -- serve para criar um objeto com seus parametros
function criarCarro(marcaCarro,modeloCarro,corCarro) {
    return {
        marcaCarro,
        modeloCarro,
        corCarro,
        contarRodas() {
            console.log('Este carro tem quatro rodas.')
        }
    }
}

let acuraIntegra = criarCarro('Acura','Integra','Branco');
console.log(acuraIntegra)

// constructor functions -- mesma coisa que o factory mas usa o new -- usar o factory para isso
class CriarCelular {
    constructor(marcaCelular, tamanhoTela, capacidadeBateria) {
        this.marcaCelular = marcaCelular,
            this.tamanhoTela = tamanhoTela,
            this.capacidadeBateria = capacidadeBateria,
            this.ligar = function () {
                console.log('Efetuando chamada...');
            };
    }
}

let celular = new CriarCelular('Iphone',5.5,'5000')
console.log(celular)
