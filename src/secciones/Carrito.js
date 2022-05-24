import "../estilos/Carrito.css"
import { useContext , useState } from "react";
import { useNavigate } from "react-router-dom";
//COMPONENTES
import CartItem from "../componentes/CartItem";
import Button from "react-bootstrap/Button";
import ModalCompra from "../extra/ModalCompra";
//
import { addDoc, collection } from "firebase/firestore";
import db from "../firebase";
import CartContext from "../context/CartContext";


function Carrito () {
    const { cartProductos, precioTotal, limpiarCart, totalPrice } =
    useContext(CartContext);
  const navigate = useNavigate();
  /* const [ordenGenerada, setOrdenGenerada] = useState();
  const [openModal, setOpenModal] = useState(false);

  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    mail: "",
  });

  const [orden, setOrden] = useState({
    buyer: formData,
    items: cartProductos.map((cartProduct) => {
      return {
        id: cartProduct.id,
        nombre: cartProduct.titulo,
        precio: cartProduct.precio,
        cantidad: cartProduct.quanty,
      };
    }),
    total: totalPrice,
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let prevOrden = { ...orden, buyer: formData };
    setOrden({ ...orden, buyer: formData });
    pushOrden(prevOrden);
  };

  const pushOrden = async (prevOrden) => {
    const ordenFirebase = collection(db, "ordenesCompra");
    const ordenDoc = await addDoc(ordenFirebase, prevOrden);
    // console.log("orden generada: ", ordenDoc.id);
    setOrdenGenerada(ordenDoc.id);
  };
 */
  // console.log("orden ", orden);

  const pageHome = () => {
    navigate(`/`);
  };


return(
        <div className="containCart">
        {cartProductos.map((item) => {
          return <CartItem dataProd={item} key={item.id} />;
        })}
   
       {cartProductos.length >= 1 ? (
          <div className="contCompra">
               <p>Total: $ <span>{precioTotal()}</span>{" "}</p>
               <Button sx={{ m: 2, height: 37 }}variant="outlined" color="error"
                 onClick={limpiarCart}>Vaciar Carrito</Button>          
               <ModalCompra/>    
           </div>
        ) : (
          <div className="contVacio">
            <h3>No hay productos en el carrito</h3>
            <Button sx={{ m: 2, p: 1 }}variant="outlined" size="small"color="error"
              onClick={pageHome}>Volver a inicio</Button>
          </div>
        )}
      </div>
    )

}

export default Carrito;