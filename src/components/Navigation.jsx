import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';
import Logo from "../Assets/sadhgurtiles.jpeg"

const Navigation = () => {
  return (
    <div>
    <Navbar id='navbar' expand="lg" className="bg-body-tertiary" bg='dark'>
          <Container fluid>
        <Navbar.Brand to="#" className='nav-logo'>
          <img src={Logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll"/>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '120px' }}
             navbarScroll>
            <NavLink className='mylink' to="home">Home</NavLink>
            <NavLink className='mylink' to="about">About</NavLink>
            <NavDropdown title="Products" id="navbarScrollingDropdown">
              <Link className='mylink' style={{marginLeft:"35px",color:"black"}} to="explorenorthindia">Products1</Link><br/>
              <Link className='mylink' style={{marginLeft:"35px",color:"black"}} to="exploresouthindia">Products2</Link>
              </NavDropdown>
            <NavLink className='mylink' to="blog" >Client Testimonals</NavLink>
            <NavLink className='mylink' to="contact" > Contact</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navigation