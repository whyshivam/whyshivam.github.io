import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import * as header_data from '../db/header.json';



function Header() {

  var headers = header_data.headers
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href=""><span role="img"> 😊 </span></Navbar.Brand>

        <Nav className="me-auto">
          {
            headers.map( elem => {
              return (
                <Nav.Link href={elem.key} >{elem.head}</Nav.Link>
              );

            })
          }
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;