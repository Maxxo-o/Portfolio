import { RevealOnScrolls } from "../RevealOnScrolls";

export const About = () => {

    const fronteddSkills = [
        "React", "Vue", "Angular", "TypeScript", "JavaScript", "TailWindCSS"
    ];

    const backendSkills = [
        "Node.js", "SpringBoot", "Django", "Hobernates", "MongoDB", "REST APIs"
    ];

    return <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScrolls>
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    About Me
                </h2>
                
                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">
                        I'm a passionate web developer with a focus on creating modern, responsive web applications. I love building user-friendly interfaces and ensuring optimal performance across devices.
                    </p>
                    <p className="text-gray-300 mb-6">
                        With a background in computer science and several years of experience in the industry, I have honed my skills in various technologies including React, Node.js, and more.
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
                        <h3 className="text-xl font-bold mb-4">Education</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2" >
                            <li>
                                <strong>B.Sc. in Computer Science</strong> - XYZ University, 2020
                            </li>
                            <li>
                                Relevant coursework: Data Structures, Algorithms, Web Development, Database Management...
                            </li>
                        </ul>
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Experience</h3>
                        <div className="space-y-4 text-gray-300">
                            <div>
                                <h4 className="font-semibold"> Agur </h4>
                                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ullam dolor quam pariatur voluptate obcaecati exercitationem quod sunt, doloremque quibusdam architecto ea incidunt nostrum excepturi odio totam dolore nam! Obcaecati!</p>
                            </div>

                            <div>
                                <h4 className="font-semibold"> Agur </h4>
                                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ullam dolor quam pariatur voluptate obcaecati exercitationem quod sunt, doloremque quibusdam architecto ea incidunt nostrum excepturi odio totam dolore nam! Obcaecati!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </RevealOnScrolls>
    </section>
}