const TOTAL_FOTOS = 32;


const dados = [
  {
    titulo: "Mutirão na comunidade",
    descricao:
      "Momentos de união entre moradores, fortalecendo o espírito comunitário e o cuidado com o bairro.",
    categoria: "Comunidade",
  },
  {
    titulo: "Ao lado das pessoas",
    descricao:
      "Conversando com moradores, ouvindo sugestões e entendendo de perto as necessidades da população.",
    categoria: "Comunidade",
  },
  {
    titulo: "Participação comunitária",
    descricao:
      "Acompanhando ações e iniciativas que contribuem para uma comunidade mais organizada.",
    categoria: "Eventos",
  },
  {
    titulo: "Projetos para o bairro",
    descricao:
      "Cada encontro representa um compromisso com melhorias para a Vila Moraes e região.",
    categoria: "Projetos",
  },
  {
    titulo: "Conhecendo histórias",
    descricao:
      "Visitas que aproximam pessoas e fortalecem a confiança construída ao longo dos anos.",
    categoria: "Reuniões",
  },
  {
    titulo: "Diálogo com a comunidade",
    descricao:
      "Escutar a população sempre foi o primeiro passo para construir soluções reais.",
    categoria: "Reuniões",
  },
];


const fotos = Array.from(
  { length: TOTAL_FOTOS },
  (_, index) => {

    const info =
      dados[index % dados.length];


    return {

      id:
        `denis${index + 1}`,

      imagem: `/imagens/galeriadenis/denis${index + 1}.jpeg`,

      titulo:
        info.titulo,

      descricao:
        info.descricao,

      categoria:
        info.categoria

    };

  }
);


export default fotos;