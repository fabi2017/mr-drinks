import * as React from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { useContext } from "react";
import "../estilos/NavBar.css";
import CartContext from "../context/CartContext";
import ModalCart from "./ModalCart"

function NavBar() {
  const { cartProductos } = useContext(CartContext);

  return (
    <Navbar className="navBar" expand="lg">
      <Container>
        <Link to="/" className="contLogo">
          <img alt=""src="/logo8.png" className="logo"/>
        </Link>
        <Navbar.Toggle id="navbar-toggler" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/">Home</Link>
            <NavDropdown title="Bebidas" id="basic-nav-dropdown">
              <Link to={"/categoria/cervezas"} className="category">Cervezas</Link>
              <NavDropdown.Divider />
              <Link to={"/categoria/vinos"} className="category">Vinos</Link>
              <NavDropdown.Divider />
              <Link to={"/categoria/aperitivos"} className="category">Aperitivos</Link>
              <NavDropdown.Divider />
              <Link to={"/categoria/bebidasBlancas"} className="category">B. Blancas</Link>
            </NavDropdown>
            <Link to="/nosotros">Nosotros</Link>
            <Link to="/contacto">Contacto</Link>       
            {cartProductos.length >= 1 && (<ModalCart/>)}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
