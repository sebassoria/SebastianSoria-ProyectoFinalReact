
import './Item.css'
import {Link} from 'react-router-dom'

function Item({img, name, price, stock, id}) {

    return (
      <div className="card card-cont" >
        <img src={img} className="card-img-top img-product" alt={name} />
        <hr/>
        <div className="card-body">
          <h5 className="card-title">
            <b>{name}</b>
          </h5>
          <p className="card-text">
            <b>Precio unitario: </b>${price}
          </p>
          <p>Stock: {stock}</p>
          <Link to={`/detail/${id}`} className="btn btn-dark btn-detail">
            Ver detalle de compra
          </Link>
        </div>
      </div>
    );
    
    }
    
    export default Item