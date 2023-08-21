import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Footer() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Site desenvolvido com React Bootstrap 💚</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="/">Copyright &#169; Heloísa - Mateus - Thiago Baptista </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Footer;
