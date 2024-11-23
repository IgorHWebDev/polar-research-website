import React, { useState } from 'react'
import { Button } from './button'
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="font-bold text-xl">Prompted Visions</div>
        
        <div className="hidden md:flex items-center gap-6">
          <button onClick={() => scrollToSection('hero')} className="hover:text-primary">Home</button>
          <button onClick={() => scrollToSection('projects')} className="hover:text-primary">Projects</button>
          <button onClick={() => scrollToSection('stats')} className="hover:text-primary">Impact</button>
          <button onClick={() => scrollToSection('collaboration')} className="hover:text-primary">Collaborate</button>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" onClick={() => scrollToSection('contact')}>Contact Us</Button>
          <Button>Get Started</Button>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <button onClick={() => scrollToSection('hero')} className="hover:text-primary py-2">Home</button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-primary py-2">Projects</button>
            <button onClick={() => scrollToSection('stats')} className="hover:text-primary py-2">Impact</button>
            <button onClick={() => scrollToSection('collaboration')} className="hover:text-primary py-2">Collaborate</button>
            <Button variant="outline" onClick={() => scrollToSection('contact')} className="w-full">Contact Us</Button>
            <Button className="w-full">Get Started</Button>
          </div>
        </div>
      )}
    </nav>
  )
} 