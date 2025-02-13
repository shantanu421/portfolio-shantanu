import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Starfield from "./components/Starfield"; 
import Projects from "./sections/Projects";

const App = () => {
  return (
    <>
      <Starfield />
      <main className="max-w-7xl mx-auto relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Projects />
      </main>
    </>
  );
};

export default App;
