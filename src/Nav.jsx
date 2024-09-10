import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';

import { useState } from 'react';
import { useNavigate } from "react-router-dom"
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import Home from './HomePage.jsx'


const Navb = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);


    const [Home] = [
        {
            video: "../src/assets/food.mp4",
            img: "../src/assets/Chicken.png",
            img1: "../src/assets/pizza.png"


        }
    ]

    return (
        <>
        <div className="container-fluid fd-nav" >
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
                                <Nav.Link onClick={handleShow1}><i className="bi bi-box-arrow-left text-white fw-bolder"></i></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Modal centered size="sm" show={show1} onHide={handleClose1}>
                    <Modal.Header closeButton>
                        <div className='text-center fw-bolder '><h3>Login</h3></div><br></br>
                    </Modal.Header>
                    <Modal.Body className=' p-4'>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                                <Form.Control
                                    type="text"
                                    placeholder="Name-Example"
                                    autoFocus
                                />
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="exampleForm.ControlInput4">

                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    autoFocus
                                />
                            </Form.Group>
                        </Form>
                        <div className='text-center'>
                            <Button className='fd-btn border-0 fw-bolder '  ><h6>Submit</h6></Button>

                        </div>
                    </Modal.Body>

                </Modal>

            </div>



            <div >
                <div className="video-container container-fluid">
                    <video className="video-bg" src={Home.video} autoPlay loop muted></video>
                </div>
                <div className={`container-fluid ${show1 ? 'blur' : ''}`}>
                <div className={`container-fluid ${show ? 'blur' : ''}`}>
                    <div className="container fd-content">
                        <div className=" row  d-flex justify-content-around text-white" style={{ textAlign: 'justify' }}>
                            <div className="col-lg-5 pt-3 pt-sm-0 pb-5 fd-content col-12 text-center order-md-1 order-2">
                                <h2 className='fw-bolder'> We believe Good food</h2>
                                <h2 className='fw-bolder'> Offers Great smile <i className="icn fas fa-smile-wink"></i></h2>
                                <p>
                                    " Get ready to nestle into a world of flavor with FoodNest's scrumptious non-veg dishes, crafted to satisfy your cravings !!"
                                    Your one-stop destination for succulent non-veg food that will leave you wanting more, every time !"
                                </p><br></br>
                                <div className=' text-center'>
                                    <button className="fd-btn border-0 text-white" onClick={handleShow}>Order Now</button>  <button className='fd-btn2  border-0'>Reserve</button>
                                </div>
                                <Modal centered size="sm" show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <div className='text-center fw-bolder '><h3>Signup</h3></div><br></br>
                                    </Modal.Header>
                                    <Modal.Body className=' p-4'>
                                        <Form>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                                                <Form.Control
                                                    type="text"
                                                    placeholder="Name-Example"
                                                    autoFocus
                                                />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">

                                                <Form.Control
                                                    type="email"
                                                    placeholder="Email@example.com"
                                                    autoFocus
                                                />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">

                                                <Form.Control
                                                    type="number"
                                                    placeholder="MobileNo"
                                                    autoFocus
                                                />
                                            </Form.Group>
                                            <Form.Group className="mb-4" controlId="exampleForm.ControlInput4">

                                                <Form.Control
                                                    type="password"
                                                    placeholder="Password"
                                                    autoFocus
                                                />
                                            </Form.Group>
                                        </Form>
                                        <div className='text-center'>
                                            <Button className='fd-btn border-0 fw-bolder '  ><h6>Submit</h6></Button>

                                        </div>
                                    </Modal.Body>

                                </Modal>

                            </div>
                            <div className="col-lg-3 col-10 pt-md-5 mt-md-5 mt-lg-5 mt-xl-1 order-md-2 order-1">
                                <img className='img-fluid fd-rotate d-block d-md-none d-lg-block' src={Home.img} alt="" />
                                <img className="img-fluid fd-img d-block d-md-none d-lg-block" src={Home.img1} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>

        </>
    )
}

export default Navb;