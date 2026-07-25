const imagens = [

  {
    imagem: "/imagens/comunidade.jpeg",
    titulo: "Nossa Vila Moraes",
    descricao:
      "Um bairro formado por histórias, famílias e pessoas que constroem a comunidade todos os dias."
  },


  {
    imagem: "/imagens/historia.jpeg",
    titulo: "Histórias da Comunidade",
    descricao:
      "A proximidade com os moradores é o que fortalece a construção de um futuro melhor."
  },


  {
    imagem: "/imagens/participacao.jpeg",
    titulo: "Participação Popular",
    descricao:
      "Ouvir, dialogar e construir soluções junto com a comunidade."
  },


  {
    imagem: "/imagens/comunidade2.jpeg",
    titulo: "Nossa Região",
    descricao:
      "Valorizar o bairro e buscar melhorias para quem vive aqui."
  }

];



function Galeria() {


  return (

    <section
      id="galeria"
      className="
      py-24
      bg-white
      "
    >


      <div
        className="
        max-w-6xl
        mx-auto
        px-6
        "
      >


        <div
          className="
          text-center
          mb-14
          "
        >


          <span
            className="
            bg-green-600
            text-white
            px-4
            py-2
            rounded-full
            font-bold
            "
          >

            Nossa Comunidade

          </span>



          <h2
            className="
            mt-6
            text-4xl
            font-black
            text-gray-900
            "
          >

            Momentos e histórias da Vila Moraes

          </h2>



          <p
            className="
            mt-4
            text-lg
            text-gray-600
            "
          >

            Um espaço para valorizar as pessoas,
            histórias e lugares que fazem parte
            da nossa comunidade.

          </p>


        </div>





        <div
          className="
          grid
          md:grid-cols-4
          gap-8
          "
        >



          {imagens.map((item,index)=>(


            <div
              key={index}
              className="
              bg-gray-100
              rounded-3xl
              overflow-hidden
              shadow-lg
              hover:-translate-y-2
              transition
              "
            >


              <img
                src={item.imagem}
                alt={item.titulo}
                className="
                w-full
                h-64
                object-cover
                "
              />



              <div
                className="
                p-6
                "
              >


                <h3
                  className="
                  text-xl
                  font-bold
                  text-gray-900
                  "
                >

                  {item.titulo}

                </h3>



                <p
                  className="
                  mt-3
                  text-gray-600
                  "
                >

                  {item.descricao}

                </p>


              </div>


            </div>


          ))}


        </div>


      </div>


    </section>

  );

}


export default Galeria;