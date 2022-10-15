import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import cart from './assets/cart.svg'
import './CartWidget.css'


function CartWidget(){
    const {totalCount}=useContext(CartContext)
    return (
        <div className="cart">           
            <img src={cart} alt='cart' className="cart-img"/>
             <span>{totalCount}</span>
        </div>

    );

}
export default CartWidget