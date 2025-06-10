
export const MobileMenu = ({ menuOpen, setMenuOpen}) => {

    return (
        <div className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] flex flex-col items-center justify-center z-50 transition-all duration-300 ease-in-out 
        ${menuOpen ? 'h-screen opacity-100 pointer-events-auto' 
            : 'h-0 opacity-0 pointer-events-none'
        }`}>
            
            <button onClick={() => setMenuOpen(false)} className="absolute top-6 right-6 text-white text-3xl z-50 focus:outline-none cursor-pointer"
                aria-label="Close menu">
                &times;
            </button>

            <a href="#home"
            onClick={() => setMenuOpen(false)}
            className={`text-2xl font-semibold text-gray-300 hover:text-white my-4 transform transition-all duration-300
            ${menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-5 opacity-0'}
            `}>Home</a>

            <a href="#about"
            onClick={() => setMenuOpen(false)}
            className={`text-2xl font-semibold text-gray-300 hover:text-white  my-4 transform transition-all duration-300
            ${menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-5 opacity-0'}
            `}>About</a>

            <a href="#projects" 
            onClick={() => setMenuOpen(false)}
            className={`text-2xl font-semibold text-gray-300 hover:text-white my-4 transform transition-all duration-300
            ${menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-5 opacity-0'}
            `}>Projects</a>

            <a href="#contact"
            onClick={() => setMenuOpen(false)}
            className={`text-2xl font-semibold text-gray-300 hover:text-white my-4 transform transition-all duration-300
            ${menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-5 opacity-0'}
            `}>Contact</a>

        </div>
    );
}