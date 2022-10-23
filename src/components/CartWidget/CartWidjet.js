import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import cart from './assets/cart.svg'
import './CartWidget.css'
import {Link} from 'react-router-dom'


function CartWidget(){
    const {totalCount}=useContext(CartContext)
    return (
           
            <div className="cart-widget"> 
                <Link  to='/cart' >     
                    <img src={cart} alt='cart' className="cart-img"/>
                    <span >{totalCount}</span>
                </Link>   
            </div> 
       

    );

}
export default CartWidget