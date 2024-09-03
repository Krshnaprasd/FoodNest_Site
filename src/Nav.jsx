import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHamburger} from '@fortawesome/free-solid-svg-icons';


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './HomePage.jsx'

const Navb = () => {

   

    return (
        <>
            <div className="container-fluid fd-nav">
                <Navbar collapseOnSelect expand="lg" className="">
                    <Container>
                        <Navbar.Brand className='fw-bolder text-white'>  foodNest    </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" className='border-0'>
                            <FontAwesomeIcon className='text-white fw-bolder' icon={faHamburger} size="lg" /> 
                        </Navbar.Toggle>
                        <Navbar.Collapse id="responsive-navbar-nav" className='border-0'>
    
                       
                            <Nav className="justify-content-center flex-grow-1">
                                <Nav.Link className='text-white' href="#home"> Home</Nav.Link>
                                <Nav.Link className='text-white' href="#menu">Menu</Nav.Link>
                                <Nav.Link className='text-white' href="#contact">Contact</Nav.Link>
                                <Nav.Link className='text-white' href="#order">Orders</Nav.Link>
                            </Nav>
                            <Nav className='d-flex '>
                                <Nav.Link><i className="bi bi-arrow-clockwise text-white fw-bolder"></i></Nav.Link>
                                <Nav.Link><i className="bi bi-cart-plus-fill text-white fw-bolder"></i></Nav.Link>
                                <Nav.Link><i className="bi bi-bag-check-fill text-white fw-bolder"></i></Nav.Link>
                                <Nav.Link><i className="bi bi-box-arrow-left text-white fw-bolder"></i></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <div className="container-fluid">
                <Home/>
            </div>
        </>
    )
}

export default Navb;