import React, { useState } from "react";
import SliderData from "../assets/Slider";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "./Proyectos.css";

export default function Proyectos() {
  const [Slider, setSlider] = useState(0);

  function Previus() {
    setSlider(Slider === 0 ? SliderData.length - 1 : Slider - 1);
  }

  function Next() {
    setSlider(Slider === SliderData.length - 1 ? 0 : Slider + 1);
  }

  return (
    <section id="Projects" className="Projects">
      <h1 className="Projects-H1">Portfolio</h1>
      <p className="Projects-P">Here you can see some of the projects I have worked on</p>
      
      <div className="Projects-First-Div">
        {SliderData.map((slide, index) => {
          return (
            <div className={index === Slider ? "Proyecto-Slide-Active": "Proyecto-Slide"} key={index}>
              {index === Slider && (
                <>
                <FaArrowAltCircleLeft className="Left-Arrow" onClick={Previus} />
      <FaArrowAltCircleRight className="Right-Arrow" onClick={Next} />
              <img src={slide.image} alt="" className="Projects-IMG"></img>
              <a className="Project-Repo" href={slide.repo} target="_blank" rel="noreferrer">Github</a>
              <a className={slide.visit ? "Project-Visit" : "Project-NoVisit"} href={slide.link} target="_blank" rel="noreferrer">VISIT</a>
              </>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}