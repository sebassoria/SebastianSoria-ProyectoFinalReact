
import './App.css';
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Cart from './components/Cart/Cart';
import CartContextProvider from './context/CartContext'
import Checkout from './components/Checkout/Checkout'


function App() {

  return (
    
     <div className='app'>
      <CartContextProvider>
       <BrowserRouter>
         <Navbar />
         <Routes>
           <Route path='/' element={<ItemListContainer greeting={'Nuestros productos'}/> }/>
           <Route path='/detail/:detailId' element={<ItemDetailContainer />}/> 
           <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Nuestros productos'}/>} />
           <Route path='/cart' element={<Cart />}/>
           <Route path='/checkout' element={<Checkout/>}/>
           <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
         </Routes>
       </BrowserRouter>
      </CartContextProvider>
     </div>
  
  );
}

export default App;
