import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from 'react-bootstrap/Nav';

const Product = () => {

  const [categories, setCategories] = useState([]);

  const [product] = [
    {
      img: "../src/assets/Product.jpg",
    }
  ]

  const [Product, setProduct] = useState({
    name: '',
    image: '',
    price: '',
    category: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct({ ...Product, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post('http://localhost:5050/product/add', Product);
      toast.success('Product added successfully!', {
        position: 'top-center',
        autoClose: 3000,
      });

      // Reset the form after successful submission
      setProduct({
        name: '',
        image: '',
        price: '',
        category: ''
      });
    } catch (error) {
      console.error('Error adding product:', error);
      toast.error('Failed to add product. Please try again.', {
        position: 'top-center',
        autoClose: 3000,
      });
    }
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:5050/category/all');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);



  
  return (
    <>
    <div className="container-fluid pt-5 ">
      <div className="ccontainer">
      <Nav fill variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/product"> Add Product</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/list">Products list</Nav.Link>
      </Nav.Item>
      </Nav>
      </div>
    </div>

      <div className="container-fluid pt-5 pb-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-6  mt-lg-3">
              <h1 className='logotxt fw-bolder'>FoodNest</h1>
              <h4 className='fw-bolder pb-md-3 d-none d-sm-block'>" Place for Peace - Feast for Food "</h4>
              <h5 className='fw-bolder pb-3  d-sm-none d-block'>" Place for Peace - Feast for Food "</h5>

              <div>
                <input type="text" name="name" className='mb-3' value={Product.name} placeholder='Product Name' onChange={handleChange} /><br></br>
                <input type="text" name="image" className='mb-3' value={Product.image} placeholder='Product Img' onChange={handleChange} /><br></br>
                <input type="text" name="price" className='mb-3' value={Product.price} placeholder='Product Price' onChange={handleChange} /><br></br>
                <select className='mb-3' style={{width:190, height:30}} name="category" value={Product.category} onChange={handleChange}>
                  <option value="">Select Category</option>
                  {categories.map((category) => (
                    <option key={category._id} value={category._id}>
                      {category.name}
                    </option>
                  ))}
                </select><br />
                <button className='fd-btn border-0 fw-bolder text-white' onClick={handleSubmit}>Add</button>
              </div>
              <ToastContainer />
            </div>
            <div className="col"></div>
            <div className="col-md-5 " >
              <img className='img-fluid prod-img' src={product.img} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Product;