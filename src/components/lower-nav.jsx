import { FaChevronLeft } from "react-icons/fa"

const LowerNav = () => {
    return (
        <div className="flex text-black px-4 text-xs border-b border-gray-300 bg-gray-100 pt-1">
            <a href="#" className="md:hidden py-2 font-bold flex items-center">
                <FaChevronLeft className="inline" /> Todos os Departamentos
            </a>
            <ul className="hidden md:flex">
                <li className="item-nav-lower">
                    <a href="#">Livros</a>
                </li>
                <li className="item-nav-lower">
                    <a href="#">Pesquisa avançada</a>
                </li>
                <li className="item-nav-lower">
                    <a href="#">Mais vendidos</a>
                </li>
                <li className="item-nav-lower">
                    <a href="#">Pré-venda e lançamentos</a>
                </li>
                <li className="item-nav-lower">
                    <a href="#">Livros em Ofertas</a>
                </li>
                <li className="item-nav-lower">
                    <a href="#">Inglês e Outras Línguas</a>
                </li>
                <li className="item-nav-lower">
                    <a href="#">Loja Geek</a>
                </li>
                <li className="item-nav-lower">
                    <a href="#">Universitários e Acadêmicos</a>
                </li>
                <li className="item-nav-lower">
                    <a href="#">Didáticos e Escolares</a>
                </li>
                <li className="item-nav-lower">
                    <a href="#">Loja Infantil</a>
                </li>
            </ul>
        </div>
    )
}

export default LowerNav