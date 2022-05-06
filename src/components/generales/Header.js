import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserPlus,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Rolling news</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink exact={"true"} to="/" className="nav-link">
                Principal
              </NavLink>
              <NavLink
                exact={"true"}
                to="/categorias/actualidad"
                className="nav-link"
              >
                Actualidad
              </NavLink>
              <NavLink
                exact={"true"}
                to="/categorias/espectaculos"
                className="nav-link"
              >
                Espectaculos
              </NavLink>
              <NavLink
                exact={"true"}
                to="/categorias/deportes"
                className="nav-link"
              >
                Deportes
              </NavLink>
              <Nav.Link href="#masCategorias"></Nav.Link>
              <NavDropdown title="Más Categorías" id="collasible-nav-dropdown">
                <NavLink
                  exact={"true"}
                  to="/categorias/tecnologia"
                  className="dropdown-item"
                >
                  Tecnologia
                </NavLink>
                <NavLink
                  exact={"true"}
                  to="/categorias/politica"
                  className="dropdown-item"
                >
                  Politica
                </NavLink>
                <NavLink
                  exact={"true"}
                  to="/categorias/economia"
                  className="dropdown-item"
                  >
                  Economia
                </NavLink>
                <NavLink
                  exact={"true"}
                  to="/categorias/salud"
                  className="dropdown-item"
                >
                  Salud
                </NavLink>
                <NavDropdown.Divider />
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">
                <FontAwesomeIcon icon={faUserPlus} />
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <FontAwesomeIcon icon={faRightToBracket} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
