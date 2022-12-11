import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Switch } from 'antd';
// import {NavLink} from "react-router-dom";
// import * as header_data from '../db/header.json';



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
              Dark Mode
            </Nav.Link>
            <div className='theme_container'>
              <Switch className="theme_switch" onChange={props.toggleTheme}></Switch>
            </div>
          </Nav>
      </Container>
      
    </Navbar>
  );
}

export default Header;