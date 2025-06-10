export const Home = () => {
    return <section id="home" className="min-h-screen flex items-center justify-center relative">
        <div className="text-center z-10 px-4 md:px-0">
            <h1 className="text-5xl md:text-7xl mb-6 font-bold text-transparent bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text leading-right">Hi, I'm Max Segot
            </h1>

            <p className="text-gray-400 text-lg mb-6 mx-w-lg mx-auto ">
                    I create modern, responsive web applications with a focus on user experience and performance.
            </p>
            <div className="flex justify-center space-x-4">
                <a href="#projects" className="px-6 py-3 bg-blue-500 text-white rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                    View Projects
                </a>
                <a href="#contact" className="border border-blue-500/50 py-3 px-6 rounded font-medium trtansition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10 text-blue-500 hover:text-white">
                    Contact Me
                </a>
            </div>
        </div>
    </section>
}