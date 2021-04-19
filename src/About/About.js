import React from "react";
import "./About.css";

export default function About() {


  return (
    <section id="About" className="About-First-Div">
      <div className="About-Second-Div">
        <h1 className="About-H1">About Me</h1>
      </div>
      <div>
        <p className="About-P">
        Entusiasta de aprender y conocer nuevas cosas. Realizé un bootcamp de
          de más de 700hs de estudio <br /> que me permite desempeñarme como
          desarrollador Fullstack, llevando a la realidad proyectos web en
          solitario y en grupo.
        </p>
      </div>
      <div className="About-Last-Div">
        <a className="About-A" href="https://github.com/AlanCasella" target="_blank" rel="noreferrer">Mi Github</a>
      </div>
    </section>
  );
}

