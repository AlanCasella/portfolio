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
        Enthusiastic about learning and new knowledge. I completed a bootcamp
          of 700+ hours <br /> that allows me to perform
          as a Fullstack developer, creating web projects alone and in groups.
        </p>
      </div>
      <div className="About-Last-Div">
        <a className="About-A" href="https://github.com/AlanCasella" target="_blank" rel="noreferrer">My Github</a>
      </div>
    </section>
  );
}
