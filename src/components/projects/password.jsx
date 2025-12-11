import "./ProjectsCard.css"
import img1 from '/pass1.png'
import img2 from '/pass2.png'
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
        <h1>Password Master - Generador de Contraseñas</h1>
        <p>Aplicación de seguridad para generar y gestionar contraseñas complejas con 
almacenamiento local. Contraseñas personalizables hasta 50 caracteres, 
organización por servicios y privacidad total sin dependencia de servicios cloud.</p>

<div className="DivImages">
    <SliderComponent images={slideImages}/>
</div>
<a href='https://github.com/ECdevl/Contrase-a-Segura'>Codigo y descarga en GitHub</a>
    </div>
    </section>
    )
};

export default password;