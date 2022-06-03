import React, { useState } from "react";
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
import CategLink from "./CategLink";

const Header = (props) => {
  // eslint-disable-next-line
  let [navItemClass, setNavItemClass] = useState("nav-link");
  // eslint-disable-next-line
  let [dropItemClass, setDropItemClass] = useState("dropdown-item");

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <NavLink to="/" className={"navbar-brand"}>Rolling news</NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink exact={"true"} to="/" className="nav-link">
                Principal
              </NavLink>
              {
                props.categorias.slice(0, 4).map(categoria => <CategLink key={categoria._id} setCategoriaNav={props.setCategoriaNav} categoria={categoria} clase={navItemClass}></CategLink>)
              }
              <Nav.Link href="#masCategorias"></Nav.Link>
              <NavDropdown title="Más Categorías" id="collasible-nav-dropdown">
                {
                  props.categorias.slice(4, 100).map(categoria => <CategLink key={categoria._id} setCategoriaNav={props.setCategoriaNav} categoria={categoria} clase={dropItemClass}></CategLink>)
                }
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
