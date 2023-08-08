function extraiLinks(arrLinks) {
  return arrLinks.map((objetoLink) => Object.values(objetoLink).join());
}

export function listaValidada(listaDeLinks) {
  return extraiLinks(listaDeLinks);
}
