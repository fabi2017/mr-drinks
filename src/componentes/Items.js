
import "../estilos/Items.css"
import Button from '@mui/material/Button';
import {  useNavigate } from 'react-router-dom'
import { useState, useContext } from "react";
import ItemCount from "./ItemCount";

import CartContext from "../context/CartContext";

function Items({ datProd }) {
   
  const { titulo, precio, imagen, id, descripcion, categoria } = datProd; 
  const navigate = useNavigate();
  const { cartProductos, addProductos } = useContext(CartContext);


  const [btnAddCart, setBtnCart] = useState(false);
  const [btnCarrito, setBtnCarrito] = useState(true);

  const onAdd = (e, contador) => {
    setBtnCart(true);
    setBtnCarrito(false);
    addProductos(datProd, contador);
  };

/*   const pageCarrito = () => {
    navigate(`/cart`);
  };
 */
  return (
    <div className="cardProd">
      <h4 className="txtTitulo">{titulo} </h4>
      <div className="imagenProd">
        <img src={`../${imagen}`} alt="" />
      </div>
      <div className="infoProd">
        <h4 className="txtDetail">{descripcion} </h4>
        <p className="txtPrecio">$ {precio} </p>     
        <div className="infoItem2">
          <ItemCount
            stock={datProd.stock}
            initial="1"
            action={onAdd}
            btnAdd={btnAddCart}          />
         {/*  <Button
            sx={{ m: 2, p: 1 }}
            variant="outlined"
            size="small"
            color="error"
            disabled={btnCarrito}
            onClick={pageCarrito}
          >
            Ir al Carrito
          </Button>        */}  
        </div>
      </div>
    </div>
  ); 
  
} 


export default Items;


