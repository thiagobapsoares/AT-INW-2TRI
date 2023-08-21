import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavLogo from "../assets/NavLogo.png";

function NavProjeto() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/"> <img className="NavLogo" src={NavLogo} /> </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Sobre">Sobre</Nav.Link>
            <Nav.Link href="/Contato">Contato</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavProjeto;