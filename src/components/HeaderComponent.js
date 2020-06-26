import React, { Component, useState } from 'react'; 
import { Navbar,NavLink, NavbarBrand, Nav, NavbarToggler, NavItem ,Jumbotron, Collapse } from 'reactstrap';

class Header extends Component{
    constructor (props) {
        super(props);
        this.state={
            isNavOpen :false
        }
        this.toggleNav =this.toggleNav.bind(this);
    }
    toggleNav(){
        this.setState({
            isNavOpen : !this.state.isNavOpen
        });
    }






    render(){

        //<></>-----<React.Fragement></React.Fragment>
        //many popular browser doesnot understand <> </>
        return(
            <React.Fragment>
                <div className="container" id="header">
                    <Navbar id= "menu" dark center expand="md">
                    <NavbarBrand className="mr-auto" href="/"><h1>shivam</h1></NavbarBrand>
                    
<NavbarToggler right onClick={this.toggleNav}/>
                    <Collapse isOpen={this.state.isNavOpen} navbar className="justify-content-end">
                        <Nav navbar>
                            <NavItem  data-menuanchor="home">
                                <NavLink className="nav-link" href="#home" >
                                    Home
                                </NavLink>
                            </NavItem>
                            <NavItem  data-menuanchor="work">
                                <NavLink className="nav-link" href="#work" >
                                    Work
                                </NavLink>
                            </NavItem>
                            <NavItem  data-menuanchor="about">
                                <NavLink className="nav-link" href="#about" >
                                     About
                                </NavLink>
                            </NavItem>
                            <NavItem  data-menuanchor="photo">
                                <NavLink className="nav-link" href="#photo" >
                                     Photo
                                </NavLink>
                            </NavItem>
                            <NavItem  data-menuanchor="video">
                                <NavLink className="nav-link" href="#video" >
                                        Video
                                </NavLink>
                            </NavItem>
                            <NavItem  data-menuanchor="connect">
                                <NavLink className="nav-link" href="#connect" >
                                    Connect
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                 </Navbar>
                
            </div>
            </React.Fragment>
        );
    }
}
export default Header;



/*

<NavbarToggler right onClick={this.toggleNav}/>
                    <Collapse isOpen={this.state.isNavOpen} navbar className="justify-content-end">
                        <Nav navbar>
                            <NavItem  data-menuanchor="home">
                                <NavLink className="nav-link" href="#home" >
                                    Home
                                </NavLink>
                            </NavItem>
                            <NavItem  data-menuanchor="work">
                                <NavLink className="nav-link" href="#work" >
                                    Work
                                </NavLink>
                            </NavItem>
                            <NavItem  data-menuanchor="about">
                                <NavLink className="nav-link" href="#about" >
                                     About
                                </NavLink>
                            </NavItem>
                            <NavItem  data-menuanchor="photo">
                                <NavLink className="nav-link" href="#photo" >
                                     Photo
                                </NavLink>
                            </NavItem>
                            <NavItem  data-menuanchor="video">
                                <NavLink className="nav-link" href="#video" >
                                        Video
                                </NavLink>
                            </NavItem>
                            <NavItem  data-menuanchor="connect">
                                <NavLink className="nav-link" href="#connect" >
                                    Connect
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>*/