import React from "react";
import { Navbar, Nav, Container} from 'react-bootstrap'

const Navigation = ({userName, menuLinks}) => {
    return (
        <>
            <Nav className="centralizar">
            <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
                <Container>
                    <Navbar.Brand href="/">{userName}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '150px' }}
                            navbarScroll
                        >
                            {menuLinks.map((link, index) => (
                                <Nav.Link key={index} href={link.href}>{link.text}</Nav.Link>
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