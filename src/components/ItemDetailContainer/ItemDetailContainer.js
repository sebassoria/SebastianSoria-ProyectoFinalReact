
import ItemDetail from '../ItemDetail/ItemDetail'
import {useState, useEffect} from 'react'
import Loader from '../Loader/Loader'
import {useParams} from 'react-router-dom'
import {getDoc, doc} from 'firebase/firestore'
import {db} from '../../services/firebase'

function ItemDetailContainer() {
const [item, setItem]=useState()
const [loading, setLoading]=useState(true)

const {detailId}=useParams()

useEffect(()=>{

    const docRef=doc(db,'products', detailId)    

    getDoc(docRef).then(res=>{
      
        const data=res.data()
        const productAdapted={id:res.id, ...data}
        setItem(productAdapted)
    })
    .finally(()=>{setLoading(false)})
},[detailId])

if(loading){
    return (
        <Loader />
    )
}else{

return (

    <ItemDetail {...item} />
)

}

}
export default ItemDetailContainer