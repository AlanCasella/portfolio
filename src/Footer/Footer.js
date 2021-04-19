import React from "react";
import {AiOutlineLinkedin} from "react-icons/ai";
import "./Footer.css";

export default function Footer() {
 

  return (
    <div className="Footer-Div">
        <span className="Footer-Span">Contact Info:</span>
        <a className="Footer-A" href="https://www.linkedin.com/in/alan-casella-8909bb1b8/" target="_blank" rel="noreferrer">Linkedin</a>
        <AiOutlineLinkedin className="Footer-Icon"/>
        <span className="Footer-Span2">alan.daniel.casella@gmail.com</span>
    </div>
  );
}