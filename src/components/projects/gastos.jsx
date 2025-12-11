import "./ProjectsCard.css"
import img1 from '/spenses1.png'
import img2 from '/spenses2.png'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import SliderComponent from '../SliderComponent.jsx'

const slideImages = [
  {
    url: img1,
    alt: 'images 1'
  },
  {
    url: img2,
    alt: 'imagen 2'
  }
];

function password(){
    return(
        <section className="ContainerCard">
    <div className="ProjectCard">
        <h1>Expense Manager - Control de Finanzas</h1>
        <p>App multiplataforma para gestión de finanzas personales. Seguimiento de 
salario mensual, registro de gastos y cálculo automático de saldo. Interfaz 
responsiva que funciona en Windows, Linux y Android.</p>

<div className="DivImages">
    <SliderComponent images={slideImages}/>
</div>
<a href='https://github.com/ECdevl/Gestor-de-gastos'>Codigo y descarga en GitHub</a>
    </div>
    </section>
    )
};

export default password;