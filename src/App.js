
import './App.css';
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'




function App() {

  return (
   
     <div className='app'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={'Nuestros productos'}/> }/>
          <Route path='/detail/:detailId' element={<ItemDetailContainer />}/> 
          <Route path='/category/:categoryId' element={<ItemListContainer  greeting={'Nuestros productos'}/>} />
        </Routes>
      </BrowserRouter>
     </div>

   
  );
}

export default App;
