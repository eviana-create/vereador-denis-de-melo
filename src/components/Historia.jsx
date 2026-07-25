function Historia() {

  return (

    <section
      id="historia"
      className="
      py-24
      bg-white
      "
    >


      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        grid
        md:grid-cols-2
        gap-12
        items-center
        "
      >



        {/* Texto */}

        <div>


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

            Minha História

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

            Uma vida construída
            junto com a comunidade

          </h2>




          <p
            className="
            mt-6
            text-lg
            text-gray-700
            leading-relaxed
            "
          >

            Nascido em São Bernardo do Campo,
            Denis de Melo conhece de perto a realidade
            das famílias da Vila Moraes e região do
            Grande Alvarenga.

          </p>




          <p
            className="
            mt-4
            text-lg
            text-gray-700
            leading-relaxed
            "
          >

            Com origem humilde e convivendo diariamente
            com os desafios do bairro, acredita que a
            transformação acontece através da participação,
            diálogo e união das pessoas.

          </p>




          <div
            className="
            mt-8
            grid
            grid-cols-2
            gap-4
            "
          >


            <div
              className="
              bg-blue-50
              p-5
              rounded-xl
              "
            >

              <strong
                className="
                text-blue-900
                text-xl
                "
              >

                🏠 Vila Moraes

              </strong>

              <p className="text-gray-600 mt-2">

                Raízes e história no bairro.

              </p>

            </div>




            <div
              className="
              bg-green-50
              p-5
              rounded-xl
              "
            >

              <strong
                className="
                text-green-800
                text-xl
                "
              >

                🤝 Comunidade

              </strong>

              <p className="text-gray-600 mt-2">

                Construindo soluções juntos.

              </p>


            </div>


          </div>



        </div>






        {/* Imagem */}

        <div>

          <img
            src="/imagens/vila-moraes.jpeg"
            alt="Vila Moraes"
            className="
            rounded-3xl
            shadow-xl
            w-full
            h-[450px]
            object-cover
            "
          />

        </div>




      </div>


    </section>

  )

}


export default Historia