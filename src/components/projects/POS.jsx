import "./ProjectsCard.css"
import img1 from '/POS1.png'
import img2 from '/POS2.png'
import img3 from '/POS3.png'
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
  },
  {
    url: img3,
    alt: 'imagen 3'
  },
];

function POS(){
    return(
        <section className="ContainerCard">
    <div className="ProjectCard">
        <h1>Sistema de Punto de Venta e Inventario</h1>
        <p>Sistema completo para gestión de pequeños negocios con módulos de ventas, 
inventario y caja. Incluye base de datos SQL, operaciones CRUD, múltiples 
métodos de pago y control de stock en tiempo real. Arquitectura modular 
para fácil mantenimiento.</p>

<div className="DivImages">
    <SliderComponent images={slideImages}/>
</div>
<a href='https://github.com/ECdevl/VentaEinventario'>Codigo y descarga en GitHub</a>
    </div>
    </section>
    )
};

export default POS;