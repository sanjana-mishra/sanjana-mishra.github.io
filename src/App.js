// App.js

import React from 'react';
import Navbar from './Navbar';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
// import Contact from './pages/Contact';
import Header from './pages/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* Your header content goes here */}
      {/* </header> */}
      <Navbar />
      <div id="header">
        <Header />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="experience">
        <Experience />
      </div>
      {/* <div id="contact">
        <Contact />
      </div> */}

    </div>
  );
}

export default App;
