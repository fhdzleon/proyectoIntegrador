import style from "./About.module.css";
import { Link } from "react-router-dom";
 
import uiImage from "../images/desarrollo-web.png"
import uiImage2 from "../images/ui.png"
import uiImage3 from "../images/diseno-ux.png"

import logo1 from "../images/html-5.png"
import logo2 from "../images/css-3.png"
import logo3 from "../images/js.png"
import logo4 from "../images/react.png"

import exito from "../images/exito.png"


const About = () => {
  return (
    <div className={style.contenedor}>

      <div className={style.about} >

        <div className={style.titulo}>
        <h1 className={style.name}>Felipe Hernández Díaz de León</h1>
        <hr/>
        <h2>Front end developer en proceso</h2>
        </div>
        
        
        <p>
          ¡Bienvenido a mi app! Soy un apasionado estudiante de la carrera de
          Full Stack Developer con 41 años de edad, radicando en México. Mi
          fascinación por la creación de experiencias digitales excepcionales me
          ha llevado a explorar profundamente el mundo del desarrollo web,
          centrándome especialmente en las áreas de UI y UX, así como en el
          desafiante y emocionante campo del front-end. 
        </p>
        <div className={style.iconos}>
            <Link to={"/error"}><img src={uiImage} alt="UI"/></Link>
            <img src={uiImage2} alt="UI"/>
            <img src={uiImage3} alt="UI"/>
        </div>
        <p>  
          A lo largo de mitrayectoria académica, he adquirido conocimientos sólidos en diversas
          tecnologías clave para el desarrollo web. Mi habilidad con HTML y CSS
          me permite estructurar y diseñar páginas web de manera efectiva,
          mientras que mi experiencia con React y JavaScript me ha
          proporcionado las herramientas necesarias para crear interfaces
          dinámicas y atractivas.
          </p>
          <div className={style.iconos}>
            <img src={logo1} alt="UI"/>
            <img src={logo2} alt="UI"/>
            <img src={logo3} alt="UI"/>
            <img src={logo4} alt="UI"/>
        </div>
          <p>
           A medida que avanzo
          en mi carrera de Full Stack Developer, estoy comprometido a seguir
          aprendiendo y mejorando mis habilidades. Mi objetivo es explorar
          nuevas tecnologías y tendencias en el mundo del desarrollo web para
          estar siempre al tanto de las últimas innovaciones y ofrecer
          soluciones de vanguardia.
          </p>
           <div className={style.iconos}>
            <img src={exito} alt="UI"/>
        </div>
      </div>
    </div>
  );
};

export default About;
