import React from 'react';
import "./Nav.css"

export default function Nav(props) {


    function HandleClick() {
        props.lang(!props.value)
    } 

  return (
    <div className="Nav-First-Div">
        <div className="Nav-Ul">
            <li className="Nav-Li">
                <a href="/#Home">Yo</a>
            </li>
            <li className="Nav-Li">
            <a href="/#About">Sobre Mí</a>
            </li>
            <li className="Nav-Li">
            <a href="/#Tech">Tecnologías</a>
            </li>
            <li className="Nav-Li">
            <a href="/#Projects">Proyectos</a>
            </li>
            <li className="Nav-Li" onClick={HandleClick}>
                English
            </li>
        </div>
    </div>
  );
}