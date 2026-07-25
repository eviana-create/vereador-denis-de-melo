function Navbar() {

  return (

    <nav
      className="
      fixed
      top-0
      left-0
      w-full
      z-50
      bg-white/90
      backdrop-blur
      shadow-md
      "
    >

      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        py-4
        flex
        items-center
        justify-between
        "
      >


        {/* Logo */}

        <div>

          <h1
            className="
            text-2xl
            font-extrabold
            text-blue-900
            "
          >

            Denis de Melo

          </h1>


          <p
            className="
            text-sm
            text-gray-600
            "
          >

            Presença e compromisso com a comunidade

          </p>


        </div>




        {/* Menu */}

        <div
          className="
          hidden
          md:flex
          items-center
          gap-8
          "
        >

          <a
            href="#inicio"
            className="
            font-semibold
            text-gray-700
            hover:text-blue-700
            transition
            "
          >
            Início
          </a>


          <a
            href="#historia"
            className="
            font-semibold
            text-gray-700
            hover:text-blue-700
            transition
            "
          >
            Minha História
          </a>


          <a
            href="#causas"
            className="
            font-semibold
            text-gray-700
            hover:text-blue-700
            transition
            "
          >
            Causas
          </a>


          <a
            href="#comunidade"
            className="
            font-semibold
            text-gray-700
            hover:text-blue-700
            transition
            "
          >
            Comunidade
          </a>


        </div>




        {/* Botão */}

        <a
          href="https://wa.me/55119953013378"
          target="_blank"
          rel="noopener noreferrer"
          className="
          hidden
          md:block
          bg-green-600
          text-white
          px-6
          py-3
          rounded-xl
          font-bold
          hover:bg-green-700
          transition
          "
        >

          📲 Fale comigo

        </a>



      </div>


    </nav>

  )

}


export default Navbar