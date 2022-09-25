import cart from './assets/cart.svg'
import './CartWidget.css'

function CartWidget(){
    return (
        <div className="cart">           
            <img src={cart} alt='cart' className="cart-img"/>
             <span>0</span>
        </div>

    );

}
export default CartWidget