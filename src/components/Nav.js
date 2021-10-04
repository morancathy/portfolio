import React, {useState} from 'react';

export default function Nav(props) {
  const [viewContact, setViewContact] = useState(false)

  const handleClick = () => {
    setViewContact(!viewContact)
  }

  return (
    <>
    <nav className="nav">
    {/*}  <button oncClick={handleClick}>*/}
        <a href="#contact">Contact</a>
    {/*}  </button>*/}
      <a href="#skills">Skills</a>
      <a href="#top">Projects</a>
      <a href="#resume">Resume</a>
    </nav>
    </>
  )
};
