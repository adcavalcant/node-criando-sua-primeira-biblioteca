import chalk from "chalk"; // module
import fs from "fs";

function extraiLinks(texto) {
  const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
  const capturas = [...texto.matchAll(regex)];

  const resultados = capturas.map((captura) => ({ [captura[1]]: captura[2] }));
  return resultados.length !== 0 ? resultados : "Nenhum link no arquivo!";
}

function trataErro(erro) {
  console.log(erro);
  throw new Error(chalk.red(erro.code, `não há arquivo no diretório`));
}

async function pegaArquivo(caminhoDoArquivo) {
  try {
    const enconding = "utf-8";
    const texto = await fs.promises.readFile(caminhoDoArquivo, enconding);
    return extraiLinks(texto);
  } catch (error) {
    trataErro(error);
  }
}
export default pegaArquivo;
