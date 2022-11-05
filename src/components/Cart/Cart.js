
import { useContext} from 'react'
import { Link, useNavigate} from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import ItemCart from '../ItemCart/ItemCart'
import './Cart.css'

function Cart(id){
    const navig=useNavigate()
    const {cartList}=useContext(CartContext)

     if(cartList.length===0){
        return(
        <div className='no-products'>
            <h1>No hay productos en el carrito</h1>
            <Link to='/' className='btn btn-dark'>
                Ir a la tienda
            </Link>
            <button className='btn btn-dark' onClick={()=>navig(-1)}>
                Volver atras
            </button>
            <p>Vea el detalle del producto que desea y agreguelo a su carrito</p>
        </div>
        )
     }
     else{
        
        return (
          
          <ItemCart/>
          
        );
    }
}

export default Cart