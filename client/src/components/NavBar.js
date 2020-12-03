import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import React from 'react';
import logo from '../images/laptop-symbol-azy.png'



const NavBar = ()=> {
  return (
      
<Navbar class='navbar' >
    
  <Navbar.Brand >        
        <a href={process.env.PUBLIC_URL+'/'}>
          <img src={logo} style={{width:130}} />
        </a>
    </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto" style={{marginRight:10, marginTop: 8, marginBottom: 8}}>
      <Nav.Link href={process.env.PUBLIC_URL+'/'}style={{marginRight:10}}>Home </Nav.Link>
      <Nav.Link href="https://fb.com/datnee188">About</Nav.Link>
    </Nav>
  </Navbar.Collapse>

</Navbar>

  );
}

export default NavBar;