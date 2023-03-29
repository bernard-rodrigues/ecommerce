export function Footer(){
    return(
        <footer className="bg-black w-full p-16 mt-16 text-white text-sm">
            <div className="
                w-[1200px] relative left-1/2 -translate-x-1/2 text-white
                [&>h4]:text-xl [&>h4]:mt-4 [&>h4]:font-[700]
                [&>ul]:text-base [&>ul]:mt-1
            ">
                <h3 className="text-4xl font-russo">E-commerce</h3>
                
                <h4>Created by</h4>
                <ul>
                    <li><a href="https://github.com/bernard-rodrigues" target="_blank">Bernard Rodrigues</a></li>
                </ul>

                <h4>Technologies</h4>
                <ul>
                    <li><a href="https://react.dev/" target="_blank">ReactJS</a></li>
                    <li><a href="https://heroicons.com/" target="_blank">Heroicons</a></li>
                    <li><a href="https://postcss.org/" target="_blank">PostCSS</a></li>
                    <li><a href="https://www.npmjs.com/package/react-router-dom" target="_blank">React Router DOM</a></li>
                    <li><a href="https://tailwindcss.com/" target="_blank">TailwindCSS</a></li>
                    <li><a href="https://www.typescriptlang.org/" target="_blank">Typecript</a></li>
                    <li><a href="https://vitejs.dev/" target="_blank">Vite</a></li>
                </ul>
            </div>
        </footer>
    )
}