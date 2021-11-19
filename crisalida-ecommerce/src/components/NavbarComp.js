import React, { Component } from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button, Container} from 'react-bootstrap';
export default class NavbarComp extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" expand="lg">
                    <Container fluid>
                        <Navbar.Brand href="#" className="text-light">Crisálida Cosmética Natural</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link href="#action1" className="text-light">Inicio</Nav.Link>
                                <Nav.Link href="#action2" className="text-light">Sobre Crisálida</Nav.Link>
                                <NavDropdown title="Productos" id="navbarScrollingDropdown" >
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
                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success" className="text-light">Buscar</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}
