import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom"

function NavbarPort() {
return (
        <Navbar collapseOnSelect className = 'shadow' expand="lg" bg="dark" variant="dark" sticky = 'top'>
            <Container>
                <Navbar.Brand href = "#scrollspy1" className = 'font-monospace'>Camilo Mahecha</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">   
                </Nav>
                <Nav>
                    <Nav.Link href="#scrollspy2" className = 'font-monospace'>
                        About Me
                    </Nav.Link>
                    
                    <Nav.Link eventKey={2} href = '#scrollspy3' className = 'font-monospace'>
                        Experience
                    </Nav.Link>

                    <Nav.Link eventKey={3} href = "#scrollspy4" className = 'font-monospace'>
                        Projects
                    </Nav.Link>

                    <Nav.Link eventKey={4} href = "#scrollspy5" className = 'font-monospace'>
                        Contact
                    </Nav.Link>

                    <Link to='/resume' target="_blank" rel="noopener noreferrer">
                            <Button variant="outline-info" className = 'sm font-monospace' >
                                Resume
                            </Button>
                        
                    </Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
);
}

export default NavbarPort;