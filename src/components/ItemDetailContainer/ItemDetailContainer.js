import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import {getItem} from '../../asyncMock'
import {useState, useEffect} from 'react'
import Loader from '../Loader/Loader'
import {useParams} from 'react-router-dom'

function ItemDetailContainer() {
const [item, setItem]=useState()
const [loading, setLoading]=useState(true)

const {detailId}=useParams()

useEffect(()=>{
    getItem(detailId).then(res=>{
        setItem(res)
      
    }).finally(()=>{setLoading(false)})
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