import React from 'react';
import "./Nav.css"

export default function Nav(props) {


    function HandleClick() {
        props.lang(!props.value)
    } 

  return (
    <div className="Nav-First-Div">
        <div  className="Nav-Ul">
            <li className="Nav-Li">
            <a href="/#Home">Me</a>
            </li>
            <li className="Nav-Li">
            <a href="/#About">About Me</a>
            </li>
            <li className="Nav-Li">
            <a href="/#Tech">Technologies</a>
            </li>
            <li className="Nav-Li">
            <a href="/#Projects">Projects</a>
            </li>
            <li className="Nav-Li" onClick={HandleClick}>
                Español
            </li>
        </div>
    </div>
  );
}