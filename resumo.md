 // <div className="centralizar">
        //     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        //         <div className="container">
        //             <Link className="navbar-brand" to="/about">{userName}</Link>
        //             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        //                 <span className="navbar-toggler-icon"></span>
        //             </button>
        //             <div className="collapse navbar-collapse" id="navbarNav">
        //                 <ul className="navbar-nav ml-auto">
        //                     {
        //                         menuLinks.map((link, index) => (
        //                             <li className="nav-item" key={index}>
        //                                 <Link className="nav-link" to={link.href}>{link.text}</Link>
        //                             </li>
        //                         ))
        //                     }
                        
        //                 </ul>
        //             </div>
        //         </div>
        //     </nav>
        // </div>
        <Navbar bg="dark" expand="navbar-expand-lg">
            <Container>
                <Navbar.Brand href="/about" className="text-white d-flex justify-content-center navbar-brand">{userName}</Navbar.Brand>
                {/* <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <Button type="button">
                      <span className="navbar-toggler-icon"></span>
                    </Button>
                </Navbar.Toggle> */}
                <Navbar.Toggle className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        {menuLinks.map((link, index)=> (
                            <Nav.Link as={Link} to={link.href} key={index} className="text-white">
                                {link.text}
                            </Nav.Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

         {/* <Nav.Link as={Link} to="/" className="text-white">Home</Nav.Link>
                    <Nav.Link as={Link} to="/about" className="text-white">Sobre</Nav.Link>
                    <Nav.Link as={Link} to="/contact" className="text-white">Contato</Nav.Link>
                    <Nav.Link as={Link} to="/projects" className="text-white">Projetos</Nav.Link>
                    <Nav.Link as={Link} to="/blog" className="text-white">Blog</Nav.Link>
                    <Nav.Link as={Link} to="/faq" className="text-white">FAQ</Nav.Link>
                    <Nav.Link as={Link} to="/blog/category/tech" className="text-white">Blog - Tecnologia</Nav.Link>
                    <Nav.Link as={Link} to="/blog/category */}

                    <Navbar bg="dark" data-bs-theme="dark" expand="navbar-expand-lg" className="navbar">
            <Container>
                <Navbar.Brand>{userName}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    {menuLinks.map((link, index)=> (
                        <Nav.Link as={Link} to={link.href} key={index} className="text-white">
                            {link.text}
                        </Nav.Link>
                    ))}
                </Nav>
                </Navbar.Collapse>
            </Container>
         </Navbar>


          return (
       <>
          <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
       </>
    )