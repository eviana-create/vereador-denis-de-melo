function Hero() {

  return (

    <section
      id="inicio"
      className="
      relative
      min-h-screen
      flex
      items-center
      overflow-hidden
      bg-gradient-to-br
      from-blue-950
      via-blue-900
      to-green-700
      text-white
      "
    >


      {/* efeito de fundo */}

      <div
        className="
        absolute
        inset-0
        bg-black/20
        "
      ></div>



      <div
        className="
        relative
        z-10
        max-w-7xl
        mx-auto
        px-6
        py-24
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
            inline-block
            bg-yellow-400
            text-black
            px-5
            py-2
            rounded-full
            font-bold
            "
          >

            📍 São Bernardo do Campo

          </span>




          <h1
            className="
            mt-6
            text-5xl
            md:text-7xl
            font-black
            leading-tight
            "
          >

            Denis
            <br />

            de Melo

          </h1>




          <h2
            className="
            mt-5
            text-2xl
            font-semibold
            text-green-200
            "
          >

            Uma história construída
            junto com a comunidade.

          </h2>




          <p
            className="
            mt-6
            text-lg
            text-gray-200
            max-w-xl
            "
          >

            Morador da Vila Moraes, com raízes
            na comunidade e compromisso com
            melhorias para o bairro e toda região
            do Grande Alvarenga.

          </p>




          <div
            className="
            mt-8
            flex
            gap-4
            flex-wrap
            "
          >


            <a
              href="#historia"
              className="
              bg-yellow-400
              text-black
              px-8
              py-4
              rounded-xl
              font-bold
              hover:scale-105
              transition
              "
            >

              Conheça minha história

            </a>



            <a
              href="https://wa.me/5511953013378?text=Olá%20Denis,%20vi%20seu%20site%20e%20gostaria%20de%20conversar%20sobre%20a%20comunidade."
              target="_blank"
              rel="noopener noreferrer"
              className="
              bg-green-600
              px-8
              py-4
              rounded-xl
              font-bold
              hover:bg-green-700
              transition
              "
            >

              📲 Fale comigo

            </a>


          </div>



        </div>






        {/* Foto */}

        <div
          className="
          flex
          justify-center
          "
        >


          <div
            className="
            w-72
            h-72
            md:w-96
            md:h-96
            rounded-full
            overflow-hidden
            border-8
            border-white/40
            shadow-2xl
            "
          >

            <img
              src="/imagens/denis-de-melo.jpeg"
              alt="Denis de Melo"
              className="
              w-full
              h-full
              object-cover
              "
            />

          </div>


        </div>




      </div>


    </section>

  )

}


export default Hero