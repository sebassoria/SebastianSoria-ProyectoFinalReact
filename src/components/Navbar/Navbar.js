
import './Navbar.css';
import CartWidget from '../CartWidget/CartWidjet';
import {Link, NavLink} from 'react-router-dom'


function Navbar() {
    return (
        
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container">
          <Link to='/' className="navbar-brand logo"><img src='../img/Logo/Logo.png'></img></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            {/* <button type="button" className="btn btn-dark btn-nav">Acerca</button> */}
            <NavLink to='/' end className={({ isActive}) => isActive ? 'btn btn-dark btn-active' : 'btn btn-dark btn-nav'}>Productos</NavLink>
            <NavLink to='/category/tinto' className={({ isActive}) => isActive ? 'btn btn-dark btn-active' : 'btn btn-dark btn-nav'}>Tinto</NavLink>
            <NavLink to='/category/blanco' className={({ isActive}) => isActive ? 'btn btn-dark btn-active' : 'btn btn-dark btn-nav'}>Blanco</NavLink>
            <NavLink to='/category/rosado' className={({ isActive}) => isActive ? 'btn btn-dark btn-active' : 'btn btn-dark btn-nav'}>Rosado</NavLink>
            <button type="button" className="btn btn-dark btn-nav">Contacto</button>
          </div>    
          <div className='cart-cont'>
            <CartWidget />  
          </div> 
        </div>
      
      </nav>
      
    );
  }
  
  export default Navbar;