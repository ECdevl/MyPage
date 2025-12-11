import { Link, useNavigate } from 'react-router-dom';
import './home.css'
function Home() {
    let navigate = useNavigate()
    const to_projects = () => {
        navigate("/projects");
    }
    
    
        return (
        <main id="Home">
            <h1>Hola soy Ezequiel Barovero</h1>
            <h2>Python, C# & React Developer</h2>
            <div className='meDiv'>
            <p>Desarrollador autodidacta especializado en crear aplicaciones completas 
desde cero.<br/> Transformo ideas en código funcional con Python, C# y ahora React.</p>
<div className='buttonDiv'>
<button onClick={to_projects}>Ver Proyectos</button>
</div>
</div>
        </main>
    );
    
}
 
export default Home;