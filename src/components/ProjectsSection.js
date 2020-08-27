import React from 'react';

import PortfolioWebsite from './projects/PortfolioWebsite';
import FacebookLikeApp from './projects/FacebookLikeApp';
import CounterApp from './projects/CounterApp';
import ShoppingList from './projects/ShoppingList';
import TravelSite from './projects/TravelSite';
import RandomColorGenerator from './projects/RandomColorGenerator';
import Slideshow from './projects/Slideshow';

function ProjectsSecion() {
  return (
    <div id="Project" className="light-background">
        <div className="wrapper page-section page-section__projects">
        <h2 className="page-section__title page-section__title--dark">My Projects</h2>
            <PortfolioWebsite />
            <FacebookLikeApp />
            <CounterApp />
            <ShoppingList />
            <TravelSite />
            <RandomColorGenerator />
            <Slideshow />
        </div>
    </div>
  );
}

export default ProjectsSecion;
