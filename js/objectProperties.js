// objetos dinamicos
const mouse = {
    cor: 'preto',
    marca: 'Corsair'
}

mouse.velocidade = 5000
mouse.trocarDPI = function () {
    console.log('Trocando DPI')
}
delete mouse.velocidade
delete mouse.trocarDPI
console.log(mouse)

// Clonar objetos
const carroNovo = {
    marca: 'Mitsubishi',
    modelo: 'Lancer Evolution',
    potencia: {
        cavalos: 280,
        torque: 38
    },
    som: function() {
        console.log('stutututu')
    }
}

// object.assign({'novos parametros'},'objeto a ser clonado)
const objetoClonado = Object.assign({
    cor: 'Preto'
},carroNovo)

const objetoClonado2 = {...carroNovo}
console.log(carroNovo);
console.log(objetoClonado);
console.log(objetoClonado2);