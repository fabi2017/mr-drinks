import "../estilos/CartWidget.css"
import { useContext } from 'react';
import CartContext from "../context/CartContext";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Tada from 'react-reveal/Tada';



function CartWidget (){
 
    const { cartProductos } = useContext(CartContext);
    return(
        <Tada>
       <div className= "icon-carrito">
       <ShoppingCartIcon sx={{fontSize: 40}}/>
       <p>{cartProductos.length}</p>
       </div>
       </Tada>
    )    
}
export default CartWidget