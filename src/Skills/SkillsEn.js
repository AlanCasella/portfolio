import React from "react";
import Axios from "../assets/axios.png";
import Bcrypt from "../assets/bcrypt.png";
import Css from "../assets/css.png";
import Express from "../assets/ex.png";
import Html from "../assets/html.png";
import JS from "../assets/js.png";
import JWT from "../assets/jwt.png";
import Multer from "../assets/multer.png";
import Node from "../assets/node.png";
import Postgres from "../assets/postgres.png";
import react from "../assets/react.png";
import Redux from "../assets/redux.png";
import Sequelize from "../assets/sequelize.png";
import "./Skills.css";

export default function Skills() {
  return (
    <section id="Tech" className="Skills-First-Div">
      <div>
        <h1 className="Skills-H1">Technologies</h1>
      </div>
      <div className="Skills-Div-IMG">
        <div className="Pruebita">
          <img src={Axios} alt="Axios"></img>
          <p className="Skills-P">Axios</p>
        </div>
        <div>
          <img src={Bcrypt} alt="Bcrypt"></img>
          <p className="Skills-P">Bcrypt</p>
        </div>
        <div>
          <img src={Css} alt="Css"></img>
          <p className="Skills-P">Css</p>
        </div>
        <div>
          <img src={Express} alt="Express"></img>
          <p className="Skills-P">Express</p>
        </div>
        <div>
          <img src={Html} alt="Html"></img>
          <p className="Skills-P">Html</p>
        </div>
        <div>
          <img src={JS} alt="JS"></img>
          <p className="Skills-P">JavaScript</p>
        </div>
        <div>
          <img src={JWT} alt="JWT"></img>
          <p className="Skills-P">JsonWebToken</p>
        </div>
        <div>
          <img src={Multer} alt="Multer"></img>
          <p className="Skills-P">Multer</p>
        </div>
        <div>
          <img src={Node} alt="Node"></img>
          <p className="Skills-P">Node</p>
        </div>
        <div>
          <img src={Postgres} alt="Postgres"></img>
          <p className="Skills-P">Postgres</p>
        </div>
        <div>
          <img src={react} alt="React"></img>
          <p className="Skills-P">React</p>
        </div>
        <div>
          <img src={Redux} alt="Redux"></img>
          <p className="Skills-P">Redux</p>
        </div>
        <div>
          <img src={Sequelize} alt="Sequelize"></img>
          <p className="Skills-P">Sequelize</p>
        </div>
      </div>
    </section>
  );
}