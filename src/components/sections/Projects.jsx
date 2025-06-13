import { RevealOnScrolls } from "../RevealOnScrolls";

export const Projects = () => {

    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScrolls>
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    Mes Projets
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all flex flex-col justify-between"> 
                        <div>
                        <h3 className="text-xl font-bold mb-2"> Application d’étude de la motricité via des outils de reconnaissance</h3>
                        <p className="text-gray-400 mb-4">
                            Développement d’une application mobile de reconnaissance
                            du mouvement pour des chercheurs sur la détection des
                            maladies d’Alzheimer et de Parkinson.

                        </p>
                        <div className="flex flex-wrap gap-2 mb-4"> 
                            {["Java","Android Studio", "OpenCV","Scrum"].map((skill, index) => (
                                 <span key={skill} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20  hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all" >
                                    {skill}
                                </span>
                            ))}
                        </div>
                        </div>

                        <div className="mt-4 flex items-center justify-between">
                            <a className="text-blue-400 hover:text-blue-300 transition-colors" href="https://github.com/RGouaud/MotricityExercices.git">
                                View Project ⮕
                            </a>
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all flex flex-col justify-between"> 
                        <div>
                            <h3 className="text-xl font-bold mb-2"> SoStudy, réseau social pour étudiant</h3>
                            <p className="text-gray-400 mb-4">
                                SoStudy est le résultat de notre projet final de Master 1 MIAGE parcours IPM. <br/>
                                Il s'agit d'un réseau social pour étudiants, permettant de partager des ressources, des expériences et de se connecter avec d'autres étudiants.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4"> 
                                {["Java","WebSocket","SpringBoot","Hibernate","Javascript"].map((skill, index) => (
                                    <span key={skill} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20  hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all" >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="mt-4 flex items-center justify-between">
                            <a className="text-blue-400 hover:text-blue-300 transition-colors" href="https://github.com/EstebanBiret/SoStudy.git">
                                View Project ⮕
                            </a>
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all flex flex-col justify-between"> 
                        <div>
                            <h3 className="text-xl font-bold mb-2"> SuperMarché CLI - Projet Java MIAGE </h3>
                            <p className="text-gray-400 ">
                                Une application Java en ligne de commande qui simule un supermarché en ligne. <br/>
                                Le projet intègre en plus de toute les fonctionnalités de base d'un site de course en ligne :

                                
                            </p>
                            <ul className="list-disc list-inside text-gray-400 mb-4 space-y-1 mt-2">
                                    <li>Interface administrateur pour mettre en avant différent produiit en fonction des saisons.</li>
                                    <li>Algorithme de proposition de produit de remplacement.</li>
                                    <li>Algorithme de proposition de produit en fonction des habitudes de consommation des utilisateurs.</li>    
                                </ul>
                            <div className="flex flex-wrap gap-2 mb-4"> 
                                {["Java","SQLite","Algorithmie","Scrum"].map((skill, index) => (
                                        <span key={skill} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20  hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all" >
                                        {skill}
                                    </span>
                                ))}
                        </div>
                        </div>

                        <div className="mt-4 flex items-center justify-between">
                            <a className="text-blue-400 hover:text-blue-300 transition-colors" href="https://github.com/Maxxo-o/ProjetMarket.git">
                                View Project ⮕
                            </a>
                        </div>
                    </div>
                    

                </div>
            </div>
            </RevealOnScrolls>
        </section>
            );

}