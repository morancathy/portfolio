import React from 'react';

export default function Showcase(props) {

  // window.scrollTo(0, 0);
  window.scroll({
  top: 0,
  left: 0,
  behavior: 'smooth'
});


  return (
    <div className="Showcase">
    <a id="top"></a>
      <h2>Projects</h2>
      <div className="projects">
        <div className="project">
          <img  id="P3" src="/img/P3.png" alt="destination unknown"/>
          <div className="info">
            <div className="info-text">
              <p> A working full-stack application using the MERN stack. App highlights off-the-beaten-track destinations. Browse suggestions, create your own or search a 3rd party API.</p>
            </div>
            <div className="info-tec">
              <p id="tec-used">Techonolgies Used</p>
              <div className="tec" id="P3-tec">
                <p>MongoDB</p>
                <p>Express</p>
                <p>React</p>
                <p>NodeJS</p>
                <p>User Auth</p>
                <p>Webpack</p>
              </div>
              <div className="links">
                <button id="P3-btn">
                  <a style={{textDecoration: 'none'}} href="https://destination-unknown-moran.herokuapp.com/" target="_blank" rel="noreferrer">
                    Demo
                  </a>
                </button>
                <button id="P3-btn">
                  <a style={{textDecoration: 'none'}} href="https://github.com/morancathy/destination-unknown" target="_blank" rel="noreferrer">
                    Source Code
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="project">
          <img id="P4" src="/img/P4.png" alt="for goodness cakes"/>
          <div className="info">
            <div className="info-text">
              <p>Lead team of 4 developers in group project. Designed app to emulate figma hand-off from UX team with idea of turning a bakery’s Instagram into a working web app. App includes admin page for manipulation and site allows users to browse goods, schedule a consultation, submit an order and email the baker directly from the site.</p>
            </div>
            <div className="info-tec">
              <p id="tec-used">Techonolgies Used</p>
              <div className="tec" id="P4-tec">
                <p>MongoDB</p>
                <p>Express</p>
                <p>React</p>
                <p>NodeJS</p>
                <p>User Authentication</p>
                <p>Webpack</p>
                <p>Emailjs</p>
              </div>
              <div className="links">
                <button id="P4-btn">
                  <a style={{textDecoration: 'none'}} href="https://for-goodness-cakes-by-saira.herokuapp.com" target="_blank" rel="noreferrer">
                    Demo
                  </a>
                </button>
                <button id="P4-btn">
                  <a style={{textDecoration: 'none'}} href="https://github.com/students-random/for-goodness-cakes" target="_blank" rel="noreferrer">
                    Source Code
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="project">
          <img id="P2" src="/img/P2.png" alt="under the sea"/>
          <div className="info">
            <div className="info-text">
              <p> Multi-page application emulates an e-commerce store. User's can easily navigate through shop, adding items to a cart, which interacts with inventory. Users can create, edit and delete items</p>
            </div>
            <div className="info-tec">
              <p id="tec-used">Techonolgies Used</p>
              <div className="tec" id="P2-tec">
                <p>Express</p>
                <p>MongoDB</p>
                <p>NodeJS</p>
              </div>
              <div className="links">
                <button id="P2-btn">
                  <a style={{textDecoration: 'none'}} href="https://under-the-sea-dive-shop.herokuapp.com/underthesea" target="_blank" rel="noreferrer">
                    Demo
                  </a>
                </button>
                <button id="P2-btn">
                  <a style={{textDecoration: 'none'}} href="https://github.com/morancathy/scuba_shop" target="_blank" rel="noreferrer">
                    Source Code
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="project">
          <img  id="P3" src="/img/P3.png" alt="destination unknown"/>
          <div className="info">
            <div className="info-text">
              <p> An interactive browser story-game made with vanilla JavaScript, CSS and HTML that manipulates the DOM. App allows users to choose-their-own-adventure to decide what character does each day in order to survive.</p>
            </div>
            <div className="info-tec">
              <p id="tec-used">Techonolgies Used</p>
              <div className="tec">
                <p>vanilla JavaScript</p>
                <p>CSS</p>
                <p>HTML</p>
              </div>
              <div className="links">
                <button id="P3-btn">
                  <a style={{textDecoration: 'none'}} href="https://destination-unknown-moran.herokuapp.com/" target="_blank" rel="noreferrer">
                    Demo
                  </a>
                </button>
                <button id="P3-btn">
                  <a style={{textDecoration: 'none'}} href="https://github.com/morancathy/destination-unknown" target="_blank" rel="noreferrer">
                    Source Code
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="#top">Jump to top of page</a>
    </div>
  )
};
