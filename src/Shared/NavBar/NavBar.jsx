import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/icons/logo.svg';
import './NavBar.css';

const NavBar = () => {
  return (
    <section>
      <Navbar className="fixed-top nav__bar bg-light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto nav__link">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#challenges">Challenges</Nav.Link>
              <Nav.Link href="#add-challenge">Add Challenges</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
};

export default NavBar;
