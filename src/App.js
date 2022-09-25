// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
   
     <div className='app'>
      <Navbar />
      <ItemListContainer greeting={'Hello world!!'}/>

     </div>

   
  );
}

export default App;
