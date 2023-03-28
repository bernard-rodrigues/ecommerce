import cart from '../assets/shopping-cart.svg'
import magnifyngGlass from '../assets/magnifying-glass.svg'

export function Header(){
    
    
    return(
        <header className="border h-24 px-16 flex justify-between items-center font-lato">
            <h1 className="text-4xl font-russo">E-commerce</h1>
            <div className="flex justify-between border w-1/2 pr-2">
                <input className="w-full px-2 py-1" placeholder="Encontre aqui as melhores ofertas"></input>
                <img className="w-6" src={magnifyngGlass} alt="Lupa de Busca" />
            </div>
            <img className="w-10" src={cart} alt="Carrinho de compras" />
        </header>
    )
}