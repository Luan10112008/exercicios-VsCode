const colors = require('colors');

function testarCores() {
    console.log('🎨 Testando o pacote Colors!');
    console.log('');

    console.log('Este texto é vermelho!'.red);
    console.log('Este texto é verde!').green;
    console.log('Este texto é azul!'.blue);
    console.log('Este texto é amarelo!'.yellow);
    console.log('Este texto é magenta!'.magenta);
    console.log('Este texto é ciano!'.cyan);

    console.log('');

    console.log('Este texto está em negrito'.bold);
    console.log('Este texto está sublinhado'.underline);
    console.log('Este texto está invertido'.inverse);

    console.log('');

    console.log('Texto verde e negrito!'.green.bold);
    console.log('Texto azul e sublinhado!'.blue.underline);
    console.log('Texto vermelho invertido!'.red.inverse);

    console.log('');

    console.log('Texto com fundo vermelho'.bgRed);
    console.log('Texto com fundo verde'.bgGreen);
    console.log('Texto braco com fundo azul'.white.bgBlue);

    console.log('');
    console.log('🎉 Teste concluído! Seu terminal agora tem cores!'.rainbow);
}