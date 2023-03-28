import star from '../assets/star.svg'
import starFilled from '../assets/star-filled.svg'
import { useEffect, useState } from 'react'

interface ProductBannerProps{
    rating: number
    price: number
}

export function ProductBanner(props: ProductBannerProps){
    const [lorem, setLorem] = useState<string[]>([])

    useEffect(() => {
        fetch('https://baconipsum.com/api/?type=all-meat&sentences=1&start-with-lorem=1')
            .then(response => response.json())
            .then(data => setLorem(data[0]))
    }, [])

    return(
        <div className="w-[242px] h-[480px]">
            <img src={`https://picsum.photos/id/${Math.floor(Math.random()*10)}/480/480`} alt="Imagem randômica" />
            
            <p className="my-2">{lorem}</p>
            
            <div className="flex items-center my-2">
                {Array.from({length: props.rating}, (_, i) => i).map(emptyStar => (
                    <img key={`emptyStar${emptyStar}`} className="w-4" src={starFilled} alt="Container vazio de estrela de avaliação" />
                ))}
                {Array.from({length: 5 - props.rating}, (_, i) => i).map(emptyStar => (
                    <img key={`emptyStar${emptyStar}`} className="w-4" src={star} alt="Container vazio de estrela de avaliação" />
                ))}
                <span className="ml-2">({Math.floor(Math.random()*500)})</span>
            </div>

            <h3 className="text-3xl font-[700]"><span className="text-lg">Por: </span>R${props.price}</h3>
            <p className="text-sm">ou em até <span>10x</span> de {(props.price/10).toFixed(2)} sem juros</p>
        </div>
    )
}