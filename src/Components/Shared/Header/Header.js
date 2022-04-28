import React from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import CustomLink from '../../../CustomLink';

const Header = () => {
  return (
    <div className='menu_area'>
      <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Gudam Ghor</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mx-auto">
        <CustomLink to='/'>Home</CustomLink>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  );
};

export default Header;