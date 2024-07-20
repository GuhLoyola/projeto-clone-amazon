import amazon from '../img/amazon_logo.png'

const MiddleFooter = () => {
    return (
        <div className="hidden md:flex flex-col items-center bg-darkblue-700 border-t border-gray-700 pt-6 pb-4">
            <img src={amazon} alt="Logo Amazon" className='w-20' />
            <ul className='flex flex-wrap justify-center text-xs pt-4 w-3/4 text-gray-400'>
                <li className='px-2 border-r border-gray-600 hover:underline'><a href="#">Austrália</a></li>
                <li className='px-2 border-r border-gray-600 hover:underline'><a href="#">Alemanha</a></li>
                <li className='px-2 border-r border-gray-600 hover:underline'><a href="#">Canadá</a></li>
                <li className='px-2 border-r border-gray-600 hover:underline'><a href="#">China</a></li>
                <li className='px-2 border-r border-gray-600 hover:underline'><a href="#">Cingapura</a></li>
                <li className='px-2 border-r border-gray-600 hover:underline'><a href="#">Espanha</a></li>
                <li className='px-2 border-r border-gray-600 hover:underline'><a href="#">Estados Unidos</a></li>
                <li className='px-2 border-r border-gray-600 hover:underline'><a href="#">França</a></li>
                <li className='px-2 border-r border-gray-600 hover:underline'><a href="#">Holanda</a></li>
                <li className='px-2 border-r border-gray-600 hover:underline'><a href="#">Índia</a></li>
                <li className='px-2 border-r border-gray-600 hover:underline'><a href="#">Itália</a></li>
                <li className='px-2 border-r border-gray-600 hover:underline'><a href="#">Japão</a></li>
                <li className='px-2 border-r border-gray-600 hover:underline'><a href="#">México</a></li>
                <li className='px-2 border-r border-gray-600 hover:underline'><a href="#">Emirados Árabes Unidos</a></li>
                <li className='px-2 border-r border-gray-600 hover:underline'><a href="#">Reino Unido</a></li>
                <li className='px-2 hover:underline'><a href="#">Turquia</a></li>

            </ul>
            <div className="flex text-xs">
                <span className='text-gray-600 mr-2'>E não se esqueça:</span>
                <a href="#" className='text-gray-400 hover:underline'>Amazon Web Service</a>
            </div>
        </div>
    )
}

export default MiddleFooter