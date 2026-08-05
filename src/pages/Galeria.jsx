import { Link } from "react-router-dom";

function Galeria() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-6">

      <h1 className="text-5xl font-black mb-6">
        Galeria do Denis
      </h1>

      <p className="text-gray-600 text-center max-w-xl mb-10">
        Aqui ficará a galeria completa com fotos, curtidas e momentos da comunidade.
      </p>

      <Link
        to="/"
        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition"
      >
        ← Voltar para a página inicial
      </Link>

    </div>
  );
}

export default Galeria;