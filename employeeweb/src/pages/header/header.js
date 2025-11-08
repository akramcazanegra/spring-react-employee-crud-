import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import './header.css';

const Header = () => {
  return (
    <>
      <Navbar  variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Employee Management System
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/" className="nav-link">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/employee" className="nav-link">
                Add Employee
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
