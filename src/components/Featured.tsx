import { useEcommerceData } from "../contexts/EcomerceData";
import { ProductBanner } from "./ProductBanner";

export function Featured(){
    const {featured} = useEcommerceData()
    
    return(
        <section>
            <h2 className="text-3xl font-[700] mt-8 mb-4">Destaques</h2>
            <div className="flex justify-between flex-wrap gap-y-8">
                {featured.map(id => (
                    <ProductBanner 
                        key={id} 
                        id={id}
                />
                ))}
            </div>
        </section>
    )
}