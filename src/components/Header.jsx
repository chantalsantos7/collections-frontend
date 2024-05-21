import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import '../css/site.css';

const Header = () => {
  return (
    <>
        <Navbar className='header'>
            <Container>
                <Navbar.Brand href="#home">
                    Name or Logo
                </Navbar.Brand>
            </Container>
        </Navbar>
    </>
  )
}

export default Header;