import './App.css'
import 'react-toastify/dist/ReactToastify.css'

//Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Toastify
import { ToastContainer } from 'react-toastify';

//Componentes
import Navbar from "./Navbar/Navbar";
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer';
import { Contacto } from './Contacto/Contacto';
import { Cart } from './Cart/Cart';
<<<<<<< HEAD
import { Checkout } from './Checkout/Checkout';
=======
>>>>>>> 46af0d674be9098cd5321e71456156c516bf6eb9
//Context
import { DarkModeProvider } from '../context/DarkModeContext';
import { CarritoProvider } from '../context/CarritoContext';
const App = () => {
 
    return (
    <>

    <BrowserRouter>
<<<<<<< HEAD
      <CarritoProvider>
        <DarkModeProvider>
          <Navbar/>
            <Routes>
              <Route path='/' element={<ItemListContainer/>}/> 
              <Route path='/item/:id' element={<ItemDetailContainer/>}/>
              <Route path='/category/:idCategoria' element={<ItemListContainer/>}/>
              <Route path='/contacto' element={<Contacto/>}/> 
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/checkout' element={<Checkout/>}/>
            </Routes> 
            <ToastContainer/>
        </DarkModeProvider>
      </CarritoProvider>
      
=======
      <DarkModeProvider>
        <Navbar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/> 
            <Route path='/item/:id' element={<ItemDetailContainer/>}/>
            <Route path='/category/:idCategoria' element={<ItemListContainer/>}/>
            <Route path='/contacto' element={<Contacto/>}/> 
            <Route path='/cart' element={<Cart/>}/>
          </Routes> 
          <ToastContainer/>
      </DarkModeProvider>
>>>>>>> 46af0d674be9098cd5321e71456156c516bf6eb9
    </BrowserRouter>
      
    </>
  );
}

export default App;

