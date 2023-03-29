import { useParams } from "react-router-dom"
import { ProductBanner } from "../components/ProductBanner"
import { useEcommerceData } from "../contexts/EcomerceData"

export function ProductsByCategory(){
    const params = useParams()
    const {products, categories} = useEcommerceData()

    const categoryId = categories.filter(category => category.name === params.category)[0].id
    const productsByCategory = products.filter(product => product.categories.includes(categoryId))
    
    return(
        <section>
            <h2 className="text-3xl font-[700] mt-8 mb-4">{params.category}</h2>
            <div className="flex justify-between flex-wrap gap-y-8">
                {productsByCategory.map(product => (
                    <ProductBanner 
                        key={product.id} 
                        id={product.id}
                    />
                ))}
            </div>
        </section>
    )
}