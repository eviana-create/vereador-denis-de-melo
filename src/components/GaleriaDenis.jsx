import { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  increment
} from "firebase/firestore";


const fotosDenis = [

  {
    id: "denis1",
    imagem: "/imagens/denis/denis1.jpeg",
    titulo: "Minha trajetória",
    descricao:
      "Uma caminhada construída com trabalho, dedicação e proximidade com as pessoas."
  },


  {
    id: "denis2",
    imagem: "/imagens/denis/denis2.jpeg",
    titulo: "Momentos especiais",
    descricao:
      "Cada momento representa uma parte da minha história."
  },


  {
    id: "denis3",
    imagem: "/imagens/denis/denis3.jpeg",
    titulo: "Comunidade",
    descricao:
      "Estar próximo das pessoas sempre fez parte da minha caminhada."
  },


  {
    id: "denis4",
    imagem: "/imagens/denis/denis4.jpeg",
    titulo: "Nossa história",
    descricao:
      "Construindo caminhos junto com a comunidade."
  }

];



function GaleriaDenis() {


  const [curtidas, setCurtidas] = useState({});



  useEffect(() => {

    carregarCurtidas();

  }, []);



  async function carregarCurtidas(){

    const resultado = {};

    for(const foto of fotosDenis){

      const referencia = doc(
        db,
        "galeriaDenis",
        foto.id
      );


      const dados = await getDoc(referencia);


      if(dados.exists()){

        resultado[foto.id] =
          dados.data().curtidas || 0;

      } else {

        await setDoc(
          referencia,
          {
            curtidas: 0
          }
        );

        resultado[foto.id] = 0;

      }

    }


    setCurtidas(resultado);

  }




  async function curtir(id){


    const jaCurtiu =
      localStorage.getItem(
        `curtiu-${id}`
      );


    if(jaCurtiu){

      return;

    }



    const referencia = doc(
      db,
      "galeriaDenis",
      id
    );


    await updateDoc(
      referencia,
      {
        curtidas: increment(1)
      }
    );



    localStorage.setItem(
      `curtiu-${id}`,
      "true"
    );


    setCurtidas((atual)=>({

      ...atual,

      [id]:
        (atual[id] || 0) + 1

    }));

  }




  return (

    <section
      className="
      py-24
      bg-gray-900
      text-white
      "
    >

      <div
        className="
        max-w-6xl
        mx-auto
        px-6
        "
      >


        <div className="text-center mb-14">


          <h2
            className="
            text-4xl
            font-black
            "
          >

            Conheça minha história

          </h2>


          <p
            className="
            mt-4
            text-gray-300
            "
          >

            Momentos que fazem parte da minha caminhada.

          </p>


        </div>



        <div
          className="
          grid
          md:grid-cols-4
          gap-8
          "
        >


        {fotosDenis.map((foto)=>(


          <div
            key={foto.id}
            className="
            bg-gray-800
            rounded-3xl
            overflow-hidden
            shadow-xl
            "
          >


            <img
              src={foto.imagem}
              alt={foto.titulo}
              className="
              w-full
              h-64
              object-cover
              "
            />



            <div className="p-6">


              <h3
                className="
                text-xl
                font-bold
                "
              >
                {foto.titulo}
              </h3>



              <p
                className="
                mt-3
                text-gray-300
                "
              >

                {foto.descricao}

              </p>



              <button
                onClick={() =>
                  curtir(foto.id)
                }
                className="
                mt-5
                bg-red-600
                px-5
                py-3
                rounded-xl
                font-bold
                hover:bg-red-700
                transition
                "
              >

                ❤️ {curtidas[foto.id] || 0}

              </button>


            </div>


          </div>


        ))}


        </div>


      </div>


    </section>

  );

}


export default GaleriaDenis;