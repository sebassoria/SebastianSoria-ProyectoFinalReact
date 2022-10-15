
import './App.css';
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Cart from './components/Cart/Cart';
import CartContextProvider from './context/CartContext'



function App() {

  return (
    
     <div className='app'>
      <CartContextProvider>
       <BrowserRouter>
         <Navbar />
         <Routes>
           <Route path='/' element={<ItemListContainer greeting={'Nuestros productos'}/> }/>
           <Route path='/detail/:detailId' element={<ItemDetailContainer />}/> 
           <Route path='/category/:categoryId' element={<ItemListContainer  greeting={'Nuestros productos'}/>} />
           <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
           <Route path='/cart' element={<Cart />}/>
         </Routes>
       </BrowserRouter>
      </CartContextProvider>
     </div>

   
  );
}

export default App;
