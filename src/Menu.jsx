import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify'; // Import toast from react-toastify

const Menu = () => {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

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
                        categoryId: selectedCategory !== '' ? selectedCategory : undefined, // Fetch all if empty
                    },
                });
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, [selectedCategory]);

  


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
            <div className="container-fluid text-center pb-5 pt-lg-5 pt-xl-5 ">
                <h1 className='pb-5 fw-bolder pt-lg-5 mt-lg-5 '>Our Nest's Menu</h1>
                <div className="row row-cols-lg-6 row-cols-md-3 row-cols-2 g-5 justify-content-evenly">
                    {/* All Category */}
                    <div
                        className={`col ${selectedCategory === '' ? 'active' : ''}`}
                        onClick={() => setSelectedCategory('')}>
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
                            onClick={() => setSelectedCategory(category._id)}>
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

                {/* Display Products */}
                <div className="container">
                    <div className="row row-cols-xl-5 row-cols-md-3 row-cols-lg-4 row-cols-1 justify-content-around g-3 mt-5 mb-5">
                        {products.map(product => (
                            <div className="col" key={product._id}>
                                <div className="card">
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
                </div>
            </div>
        </>
    );
};

export default Menu;
