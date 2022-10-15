

import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import './Cart.css'



function Cart(){
    const {removeList, deleteItem}=useContext(CartContext)
    
    return(
        <div>
            <h1>Aqui va el detalle de la compra, osea el carrito</h1>
            {/* <button onClick={deleteItem} className='btn '>eliminar item</button> */}
            <button onClick={removeList} className='btn btn-dark'>vaciar carrito</button>
        </div>
    )
}

export default Cart