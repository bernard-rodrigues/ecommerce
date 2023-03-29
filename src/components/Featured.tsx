import { useState } from "react";
import { useEcommerceData } from "../contexts/EcomerceData";
import { ProductBanner } from "./ProductBanner";

export const Featured = () => {
    const {products} = useEcommerceData()
    const [load, setLoad] = useState(8)

    // Ordenado do maior rating para o menor
    const ordered = products.sort((a, b) => b.rating - a.rating)
    const featured = ordered.slice(0, load)

    const handleShowMore = () => {
        setLoad(currentState => currentState*2)
    }
    
    return(
        <section>
            <h2 className="text-3xl font-[700] mt-8 mb-4">Destaques</h2>
            <div className="flex justify-between flex-wrap gap-y-8">
                {featured.map(product => (
                    <ProductBanner 
                        key={product.id} 
                        id={product.id}
                />
                ))}
            </div>
            {load < products.length ? 
            <button 
                className="relative left-1/2 -translate-x-1/2 border border-zinc-600 px-4 py-2 rounded hover:bg-zinc-600 hover:text-white" 
                onClick={handleShowMore}
            >
                Show More
            </button>
            :
            <></>
            }
        </section>
    )
}