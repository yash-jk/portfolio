import React from "react";
import Resume from '../assets/resume/Resume.pdf'

const Navigation = () => {
  const handleScroll = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-sm z-50 px-4 md:px-8">
      <div className="flex flex-row justify-between items-center py-6">
        <div className="text-cyan-300">
          <div className="h-12 w-12 border-2 border-cyan-300 rounded-lg flex items-center justify-center">
            Y
          </div>
        </div>
        
        <div className="flex flex-row ml-4 items-center gap-4 md:gap-8 mt-4 md:mt-0">
          <a href="#hero" onClick={handleScroll} className="text-gray-400 hover:text-cyan-300 text-sm">
            <span className="text-cyan-300 font-plex-mono">01.</span> Home
          </a>
          <a href="#about" onClick={handleScroll} className="text-gray-400 hover:text-cyan-300 text-sm">
            <span className="text-cyan-300 font-plex-mono">02.</span> About
          </a>
          <a href="#projects" onClick={handleScroll} className="text-gray-400 hover:text-cyan-300 text-sm">
            <span className="text-cyan-300 font-plex-mono">03.</span> Projects
          </a>
          <a href="#contact" onClick={handleScroll} className="text-gray-400 hover:text-cyan-300 text-sm">
            <span className="text-cyan-300 font-plex-mono">04.</span> Contact
          </a>
          <a href={Resume} download="My_resume.pdf" target="blank">
            <button className="border font-plex-mono tracking-widest border-cyan-300 text-cyan-300 px-3 py-2 rounded hover:bg-cyan-300/10 cursor-pointer transition-colors">
              Resume
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
