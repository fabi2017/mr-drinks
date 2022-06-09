import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//SECCIONES
import Nosotros from "./secciones/Nosotros";
import Contacto from "./secciones/Contacto";
import Home from "./secciones/Home";
import Carrito from "./secciones/Carrito";
import Page404 from "./extra/Page404"
//COMPONENTES
import ItemListContainer from "./componentes/ItemListContainer";
import NavBar from "./componentes/NavBar";
import Footer from "./componentes/Footer";

//
import { CartProvider } from "./context/CartContext"

function App() {
  return (
    <div className="app">
      <CartProvider>        
          <BrowserRouter>
            <NavBar/>          
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/categoria/:categoria"
                element={<ItemListContainer />}/>            
              <Route path="/nosotros" element={<Nosotros />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/cart" element={<Carrito/>} />
              <Route path="*"element={<Page404/>} />
            </Routes>   
            <Footer/>          
          </BrowserRouter>        
      </CartProvider>      
    </div>
  );
}

export default App;
