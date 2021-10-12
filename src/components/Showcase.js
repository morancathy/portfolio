export default function Showcase(props) {

  const up = () => {
    window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
    })
  };

  return (
    <div className="Showcase" id="projects">
      <h2>Projects</h2>
      <div className="projects">
        <div className="project">
          <img  id="P3" src="/img/P3.png" alt="destination unknown"/>
          <div className="info">
            <div className="info-text">
              <p>Full-stack MERN application. App highlights off-the-beaten-track destinations. Browse suggestions, create your own or search a 3rd party API.</p>
            </div>
            <div className="info-tec">
              <p id="tec-used">Technologies Used</p>
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
          <img id="P4" src="/img/P4.1.png" alt="for goodness cakes"/>
          <div className="info">
            <div className="info-text">
              <p>App emulates figma hand-off from UX team with purpose of turning a bakery’s Instagram into a working web app. Includes admin page allowing baker to manipulate announcement bulletin and app calendar for availability. Also stores all form submissions (orders and 'contact me') in addition to being sent directly to baker's email. App also allows users to schedule a consultation via Calendly.</p>
              <p>Team lead of 5 developers in group project. </p>
            </div>
            <div className="info-tec">
              <p id="tec-used">Technologies Used</p>
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
                  <a style={{textDecoration: 'none'}} href="https://github.com/morancathy/for-goodness-cakes" target="_blank" rel="noreferrer">
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
              <p>Full CRUD, multi-page application emulates e-commerce store. Users can easily navigate through shop, adding items to cart, which interacts with inventory. Ability to create, edit and delete items.</p>
            </div>
            <div className="info-tec">
              <p id="tec-used">Technologies Used</p>
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
          <img  id="P1" src="/img/P1.png" alt="man on an island"/>
          <div className="info">
            <div className="info-text">
              <p> An interactive browser story-game made with Vanilla JavaScript, CSS and HTML that manipulates the DOM. Users choose-their-own-adventure to decide what character does each day to survive.</p>
            </div>
            <div className="info-tec">
              <p id="tec-used">Technologies Used</p>
              <div className="tec" id="P1-tec">
                <p>Vanilla JavaScript</p>
                <p>CSS</p>
                <p>HTML</p>
              </div>
              <div className="links">
                <button id="P1-btn">
                  <a style={{textDecoration: 'none'}} href="https://man-on-an-island.herokuapp.com/" target="_blank" rel="noreferrer">
                    Demo (desktop)
                  </a>
                </button>
                <button id="P1-btn">
                  <a style={{textDecoration: 'none'}} href="https://github.com/morancathy/SEIR-project-1" target="_blank" rel="noreferrer">
                    Source Code
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="backtotop">
        <button onClick={()=>up()}>
          <img src="/img/arrow.jpg" alt="linkedin"/>
          <p>back to top</p>
        </button>
      </div>
    </div>
  )
};
