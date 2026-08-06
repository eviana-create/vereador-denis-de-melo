import { useEffect } from "react";
import BotaoCurtir from "./BotaoCurtir";

function ModalFoto({
  aberto,
  foto,
  fotos,
  curtidas,
  onFechar,
  onCurtir,
  onAnterior,
  onProxima
}) {

  useEffect(() => {

    if (!aberto) return;

    function teclado(event) {

      if (event.key === "Escape") {
        onFechar();
      }

      if (event.key === "ArrowLeft") {
        onAnterior();
      }

      if (event.key === "ArrowRight") {
        onProxima();
      }

    }

    window.addEventListener("keydown", teclado);

    document.body.style.overflow = "hidden";

    return () => {

      window.removeEventListener("keydown", teclado);

      document.body.style.overflow = "auto";

    };

  }, [aberto, onFechar, onAnterior, onProxima]);

  if (!aberto || !foto) return null;

  return (

    <div
      className="
      fixed
      inset-0
      z-50
      bg-black/90
      flex
      items-center
      justify-center
      p-4
      "
      onClick={onFechar}
    >

      <div
        onClick={(e) => e.stopPropagation()}
        className="
        relative
        bg-white
        rounded-3xl
        overflow-hidden
        shadow-2xl
        max-w-6xl
        w-full
        max-h-[95vh]
        "
      >

        {/* BOTÃO FECHAR */}

        <button
          onClick={onFechar}
          className="
          absolute
          right-4
          top-4
          z-20
          w-12
          h-12
          rounded-full
          bg-black/70
          text-white
          text-3xl
          hover:bg-red-600
          transition
          "
        >
          ×
        </button>

        {/* FOTO */}

        <img
          src={foto.imagem}
          alt={foto.titulo}
          className="
          w-full
          max-h-[70vh]
          object-contain
          bg-black
          "
        />

        {/* CONTEÚDO */}

        <div className="p-8">

          <span
            className="
            inline-block
            bg-blue-100
            text-blue-700
            px-4
            py-1
            rounded-full
            text-sm
            font-bold
            "
          >
            {foto.categoria}
          </span>

          <h2
            className="
            text-4xl
            font-black
            mt-5
            "
          >
            {foto.titulo}
          </h2>

          <p
            className="
            mt-5
            text-slate-600
            leading-8
            "
          >
            {foto.descricao}
          </p>

          <div className="mt-8">

            <BotaoCurtir
              fotoId={foto.id}
              curtidas={curtidas}
              onCurtir={onCurtir}
            />

          </div>

        </div>

        {/* ANTERIOR */}

        <button
          onClick={onAnterior}
          className="
          absolute
          left-4
          top-1/2
          -translate-y-1/2
          w-14
          h-14
          rounded-full
          bg-white
          text-3xl
          shadow-xl
          hover:bg-blue-600
          hover:text-white
          transition
          "
        >
          ‹
        </button>

        {/* PRÓXIMA */}

        <button
          onClick={onProxima}
          className="
          absolute
          right-4
          top-1/2
          -translate-y-1/2
          w-14
          h-14
          rounded-full
          bg-white
          text-3xl
          shadow-xl
          hover:bg-blue-600
          hover:text-white
          transition
          "
        >
          ›
        </button>

      </div>

    </div>

  );

}

export default ModalFoto;