
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { useState, useEffect } from 'react';
import Loader from '../Loader/Loader';
import {useParams} from 'react-router-dom'
import {collection, getDocs, query, where} from 'firebase/firestore'
import {db} from '../../services/firebase'

function ItemListContainer({greeting}) {
  const [products, setProducts]=useState([])  
  const [loading, setLoading]=useState(true)
 
  const {categoryId}=useParams()

    useEffect(()=>{
      setLoading(true)

      const collectionRef= categoryId 
      ? query(collection(db,'products'), where('category', '==', categoryId))
      : collection(db,'products')

      getDocs(collectionRef).then(response=>{
        console.log(response)
        const productsAdapted=response.docs.map(doc=>{
          const data=doc.data()
          console.log(data)

          return{id: doc.id, ...data}
        })

        setProducts(productsAdapted)
        
      }).catch(error=>{
        console.log(error)
      }).finally(()=>{setLoading(false)})
      
    },[categoryId])


  if (loading) {
    return (
     <Loader />
    );
  } 
  else{
    return ( 
       <div className='items-container'>
       
          <h1 className='greeting'>
            <hr/>{greeting}<hr/>
          </h1>

          <ItemList products={products}/>
        
       </div>
    );
  }
}
  export default ItemListContainer;