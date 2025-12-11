import Gastos from '../components/projects/gastos'
import POS from '../components/projects/POS'
import Web from '../components/projects/web'
import Password from '../components/projects/password'
import './projects.css'
function Projects() {
    
        return (
        <main id="Projects">
            <h1>Mis Proyectos Destacados</h1>
            <h2>Puedes encontrarlos todos en mi <a href='https://github.com/ECdevl?tab=repositories'>GitHub</a></h2>
            <POS/>
            <Web/>
            <Gastos/>
            <Password/>

            
            
            
            
        </main>
        );
    
}
 
export default Projects;