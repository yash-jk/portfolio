import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="px-4 md:px-8 py-24 bg-slate-800/30">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-200 mb-4">
              <span className="text-cyan-300 font-plex-mono ">04.</span> What&apos;s Next?
            </h2>
            
            <h3 className="text-3xl md:text-5xl font-bold text-gray-200 mb-6">Get In Touch</h3>
            
            <p className="text-gray-400 mb-8">
              I&apos;m currently looking for new opportunities. Whether you have a question
              or just want to say hi, I&apos;ll try my best to get back to you!
            </p>
            
            <a href="mailto:yash.jk07@gmail.com">
              <button className="border-2 border-cyan-300 text-cyan-300 px-6 py-4 rounded hover:bg-cyan-300/10 transition-colors font-plex-mono">
                Mail me
              </button>
            </a>
          </div>
      </section>
  )
}

export default Contact