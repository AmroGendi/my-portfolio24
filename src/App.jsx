import React, { useState } from "react";
import "./App.css";

import About from "./Components/About/About";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Toggle from "./Components/Toggle";
import useLocalStorage from "use-local-storage";

const App = () => {

  const [isDark, setIsDark] = useLocalStorage('isDark', false);

  return (
    <div className="App" data-theme={isDark ? "dark" : "light"}>
      <Toggle
      isChecked={isDark}
      handleChange={() => setIsDark(!isDark)}
      />
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
      </div>
  );
};

export default App;
