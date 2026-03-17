import React from 'react';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Certificates from './components/Certificates/Certificates';
import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="antialiased text-gray-900">
      <Navbar /> {/* Place la Navbar tout en haut */}
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </main>
    </div>
  );
}

export default App;