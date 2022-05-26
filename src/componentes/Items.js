import "../estilos/Items.css"
import { useContext } from "react";
import ItemCount from "./ItemCount";
import CartContext from "../context/CartContext";

function Items({ datProd }) {
   
  const { titulo, precio, imagen, id, descripcion, categoria } = datProd; 
  const { addProductos } = useContext(CartContext);


  const onAdd = (e, contador) => {   
    addProductos(datProd, contador);    
  };


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
          <ItemCount stock={datProd.stock} initial="1" action={onAdd}/>
        </div>
      </div>
    </div>
  ); 
  
} 


export default Items;


