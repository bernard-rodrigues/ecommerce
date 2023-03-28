import { useEffect, useState } from "react"

export function Categories(){
    const [categories, setCategories] = useState<string[]>([])
    
    useEffect(() => {
        fetch('/ecommerce.json')
            .then(response => response.json())
            .then(data => setCategories(data.categories))
    }, [])
    
    return (
        <section className="flex justify-center">
            {categories.map(category => (
                <a className="border py-2 px-4" key={category}>{category}</a>
            ))}
        </section>
    )
}