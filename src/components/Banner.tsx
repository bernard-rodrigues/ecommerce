import { useEffect, useRef, useState } from 'react'
import arrowLeft from '../assets/arrow-left.svg'
import arrowRight from '../assets/arrow-right.svg'
import { useEcommerceData } from '../contexts/EcomerceData'

export function Banner(){
    const [time, setTime] = useState(0)
    const [currentBanner, setCurrentBanner] = useState(0)

    const {banners} = useEcommerceData()
    const bannerDiv = useRef<HTMLDivElement>(null)
    
    useEffect(() => {
        setInterval(() => {
            setTime(currentState => currentState + 0.02)
        }, 1)
    }, [])
    
    useEffect(() => {
        if(time >= 100){
            setTime(0)
            handleBanner(1)
        }
    }, [time])

    const handleBanner = (amount: number) => {
        if(currentBanner + amount === banners.length){
            setCurrentBanner(0)
            setTime(0)
            bannerDiv.current ? bannerDiv.current.scrollBy({left: -1198*(banners.length - 1), top: 0, behavior: 'smooth'}) : ""
        }else if(currentBanner + amount < 0){
            setCurrentBanner(banners.length - 1)
            setTime(0)
            bannerDiv.current ? bannerDiv.current.scrollBy({left: 1198*(banners.length - 1), top: 0, behavior: 'smooth'}) : ""
        }else{
            setCurrentBanner(currentState => currentState + amount)
            setTime(0)
            bannerDiv.current ? bannerDiv.current.scrollBy({left: 1198*amount, top: 0, behavior: 'smooth'}) : ""
        }
    }

    return(
        <div className="border h-[20rem] relative">
            <img 
                className="
                    absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 hover:cursor-pointer
                    border bg-white p-1 rounded
                " 
                src={arrowLeft} 
                alt="Seta para banner à esquerda" 
                onClick={() => handleBanner(-1)}
            />
            <img 
                className="
                    absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-8 hover:cursor-pointer
                    border bg-white p-1 rounded
                " 
                src={arrowRight}
                alt="Seta para banner à direita"
                onClick={() => handleBanner(1)}
            />
            <div className="flex overflow-hidden" ref={bannerDiv}>
                {banners.map(banner => (
                    <img key={banner.imgUrl} src={banner.imgUrl} alt={banner.alt} />
                ))}
            </div>
            
            <div className="absolute flex bottom-4 left-1/2 -translate-x-1/2 gap-2">
                {banners.map((_, index) => (
                    <div 
                        key={index} 
                        className="w-4 h-4 rounded-full border border-white"
                        style={index === currentBanner ? {backgroundColor: 'white'} : {backgroundColor: '#ffffff40'}}
                    />
                ))}
            </div>
            {/* Barra de carregamento */}
            <div className="absolute bottom-0 h-2 bg-white opacity-60" style={{width: `${time}%`}}/>
        </div>
    )
}