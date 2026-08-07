import { useEffect, useState } from "react";
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  increment,
  onSnapshot,
} from "firebase/firestore";

import { db } from "../firebase";

function ContadorVisitas() {
  const [visitas, setVisitas] = useState(0);

  useEffect(() => {
    const referencia = doc(db, "estatisticas", "visitas");

    async function registrarVisita() {
      try {
        const visitou = localStorage.getItem("visitou-denis");

        if (!visitou) {
          const documento = await getDoc(referencia);

          if (documento.exists()) {
            await updateDoc(referencia, {
              contador: increment(1),
            });
          } else {
            await setDoc(referencia, {
              contador: 1,
            });
          }

          localStorage.setItem("visitou-denis", "true");
        }
      } catch (erro) {
        console.error("Erro ao registrar visita:", erro);
      }
    }

    registrarVisita();

    const cancelar = onSnapshot(
      referencia,
      (documento) => {
        if (documento.exists()) {
          setVisitas(documento.data().contador || 0);
        }
      },
      (erro) => {
        console.error("Erro ao ouvir contador:", erro);
      }
    );

    return () => cancelar();
  }, []);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-black text-gray-900">
          🤝 Nossa comunidade está crescendo
        </h2>

        <p className="mt-4 text-lg text-gray-600">
          Mais de{" "}
          <span className="mx-2 text-4xl font-black text-blue-600">
            +{visitas}
          </span>
          pessoas já conheceram nossa história.
        </p>
      </div>
    </section>
  );
}

export default ContadorVisitas;