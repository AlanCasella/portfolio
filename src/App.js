import {useState} from "react";
import Nav from "./Nav/Nav.js"
import Me from "./Me/Me.js"
import About from "./About/About.js"
import Skills from "./Skills/Skills.js"
import Proyectos from "./Proyectos/Proyectos.js"
import NavEn from "./Nav/NavEn.js"
import MeEn from "./Me/MeEn.js"
import AboutEn from "./About/AboutEn.js"
import SkillsEn from "./Skills/SkillsEn.js"
import ProyectosEn from "./Proyectos/ProyectosEn.js"
import Footer from "./Footer/Footer.js"

function App() {
const [Lang, setLang] = useState(false)

  return !Lang ? (
    <div className="pepito"><NavEn lang={setLang} value={Lang}/>
    <MeEn/>
    <AboutEn/>
    <SkillsEn/>
    <ProyectosEn/>
    <Footer/> </div>): 
    <div><Nav lang={setLang} value={Lang}/>
    <Me/>
    <About/>
    <Skills/>
    <Proyectos/>
    <Footer/>
     </div> 
}

export default App;