import { RevealOnScrolls } from "../RevealOnScrolls";

export const Home = () => {
    return <section id="home" className="min-h-screen flex items-center justify-center relative">
        <RevealOnScrolls>
            <div className="text-center z-10 px-4 md:px-0">
                <h1 className="text-5xl md:text-7xl mb-6 font-bold text-transparent bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text leading-right">Maxime SEGOT-LABEROU
                </h1>

                <p className="text-gray-400 text-lg mb-6 mx-w-lg mx-auto ">
                    Développeur Full Stack passionné par la création d'applications modernes et réactives. <br/>
                    Je suis actuellement à la recherche d'une alternance lors de ma dernière année de Master MIAGE à l'Université Toulouse Capitole.
                       
                </p>
                <div className="flex justify-center space-x-4">
                    <a href="#projects" className="px-6 py-3 bg-blue-500 text-white rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                        Mes Projets
                    </a>
                    <a href="#contact" className="border border-blue-500/50 py-3 px-6 rounded font-medium trtansition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10 text-blue-500 hover:text-white">
                        Me Contacter
                    </a>
                </div>
            </div>
        </RevealOnScrolls>
    </section>
}