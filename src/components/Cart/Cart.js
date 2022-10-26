

import { useContext} from 'react'
import { Link, useNavigate} from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import './Cart.css'



function Cart(id){
    const navig=useNavigate()
    const {removeList, cartList, totalCount, deleteItem, totalPrice}=useContext(CartContext)
    
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
        
        return (
          <div className="bodycart-container">
            <div className="cart-container ">
              <h1 className="cart-title">MI CARRITO</h1>
              <div className="row head-cart">
                <div className="col-6">
                  <span>PRODUCTO</span>
                </div>
                <div className="col-2 text-center">
                  <span>PRECIO</span>
                </div>
                <div className="col-2 text-center">
                  <span>CANTIDAD</span>
                </div>
                <div className="col-2 text-center">
                  <span>SUBTOTAL</span>
                </div>
              </div>

              {cartList.map((prod) => (
                <div className="row body-cart ">
                  <div className="col-1">
                    <span className="material-symbols-outlined" onClick={()=>deleteItem(prod.id)}>
                      delete
                    </span>
                  </div>
                  <div className="col-5">
                    <span>{prod.name}</span>
                  </div>
                  <div className="col-2  text-center">
                    <span>${prod.price}</span>
                  </div>
                  <div className="col-2  text-center">
                    <span>{prod.count}</span>
                  </div>
                  <div className="col-2  text-center">
                    {prod.price*prod.count}
                  </div>
                </div>
              ))}

              <div className="row footer-cart ">
                <div className="col-8">
                  <button onClick={removeList} className="btn btn-light">
                    vaciar carrito
                  </button>
                </div>
                <div className="col-2 text-center">
                  <span className='total-price'>Cantidad total: {totalCount}</span>
                </div>
                <div className="col-2 text-center">
                  <span className='total-price'>Total: ${totalPrice}</span>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default Cart