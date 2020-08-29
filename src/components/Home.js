import React from 'react';
import me from '../images/me.jpeg';

const Home = ({ element }) => {
  return (
    <div id="Home" className="page-section page-section--dark max-vh">
        <div className="wrapper home-banner__content">
            <div id="Home-Banner-Content" className="home-banner__description">
                <h1 ref={element} className="home-banner__title">Hey, I'm Gary.</h1>
                <p className="home-banner__subtitle">Self-taught developer from Vienna, Austria. I am looking for an opportunity to begin my career in web development.</p>
                <a href="#my-projects"><button className="btn btn--large">My Projects</button></a>
            </div>
            <div id="Home-Banner-Photo" className="home-banner__photo">
              <picture>
                <img src={me} alt="Gary Sajo"/>
              </picture>
            </div>
        </div>
    </div>
    )
}

export default Home;