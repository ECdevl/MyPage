import "./ProjectsCard.css"
import img1 from '/POS1.png'
import img2 from '/POS2.png'
import img3 from '/POS3.png'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import SliderComponent from '../SliderComponent.jsx'



function POS(){
    return(
        <section className="ContainerCard">
    <div className="ProjectCard">
        <h1>Portfolio Personal - React</h1>
        <p>Sitio web personal construido con React para mostrar proyectos y habilidades. 
Diseño responsivo, componentes reutilizables y navegación fluida. Proyecto 
que demuestra capacidades frontend y conocimiento de desarrollo moderno.</p>
<a href='https://github.com/ECdevl/MyPage'>Codigo en GitHub</a>
    </div>
    </section>
    )
};

export default POS;