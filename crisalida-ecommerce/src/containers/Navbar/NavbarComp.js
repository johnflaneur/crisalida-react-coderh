import React from 'react';
import {Navbar, Nav, NavDropdown, Form, Button, Container} from 'react-bootstrap';
import CartWidget from '../../components/cartWidget/CartWidget';
import '../../containers/Navbar/NavbarComp.css';






export default function NavbarComp() {
    return (
        <div>
                <Navbar bg="dark" expand="lg">
                    <Container fluid>
                        <Navbar.Brand  href="#" className="navbar-brand text-light">Final Fantasy <span className='spann'> Land</span></Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="navsito me-auto my-2 my-lg-0 p-2"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link href="#action1" className="text-light">Inicio</Nav.Link>
                                <Nav.Link href="#action2" className="text-light">Sobre FF</Nav.Link>
                                <NavDropdown className="products-title" title="Productos" id="navbarScrollingDropdown">
                                    <NavDropdown.Item href="#action3">Destacados</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">Detalles</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">
                                        MÁS PRODUCTOSSS
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="#" className="text-light">
                                    Contacto
                                </Nav.Link>
                                
                            </Nav>
                            <CartWidget/>
                            <Form className="d-flex">

                                <Button variant="outline-success" className="text-light">Buscar</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                

                
        </div>
    )
}
