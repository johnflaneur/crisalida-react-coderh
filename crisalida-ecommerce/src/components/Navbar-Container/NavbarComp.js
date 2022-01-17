import React, {useContext} from 'react';
import {Link, NavLink} from 'react-router-dom';
import {Navbar, Nav, NavDropdown, Form, Button, Container} from 'react-bootstrap';
import {CartWidget} from '../cartWidget/CartWidget';
import './NavbarComp.css';
import { CartContext } from '../../context/contextCart'




export const NavbarComp = () =>{

    return (
        <div>
                <Navbar bg="dark navbar-fixed-top" expand="lg">
                    <Container fluid>
                       <Link to="/"><Navbar.Brand className="navbar-brand text-light">Crisálida<span className='spann'> Cosmética Natural</span></Navbar.Brand></Link> 
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="navsito me-auto px-5 my-2 my-lg-0 p-2"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            > 
                             <NavDropdown className="products-title" title="Productos" id="navbarScrollingDropdown">
                             <NavLink to="category/cabelloSeco">Cabello Seco</NavLink>
                             <NavLink to="category/cabelloGraso">Cabello Graso</NavLink> 
                             <NavLink to="category/general">General</NavLink>     
                            </NavDropdown>
                                
                            </Nav>
                            <CartWidget/>
                            <Form className="d-flex">

                                <Button variant="outline-primary mx-5 px-2" className="text-light">Iniciar Sesión</Button>
                            </Form>
                            
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                

                
        </div>
    )
}
