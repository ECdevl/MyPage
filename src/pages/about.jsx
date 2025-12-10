import './about.css'
function About() {
    
        return (
        // About.jsx (estructura sugerida)

<section className="about-container">
  
  
  <div className="about-hero">
    <h1>Sobre mí</h1>
    <p className="subtitle">Desarrollador autodidacta | Solucionador de problemas</p>
  </div>

  <div className="about-content">
    

    <div className="about-story">
      <h2>Mi Historia</h2>
      <p>
        Soy desarrollador autodidacta con pasión por resolver problemas a través del código. 
        Mi viaje comenzó por curiosidad y rápidamente se convirtió en mi objetivo profesional.
      </p>
      <p>
        Me especializo en desarrollo backend con Python y C#, creando aplicaciones que van 
        desde sistemas de gestión empresarial hasta herramientas de productividad personal.
      </p>
      <p>
        Lo que más disfruto es ese momento cuando el código finalmente funciona después de 
        horas de debugging, o cuando un usuario utiliza algo que creé y le resuelve un 
        problema real.
      </p>
      <p>
        Actualmente estoy expandiendo mis conocimientos hacia desarrollo full stack con React.
      </p>
    </div>


    <div className="about-skills">
      <h2>Desarrollo</h2>
      <div className="skill-grid">
        <div className="skill-item">
          <span className="skill-icon">💻</span>
          <span>Aplicaciones Desktop</span>
        </div>
        <div className="skill-item">
          <span className="skill-icon">📱</span>
          <span>Aplicaciones Móviles</span>
        </div>
        <div className="skill-item">
          <span className="skill-icon">🔌</span>
          <span>APIs REST</span>
        </div>
        <div className="skill-item">
          <span className="skill-icon">🗄️</span>
          <span>Bases de datos SQL</span>
        </div>
        <div className="skill-item">
          <span className="skill-icon">⚙️</span>
          <span>Sistemas CRUD</span>
        </div>
      </div>
    </div>
  </div>

  {/* Sección de aprendizaje */}
  <div className="about-learning">
    <h2>Aprendizaje Continuo</h2>
    <p>
      Documentación oficial, proyectos prácticos y mucha experimentación. 
      Creo firmemente en aprender haciendo.
    </p>
  </div>

  {/* Más allá del código */}
  <div className="about-beyond">
    <h2>Más allá del código</h2>
    <p>
      Cuando no estoy programando, probablemente esté jugando videojuegos 
      (que también desarrollo ocasionalmente con Godot Engine) o investigando 
      nuevas tecnologías para mi próximo proyecto.
    </p>
  </div>

  {/* Call to action */}
  <div className="about-cta">
    <p className="cta-text">¿Buscas un desarrollador comprometido y con ganas de aprender?</p>
    <button className="cta-button">Hablemos</button>
  </div>

</section>
        );
    
}
 
export default About;