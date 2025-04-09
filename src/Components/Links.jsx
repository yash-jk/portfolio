import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const Links = () => {
  return (
    <div className="fixed left-14 bottom-0 hidden md:flex flex-col items-center gap-6">
          <a href="https://github.com/yash-jk" target="blank" aria-label="GitHub profile" className="text-gray-400 hover:text-emerald-400 transition-colors">
            <FaGithub className="text-cyan-300" size={30} />
          </a>
          <a href="https://www.linkedin.com/in/yash-jk07/" target="blank" aria-label="LinkedIn profile" className="text-gray-400 hover:text-emerald-400 transition-colors">
            <FaLinkedin className="text-cyan-300" size={30} />
          </a>
          <a href="https://www.instagram.com/_yyssh/" target="blank" aria-label="Instagram profile" className="text-gray-400 hover:text-emerald-400 transition-colors">
            <FaInstagram className="text-cyan-300" size={30} />
          </a>
          <a href="https://twitter.com" target="blank" aria-label="Twitter profile" className="text-gray-400 hover:text-emerald-400 transition-colors">
            <FaTwitter className="text-cyan-300" size={30} />
          </a>
          <div className="h-32 w-[1px] bg-gray-400"></div>
        </div>
  )
}

export default Links