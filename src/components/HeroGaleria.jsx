function HeroGaleria() {
  return (
    <div className="text-center mb-16">

      <span
        className="
          inline-block
          bg-blue-600
          text-white
          px-6
          py-2
          rounded-full
          font-bold
          mb-6
        "
      >
        📷 Galeria Oficial
      </span>

      <h1
        className="
          text-5xl
          md:text-6xl
          font-black
          text-slate-900
        "
      >
        Minha caminhada
      </h1>

      <p
        className="
          mt-6
          max-w-3xl
          mx-auto
          text-xl
          text-slate-600
          leading-9
        "
      >
        Cada fotografia representa um momento importante
        da minha história ao lado da comunidade,
        construída com diálogo, trabalho e dedicação.
      </p>

    </div>
  );
}

export default HeroGaleria;