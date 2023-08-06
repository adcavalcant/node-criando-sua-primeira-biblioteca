import pegaArquivo from './index.js';

const caminho = process.argv;
pegaArquivo(caminho[2])

// rode -> node src/cli.js ./arquivos/texto.md