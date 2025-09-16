const Logger = require('./logger');

async function testarLogger(){
    console.log('🚀 Iniciando teste do Logger...');

    const logger = new Logger('teste.log');

    await logger.info('Aplicação iniciada com sucesso!');
    await logger.info('Esta é uma mensagem de aviso');
    await logger.info('Simulando um erro de teste');

    console.log('✅ Teste concluído! Verifique o arquivo teste.log')
}

testarLogger();