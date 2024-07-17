import React from "react";
import { Navbar, Nav, Container} from 'react-bootstrap'
// import { Link } from "react-router-dom";


const Navigation = ({userName, menuLinks}) => {
    return (
        <>
            <Nav className="centralizar">
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="/about">{userName}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '150px' }}
                            navbarScroll
                        >
                            {menuLinks.map(link => (
                                <Nav.Link key={link.id} href={link.href}>{link.text}</Nav.Link>
                            ))}
                        </Nav>
                   </Navbar.Collapse>     
                 </Container>       
             </Navbar>           
            </Nav>             
        </>
    )
}

export default Navigation;