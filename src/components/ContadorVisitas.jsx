import { useEffect, useState } from "react";
import { doc, getDoc, updateDoc, setDoc, increment } from "firebase/firestore";
import { db } from "../firebase";


function ContadorVisitas() {

  const [visitas, setVisitas] = useState(0);


  useEffect(() => {


    async function registrarVisita() {


      const visitou =
        localStorage.getItem("visitou-denis");


      const referencia =
        doc(db, "estatisticas", "visitas");



      if (!visitou) {


        const documento =
          await getDoc(referencia);



        if (documento.exists()) {


          await updateDoc(
            referencia,
            {
              contador: increment(1)
            }
          );


        } else {


          await setDoc(
            referencia,
            {
              contador: 1
            }
          );


        }


        localStorage.setItem(
          "visitou-denis",
          "true"
        );


      }



      const atual =
        await getDoc(referencia);



      if (atual.exists()) {

        setVisitas(
          atual.data().contador
        );

      }


    }


    registrarVisita();


  }, []);



  return (

    <section
      className="
      py-10
      bg-gray-100
      "
    >

      <div
        className="
        text-center
        "
      >

        <h2
          className="
          text-2xl
          font-bold
          text-gray-900
          "
        >

          🤝 Nossa comunidade está crescendo

        </h2>


        <p
          className="
          mt-3
          text-gray-600
          "
        >

          <strong>
            +{visitas}
          </strong>

          pessoas já conheceram nossa história

        </p>


      </div>

    </section>

  );

}


export default ContadorVisitas;