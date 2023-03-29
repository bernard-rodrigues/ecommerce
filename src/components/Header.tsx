import cart from '../assets/shopping-cart.svg'
import magnifyngGlass from '../assets/magnifying-glass.svg'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
    const [user, setUser] = useState('')
    
    return(
        <header className="relative left-1/2 -translate-x-1/2 h-24 w-[1200px] flex justify-between items-center font-lato">
            <Link to=""><h1 className="text-4xl font-russo">E-commerce</h1></Link>
            <div className="flex justify-between border w-1/2 pr-2">
                <input className="w-full px-2 py-1" placeholder="Encontre aqui as melhores ofertas"></input>
                <img className="w-6" src={magnifyngGlass} alt="Lupa de Busca" />
            </div>
            <div className="flex items-center gap-8">
                <img className="w-8" src={cart} alt="Carrinho de compras" />
                <a href="#">{user ? user : 'Login'}</a>
            </div>
        </header>
    )
}