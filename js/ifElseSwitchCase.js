//if e else
let hora = 15;

if (hora > 6 && hora < 12) {
    console.log('Bom dia!');
}
else if (hora > 12 && hora < 18) {
    console.log('Boa tarde!');
}
else {
    console.log('Boa Noite!');
};

// switch case
let permissao = "gerente" // comum, gerente, diretor

switch (permissao) {
    case 'comum':
    console.log('usuario comum');
    break;

    case 'gerente':
    console.log('usuario gerente');
    break;

    case 'diretor':
    console.log('usuario diretor');
    break;

    default:
    console.log('usuario nao reconhecido');
}
