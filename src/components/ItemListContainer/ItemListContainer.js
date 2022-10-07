
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import getProducts, { getCategory } from '../../asyncMock';
import { useState, useEffect } from 'react';
import Loader from '../Loader/Loader';
import {useParams} from 'react-router-dom'

function ItemListContainer({greeting}) {
  const [products, setProducts]=useState([])  
  const [loading, setLoading]=useState(true)

  const {categoryId}=useParams()

    useEffect(()=>{

      const asyncFunction = categoryId ? getCategory : getProducts

      asyncFunction(categoryId).then(response=>{
        setProducts(response)
      }).finally(()=>{setLoading(false)})
    },[categoryId])


  if (loading) {
    return (
     <Loader />
    );
  } else{
    return ( 
       <div className='items-container'>
         <h1>
            <hr/>{greeting}<hr/>
        </h1>

         <ItemList products={products}/>
        
       </div>
    );
  }
}
  export default ItemListContainer;