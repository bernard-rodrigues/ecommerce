import { Link } from "react-router-dom"
import { useEcommerceData } from "../contexts/EcomerceData"

export function Categories(){
    const {categories} = useEcommerceData()
    
    return (
        <nav className="flex justify-center bg-black p-1">
            {categories.map(category => (
                <Link to={`category/${category.name}`} className="border py-1 px-4 bg-white text-black hover:bg-zinc-600 hover:text-white" key={category.id}>{category.name}</Link>
            ))}
        </nav>
    )
}