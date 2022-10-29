import './ReturnFinish.css'
import {Link} from 'react-router-dom'

function ReturnFinish(){
    return(
        // 
       <div className='cont-finish'>
            <Link to='/cart' className="btn btn-dark btn-finish">Ir a mi carrito</Link>
            <Link to='/' className="btn btn-dark btn-keep">Seguir comprando</Link>
       </div>
    )
}

export default ReturnFinish