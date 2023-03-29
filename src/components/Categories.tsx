import { useEcommerceData } from "../contexts/EcomerceData"

export function Categories(){
    const {categories} = useEcommerceData()
    
    return (
        <nav className="flex justify-center">
            {categories.map(category => (
                <a href="#" className="border py-2 px-4 hover:bg-zinc-600 hover:text-white" key={category.id}>{category.name}</a>
            ))}
        </nav>
    )
}