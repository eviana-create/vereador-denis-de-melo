function BarraPesquisa({
    pesquisa,
    setPesquisa
}){

    return(

        <div className="mb-12">

            <input
                type="text"
                placeholder="Pesquisar fotos..."
                value={pesquisa}
                onChange={(e)=>setPesquisa(e.target.value)}
                className="
                    w-full
                    rounded-2xl
                    border
                    border-slate-300
                    bg-white
                    px-6
                    py-4
                    text-lg
                    outline-none
                    focus:border-blue-600
                    transition
                "
            />

        </div>

    )

}

export default BarraPesquisa;