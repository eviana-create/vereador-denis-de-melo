import { useEffect, useState } from "react";
import Card from "./ui/Card";
import SectionTitle from "./ui/SectionTitle";

function CardNumero({ emoji, numeroFinal, titulo }) {
  const [numero, setNumero] = useState(0);

  useEffect(() => {
    let inicio = 0;

    const intervalo = setInterval(() => {
      inicio += Math.ceil(numeroFinal / 40);

      if (inicio >= numeroFinal) {
        inicio = numeroFinal;
        clearInterval(intervalo);
      }

      setNumero(inicio);
    }, 40);

    return () => clearInterval(intervalo);
  }, [numeroFinal]);

  return (
    <Card className="text-center">
      <div className="text-5xl mb-5">
        {emoji}
      </div>

      <h3 className="text-5xl font-black text-blue-600">
        {numero}
      </h3>

      <p className="mt-4 text-slate-600 font-medium leading-7">
        {titulo}
      </p>
    </Card>
  );
}

function Numeros() {
  return (
    <section className="py-24 bg-slate-100">
      <div className="max-w-7xl mx-auto px-6">

        <SectionTitle
          badge="Nossa Caminhada"
          titulo="Nossa caminhada em números"
          descricao="Cada visita, cada conversa e cada ação representam um passo importante na construção de uma comunidade mais forte."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <CardNumero
            emoji="👥"
            numeroFinal={548}
            titulo="Pessoas que conheceram o projeto"
          />

          <CardNumero
            emoji="❤️"
            numeroFinal={328}
            titulo="Apoios recebidos"
          />

          <CardNumero
            emoji="📷"
            numeroFinal={24}
            titulo="Momentos registrados"
          />

          <CardNumero
            emoji="🤝"
            numeroFinal={4}
            titulo="Compromissos"
          />

        </div>

      </div>
    </section>
  );
}

export default Numeros;