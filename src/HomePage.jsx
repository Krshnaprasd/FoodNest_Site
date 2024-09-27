import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Menu from './Menu.jsx'

const HomePage = () => {


  const [Home] = [
    {
      video: "../src/assets/food.mp4",
      img: "../src/assets/Chicken.png",
      img1: "../src/assets/pizza.png"


    }
  ]
  // ============================================= Cart ===========================================
  const [cartItems, setCartItems] = useState([]);
  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const fetchCart = async () => {
    const userId = localStorage.getItem('userId');

    if (!userId) {
      setCartItems([]); // Set cartItems to an empty array if no user is logged in
      return;
    }

    try {
      const response = await axios.get(`http://localhost:5050/cart/${userId}`);
      console.log('API Response:', response.data);

      if (response.data && response.data.items) {
        setCartItems(response.data.items);  // Set items from the response
      } else {
        setCartItems([]); // If no items, set an empty array
      }
    } catch (error) {
      console.error('Error fetching cart items', error);
      setCartItems([]);  // Set empty array if API call fails
    }
  };

  useEffect(() => {
    fetchCart();
  }, [show2]);

  const updateCartItemQuantity = async (productId, newQuantity) => {

    const userId = localStorage.getItem('userId');

    if (!userId) {
      toast.error('User not logged in');
      return;
    }

    try {
      // Send the new quantity to the server
      await axios.post('http://localhost:5050/cart/update', {
        userId,
        productId,
        quantity: newQuantity
      });

      // Fetch updated cart items after quantity change
      fetchCart();
    } catch (error) {
      console.error('Error updating cart item quantity', error);
    }
  };

  const removeCartItem = async (productId) => {
    const userId = localStorage.getItem('userId');

    if (!userId) {
      toast.error('User not logged in');
      return;
    }

    try {
      // Send a request to the server to remove the item from the cart
      await axios.delete(`http://localhost:5050/cart/${userId}/remove`, {
        data: { productId }
      });

      // Fetch the updated cart items after removing the product
      fetchCart();
    } catch (error) {
      console.error('Error removing cart item', error);
    }
  };
 //=================================================Order =========================================

 const [showModal, setShowModal] = useState(false);
  const [userAddress, setUserAddress] = useState('');


 const handleOrderClick = () => {
  setShowModal(true);
};

const handlePay = async () => {
  const orderData = {
    items: cartItems,
    totalAmount: parseFloat(cartItems.reduce((total, item) => total + item.price * item.quantity, 0)).toFixed(2),
    address: userAddress,
  };

  try {
    const response = await axios.post('http://localhost:5050/order/add', orderData); // Send orderData directly

    // Handle successful order placement
    handleClose2(); // Close the offcanvas cart
    setShowModal(false); // Close the payment modal

    // Show success toast
    toast.success('Payment successful ! Your order has been placed.',{
      position:'top-center'
    }); 

    // Clear cart items after order placement
    setCartItems([]); // This will automatically remove items from the cart

  } catch (error) {
    console.error('Error placing order:', error.response ? error.response.data : error.message);
    
    // Show error toast
    toast.error('Error placing order.',{
      position:'top-center'
    }); 
  }
};

  // ==============================================================================================
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

      // if (data) {
      //   localStorage.setItem("userId", data._id)
      // }

      if (response.ok) {
        if (data) {
          localStorage.setItem("userId", data._id)
        }
        localStorage.setItem('username', username);
        toast.success('Signup successful!', {
          position: 'top-center'
        });
        setUser({ username: '', email: '', mobileNo: '', password: '' });
        handleClose();
        navigate('/');
        setTimeout(() => {
          toast.success(`Welcome, ${username}`, {
            position: 'top-center',
            autoClose: 3000,
          });
        }, 100);

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


        localStorage.setItem("userId", data._id)
        localStorage.setItem('username', data.username);

        toast.success('Login successful', {
          position: 'top-center'
        });
        setUsers({ username: '', password: '' }); // Reset form
        handleClose1();
        navigate('/');
        setTimeout(() => {
          toast.success(`Welcome, ${Users.username}!`, {
            position: 'top-center',
            autoClose: 3000,
          });
        }, 100);
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

  // ==============================================Alert ==================================
  useEffect(() => {
    // Get the username from localStorage
    const storedUsername = localStorage.getItem('username');
    console.log(storedUsername);

    if (storedUsername) {
      // Display welcome toast
      toast.success(`Welcome, ${storedUsername}`, {
        position: 'top-center',
        autoClose: 3000,
      });


    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userId')
    localStorage.removeItem('username');
    toast.info('You have logged out.', { position: 'top-center', autoClose: 3000 });
    navigate('/');
  };



  return (
    <>
      <ToastContainer /> {/* Toast container to display notifications */}

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
                <Nav.Link className='text-white' href="#review">Review</Nav.Link>
                <Nav.Link className='text-white' href="#contact">Contact</Nav.Link>
                <Nav.Link className='text-white' href="#order">Orders</Nav.Link>
              </Nav>
              <Nav className='d-flex '>
                <Nav.Link><i className="bi bi-arrow-clockwise text-white fw-bolder"></i></Nav.Link>
                <Nav.Link onClick={handleShow2}><i className="bi bi-cart-plus-fill text-white fw-bolder"></i></Nav.Link>
                <Nav.Link><i className="bi bi-bag-check-fill text-white fw-bolder"></i></Nav.Link>
                <Nav.Link onClick={handleShow1}><i className="bi bi-box-arrow-in-down text-white fw-bolder"></i></Nav.Link>

                <Nav.Link onClick={handleLogout}><i className="bi bi-box-arrow-in-up text-white fw-bolder"></i></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
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

          </div>
        </Modal.Body>

      </Modal>


      <Offcanvas show={show2} onHide={handleClose2}>
        <Offcanvas.Header className='cart-bg text-white' closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cartItems.length > 0 ? (
            <div>
              {cartItems.map((item, index) => (
                <div key={index} className="d-flex align-items-center justify-content-between mb-3 p-2 border-bottom">
                  {/* Left: Product Image */}
                  <div style={{ width: '20%' }}>
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{ width: '100%', height: '80px', objectFit: 'cover' }}
                    />
                  </div>

                  {/* Center: Product Name and Price */}
                  <div style={{ width: '40%', paddingLeft: '15px' }}>
                    <p><strong>{item.name}</strong></p>
                    <p>Price: ${item.price}</p>
                  </div>

                  {/* Right: Quantity Controls */}
                  <div style={{ width: '25%' }} className="d-flex align-items-center">
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      onClick={() => updateCartItemQuantity(item.productId, item.quantity - 1)}
                      disabled={item.quantity === 1} // Disable button when quantity is 1
                    >
                      -
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      onClick={() => updateCartItemQuantity(item.productId, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>

                  {/* Remove Button */}
                  <div style={{ width: '5%' }}>
                    <button
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => removeCartItem(item.productId)}
                    >
                      <i className="bi bi-trash3"></i>
                    </button>
                  </div>
                </div>
              ))}

              {/* Total Price */}
              <div className="d-flex justify-content-between mt-4">
                <h5>Total:</h5>
                <h5>${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</h5>
              </div>

              {/* Order Button */}
              <Button className='cart-bg mt-4 border-0' style={{width:370}} onClick={handleOrderClick}>
                Order to pay
              </Button>
            </div>
          ) : (
            <p>Your cart is empty</p>
          )}
        </Offcanvas.Body>
      </Offcanvas>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Order Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>You are about to order:</p>
          <ul>
            {cartItems.map(item => (
              <li key={item.productId}>{item.name} x {item.quantity}</li>
            ))}
          </ul>
          <p>Total Amount: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</p>
          <input
            type="text"
            placeholder="Enter your address"
            value={userAddress}
            onChange={(e) => setUserAddress(e.target.value)}
            className="form-control"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button className='cart-bg border-0' onClick={handlePay}>
            Pay
          </Button>
        </Modal.Footer>
      </Modal>

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
                        <input type="email" name="email" className="mb-3" placeholder="Mail@Example" value={User.email} onChange={handleChange} />
                        <input type="number" name="mobileNo" className="mb-3" placeholder="MobileNo" value={User.mobileNo} onChange={handleChange} />
                        <input type="password" name="password" className="mb-3" placeholder="Password" value={User.password} onChange={handleChange} /><br />
                        <Button className="fd-btn border-0 fw-bolder" onClick={handleSubmit}>
                          <h6>Submit</h6>
                        </Button>


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


      <div className="container-fluid scnd-content">
        <div className="container" id="menu">
          <Menu />
        </div>
      </div>

    </>
  )
}

export default HomePage;