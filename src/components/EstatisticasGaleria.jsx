function EstatisticasGaleria({
  totalFotos,
  totalCurtidas
}) {
  return (

    <div
      className="
        grid
        md:grid-cols-3
        gap-8
        mb-16
      "
    >

      <div className="bg-white rounded-3xl shadow-lg p-8 text-center">

        <div className="text-5xl mb-4">
          📷
        </div>

        <h2 className="text-4xl font-black text-blue-600">
          {totalFotos}
        </h2>

        <p className="mt-3 text-slate-600">
          Fotos
        </p>

      </div>

      <div className="bg-white rounded-3xl shadow-lg p-8 text-center">

        <div className="text-5xl mb-4">
          ❤️
        </div>

        <h2 className="text-4xl font-black text-red-600">
          {totalCurtidas}
        </h2>

        <p className="mt-3 text-slate-600">
          Curtidas
        </p>

      </div>

      <div className="bg-white rounded-3xl shadow-lg p-8 text-center">

        <div className="text-5xl mb-4">
          👥
        </div>

        <h2 className="text-4xl font-black text-green-600">
          Vila Moraes
        </h2>

        <p className="mt-3 text-slate-600">
          Nossa Comunidade
        </p>

      </div>

    </div>

  );
}

export default EstatisticasGaleria;