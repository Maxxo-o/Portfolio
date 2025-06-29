import './App.css'
import { LoadingScreen } from './components/LoadingScreen'
import './index.css'
import { useState } from 'react'
import { NavBar } from './components/NavBar'
import { MobileMenu } from './components/MobileMenu'
import { Home } from './components/sections/Home'
import { About } from './components/sections/About'
import { Projects } from './components/sections/Projects'
import { Contact } from './components/sections/Contact'
import styled from 'styled-components'


function App() {
  const [isLoaded, setisLoaded] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)


  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setisLoaded(true)}/>}{""}
      <div className={`min-h-screen transition-opacity duration-700 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
        } bg-black text-gray-100`}>
          <Home />
          <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        
        <About />
        <Projects />
        <Contact />
        
      </div>
    </>
  )
}

export default App
