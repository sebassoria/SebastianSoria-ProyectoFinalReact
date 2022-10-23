

import { useContext} from 'react'
import { Link, useNavigate} from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import './Cart.css'



function Cart(id){
    const navig=useNavigate()
    const {removeList, cartList, totalCount, deleteItem}=useContext(CartContext)
    
    console.log(...cartList)

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
        </div>
        )
     }
     else{
        
        return(
            
            <div className='bodycart-container'>
                
                <div className='cart-container '>
                    <h1 className='cart-title'>Carrito</h1>
                    <div className='row head-cart'>
                        <div className='col-6'>
                            <span>PRODUCTO</span>
                        </div>
                        <div className='col-2'>
                            <span>PRECIO</span>
                        </div>
                        <div className='col-2'>
                            <span>CANTIDAD</span>
                        </div>
                        <div className='col-2'>
                            <span>SUBTOTAL</span>
                        </div>
                    </div>
                    
                    <div className='row body-cart justify-content-center'>
                        <div className='col-1'>
                            <span class="material-symbols-outlined" onClick={deleteItem}>
                                delete
                            </span>
                        </div>
                        <div className='col-5'>
                            <span>Nombre producto</span>
                        </div>
                        <div className='col-2'>
                            <span>$0000</span>
                        </div>
                        <div className='col-2'>
                            <span>count</span>
                        </div>
                        <div className='col-2'>
                            <span>$subtotal</span>
                        </div>
                    </div>
                    
                    <div className='row footer-cart justify-content-center'>
                        
                        <div className='col-5'>
                            <button onClick={removeList} className='btn btn-dark'>vaciar carrito</button>
                        </div>
                        <div className='col-2'>
                            <span></span>
                        </div>
                        <div className='col-2'>
                            <span>{totalCount}</span>
                        </div>
                        <div className='col-2'>
                            <span>$total</span>
                        </div>
                    </div>
                
                </div>
            </div>
        )
    }
}

export default Cart