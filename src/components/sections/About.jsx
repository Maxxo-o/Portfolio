import { RevealOnScrolls } from "../RevealOnScrolls";

export const About = () => {

    const fronteddSkills = [
        "React", "Vue", "Angular", "TypeScript", "JavaScript", "TailWindCSS"
    ];

    const backendSkills = [
        "Node.js","Java", "SpringBoot","JEE", "C++", "Django", "Hobernates", "MongoDB", "REST APIs"
    ];

    return <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScrolls>
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    À propos de moi
                </h2>
                
                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">
                        J'aime transformer des idées en solutions fonctionnelles et esthétiques, en mettant l'accent sur l'expérience utilisateur et la performance.
                    </p>
                    <p className="text-gray-300 mb-6">
                        Avec une solide expérience en développement front-end et back-end, je maîtrise des technologies telles que React, Vue.js, Node.js et Java. Mon objectif est de créer des applications web qui non seulement répondent aux besoins des utilisateurs, mais qui sont également faciles à maintenir et à étendre.
                    </p>
                    <p className="text-gray-300 mb-6">
                        When I'm not coding, you can find me exploring new technologies, contributing to open source projects, or enjoying the great outdoors.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Front-end</h3>
                            <div className="flex flex-wrap gap-2">
                                {fronteddSkills.map(skill => (
                                    <span key={skill} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20  hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition" >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Back-end</h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map(skill => (
                                    <span key={skill} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20  hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition" >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">🏫​ Education</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4" >
                            <li>
                                <strong>Master MIAGE </strong> - Université Toulouse Captitole, 2024 - Aujourd'hui
                            </li>
                            <li>
                                Programme étudié : Base de donnée avancée, Industrialisation de développement, Gestion de projet, Intelligence Artificielle...
                            </li>
                        </ul>
                        <ul className="list-disc list-inside text-gray-300 space-y-2" >
                            <li>
                                <strong>BUT Informatique</strong> - IUT de Bayonne et des pays de l'Adour, 2021 - 2024
                            </li>
                            <li>
                                Programme étudié: Base de l'informatique, Algorithmes, Développement Web, Base de donnée...
                            </li>
                        </ul>
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">💼 Experience</h3>
                        <div className="space-y-4 text-gray-300">
                            <div>
                                <h4 className="font-semibold">Stage à Agur - Anglet (MARS 2024 - SEPTEMBRE 2024) </h4>
                                <p> Développement d’un module de gestion des stations
                                d’assainissement pour l’analyse et la gestion du patrimoine
                                destiné aux techniciens de l’entreprise. <br/><br/>
                                Refonte des technologies de l'application (de JSP à des composants VueJS intégrables directement dans l'application)
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold">Stage à BlueConfig (AVRIL 2023 - JUIN 2023) </h4>
                                <p> Prise en main d’un projet de mise en place d’une plateforme de
                                formation via l'outil Moodle.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </RevealOnScrolls>
    </section>
}