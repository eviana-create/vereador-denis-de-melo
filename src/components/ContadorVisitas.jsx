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
  py-12
  bg-white
  "
>

<div
className="
max-w-4xl
mx-auto
px-6
text-center
"
>

<h2
className="
text-3xl
font-black
text-gray-900
"
>

🤝 Nossa comunidade está crescendo

</h2>


<p
className="
mt-4
text-lg
text-gray-600
"
>

Mais de

<span
className="
mx-2
text-4xl
font-black
text-blue-600
"
>
+{visitas}
</span>

pessoas já conheceram nossa história.

</p>


</div>

</section>

);

}


export default ContadorVisitas;