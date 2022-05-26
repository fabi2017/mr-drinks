import "../estilos/Carrito.css";
import CartContext from "../context/CartContext";
import { useContext, useState } from "react";
/*------------------------------- */
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CircularIntegration from "./CircularIntegration";
/*-----------------------------*/
import { addDoc, collection } from "firebase/firestore";
import db from "../firebase";

function ModalCompra() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { cartProductos, precioTotal, limpiarCart, totalPrice } =
    useContext(CartContext);
  const [ordenGenerada, setOrdenGenerada] = useState();

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
    setOrdenGenerada(ordenDoc.id);
  };

  return (
    <>
      <p>Total: ${precioTotal()} </p>
      <Button onClick={limpiarCart}>Cancelar Compra</Button>
      <Button variant="primary" onClick={handleShow}>
        Comprar{" "}
      </Button>

      <Modal show={show} onHide={handleClose}>
        {ordenGenerada ? (
          <div className="ordenCompra">
            <p className="ordenTitle">Orden generada: {ordenGenerada}</p>
            <p>
              Su codigo de compra es:<span>{ordenGenerada.slice(-5)}</span>
            </p>
            <CircularIntegration />
          </div>
        ) : (
          <>
            <Modal.Header closeButton>
              <Modal.Title>Orden Compra</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    name="nombre"
                    label="Nombre"
                    type="nombre"
                    placeholder="Nombre"
                    autoFocus
                    onChange={handleChange}
                    value={formData.nombre}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Telefono</Form.Label>
                  <Form.Control
                    name="telefono"
                    label="Telefono"
                    type="telefono"
                    placeholder="123456"
                    onChange={handleChange}
                    value={formData.telefono}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    name="mail"
                    label="Email"
                    type="email"
                    placeholder="name@example.com"
                    onChange={handleChange}
                    value={formData.mail}
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Comprar
                </Button>
              </Form>
            </Modal.Body>
          </>
        )}
      </Modal>
    </>
  );
}

export default ModalCompra;
