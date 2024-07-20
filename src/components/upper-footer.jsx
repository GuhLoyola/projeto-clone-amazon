const UpperFooter = () => {
    return (
        <>
            <div className="py-4 text-center bg-darkblue-600 hover:bg-darkblue-500 hover:cursor-pointer text-sm">
                <p><a href="/">Voltar ao início</a></p>
            </div>
            <div className="flex flex-wrap md:flex-nowrap md:justify-around p-10 md:px-20 bg-darkblue-700">
                <div className="w-1/2 md:w-auto mb-4 md:mb-0">
                    <h4 className="font-bold mb-2">Conheça-nos</h4>

                    <ul className="text-xs w-3/4 ">
                        <li className="mb-2 text-gray-400 hover:underline leading-4">
                            <a href="#">Informações corporativas</a>
                        </li>
                        <li className="mb-2 text-gray-400 hover:underline leading-4">
                            <a href="#">Carreiras</a>
                        </li>
                        <li className="mb-2 text-gray-400 hover:underline leading-4">
                            <a href="#">Comunicados à imprensa</a>
                        </li>
                        <li className="mb-2 text-gray-400 hover:underline leading-4">
                            <a href="#">Comunidade</a>
                        </li>
                    </ul>

                </div>
                <div className="w-1/2 md:w-auto mb-4 md:mb-0">
                    <h4 className="font-bold mb-2">Ganhe dinheiro conosco</h4>

                    <ul className="text-xs w-3/4 ">
                        <li className="mb-2 text-gray-400 hover:underline leading-4">
                            <a href="#">Publique seus livros</a>
                        </li>
                        <li className="mb-2 text-gray-400 hover:underline leading-4">
                            <a href="#">Seja um associado</a>
                        </li>
                        <li className="mb-2 text-gray-400 hover:underline leading-4">
                            <a href="#">Venda na Amazon</a>
                        </li>
                    </ul>

                </div>
                <div className="w-1/2 md:w-auto mb-4 md:mb-0">
                    <h4 className="font-bold mb-2">Conheça-nos</h4>

                    <ul className="text-xs w-3/4 ">
                        <li className="mb-2 text-gray-400 hover:underline leading-4">
                            <a href="#">Sua conta</a>
                        </li>
                        <li className="mb-2 text-gray-400 hover:underline leading-4">
                            <a href="#">Frete e prazo de entrega</a>
                        </li>
                        <li className="mb-2 text-gray-400 hover:underline leading-4">
                            <a href="#">Devoluções e reembolsos</a>
                        </li>
                        <li className="mb-2 text-gray-400 hover:underline leading-4">
                            <a href="#">Gerencie seu conteúdo e dispositivos</a>
                        </li>
                        <li className="mb-2 text-gray-400 hover:underline leading-4">
                            <a href="#">Ajuda</a>
                        </li>
                    </ul>

                </div>
                <div className="w-1/2 md:w-auto mb-4 md:mb-0">
                    <h4 className="font-bold mb-2">Pagamentos</h4>

                    <ul className="text-xs w-3/4 ">
                        <li className="mb-2 text-gray-400 hover:underline leading-4">
                            <a href="#">Amazon e COVID-19</a>
                        </li>
                        <li className="mb-2 text-gray-400 hover:underline leading-4">
                            <a href="#">Cartões de crédito e Boleto</a>
                        </li>
                    </ul>

                </div>
            </div>
        </>
    )
}

export default UpperFooter