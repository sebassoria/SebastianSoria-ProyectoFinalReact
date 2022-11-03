import React from 'react'
import { useContext} from 'react'
import { Link} from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import './ItemCart.css'


function ItemCart() {
    const {removeList, cartList, totalCount, deleteItem, totalPrice}=useContext(CartContext)

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
                <div key={prod.id} className="row body-cart ">
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
                    <span>${prod.price*prod.count}</span>
                  </div>
                </div>
              ))}

              <div className="row footer-cart ">
                <div className="col-4">
                   <Link to='/checkout' className='btn btn-primary'>
                     Continuar compra
                  </Link>
                </div>
                <div className="col-4 text-end">
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
  )
}

export default ItemCart