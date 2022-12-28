import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { faSun } from '@fortawesome/free-solid-svg-icons'


function Header(props) {
  const [headers] = useState(props.header_data.default.headers)
  const [brand] = useState(props.header_data.default.brand)

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand to=""><span role="img"> {brand} </span></Navbar.Brand>

        <Nav className="me-auto">
          {
            headers.map(elem => {
              var ref = "#" + elem.key;
              return (
                <Nav.Link href={ref} >{elem.head}</Nav.Link>
              );

            })
          }



        </Nav>
        <Nav className='justify-content-end'>
          <Nav.Link className='theme_container'>
          </Nav.Link>
          <div className='theme_container'>
            <input type="checkbox" class="checkbox" id="checkbox" onChange={props.toggleTheme} />
            <label for="checkbox" class="label">
              <FontAwesomeIcon icon={faMoon} />
              <FontAwesomeIcon icon={faSun} />
              <div class='ball' />
            </label>
          </div>

        </Nav>
      </Container>

    </Navbar>
  );
}

export default Header;