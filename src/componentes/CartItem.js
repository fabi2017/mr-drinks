
import "../estilos/CartItem.css"
import { useContext } from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CartContext from "../context/CartContext";


function CartItem({ dataProd }) {
  const {titulo, precio, imagen, id, quanty} = dataProd; 
  let subtotal = precio * quanty 
  const { eliminarProd}= useContext(CartContext); 
 
  
  return (
    <div className="itemCart">
       <button className="btnEliminar" onClick={()=> eliminarProd(id)} ><DeleteForeverIcon /></button>                  
        <div className="imagenItem2">
            <img src={`../${imagen}`} alt="" />
        </div>
        <h4 className="textTitulo">{titulo} </h4>               
        {/* <p className="textPrecio">${precio}</p>   */}
        <p className="contCantidad">Cantidad: {quanty}</p>    
        <p className="textPrecio">${subtotal}</p>                         
       
    </div>
  );
  
} 


export default CartItem;