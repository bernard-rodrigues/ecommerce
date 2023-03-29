import { useState } from "react"
import { Product } from "../contexts/EcomerceData"
import { locateBrValue } from "../utils/ecommerceUtils"

interface ProductShowcaseProps{
    product: Product
}

export const ProductShowcase = ({product}: ProductShowcaseProps) => {
    const [currentImage, setCurrentImage] = useState(0)
    
    const handleProductImage = (value: number) => {
        setCurrentImage(value)
    }
    
    return(
        <div className="flex mt-8 gap-[56px]">
            <div className="flex gap-[4px]">
                <img className="w-[500px] h-[500px]" src={product.imgUrl[currentImage]} alt="Foto do produto" />
                <div className="flex flex-col justify-between">
                    {product.imgUrl.map((image, index) => (
                        <img 
                            className={"w-[80px] h-[80px] hover:cursor-pointer"}
                            key={image} 
                            src={image} 
                            alt="Thumb do produto"
                            onClick={() => handleProductImage(index)}
                            style={
                                currentImage === index ? {border: '3px black solid'}
                                : {}
                            }
                        />
                    ))}
                </div>
            </div>
            <div className="h-[500px] w-[550px] flex flex-col justify-between">
                <p className="text-5xl font-[700]">{product.title}</p>
                <div>
                    <h2 className="text-4xl font-[700]"><span className="text-2xl font-[400]">Por: </span>R${locateBrValue(product.price)}</h2>
                    <p>em até 10x de R${locateBrValue(Number((product.price/10).toFixed(2)))}</p>
                </div>
                <div className="flex gap-2 items-center">
                    <label>Calcular frete:</label>
                    <input className="border px-4 py-2"/>
                </div>
                <button className="border py-2 bg-black text-white text-xl hover:bg-zinc-800">Adicionar ao Carrinho</button>
            </div>
        </div>
    )
}