import "../estilos/Carrito.css";
import { useContext} from "react";
//COMPONENTES
import CartItem from "../componentes/CartItem";
import ModalCompra from "../extra/ModalCompra";
//
import CartContext from "../context/CartContext";

function Carrito() {
  const { cartProductos } = useContext(CartContext);

  return (
    <div className="containCart">
      {cartProductos.map((item) => {
        return <CartItem dataProd={item} key={item.id} />;
      })}
      <div className="contCompra">
        <ModalCompra />
      </div>
    </div>
  );
}

export default Carrito;
