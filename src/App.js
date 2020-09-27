import React, { useState } from 'react';

import Header from './components/Header';
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
    <>
      <Header sticky={isSticky} />
      <Home element={element}/>
      <ProjectsSection />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
