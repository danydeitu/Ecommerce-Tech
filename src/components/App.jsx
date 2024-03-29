import "./App.css";
import "react-toastify/dist/ReactToastify.css";

//Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Toastify
import { ToastContainer } from "react-toastify";

import { cargarBDD } from "../firebase/firebase";

//Componentes
import Navbar from "./Navbar/Navbar";
import { ItemListContainer } from "./ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./ItemDetailContainer/ItemDetailContainer";
import { Contacto } from "./Contacto/Contacto";
import { Cart } from "./Cart/Cart";
import Footer from "./footer/Footer";
//Context
import { DarkModeProvider } from "../context/DarkModeContext";
import { Checkout } from "./Checkout/Checkout";
import { CarritoProvider } from "../context/CarritoContext";
//Dashboard
import Dashboard from "../Dashboard/Dashboard";
import Login from "../Dashboard/Login";
import Register from "../Dashboard/Register";

const App = () => {
  //cargarBDD()
  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
          <DarkModeProvider>
            <Navbar />

            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />

              <Route path="/register" element={<Register />} />

              <Route path="/" element={<ItemListContainer />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route
                path="/category/:idCategoria"
                element={<ItemListContainer />}
              />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
            <Footer />
            <ToastContainer />
          </DarkModeProvider>
        </CarritoProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
