import React from 'react'
import {Button, Nav, Container} from 'react-bootstrap'

const Navbar = ()=> {
    return (
        <>
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
        <Button className="btn btn-outline-success">Click me</Button>
    </>
    )
}

export default Navbar
