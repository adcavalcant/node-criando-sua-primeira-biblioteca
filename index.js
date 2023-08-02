import chalk from "chalk"; // module
import fs from "fs";

function trataErro(erro) {
  console.log(erro);
  throw new Error(chalk.red(erro.code, `não há arquivo no diretório`));
}

async function pegaArquivo(caminhoDoArquivo) {
  try {
    const enconding = "utf-8";
    const texto = await fs.promises.readFile(caminhoDoArquivo, enconding);
    console.log(chalk.green(texto));
  } catch (error) {
    trataErro(error);
  }
}

// //promises com .then
// function pegaArquivo() {
//   const encoding = "utf-8";
//   fs.promises
//     .readFile(caminhoDoArquivo, encoding)
//     .then((texto) => console.log(chalk.green(texto)))
//     .catch(trataErro);
// }

// function pegaArquivo(caminhoDoArquivo) {
//   const encoding = "utf-8";
//   fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
//     if(erro){
//       trataErro(erro);
//     }
//     console.log(chalk.green(texto));
//   });
// }

pegaArquivo("./arquivos/texto.md");
pegaArquivo("./arquivos/texto.m");
