import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

function ItemDetail({item}) {
    
  const handleOnAdd=()=>{
    console.log('boton agregar al carrito')
  }


    return (
        
        <div className='cont-detail'>
            
            <div className='cont-detail__img'>
                <img src={item.img} alt='{item.name}' className='img-detail'></img>
            </div>
            <div className='cont-detail__text'>
                <h2>{item.name}</h2>
                <h3>Varietal: {item.varietal}</h3>
                <span className='item-price'>$ {item.price}</span>
                <p>Stock disponible: <b>{item.stock}</b></p>
                <h4 className='description'>Descripción:</h4>
                <p className='item-description'>{item.description}</p>
                <hr/>
                <ItemCount stock={Number(item.stock)} onAdd={handleOnAdd}/>
            </div>
        </div>
    )
}

export default ItemDetail