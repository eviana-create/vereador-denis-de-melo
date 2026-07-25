function Footer() {

  return (

    <footer
      className="
      bg-black
      text-white
      py-12
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
          grid
          md:grid-cols-3
          gap-10
          "
        >



          {/* Identidade */}

          <div>

            <h2
              className="
              text-3xl
              font-black
              "
            >

              Denis de Melo

            </h2>


            <p
              className="
              mt-4
              text-gray-300
              "
            >

              Presença, diálogo e compromisso
              com a comunidade.

            </p>


          </div>





          {/* Região */}

          <div>


            <h3
              className="
              text-xl
              font-bold
              "
            >

              Região

            </h3>



            <p
              className="
              mt-4
              text-gray-300
              "
            >

              📍 Vila Moraes
              <br />

              São Bernardo do Campo
              <br />

              Grande Alvarenga

            </p>


          </div>





          {/* Contato */}

          <div>


            <h3
              className="
              text-xl
              font-bold
              "
            >

              Fale comigo

            </h3>



            <a
              href="https://wa.me/5511953013378?text=Olá%20Denis,%20vi%20seu%20site%20e%20gostaria%20de%20conversar%20sobre%20a%20comunidade."
              target="_blank"
              rel="noopener noreferrer"
              className="
              inline-block
              mt-4
              bg-green-600
              px-6
              py-3
              rounded-xl
              font-bold
              hover:bg-green-700
              transition
              "
            >

              📲 WhatsApp

            </a>


          </div>



        </div>





        <div
          className="
          border-t
          border-white/20
          mt-10
          pt-6
          text-center
          text-gray-400
          "
        >

          © {new Date().getFullYear()} Denis de Melo.
          Todos os direitos reservados.

        </div>



      </div>


    </footer>

  )

}


export default Footer