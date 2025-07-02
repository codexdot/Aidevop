
import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center font-bold text-black">
              AI
            </div>
            <span className="ml-3 text-xl font-bold">AI Developer</span>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a href="#home" className="text-slate-300 hover:text-primary transition-colors">Home</a>
              <a href="#projects" className="text-slate-300 hover:text-primary transition-colors">Projects</a>
              <a href="#ai" className="text-slate-300 hover:text-primary transition-colors">AI/ML</a>
              <a href="#skills" className="text-slate-300 hover:text-primary transition-colors">Skills</a>
              <a href="#experience" className="text-slate-300 hover:text-primary transition-colors">Experience</a>
              <a href="#contact" className="text-slate-300 hover:text-primary transition-colors">Contact</a>
              
              <div className="flex items-center space-x-4">
                <a href="#" className="text-slate-300 hover:text-primary transition-colors">
                  <i className="fab fa-github text-lg"></i>
                </a>
                <a href="#" className="text-slate-300 hover:text-primary transition-colors">
                  <i className="fab fa-linkedin text-lg"></i>
                </a>
                <a href="#" className="text-slate-300 hover:text-primary transition-colors">
                  <i className="fab fa-twitter text-lg"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-300 hover:text-primary transition-colors"
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-lg`}></i>
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/90 rounded-lg mt-2">
              <a href="#home" className="block px-3 py-2 text-slate-300 hover:text-primary transition-colors">Home</a>
              <a href="#projects" className="block px-3 py-2 text-slate-300 hover:text-primary transition-colors">Projects</a>
              <a href="#ai" className="block px-3 py-2 text-slate-300 hover:text-primary transition-colors">AI/ML</a>
              <a href="#skills" className="block px-3 py-2 text-slate-300 hover:text-primary transition-colors">Skills</a>
              <a href="#experience" className="block px-3 py-2 text-slate-300 hover:text-primary transition-colors">Experience</a>
              <a href="#contact" className="block px-3 py-2 text-slate-300 hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
