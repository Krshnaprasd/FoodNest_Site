import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { toast } from 'react-toastify'; // Import toast from react-toastify


const Menu = () => {


    useEffect(() => {
        AOS.init({
          duration: 1000, 
          once: false,    
          mirror: false,  
        });
      }, []);
        

    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [currentPage, setCurrentPage] = useState(1);  // Track the current page
    const [totalProducts, setTotalProducts] = useState(0); // Track total products
    const productsPerPage = 15;

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

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5050/product', {
                    params: {
                        categoryId: selectedCategory ? selectedCategory : undefined, // Pass category ID or undefined for 'All'
                        page: currentPage,
                        limit: productsPerPage,
                    },
                });
                setProducts(response.data.products);
                setTotalProducts(response.data.total)
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, [selectedCategory, currentPage]);



    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const totalPages = Math.ceil(totalProducts / productsPerPage);

    const addToCart = async (product) => {
        const userId = localStorage.getItem('userId');

        if (!userId) {
            toast.info('Please log in or sign up before adding items to your cart.', {
                position: 'top-center',
                autoClose: 3000,
            });
            return;
        }

        try {
            await axios.post('http://localhost:5050/cart/add', {
                userId: userId,
                product: {
                    productId: product._id,
                    name: product.name,
                    price: product.price,
                    image: product.image  // Include image field here
                }
            });
            toast.success('Item added to cart', {
                position: 'top-center',
                autoClose: 3000,
            });
        } catch (error) {
            console.error('Error adding item to cart', error);
            toast.error('There was an error adding the item to your cart.', {
                position: 'top-center',
                autoClose: 3000,
            });
        }
    };

    return (
        <>
            <div className="container-fluid text-center g-5 pt-5">
                <h1 className='pb-5 fw-bolder  '>Our Nest's Menu</h1>
                <div className="row row-cols-lg-6 row-cols-md-3 row-cols-2 g-5 justify-content-evenly">
                    {/* All Category */}
                    <div
                        className={`col ${selectedCategory === '' ? 'active' : ''}`}
                        onClick={() => setSelectedCategory('')}
                    >
                        <img
                            className='menu-img img-fluid mb-3'
                            src="https://img.freepik.com/premium-photo/typical-indian-dish-thali-vegetarian-dishes-one-large-round-plate_549515-339.jpg"
                            alt="All"
                        />
                        <h5>All</h5>
                    </div>

                    {/* Display Categories */}
                    {categories.map(category => (
                        <div
                            className={`col ${selectedCategory === category._id ? 'active' : ''}`}
                            key={category._id}
                            onClick={() => setSelectedCategory(category._id)}
                        >
                            <img
                                className='menu-img img-fluid mb-3'
                                src={category.image}
                                alt={category.name}
                            />
                            <h5>{category.name}</h5>
                        </div>
                    ))}
                    <hr />
                </div>
            </div>


            {/* Display Products */}
            <div className="container-fluid  text-center pb-5" data-aos="fade-up">
                <div className="row row-cols-xl-5 row-cols-md-3 row-cols-lg-4 row-cols-1 justify-content-around g-3 mt-5 mb-5">
                    {products.map(product => (
                        <div className="col" key={product._id}>
                            <div className="card menu-bg">
                                <img src={product.image} className="card-img" alt={product.name} style={{ height: 200 }} />
                                <div className="card-body">
                                    <h5>{product.name}</h5>
                                    <p className="card-text">${product.price}</p>
                                </div>
                                <div>
                                    <button className='prod-btn border-0 text-white mb-3' onClick={() => addToCart(product)}>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
               <div className="d-flex justify-content-center">
    <nav>
        <ul className="pagination custom-pagination">
            {/* Previous button */}
            <li className={`page-item previous ${currentPage === 1 ? 'disabled' : ''}`}>
                <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}>
                    Previous
                </button>
            </li>

            {/* Page numbers */}
            {Array.from({ length: totalPages }, (_, index) => (
                <li key={index + 1} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                    <button className="page-link" onClick={() => handlePageChange(index + 1)}>
                        {index + 1}
                    </button>
                </li>
            ))}

            {/* Next button */}
            <li className={`page-item next ${currentPage === totalPages ? 'disabled' : ''}`}>
                <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>
                    Next
                </button>
            </li>
        </ul>
    </nav>
</div>

            </div>


        </>

    );
};

export default Menu;
