import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import '../css/site.css';
import { NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
        <Navbar className='header'>
            <Container>
                <Navbar.Brand href="#home">
                    Hubs
                </Navbar.Brand>
               <Navbar.Text> <Link to={{pathname: "/auth/login"}}>Login</Link></Navbar.Text>
            </Container>
        </Navbar>
    </>
  )
}

export default Header;