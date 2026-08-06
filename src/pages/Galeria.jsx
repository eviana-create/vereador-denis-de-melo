import { Link } from "react-router-dom";
import GaleriaDenis from "../components/GaleriaDenis";

function Galeria() {
  return (
    <>

      <GaleriaDenis />

      <div
        className="
          bg-slate-100
          pb-16
          text-center
        "
      >

        <Link
          to="/"
          className="
            bg-blue-600
            hover:bg-blue-700
            text-white
            px-8
            py-4
            rounded-xl
            font-bold
            transition
          "
        >
          ← Voltar para início
        </Link>

      </div>

    </>
  );
}

export default Galeria;