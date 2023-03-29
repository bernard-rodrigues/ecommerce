import {useParams} from 'react-router';
import { ProductShowcase } from '../components/ProductShowcase';
import { useEcommerceData } from '../contexts/EcomerceData';

export function ProductPage(){
    const params = useParams()

    const {products} = useEcommerceData()
    const product = products.filter(item => String(item.id) === params.id)[0]    
    
    return(
        <ProductShowcase product={product} />        
    )
}