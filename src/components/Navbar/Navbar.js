
import './Navbar.css';
import CartWidget from '../CartWidget/CartWidjet';
import {Link, NavLink} from 'react-router-dom'


function Navbar() {
    return (
        
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container justify-content-around">
          <Link to='/' className="navbar-brand logo"><img src='../img/Logo/Logo.png' alt='Logo'></img></Link>
          <div className="justify-content-center" id="navbarNav">
            <NavLink to='/' end className={({ isActive}) => isActive ? 'btn btn-dark btn-active' : 'btn btn-dark btn-nav'}>Productos</NavLink>
            <NavLink to='/category/tinto' className={({ isActive}) => isActive ? 'btn btn-dark btn-active' : 'btn btn-dark btn-nav'}>Tinto</NavLink>
            <NavLink to='/category/blanco' className={({ isActive}) => isActive ? 'btn btn-dark btn-active' : 'btn btn-dark btn-nav'}>Blanco</NavLink>
            <NavLink to='/category/rosado' className={({ isActive}) => isActive ? 'btn btn-dark btn-active' : 'btn btn-dark btn-nav'}>Rosado</NavLink>
          </div>    
          <div className='cart-cont'>
            <CartWidget />  
          </div> 
        </div>  
      </nav>
      
    );
  }
  
  export default Navbar;