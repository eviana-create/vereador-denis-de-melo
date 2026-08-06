function BotaoCurtir({
  fotoId,
  curtidas,
  onCurtir
}) {
  return (
    <button
      onClick={() => onCurtir(fotoId)}
      className="
        w-full
        bg-red-600
        hover:bg-red-700
        text-white
        py-3
        rounded-xl
        font-bold
        transition
      "
    >
      ❤️ {curtidas || 0}
    </button>
  );
}

export default BotaoCurtir;