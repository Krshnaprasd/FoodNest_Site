import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const HomePage = () => {


  const [Home] = [
    {
      video: "../src/assets/food.mp4",
      img: "../src/assets/Chicken.png",
      img1: "../src/assets/pizza.png"


    }
  ]

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  // ==========================================Signup ========================================= 

  const [User, setUser] = useState({
    username: '',
    email: '',
    mobileNo: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...User, [name]: value });
  };

  const validatePhoneNumber = (mobileNo) => {
    const phoneRegex = /^\d{10}$/; // Regex to check for exactly 10 digits
    return phoneRegex.test(mobileNo);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    // Ensures one uppercase, one number, one special character, and at least 8 characters
    return passwordRegex.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, email, mobileNo, password } = User;

    if (!validatePhoneNumber(mobileNo)) {
      toast.error('Mobile number must be exactly 10 digits.');
      return;
    }

    if (!validatePassword(password)) {
      toast.error('Password must contain at least one uppercase letter, one number, and one special character.');
      return;
    }

    const userData = { username, email, mobileNo, password };

    try {
      const response = await fetch('http://localhost:5050/Signup/addUser', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (response.ok) {

        toast.success('Signup successful!', {
          position: 'top-center'
        }
        );
        setTimeout(() => {
          resetForm();
          handleClose(); // Close the modal
          navigate('/'); // Redirect to homepage
        }, 2000);
      } else {
        toast.error(`Signup error: ${data.message}`, {
          position: 'top-center'
        });
      }
    } catch (error) {
      toast.error('There was an error signing up.', error, {
        position: 'top-center'
      });
    }

  };

  const resetForm = () => {
    setUser({
      username: '',
      email: '',
      mobileNo: '',
      password: '',
    });
    console.log("reset called");

  };

  // ==============================================Login ====================================================

  const [Users, setUsers] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange1 = (event) => {
    const { name, value } = event.target;
    setUsers({ ...Users, [name]: value });
  };

  const handleSubmit1 = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5050/login/check', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Users),
      });

      const data = await response.json();

      if (response.ok) {


        toast.success('Login successful!', {
          position: 'top-center'
        });
        setTimeout(() => {
          resetForm();
          handleClose1(); // Close the modal
          navigate('/'); // Redirect to homepage
        }, 2000);
      } else {
        toast.error(data.message,
          {
            position: 'top-center'
          });
      }
    } catch (error) {
      toast.error('There was an error logging in.', error, {
        position: 'top-center'
      });
    }

  };


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
            <div className="text-center">
              <input type="text" name="username" className="mb-3" placeholder="Username" onChange={handleChange1} />
              <input type="password" name="password" className="mb-3" placeholder="Password" onChange={handleChange1} /><br />
              <button className="fd-btn  border-0 fw-bolder text-white" onClick={handleSubmit1}>Submit</button>

              {/* Toast container to show notifications */}
              <ToastContainer />
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
                      <div className="text-center">
                        {/* Binding input values to the state */}
                        <input type="text" name="username" className="mb-3" placeholder="Name-Example" value={User.username} onChange={handleChange} />
                        <input type="email" name="email" className="mb-3" placeholder="name@gmailExample" value={User.email} onChange={handleChange} />
                        <input type="number" name="mobileNo" className="mb-3" placeholder="MobileNo" value={User.mobileNo} onChange={handleChange} />
                        <input type="password" name="password" className="mb-3" placeholder="Password" value={User.password} onChange={handleChange} /><br />
                        <Button className="fd-btn border-0 fw-bolder" onClick={handleSubmit}>
                          <h6>Submit</h6>
                        </Button>

                        {/* Toast container to show notifications */}
                        <ToastContainer />
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

export default HomePage;