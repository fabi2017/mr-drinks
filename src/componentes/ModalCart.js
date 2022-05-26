import "../estilos/CartWidget.css"
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import { useState} from "react";
import Carrito from "../secciones/Carrito"
import CartWidget from "./CartWidget"



function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);  

  return (
    <>
      <Button id="btnCart" variant="link" onClick={handleShow} className="me-2">
        <CartWidget/>
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Carrito de Compras</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Carrito/>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function ModalCart() {
  return (
    <>
      {["end"].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}

export default ModalCart;
