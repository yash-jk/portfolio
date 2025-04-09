import React from 'react'

const Hero = () => {
  return (
   <section id="hero" className="px-4 sm:px-8 md:px-0 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-5">
            <h2 className="text-cyan-300 text-lg sm:text-xl font-plex-mono">Hello, my name is</h2>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-200">Yash Kumar.</h1>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-400">
              I love exploring new things!
            </h1>
  
            <p className="text-gray-400 max-w-xl text-sm sm:text-base">
              I&apos;m a Final Year Computer Science Engineering Student at Rajiv Academy for Technology & Management,
              Mathura. Primarily interested in Web Development and Data Science.
            </p>
  
            <p className="text-gray-400 max-w-xl text-sm sm:text-base">
              I enjoy learning new skills and implementing them in real life!
            </p>
            <a href="mailto:yash.jk07@gmail.com">
              <button className="mt-8 border font-plex-mono border-cyan-300 text-cyan-300 px-4 py-2 sm:px-6 sm:py-3 rounded hover:bg-cyan-300/10 transition-colors">
                Get in touch
              </button>
            </a>
          </div>
        </div>
      </section>
  )
}

export default Hero