import BotaoCurtir from "./BotaoCurtir";

function CardFoto({
  foto,
  curtidas,
  onCurtir,
  onAbrir
}) {
  return (
    <article
      className="
        bg-white
        rounded-3xl
        overflow-hidden
        shadow-lg
        hover:shadow-2xl
        transition-all
        duration-300
        hover:-translate-y-2
        group
      "
    >
      <button
        onClick={() => onAbrir(foto)}
        className="block w-full overflow-hidden"
      >
        <p>{foto.imagem}</p>
        <img
          src={foto.imagem}
          alt={foto.titulo}
          loading="lazy"
          className="
            w-full
            h-72
            object-cover
            transition-transform
            duration-500
            group-hover:scale-110
          "
        />
      </button>

      <div className="p-6">

        <span
          className="
            inline-block
            px-3
            py-1
            rounded-full
            bg-blue-100
            text-blue-700
            text-xs
            font-bold
            mb-3
          "
        >
          {foto.categoria}
        </span>

        <h3 className="text-2xl font-black">
          {foto.titulo}
        </h3>

        <p className="mt-3 text-slate-600 leading-7">
          {foto.descricao}
        </p>

        <div className="mt-6">
          <BotaoCurtir
            fotoId={foto.id}
            curtidas={curtidas}
            onCurtir={onCurtir}
          />
        </div>

      </div>
    </article>
  );
}

export default CardFoto;