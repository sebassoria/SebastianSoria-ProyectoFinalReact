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
                <div className="col-md-6 col-sm-3">
                  <span>PRODUCTO</span>
                </div>
                <div className="col-md-2 col-sm-3 text-center">
                  <span>PRECIO</span>
                </div>
                <div className="col-md-2 col-sm-3 text-center">
                  <span>CANTIDAD</span>
                </div>
                <div className="col-md-2 col-sm-3 text-center">
                  <span>SUBTOTAL</span>
                </div>
              </div>

              {cartList.map((prod) => (
                <div key={prod.id} className="row body-cart">
                  <div className="col-md-1 col-sm-1 text-center">
                    <span className="material-symbols-outlined" onClick={()=>deleteItem(prod.id)}>
                      delete
                    </span>
                  </div>
                  <div className="col-md-5 col-sm-11 prod-name">
                    <span>{prod.name}</span>
                  </div>
                  <div className="col-md-2 col-sm-4 text-center">
                    <span>${prod.price}</span>
                  </div>
                  <div className="col-md-2 col-sm-4 text-center">
                    <span>{prod.count}</span>
                  </div>
                  <div className="col-md-2 col-sm-4 text-center">
                    <span>${prod.price*prod.count}</span>
                  </div>
                </div>
              ))}

              <div className="row footer-cart ">
                <div className="col-md-4 col-sm-6 btn-checkout">
                   <Link to='/checkout' className='btn btn-primary'>
                     Continuar compra
                  </Link>
                </div>
                <div className="col-md-4 col-sm-6  btn-clean">
                  <button onClick={removeList} className="btn btn-light">
                    vaciar carrito
                  </button>
                </div>
                <div className="col-md-2 col-sm-3 text-center">
                  <span className='total-price'>Cantidad total: {totalCount}</span>
                </div>
                <div className="col-md-2 col-sm-3 text-center">
                  <span className='total-price'>Total: ${totalPrice}</span>
                </div>
              </div>
            </div>
          </div>
  )
}

export default ItemCart