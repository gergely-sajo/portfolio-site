import React from 'react';

import Nav from './components/Nav';
import Home from './components/Home';
import ProjectsSection from './components/ProjectsSection';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

import useSticky from './hooks/useSticky';

import './styles/App.css';

function App() {
  const { isSticky, element } = useSticky()

  return (
    <div>
      <Nav sticky={isSticky} />
      <Home element={element}/>
      <ProjectsSection />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
