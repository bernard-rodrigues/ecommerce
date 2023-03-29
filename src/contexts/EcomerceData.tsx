import { createContext, ReactNode, useContext, useEffect, useState } from "react";

export interface Product{
    id: number,
    title: string,
    rating: number,
    evaluations: number,
    price: number,
    imgUrl: string[],
    categories: number[]
}

interface Banner{
    imgUrl: string
    alt: string
}

interface Category{
    id: number,
    name: string
}

interface EcommerceDataProps{
    categories: Category[]
    products: Product[]
    banners: Banner[]
}

export const EcommerceDataContext = createContext({} as EcommerceDataProps)

interface EcommerceDataProviderProps{
    children: ReactNode
}

export function EcommerceDataProvider(props: EcommerceDataProviderProps){
    const [categories, setCategories] = useState<Category[]>([])
    // const [featured, setFeatured] = useState<number[]>([])
    const [products, setProducts] = useState<Product[]>([])
    const [banners, setBanners] = useState<Banner[]>([])

    
    useEffect(() => {
        fetch('/ecommerce.json')
            .then(response => response.json())
            .then(data => {
                setCategories(data.categories)
                // setFeatured(data.featured)
                setProducts(data.products)
                setBanners(data.banners)
            })
    }, [])

    return(
        <EcommerceDataContext.Provider
            value={
                {
                    categories, 
                    // featured, 
                    products,
                    banners
                }
            }
        >
            {props.children}
        </EcommerceDataContext.Provider>
    )
}

export const useEcommerceData = () => {
    return useContext(EcommerceDataContext)
}