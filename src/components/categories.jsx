const Categories = () => {
    return (
        <div className="text-center">
            <h2 className="text-2xl font-bold md:text-3xl md:font-normal">Loja de Livros</h2>
            <ul className="flex flex-wrap md:flex-nowrap justify-center md:text-sm px-4 md:px-0 py-2">
                <li>
                    <a href="#" className="text-blue-600 underline hover:text-orange-650 px-1 border-r border-black">
                        Livros em Oferta
                    </a>
                </li>
                <li>
                    <a href="#" className="text-blue-600 underline hover:text-orange-650 px-1 border-r border-black">
                        Importados
                    </a>
                </li>
                <li>
                    <a href="#" className="text-blue-600 underline hover:text-orange-650 px-1 border-r border-black">
                        Lançamentos
                    </a>
                </li>
                <li>
                    <a href="#" className="text-blue-600 underline hover:text-orange-650 px-1 border-r border-black">
                        Universitários
                    </a>
                </li>
                <li>
                    <a href="#" className="text-blue-600 underline hover:text-orange-650 px-1 border-r border-black">
                        Didáticos e Escolares
                    </a>
                </li>
                <li>
                    <a href="#" className="text-blue-600 underline hover:text-orange-650 px-1 border-r border-black">
                        HQs e Mangás
                    </a>
                </li>
                <li>
                    <a href="#" className="text-blue-600 underline hover:text-orange-650 px-1 border-r border-black">
                        Mais Vendidos
                    </a>
                </li>
                <li>
                    <a href="#" className="text-blue-600 underline hover:text-orange-650 px-1 border-r border-black">
                        Livros Infantis
                    </a>
                </li>
                <li>
                    <a href="#" className="text-blue-600 underline hover:text-orange-650 px-1">
                        Indicações
                    </a>
                </li>
            </ul>
            <div className="h-2 border-b shadow-md"></div>
        </div>
    )
}

export default Categories