import React from 'react';

import Nav from './components/Nav';
import Home from './components/Home';
import ProjectsSection from './components/ProjectsSection';
import About from './components/About';
import Contact from './components/Contact';

import './styles/App.css';

function App() {
  return (
    <div>
      <Nav />
      <Home />
      <ProjectsSection />
      <About />
      <Contact />
    </div>
  );
}

export default App;
