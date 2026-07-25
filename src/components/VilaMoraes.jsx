function VilaMoraes() {

  return (

    <section
      className="
      py-24
      bg-gray-100
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
          grid
          md:grid-cols-2
          gap-10
          items-center
          "
        >


          {/* Imagem */}

          <div>

            <img
              src="/imagens/vila-moraes.jpeg"
              alt="Vila Moraes"
              className="
              rounded-3xl
              shadow-xl
              w-full
              "
            />

          </div>



          {/* Texto */}

          <div>


            <span
              className="
              inline-block
              bg-blue-600
              text-white
              px-4
              py-2
              rounded-full
              font-bold
              "
            >

              Nossa Região

            </span>



            <h2
              className="
              mt-6
              text-4xl
              font-black
              text-gray-900
              "
            >

              Conheça a Vila Moraes

            </h2>



            <p
              className="
              mt-6
              text-lg
              text-gray-700
              "
            >

              Um bairro formado por histórias,
              famílias e pessoas que todos os dias
              ajudam a construir uma comunidade
              mais forte.

            </p>



            <p
              className="
              mt-4
              text-lg
              text-gray-700
              "
            >

              A Vila Moraes faz parte da trajetória
              de Denis de Melo, um lugar onde ele
              conhece de perto os desafios e as
              necessidades dos moradores.

            </p>



            <div
              className="
              mt-8
              grid
              grid-cols-3
              gap-4
              "
            >

              <div
                className="
                bg-white
                p-4
                rounded-xl
                text-center
                shadow
                "
              >

                🏘️

                <p className="font-bold">
                  Comunidade
                </p>

              </div>



              <div
                className="
                bg-white
                p-4
                rounded-xl
                text-center
                shadow
                "
              >

                🤝

                <p className="font-bold">
                  União
                </p>

              </div>



              <div
                className="
                bg-white
                p-4
                rounded-xl
                text-center
                shadow
                "
              >

                🌱

                <p className="font-bold">
                  Futuro
                </p>

              </div>


            </div>


          </div>


        </div>


      </div>


    </section>

  )

}


export default VilaMoraes;