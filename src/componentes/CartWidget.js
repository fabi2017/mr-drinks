import "../estilos/CartWidget.css"
import { useContext } from 'react';
import CartContext from "../context/CartContext";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function CartWidget (){
 
    const { cartProductos } = useContext(CartContext);
    return(
       <div className= "icon-carrito">
       <ShoppingCartIcon sx={{fontSize: 40}}/>
       <p>{cartProductos.length}</p>
       </div>
    )    
}
export default CartWidget