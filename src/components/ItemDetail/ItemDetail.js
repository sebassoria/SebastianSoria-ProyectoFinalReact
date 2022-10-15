import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import {useContext, useState} from 'react'
import ReturnFinish from '../ReturnFinish/ReturnFinish';
import {CartContext} from '../../context/CartContext'
import {Link} from 'react-router-dom'


function ItemDetail({id,img, name, varietal, stock, description, price}) {

    const{addToCart}=useContext(CartContext)

    const[finish, setFinish]=useState(false);
    
  const handleOnAdd=(count)=>{
    const productToAdd={
      id, 
      name,
      price,
      count
    }
    setFinish(true)
    
    addToCart(productToAdd)
  }
 
  
    return (
      <div className="cont-detail">
        <div className="cont-detail__img">
          <img src={img} alt={name} className="img-detail"></img>
        </div>
        <div className="cont-detail__text">
          <h2>{name}</h2>
          <h3>Varietal: {varietal}</h3>
          <span className="item-price">$ {price}</span>
          <p>
            Stock disponible: <b>{stock}</b>
          </p>
          <h4 className="description">Descripción:</h4>
          <p className="item-description">{description}</p>
          <hr />
          <div className='counter-cont'>
            {
            finish 
              ? <ReturnFinish />
              :<ItemCount stock={Number(stock)} onAdd={handleOnAdd} />
              }
            
          </div>
        </div>
      </div>
    );
}

export default ItemDetail