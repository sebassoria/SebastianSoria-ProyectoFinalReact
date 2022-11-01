
// import FormCheckout from '../FormCheckout/FormCheckout'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import './Checkout.css'
import React from 'react'
import {useNavigate} from 'react-router-dom'
import {useContext,useState} from 'react'
import {CartContext} from '../../context/CartContext'
import { addDoc, collection, serverTimestamp, getDocs, query, where, documentId, writeBatch } from 'firebase/firestore'
import {db} from '../../services/firebase/index'
import Loader from '../Loader/Loader'


const MySwal = withReactContent(Swal)

function Checkout() {
  const [loading, setLoading] = useState(false)

  const goBack=useNavigate()
  const navigate=useNavigate()

  const [inputName, setInputName]=useState('')
  const [inputLastName, setInputLastName]=useState('')
  const [inputPhone, setInputPhone]=useState('')
  const [inputMail, setInputMail]=useState('')
  const [inputMail2, setInputMail2]=useState('')

  const {totalPrice, cartList, removeList}=useContext(CartContext)
        
    const sendOrder =async(e)=>{
         e.preventDefault()
        setLoading(true)

        const order={
            buyer:{
                name: inputName,
                lastName: inputLastName,
                phone: inputPhone,
                email: inputMail
            },
            totalPrice,
            Item: cartList,
            time:serverTimestamp()
        }

        if(inputName===''|| inputLastName===''|| inputPhone===''|| inputMail===''|| inputMail2===''){
            console.log('datos faltantes')
            MySwal.fire({
                icon: 'error',
                title: 'Falto algun dato',
                text: 'No olvide completar todos los campos!',
                showConfirmButton: false,
                timer: 2500
              })
            setLoading(false)
        }else if(inputMail!==inputMail2){
            console.log('no es el mismo mail')
            MySwal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Los emails no coinciden',
                showConfirmButton: false,
                timer: 2500
              })
            setLoading(false)
        }else{

        const ordersCollection = collection(db, 'orders')
        const docRef = await addDoc(ordersCollection, order);
          console.log("Document written with ID: ", docRef.id);

        removeList()

        navigate('/')

        MySwal.fire({
                position: 'center',
                icon: 'success',
                title: 'Su orden fue creada con éxito',
                text:`Código de referencia: ${docRef.id}`,
                showConfirmButton: true,
                }) 

        console.log(order)
    }
}

  if(loading){
    return <Loader />
  }


  return (
    <div className="container checkout-container">
    <div className='text-end'>
        <button className='btn btn-back' onClick={() => goBack(-1)}>Volver</button>
    </div>
    <h1 className='text-center'>Completa tus datos</h1>
    <form >
        <div className="mb-3 w-50 mx-auto">
            <label htmlFor="formGroupExampleInput" className="form-label">Nombre</label>
            <input value={inputName} onChange={(e)=>setInputName(e.target.value)} type="text" className="form-control" id="formGroupExampleInput" placeholder="Nombre"/>
        </div>

        <div className="mb-3 w-50 mx-auto">
            <label htmlFor="formGroupExampleInput" className="form-label">Apellido</label>
            <input value={inputLastName} onChange={(e)=>setInputLastName(e.target.value)} type="text" className="form-control" id="formGroupExampleInput" placeholder="Apellido"/>
        </div>
        
        <div className="mb-3 w-50 mx-auto">
            <label htmlFor="formGroupExampleInput" className="form-label">Numero de teléfono</label>
            <input value={inputPhone} onChange={(e)=>setInputPhone(e.target.value)} type="number" className="form-control" id="formGroupExampleInput" placeholder="Numero de teléfono"/>
        </div>

        <div className="mb-3 w-50 mx-auto">               
            <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
            <div className='input-group'>
                <span className="input-group-text" id="basic-addon1">@</span>
                <input value={inputMail} onChange={(e)=>setInputMail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            
            <div id="emailHelp" className="form-text">
                Nunca compartiremos su correo electrónico con nadie más.
            </div>
        </div>

        <div className="mb-3 w-50 mx-auto">               
            <label htmlFor="exampleInputEmail1" className="form-label">Repita su Email</label>
            <div className='input-group'>
                <span className="input-group-text" id="basic-addon1">@</span>
                <input value={inputMail2} onChange={(e)=>setInputMail2(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            
            <div id="emailHelp" className="form-text">
                Nunca compartiremos su correo electrónico con nadie más.
            </div>
        </div>

        <div className="mb-3 w-50 mx-auto">
            <button type="submit" className="btn btn-primary" onClick={sendOrder} >Confirmar compra</button>
        </div>
    </form>
    
</div>
      // <FormCheckout sendOrder={handleSendOrder}/>
  );
}

export default Checkout
