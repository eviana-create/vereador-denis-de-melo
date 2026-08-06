import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GaleriaDenis from "../components/GaleriaDenis";

const fotos = [
  {
    imagem: "/imagens/denis/denis1.jpeg",
    titulo: "Caminhada pela comunidade",
    descricao:
      "Momentos de diálogo, escuta e aproximação com os moradores.",
  },
  {
    imagem: "/imagens/denis/denis2.jpeg",
    titulo: "Ao lado da população",
    descricao:
      "Construindo ideias e buscando melhorias para a região.",
  },
  {
    imagem: "/imagens/denis/denis3.jpeg",
    titulo: "Participação comunitária",
    descricao:
      "Cada encontro fortalece a união e o compromisso com a comunidade.",
  },
  {
    imagem: "/imagens/denis/denis4.jpeg",
    titulo: "Nossa trajetória",
    descricao:
      "Uma caminhada construída com respeito, trabalho e participação.",
  },
];

function Galeria() {
  const [fotoSelecionada, setFotoSelecionada] = useState(null);

  function abrirFoto(index) {
    setFotoSelecionada(index);
  }

  function fecharFoto() {
    setFotoSelecionada(null);
  }

  function proximaFoto() {
    setFotoSelecionada((fotoAtual) =>
      fotoAtual === fotos.length - 1 ? 0 : fotoAtual + 1
    );
  }

  function fotoAnterior() {
    setFotoSelecionada((fotoAtual) =>
      fotoAtual === 0 ? fotos.length - 1 : fotoAtual - 1
    );
  }

  useEffect(() => {
    function controlarTeclado(event) {
      if (fotoSelecionada === null) return;

      if (event.key === "Escape") {
        fecharFoto();
      }

      if (event.key === "ArrowRight") {
        proximaFoto();
      }

      if (event.key === "ArrowLeft") {
        fotoAnterior();
      }
    }

    window.addEventListener("keydown", controlarTeclado);

    return () => {
      window.removeEventListener("keydown", controlarTeclado);
    };
  }, [fotoSelecionada]);

  return (
    <main className="min-h-screen bg-slate-100">

      {/* CABEÇALHO */}
      <section className="bg-gradient-to-br from-blue-950 via-blue-800 to-blue-600 py-24 text-white">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <span className="inline-block bg-white/15 border border-white/20 px-5 py-2 rounded-full font-bold">
            📷 Momentos da Comunidade
          </span>

          <h1 className="text-4xl md:text-6xl font-black mt-6">
            Galeria do Denis
          </h1>

          <p className="max-w-2xl mx-auto mt-6 text-lg text-blue-100 leading-8">
            Registros de encontros, visitas, ações e momentos importantes
            construídos ao lado da comunidade.
          </p>

        </div>

      </section>

      {/* GALERIA */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {fotos.map((foto, index) => (

            <article
              key={foto.imagem}
              className="
                bg-white
                rounded-3xl
                overflow-hidden
                shadow-lg
                hover:shadow-2xl
                transition
                duration-300
                hover:-translate-y-2
              "
            >

              <button
                type="button"
                onClick={() => abrirFoto(index)}
                className="
                  block
                  w-full
                  overflow-hidden
                  cursor-pointer
                  group
                "
                aria-label={`Ampliar: ${foto.titulo}`}
              >

                <img
                  src={foto.imagem}
                  alt={foto.titulo}
                  className="
                    w-full
                    h-80
                    object-cover
                    transition
                    duration-500
                    group-hover:scale-110
                  "
                />

              </button>

              <div className="p-7">

                <h2 className="text-2xl font-black text-slate-900">
                  {foto.titulo}
                </h2>

                <p className="text-slate-600 leading-7 mt-3">
                  {foto.descricao}
                </p>

                <button
                  type="button"
                  onClick={() => abrirFoto(index)}
                  className="
                    mt-6
                    inline-flex
                    items-center
                    gap-2
                    text-blue-700
                    font-bold
                    hover:text-blue-900
                    transition
                  "
                >
                  🔍 Ver foto
                </button>

              </div>

            </article>

          ))}

        </div>

        {/* VOLTAR */}
        <div className="text-center mt-16">

          <Link
            to="/"
            className="
              inline-flex
              items-center
              gap-2
              bg-blue-600
              hover:bg-blue-700
              text-white
              px-8
              py-4
              rounded-xl
              font-bold
              shadow-lg
              transition
              hover:-translate-y-1
            "
          >
            ← Voltar para a página inicial
          </Link>

        </div>

      </section>

      {/* MODAL */}
      {fotoSelecionada !== null && (

        <div
          className="
            fixed
            inset-0
            z-[100]
            bg-black/90
            flex
            items-center
            justify-center
            p-4
          "
          onClick={fecharFoto}
          role="dialog"
          aria-modal="true"
          aria-label="Visualização da foto"
        >

          <div
            className="
              relative
              max-w-6xl
              w-full
              max-h-[95vh]
            "
            onClick={(event) => event.stopPropagation()}
          >

            {/* FECHAR */}
            <button
              type="button"
              onClick={fecharFoto}
              className="
                absolute
                -top-3
                -right-2
                z-10
                w-12
                h-12
                rounded-full
                bg-white
                text-slate-900
                text-2xl
                font-black
                shadow-xl
                hover:bg-slate-200
                transition
              "
              aria-label="Fechar foto"
            >
              ×
            </button>

            {/* IMAGEM */}
            <img
              src={fotos[fotoSelecionada].imagem}
              alt={fotos[fotoSelecionada].titulo}
              className="
                w-full
                max-h-[75vh]
                object-contain
                rounded-2xl
                bg-black
              "
            />

            {/* INFORMAÇÕES */}
            <div className="bg-white rounded-b-2xl p-6">

              <h2 className="text-2xl font-black text-slate-900">
                {fotos[fotoSelecionada].titulo}
              </h2>

              <p className="text-slate-600 mt-2">
                {fotos[fotoSelecionada].descricao}
              </p>

            </div>

            {/* ANTERIOR */}
            <button
              type="button"
              onClick={fotoAnterior}
              className="
                absolute
                left-2
                top-1/2
                -translate-y-1/2
                w-12
                h-12
                rounded-full
                bg-white/90
                text-slate-900
                text-3xl
                font-black
                shadow-xl
                hover:bg-white
                transition
              "
              aria-label="Foto anterior"
            >
              ‹
            </button>

            {/* PRÓXIMA */}
            <button
              type="button"
              onClick={proximaFoto}
              className="
                absolute
                right-2
                top-1/2
                -translate-y-1/2
                w-12
                h-12
                rounded-full
                bg-white/90
                text-slate-900
                text-3xl
                font-black
                shadow-xl
                hover:bg-white
                transition
              "
              aria-label="Próxima foto"
            >
              ›
            </button>

          </div>

        </div>

      )}

    </main>
  );
}

export default Galeria;