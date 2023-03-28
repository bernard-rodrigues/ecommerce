import arrowLeft from '../assets/arrow-left.svg'
import arrowRight from '../assets/arrow-right.svg'

export function Banner(){
    return(
        <div className="border h-[20rem] relative">
            <img 
                className="
                    absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8
                    border bg-white p-1 rounded
                " 
                src={arrowLeft} 
                alt="Seta para banner à esquerda" 
            />
            <img 
                className="
                    absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-8
                    border bg-white p-1 rounded
                " 
                src={arrowRight}
                alt="Seta para banner à direita" 
            />
            <img src={`https://picsum.photos/1200/320`} alt="" />
        </div>
    )
}