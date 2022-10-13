import './ReturnFinish.css'
import {Link} from 'react-router-dom'

function ReturnFinish(){
    return(
        // 
       <div className='cont-finish'>
            <Link to='/cart' className="btn btn-dark btn-finish">Terminar</Link>
            <Link to='/' className="btn btn-dark btn-keep">Seguir comprando</Link>
       </div>
    )
}

export default ReturnFinish