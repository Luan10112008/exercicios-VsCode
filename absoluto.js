const path = require('path');

console.log('--- CAMINHOS ABSOLUTOS ---\n');

console.log('Pasta atual:', process.cwd());
console.log('');

const absoluto1 = path.resolve('documentos', 'arquivo.txt');
console.log('Arquivo 1 (absoluto):', absoluto1);

const absoluto2 = path.resolve('..', 'backup', 'dados.json');
console.log('Arquivo 2 (absoluto):', absoluto2);

const absoluto3 = path.resolve('/home/usuario/arquivo.txt');
console.log('Arquivo 3 (já absoluto):', absoluto3);

const configPath = path.resolve('config', 'database.json');
console.log('Configuração:', configPath);

console.log('\n--- DIFERENÇA ENTRE JOIN E RESOLVE ---');
console.log('join("docs", "file.txt"):', path.join('docs', 'file.txt'));
console.log('resolve("docs", "file.txt"):', path.resolve('docs', 'file.txt'));