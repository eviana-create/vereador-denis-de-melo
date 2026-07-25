function Causas() {

  const causas = [

    {
      icone: "🏘️",
      titulo: "Urbanização",
      descricao:
        "Buscar melhorias na infraestrutura dos bairros, valorizando os espaços onde as famílias vivem."
    },


    {
      icone: "💧",
      titulo: "Saneamento Básico",
      descricao:
        "Apoiar ações que contribuam para melhores condições de água, esgoto e qualidade de vida."
    },


    {
      icone: "💡",
      titulo: "Iluminação",
      descricao:
        "Defender melhorias na iluminação pública e mais atenção às necessidades dos moradores."
    },


    {
      icone: "🤝",
      titulo: "Comunidade Participativa",
      descricao:
        "Criar diálogo constante entre moradores e representantes para construir soluções."
    }

  ];


  return (

    <section
      id="causas"
      className="
      py-24
      bg-gray-100
      "
    >


      <div
        className="
        max-w-7xl
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
            bg-yellow-400
            text-black
            px-4
            py-2
            rounded-full
            font-bold
            "
          >

            Minhas Causas

          </span>



          <h2
            className="
            mt-6
            text-4xl
            md:text-5xl
            font-black
            text-blue-950
            "
          >

            Melhorias que fazem diferença

          </h2>



          <p
            className="
            mt-4
            text-gray-600
            text-lg
            "
          >

            Conhecer os desafios da comunidade é o primeiro passo
            para buscar soluções.

          </p>


        </div>





        <div
          className="
          grid
          md:grid-cols-4
          gap-8
          "
        >


          {causas.map((causa,index)=>(


            <div
              key={index}
              className="
              bg-white
              rounded-3xl
              p-8
              shadow-lg
              hover:-translate-y-2
              transition
              "
            >


              <div
                className="
                text-5xl
                "
              >

                {causa.icone}

              </div>



              <h3
                className="
                mt-6
                text-xl
                font-bold
                text-blue-950
                "
              >

                {causa.titulo}

              </h3>



              <p
                className="
                mt-4
                text-gray-600
                leading-relaxed
                "
              >

                {causa.descricao}

              </p>


            </div>


          ))}


        </div>


      </div>


    </section>

  )

}


export default Causas