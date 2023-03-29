import star from '../assets/star.svg'
import starFilled from '../assets/star-filled.svg'
import { Product, useEcommerceData } from '../contexts/EcomerceData'
import { Link } from 'react-router-dom'
import { useState } from 'react'

interface ProductBannerProps{
    id: number
}

export function ProductBanner(props: ProductBannerProps){
    const {products} = useEcommerceData()

    const product: Product = products.filter((object => object.id === props.id))[0]

    return(
        <Link to={`/product/${product.id}`} className="w-[242px] h-[480px]">
            <img className="w-[242px] h-[242px]" src={product.imgUrl[0]} alt="Imagem randômica" />
            
            <p className="my-2">{product.title}</p>
            
            <div className="flex items-center my-2">
                {Array.from({length: product.rating}, (_, i) => i).map(emptyStar => (
                    <img key={`emptyStar${emptyStar}`} className="w-4" src={starFilled} alt="Container vazio de estrela de avaliação" />
                ))}
                {Array.from({length: 5 - product.rating}, (_, i) => i).map(emptyStar => (
                    <img key={`emptyStar${emptyStar}`} className="w-4" src={star} alt="Container vazio de estrela de avaliação" />
                ))}
                <span className="ml-2">({product.evaluations})</span>
            </div>

            <h3 className="text-3xl font-[700]"><span className="text-lg">Por: </span>R${product.price}</h3>
            <p className="text-sm">ou em até <span>10x</span> de {(product.price/10).toFixed(2)} sem juros</p>
        </Link>
    )
}