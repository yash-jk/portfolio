import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import project1Img from '../assets/Images/img1.jpg'
import project2Img from '../assets/Images/img2.jpg'

const projects = [
  {
    title: "WeatherLYF",
    description: "Designed and developed a responsive weather website featuring real-time updates, auto-detection of user location, and detailed weather forecasts through API integration, ensuring seamless performance across devices and browsers.",
    imageUrl: project1Img,
    alt: "project1",
    technologies: ["HTML", "CSS", "Javascript"],
    githubLink: "https://github.com/yash-jk/WeatherLYF",
    liveLink: "https://yash-jk.github.io/WeatherLYF/",
  },
  {
    title: "E-Validate",
    description: "Developed an email validation website using HTML, CSS, JavaScript, and API integration, offering real-time email format checking, domain verification, and SMTP checks. Focused on creating a user-friendly interface with a responsive design for seamless usage across devices.",
    imageUrl: project2Img,
    alt: "project2",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/yash-jk/E-Validate",
    liveLink: "https://yash-jk.github.io/E-Validate/",
  },
  // Add more projects as needed
];

const Project = () => {
  return (
    <section id="projects" className="px-4 md:px-8 py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-200 mb-12">
          <span className="text-cyan-300 font-plex-mono">03.</span> Some Things I&apos;ve Built
        </h2>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <div key={index} className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative group">
                <img
                  src={project.imageUrl}
                  alt={`Project ${index + 1}: ${project.alt}`}
                  className="rounded w-full h-auto"
                />
                <div className="absolute inset-0 bg-cyan-300/20 group-hover:bg-transparent transition-colors"></div>
              </div>

              <div className="text-right space-y-4">
                <p className="text-cyan-500 font-bold text-base font-plex-mono mt-3">Featured Project</p>
                <h3 className="text-2xl font-bold text-gray-200">{project.title}</h3>
                <div className="bg-slate-800 p-6 rounded shadow-xl">
                  <p className="text-gray-400">{project.description}</p>
                </div>
                <ul className="flex justify-end gap-4 text-cyan-300 font-plex-mono text-sm">
                  {project.technologies.map((tech, techIndex) => (
                    <li key={techIndex}>{tech}</li>
                  ))}
                </ul>
                <div className="flex justify-end gap-4">
                  <a href={project.githubLink} target="blank" className="text-gray-400 hover:text-cyan-300">
                    <FaGithub size={20} />
                  </a>
                  <a href={project.liveLink} target="blank" className="text-gray-400 hover:text-cyan-300">
                    <FaExternalLinkAlt size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
