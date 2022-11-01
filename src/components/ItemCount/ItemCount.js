import './ItemCount.css'
import {useState} from 'react'




function ItemCount({stock, onAdd}) {

const [count, setCount]=useState(1)

    const subtract =()=> {
        if(count > 1){
            setCount(count-1)
        }
    }

    const add=()=>{
        if(count<stock){
            setCount(count+1)
        }
    }
  
    return(
        
       <div className='cont-counter'>
         <div className="counter">  
            <button onClick={subtract} className="btn btn-dark">-</button>
            <h6 className='num-count'>{count}</h6>
            <button onClick={add} className="btn btn-dark">+</button>
        </div>
        <div className='add-cart'>
            <button onClick={()=>onAdd(count)} type="button" className="btn btn-dark">agregar al carrito</button>
        </div>

       </div>

    )
}

export default ItemCount