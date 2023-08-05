import chalk from "chalk"; // module
import fs from "fs";

function extraiLinks(texto) {
  const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
  const capturas = [...texto.matchAll(regex)];

  const resultados = capturas.map((captura) => ({ [captura[1]]: captura[2] }));
  return resultados;
}

function trataErro(erro) {
  console.log(erro);
  throw new Error(chalk.red(erro.code, `não há arquivo no diretório`));
}

async function pegaArquivo(caminhoDoArquivo) {
  try {
    const enconding = "utf-8";
    const texto = await fs.promises.readFile(caminhoDoArquivo, enconding);
    const mostraNoConsole = console.log;
    mostraNoConsole(extraiLinks(texto));
  } catch (error) {
    trataErro(error);
  }
}

pegaArquivo("./arquivos/texto.md");
//pegaArquivo("./arquivos/texto.m"); //->erro proposital para teste

//usar regex101.com para testar
// pega o que está dentro dos colchetes -> \[[^[\]]*?\]

// pega o que está dentro dos parênteses -> \(https?:\/\/[^\s?#.].[^\s]*\)

// pega tudo que precisamos -> \[[^[\]]*?\]\(https?:\/\/[^\s?#.].[^\s]*\)

// pega tudo que precisamos separadamente -> /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)
