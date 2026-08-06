const TOTAL_FOTOS = 32;

const categorias = [
  "Comunidade",
  "Eventos",
  "Reuniões",
  "Projetos"
];

const fotos = Array.from({ length: TOTAL_FOTOS }, (_, index) => ({
  id: `denis${index + 1}`,
  imagem: `/imagens/galeriadenis/denis${index + 1}.jpeg`,
  titulo: `Momento ${index + 1}`,
  descricao: "Registro da caminhada ao lado da comunidade.",
  categoria: categorias[index % categorias.length]
}));

export default fotos;