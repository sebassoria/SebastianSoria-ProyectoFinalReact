
import './Navbar.css';
import CartWidget from '../CartWidget/CartWidjet';


function Navbar() {
    return (
        
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand logo link-light" href="../../public/index.html">Dos Naranjas</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <button type="button" className="btn btn-dark">Inicio</button>
            <button type="button" className="btn btn-dark">Productos</button>
            <button type="button" className="btn btn-dark">Contacto</button>
          </div>    
          <div>
            <CartWidget />  
          </div> 
        </div>
      
      </nav>
      
    );
  }
  
  export default Navbar;