import './footer.css'
function Footer(){
    return(
    <footer>
        <div className='contact'>
            <h2>Contáctame</h2>
        </div>
        <div className='contact-data'>
        <p>baroveroezequielb@gmail.com</p>
        <hr/>
        <p>Mis repositorios de <a href='https://github.com/ECdevl?tab=repositories'>Github</a></p>
        <hr/>
        <p>Mi perfil de <a href='https://www.linkedin.com/in/ezequiel-barovero-aa3598383/'>LikedIn</a></p>
        </div>
    </footer>
    );
}

export default Footer;