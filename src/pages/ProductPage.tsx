import { useState } from 'react';
import {useParams} from 'react-router';
import { useEcommerceData } from '../contexts/EcomerceData';

export function ProductPage(){
    const params = useParams()

    const [currentImage, setCurrentImage] = useState(0)

    const {products} = useEcommerceData()
    const product = products.filter(item => String(item.id) === params.id)[0]

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
                            className="w-[80px] h-[80px] hover:cursor-pointer" 
                            key={image} 
                            src={image} 
                            alt="Thumb do produto"
                            onClick={() => handleProductImage(index)}
                        />
                    ))}
                </div>
            </div>
            <div className="h-[500px] w-[550px] flex flex-col justify-between">
                <p className="text-5xl font-[700]">{product.description}</p>
                <div>
                    <h2 className="text-4xl font-[700]"><span className="text-2xl font-[400]">Por: </span>R${product.price}</h2>
                    <p>em até 10x de R${(product.price/10).toFixed(2)}</p>
                </div>
                <div className="flex gap-2 items-center">
                    <label>Calcular frete:</label>
                    <input className="border px-4 py-2"/>
                </div>
                <button className="border py-2 bg-black text-white text-xl hover:bg-zinc-800">Comprar</button>
            </div>
        </div>
    )
}