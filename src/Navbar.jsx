import { useState } from 'react'
import './Navbar.css'

function Navbar() {
  // Function untuk scroll ke section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav className="navbar">
      <div className='items'>

        <img src='gem.png' className='icons'/>
        
        <img 
          src='home.png' 
          className='icons'
          onClick={() => scrollToSection('info')}
        />
        
        <img 
          src='sword.png' 
          className='icons'
          onClick={() => scrollToSection('ranks')}
        />
      </div>
    </nav>
  )
}

export default Navbar