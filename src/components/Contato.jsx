function Contato() {

  return (

    <section
      id="contato"
      className="
      py-24
      bg-blue-950
      text-white
      "
    >

      <div
        className="
        max-w-5xl
        mx-auto
        px-6
        text-center
        "
      >


        <span
          className="
          bg-yellow-400
          text-black
          px-5
          py-2
          rounded-full
          font-bold
          "
        >

          Entre em contato

        </span>



        <h2
          className="
          mt-6
          text-4xl
          md:text-5xl
          font-black
          "
        >

          Vamos conversar sobre
          nossa comunidade

        </h2>




        <p
          className="
          mt-6
          text-lg
          text-gray-300
          max-w-3xl
          mx-auto
          "
        >

          Sua opinião é importante.
          Compartilhe ideias, sugestões e necessidades
          do seu bairro.

        </p>




        <div
          className="
          mt-10
          grid
          md:grid-cols-3
          gap-6
          "
        >



          <div
            className="
            bg-white/10
            rounded-3xl
            p-8
            "
          >

            <div className="text-4xl">

              📱

            </div>


            <h3
              className="
              mt-4
              text-xl
              font-bold
              "
            >

              WhatsApp

            </h3>


            <p
              className="
              mt-2
              text-gray-300
              "
            >

              Fale diretamente conosco.

            </p>


          </div>





          <div
            className="
            bg-white/10
            rounded-3xl
            p-8
            "
          >

            <div className="text-4xl">

              📍

            </div>


            <h3
              className="
              mt-4
              text-xl
              font-bold
              "
            >

              Região

            </h3>


            <p
              className="
              mt-2
              text-gray-300
              "
            >

              Vila Moraes e Grande Alvarenga.

            </p>


          </div>





          <div
            className="
            bg-white/10
            rounded-3xl
            p-8
            "
          >

            <div className="text-4xl">

              🤝

            </div>


            <h3
              className="
              mt-4
              text-xl
              font-bold
              "
            >

              Comunidade

            </h3>


            <p
              className="
              mt-2
              text-gray-300
              "
            >

              Construindo diálogo e participação.

            </p>


          </div>



        </div>





        <a
          href="https://wa.me/5511953013378?text=Olá%20Denis,%20vi%20seu%20site%20e%20gostaria%20de%20conversar%20sobre%20a%20comunidade."
          target="_blank"
          rel="noopener noreferrer"
          className="
          inline-block
          mt-12
          bg-green-600
          px-10
          py-4
          rounded-xl
          font-bold
          text-lg
          hover:bg-green-700
          transition
          "
        >

          📲 Falar pelo WhatsApp

        </a>



      </div>


    </section>

  )

}


export default Contato