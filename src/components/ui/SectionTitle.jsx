function SectionTitle({ badge, titulo, descricao }) {
  return (
    <div className="text-center mb-16">

      {badge && (
        <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full font-semibold">
          {badge}
        </span>
      )}

      <h2 className="text-4xl font-black text-slate-900 mt-6">
        {titulo}
      </h2>

      {descricao && (
        <p className="text-lg text-slate-600 max-w-3xl mx-auto mt-5 leading-8">
          {descricao}
        </p>
      )}

    </div>
  );
}

export default SectionTitle;