import Card from "./ui/Card";
import SectionTitle from "./ui/SectionTitle";

const compromissos = [
  {
    icone: "🏘️",
    titulo: "Urbanização",
    descricao:
      "Buscar melhorias para ruas, calçadas, acessibilidade e espaços públicos da Vila Moraes e Grande Alvarenga.",
  },
  {
    icone: "💧",
    titulo: "Saneamento Básico",
    descricao:
      "Defender investimentos em drenagem, coleta de esgoto e infraestrutura para melhorar a qualidade de vida.",
  },
  {
    icone: "💡",
    titulo: "Iluminação Pública",
    descricao:
      "Lutar por ruas mais iluminadas, aumentando a segurança dos moradores.",
  },
  {
    icone: "🤝",
    titulo: "Participação Popular",
    descricao:
      "Ouvir os moradores e construir soluções junto com a comunidade.",
  },
];

function Compromissos() {
  return (
    <section id="compromissos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <SectionTitle
          badge="Nosso Compromisso"
          titulo="Compromissos com a comunidade"
          descricao="O desenvolvimento da Vila Moraes e da região do Grande Alvarenga depende da união entre comunidade, poder público e participação popular."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {compromissos.map((item) => (
            <Card key={item.titulo}>
              <div className="text-5xl mb-6">
                {item.icone}
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {item.titulo}
              </h3>

              <p className="text-slate-600 leading-7">
                {item.descricao}
              </p>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Compromissos;