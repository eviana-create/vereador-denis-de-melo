function Filtros({

    categorias,
    categoriaSelecionada,
    setCategoriaSelecionada

}){

    return(

        <div
            className="
                flex
                flex-wrap
                gap-4
                justify-center
                mb-16
            "
        >

            {

                categorias.map((categoria)=>(

                    <button

                        key={categoria}

                        onClick={()=>
                            setCategoriaSelecionada(categoria)
                        }

                        className={`

                            px-6
                            py-3
                            rounded-full
                            font-bold
                            transition

                            ${
                                categoriaSelecionada===categoria

                                ?

                                "bg-blue-600 text-white"

                                :

                                "bg-slate-200 hover:bg-slate-300"

                            }

                        `}

                    >

                        {categoria}

                    </button>

                ))

            }

        </div>

    )

}

export default Filtros;