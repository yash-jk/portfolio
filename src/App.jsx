import React from "react";
import Navigation from "./components/Navigation.jsx";
import Hero from "./components/Hero.jsx"
import Project from "./components/Project.jsx"
import Email from "./components/Email.jsx";
import Links from "./components/Links.jsx";
import Contact from "./components/Contact.jsx";
import About from "./components/About.jsx";

const App = () => {
  return (
    <>
      <div className="min-h-screen bg-slate-900 text-white">
      <Navigation />
      <Hero />
      <About />
      <Project />
      <Email />
      <Links />
      <Contact />
      </div>
    </>
  );
};

export default App;