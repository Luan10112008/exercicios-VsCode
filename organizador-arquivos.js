const path = require('path');

console.log('--- EXTRAINDO INFORMAÇÕES ---\n');

const arquivoCompleto = '/home/usuario/projetos/meu-app/src/index.js';
console.log('caminho original:', arquivoCompleto);
console.log('');

const nomeArquivo = path.basename(arquivoCompleto);
console.log('Nome do arquivo:', nomeArquivo);

const nomeSemExtensao = path.basename(arquivoCompleto, '.js');
console.log('Nome sem extensão:', nomeSemExtensao);

const extensao = path.extname(arquivoCompleto);
console.log('Extensão:', extensao);

const pastaPai = path.dirname(arquivoCompleto);
console.log('Pasta pai:', pastaPai);

console.log('\n--- EXEMPLO PRÁTICO ---');

function analisarArquivo(caminhoArquivo) {
  console.log('\nAnalisando:', caminhoArquivo);
  console.log(''.repeat(50));
  console.log('Nome completo:', path.basename(caminhoArquivo));
  console.log('Nome sem ext.:', path.basename(caminhoArquivo, path.extname(caminhoArquivo)));
  console.log('Extensão:', path.extname(caminhoArquivo));
  console.log('Pasta:', path.dirname(caminhoArquivo));
  console.log('Absoluto:', path.resolve(caminhoArquivo));
}

analisarArquivo('documento.pdf');
analisarArquivo('fotos/ferias.jpg');
analisarArquivo('../backup/dados.json');
analisarArquivo('C:\\Users\\João\\Desktop\\apresentacao.pptx');