// import React from 'react'
// import {useNavigate} from 'react-router-dom'
// import {useState} from 'react'
// // import {CartContext} from '../../context/CartContext'


// function FormCheckout({sendOrder}) {
//     const goBack=useNavigate()

//     const [inputName, setInputName]=useState('')
//     const [inputMail, setInputMail]=useState('')
//     const [inputPhone, setInputPhone]=useState('')



//   return (
//     <div className="container checkout-container">
//         <div className='text-end'>
//             <button className='btn btn-back' onClick={() => goBack(-1)}>Volver</button>
//         </div>
//         <h1 className='text-center'>Completa tus datos</h1>
//         <form>
//             <div className="mb-3 w-50 mx-auto">
//                 <label htmlFor="formGroupExampleInput" className="form-label">Nombre</label>
//                 <input value={inputName} onChange={(e)=>setInputName(e.target.value)} type="text" className="form-control" id="formGroupExampleInput" placeholder="Nombre"/>
//             </div>
//             <div className="mb-3 w-50 mx-auto">               
//                 <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
//                 <div className='input-group'>
//                     <span className="input-group-text" id="basic-addon1">@</span>
//                     <input value={inputMail} onChange={(e)=>setInputMail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
//                 </div>
                
//                 <div id="emailHelp" className="form-text">
//                     Nunca compartiremos su correo electrónico con nadie más.
//                 </div>
//             </div>
//             <div className="mb-3 w-50 mx-auto">
//                 <label htmlFor="formGroupExampleInput" className="form-label">Numero de teléfono</label>
//                 <input value={inputPhone} onChange={(e)=>setInputPhone(e.target.value)} type="number" className="form-control" id="formGroupExampleInput" placeholder="Numero de teléfono"/>
//             </div>
            
//             <div className="mb-3 w-50 mx-auto">
//                 <button type="submit" className="btn btn-primary" onClick={sendOrder}>Confirmar compra</button>
//             </div>
//         </form>
        
//     </div>
//   )
// }

// export default FormCheckout
// coment