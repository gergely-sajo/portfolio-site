import React from 'react';
import me from '../images/me.jpeg';

function Home() {
  return (
    <div id="Home" className="dark-background max-vh">
        <div className="wrapper page-section home-banner__content">
            <div id="Home-Banner-Content" className="home-banner__description">
                <h1 className="home-banner__title">Hey, I'm Gary.</h1>
                <p className="home-banner__subtitle">Self-taught developer from Vienna, Austria. I am looking for a front-end or full-stack developer job.</p>
                <button className="btn btn--large">My Projects</button>
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