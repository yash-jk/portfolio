import Navigation from "./components/navigation.jsx";
import Hero from "./components/hero.jsx"
import Project from "./components/project.jsx"
import Email from "./components/email.jsx";
import Links from "./components/links.jsx";
import Contact from "./components/contact.jsx";
import About from "./components/about.jsx";

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