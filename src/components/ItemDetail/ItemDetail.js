import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import {useContext, useState} from 'react'
import ReturnFinish from '../ReturnFinish/ReturnFinish';
import {CartContext} from '../../context/CartContext'
import { useNavigate } from 'react-router-dom';


function ItemDetail({id,img, name, varietal, stock, description, price}) {
  const navigate=useNavigate()

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
          <div className="counter-cont">
            {finish ? 
              <ReturnFinish />
             : 
               stock > 0 ? <ItemCount stock={Number(stock)} onAdd={handleOnAdd} />
               : <h5 className='text-center pb-4'>No tenemos stock de este producto</h5>
            }
          </div>
          <div className='text-center'>
            <button className='btn btn-back' onClick={() => navigate(-1)}>Volver</button>
          </div>
        </div>
        
      </div>
    );
}

export default ItemDetail