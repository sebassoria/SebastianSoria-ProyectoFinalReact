import './ItemList.css'
import Item from '../Item/Item'


function Itemlist({products}) {

return(   
  <div className="product-list">
    {products.map(prod=> <Item key={prod.id} {...prod}/>)}
  </div>
)

}

export default Itemlist