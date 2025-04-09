import React from 'react'

const Email = () => {
  return (
    <div className="fixed right-8 bottom-0 hidden md:flex flex-col items-center gap-6">
       <a 
       target="blank"
         href="mailto:yash.jk07@gmail.com" 
         className="text-cyan-300 text-2xl tracking-widest font-plex-mono hover:text-emerald-400 transition-colors vertical-text"
         style={{ writingMode: 'vertical-rl' }}
       >
         yash.jk07@gmail.com
       </a>
       <div className="h-32 w-[1px] bg-gray-400"></div>
     </div>
  )
}

export default Email