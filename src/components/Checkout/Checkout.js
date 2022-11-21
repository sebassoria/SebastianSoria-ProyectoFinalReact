
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
        try {
            const order={
                buyer:{
                    name: inputName,
                    lastName: inputLastName,
                    phone: inputPhone,
                    email: inputMail
                },
                totalPrice,
                Item: cartList,
                time: serverTimestamp()
            }
            const batch = writeBatch(db)

            const outOfStock = []

            const ids= cartList.map(prod=>prod.id)
            const productsRef=collection(db, 'products')
            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))
            const { docs } = productsAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cartList.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.count

                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })

            if(outOfStock.length === 0) {
                
                if(inputName===''|| inputLastName===''|| inputPhone===''|| inputMail===''|| inputMail2===''){
                    MySwal.fire({
                        icon: 'error',
                        title: 'Falto algun dato',
                        text: 'No olvide completar todos los campos!',
                        showConfirmButton: false,
                        timer: 2500
                    })
                    setLoading(false)

                }else if(inputMail!==inputMail2){
                    MySwal.fire({
                        icon: 'error',
                        title: 'Email incorrecto',
                        text: 'La dirección de email no coincide',
                        showConfirmButton: false,
                        timer: 2500
                    })
                    setLoading(false)

                }else{
                    
                await batch.commit()

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
                }
            } else {
                MySwal.fire({
                    icon: 'error',
                    title: 'Lo sentimos',
                    text: 'Producto fuera de stock',
                    showConfirmButton: false,
                    timer: 2500
                })
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    if(loading){
        return <Loader />
    }

    return (
        <div className="container checkout-container">
            <h1 className='text-center'>Completa tus datos</h1>
            <form >
                <div className="mb-3 w-50 mx-auto inputs"> 
                    <input value={inputName} onChange={(e)=>setInputName(e.target.value)} type="text" className="form-control" id="formGroupExampleInput" placeholder="Nombre"/>
                </div>
                <div className="mb-3 w-50 mx-auto inputs">
                    <input value={inputLastName} onChange={(e)=>setInputLastName(e.target.value)} type="text" className="form-control" id="formGroupExampleInput" placeholder="Apellido"/>
                </div>                
                <div className="mb-3 w-50 mx-auto inputs">
                    <input value={inputPhone} onChange={(e)=>setInputPhone(e.target.value)} type="number" className="form-control" id="formGroupExampleInput" placeholder="Numero de teléfono"/>
                </div>
                <div className="mb-3 w-50 mx-auto inputs"> 
                    <div className='input-group'>
                        <span className="input-group-text" id="basic-addon1">@</span>
                        <input type="email" value={inputMail} onChange={(e)=>setInputMail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"/>
                    </div>               
                </div>
                <div className="mb-3 w-50 mx-auto inputs">               
                    <div className='input-group'>
                        <span className="input-group-text" id="basic-addon1">@</span>
                        <input type="email" value={inputMail2} onChange={(e)=>setInputMail2(e.target.value)}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Repita su dirección de Email"/>
                    </div>                    
                    <div id="emailHelp" className="form-text">
                        Nunca compartiremos su correo electrónico con nadie más.
                    </div>
                </div>
                <div className="mb-3 w-50 mx-auto inputs confirm">
                    <button type="submit" className="btn btn-primary " onClick={sendOrder} >Confirmar compra</button>
                </div>
            </form>
            <div className='text-center'>
                <button className='btn btn-back' onClick={() => goBack(-1)}>Volver</button>
            </div>
        </div>
    );
}

export default Checkout
