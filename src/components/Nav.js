export default function Nav(props) {

  return (
    <>
    <nav className="nav">
      <div className="name">
        <p>cathy moran</p>
        <p>porfolio</p>
      </div>
      <div className="nav-links">
        <a className="link projects" href="#projects" rel="noreferrer">
          <img src="/img/tag.png" alt="projects"/>
          <p>projects</p>
        </a>
        <a className="link linkedin" href='https://www.linkedin.com/in/morancathy/' target="_blank" rel="noreferrer">
          <img src="/img/linkedin.svg" alt="linkedin"/>
          <p>linkedin</p>
        </a>
        <a className="link github" href='https://github.com/morancathy' target="_blank" rel="noreferrer">
          <img src="/img/GitHub.png" alt="github"/>
          <p>github</p>
        </a>
        <a className="link email" href="mailto:morancathy@gmail.com" target="_blank" rel="noreferrer">
          <img src="/img/email.png" alt="email"/>
          <p>contact</p>
        </a>
        <a className="link pdf" href='https://drive.google.com/file/d/1g9clTE_pHuFO579KKFOdIsUN_WH_sXfB/view?usp=sharing' target="_blank" rel="noreferrer">
          <img src="/img/pdf.png" alt="resume"/>
          <p>resume</p>
        </a>
      </div>
    </nav>
    </>
  )
};
