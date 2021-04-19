import React from 'react';
import "./Me.css"
import photo from "../assets/9.jpg"
import CV from "../assets/CV Alan INGLES.pdf"

export default function Me() {

  return (
    <section id="Home" className="Me-First-Div">
      <div className="Me-Second-Div">
      
        <h1 className="Me-h1">Alan</h1>
        
        <h1 className="Me-h1-2">Casella</h1>
        <div className="Me-Last-Div">
          <img className="Me-Img"  src={photo} alt="mifoto"></img>
        </div>
        
      </div>
      <div>
        <p className="Me-P">Soy un diseñador full stack con énfasis en la lógica
        y resolución de problemas de forma creativa y funcional </p>
      </div>
      <div className="Me-div">
        <a className="Me-A" href={CV} download="CV Alan INGLES.pdf">DESCARGA MI CV</a>
      </div >
        
    </section>
  );
}