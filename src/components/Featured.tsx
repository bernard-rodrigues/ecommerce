import { ProductBanner } from "./ProductBanner";

export function Featured(){
    return(
        <section>
            <h2 className="text-3xl font-[700] mt-8 mb-4">Destaques</h2>
            <div className="flex justify-between flex-wrap gap-y-8">
                {Array.from({length: 8}, (_, i) => i).map(product => (
                    <ProductBanner 
                        key={product} 
                        rating={Math.floor(Math.random()*5)}
                        price={Math.floor(Math.random()*10000) + 0.99}
                    />
                ))}
            </div>
        </section>
    )
}