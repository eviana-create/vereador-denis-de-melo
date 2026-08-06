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
  titulo: ``,
  descricao: "",
  
}));

export default fotos;