import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/icons/logo.svg';
import './NavBar.css';

const NavBar = () => {
  const navLinks = [
    { id: 1, path: '/', name: 'Home' },
    { id: 2, path: '/create-challenge', name: 'Create Challenge' },
    { id: 3, path: '/#challenges', name: 'Challenges' },
  ];
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
              {navLinks.map((link) => (
                <Nav.Link href={link.path} key={link.id}>
                  {link.name}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
};

export default NavBar;
