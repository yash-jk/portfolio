import React from 'react'
import profileImg from '../assets/Images/pfp.jpg'

const About = () => {
  return (
   <section id="about" className="px-4 md:px-8 py-24">
         <div className="max-w-6xl mx-auto">
           <h2 className="text-3xl font-bold text-gray-200 mb-8">
             <span className="text-cyan-300 font-plex-mono text-2xl">02  .</span> About Me
           </h2>
           
           <div className="flex flex-col md:flex-row gap-12">
             <div className="text-gray-400 space-y-4 w-full text-base">
               <p>
                 Hello! I&apos;m Yash Kumar from Mathura - Birth Place of <span className="text-cyan-300 font-plex-mono">Lord Shri Krishn</span> <br /> also known as the city of love.
               </p>
               <p>I’m a dedicated software engineer with a passion for creating innovative solutions. Known for my punctuality, strong work ethic, and being goal-oriented, I strive to deliver high-quality results on every project.
               </p>
               
               <p>
                 In my downtime, I enjoy playing games, watching animes, and reading mangas, which fuels my creativity and helps me maintain a balanced perspective.
               </p>
               
               <p>
                 I am pursuing my Bachelors from <span className="text-cyan-300 font-plex-mono">RATM, Mathura</span> in Computer Science and Engineering(2022-2025), my current CGPA is <span className="text-cyan-300 font-plex-mono">8.3</span> out of 10.
               </p>
               
               <p>Here are a few of the other activities that I love to do!</p>
               
               <ul className="grid grid-cols-2 gap-2 mt-4 text-cyan-300 font-plex-mono ">
                 {['Coding', 'Cycling', 'Gaming', 'Watching Podcasts', 'Animes', 'Reading Mangas', 'Music'].map((tech) => (
                   <li key={tech} className="flex items-center gap-2">
                     <span className="text-cyan-300">▹</span> {tech}
                   </li>
                 ))}
               </ul>
             </div>
             
             <div className="relative group">
               <div className="relative z-10">
                 <img 
                   src={profileImg}
                   alt="Profile" 
                   className="rounded border-t-2 border-b-2  border-cyan-300 grayscale hover:grayscale-0 transition-all"
                 />            
               </div>
               <div className="absolute inset-0 border-2 border-cyan-300 rounded translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-all"></div>
             </div>
           </div>
         </div>
       </section>
  )
}

export default About