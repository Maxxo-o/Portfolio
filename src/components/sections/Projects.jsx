import { RevealOnScrolls } from "../RevealOnScrolls";

export const Projects = () => {

    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScrolls>
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    Featured Projects 
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"> 
                        <h3 className="text-xl font-bold mb-2"> lorem</h3>
                        <p className="text-gray-400 mb-4">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis ex voluptates alias, tempore voluptate ipsam eius quos obcaecati accusantium voluptatibus non autem neque impedit eum ut harum tempora minus quasi?
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4"> 
                            {["skills"].map((skill, index) => (
                                 <span key={skill} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20  hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all" >
                                    {skill}
                                </span>
                            ))}
                        </div>

                        <div className="mt-4 flex items-center justify-between">
                            <a className="text-blue-400 hover:text-blue-300 transition-colors" href="">
                                View Project
                            </a>
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"> 
                        <h3 className="text-xl font-bold mb-2"> lorem</h3>
                        <p className="text-gray-400 mb-4">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis ex voluptates alias, tempore voluptate ipsam eius quos obcaecati accusantium voluptatibus non autem neque impedit eum ut harum tempora minus quasi?
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4"> 
                            {["skills"].map((skill, index) => (
                                 <span key={skill} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20  hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all" >
                                    {skill}
                                </span>
                            ))}
                        </div>

                        <div className="mt-4 flex items-center justify-between">
                            <a className="text-blue-400 hover:text-blue-300 transition-colors" href="">
                                View Project
                            </a>
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"> 
                        <h3 className="text-xl font-bold mb-2"> lorem</h3>
                        <p className="text-gray-400 mb-4">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis ex voluptates alias, tempore voluptate ipsam eius quos obcaecati accusantium voluptatibus non autem neque impedit eum ut harum tempora minus quasi?
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4"> 
                            {["skills"].map((skill, index) => (
                                 <span key={skill} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20  hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all" >
                                    {skill}
                                </span>
                            ))}
                        </div>

                        <div className="mt-4 flex items-center justify-between">
                            <a className="text-blue-400 hover:text-blue-300 transition-colors" href="">
                                View Project
                            </a>
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"> 
                        <h3 className="text-xl font-bold mb-2"> lorem</h3>
                        <p className="text-gray-400 mb-4">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis ex voluptates alias, tempore voluptate ipsam eius quos obcaecati accusantium voluptatibus non autem neque impedit eum ut harum tempora minus quasi?
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4"> 
                            {["skills"].map((skill, index) => (
                                 <span key={skill} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20  hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all" >
                                    {skill}
                                </span>
                            ))}
                        </div>

                        <div className="mt-4 flex items-center justify-between">
                            <a className="text-blue-400 hover:text-blue-300 transition-colors" href="">
                                View Project
                            </a>
                        </div>
                    </div>
                    

                </div>
            </div>
            </RevealOnScrolls>
        </section>
            );

}