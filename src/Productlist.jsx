import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { toast, ToastContainer } from 'react-toastify';

const Productlist = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0); 
  const productsPerPage = 10; 

  const totalPages = Math.ceil(totalProducts / productsPerPage);

  // Fetch products with pagination from API
  const fetchProducts = async (page) => {
    try {
      const res = await axios.get(`http://localhost:5050/product?page=${page}&limit=${productsPerPage}`);
      setProducts(res.data.products);
      setTotalProducts(res.data.total); 
     
    } catch (error) {
      console.error('Error fetching products:', error);
     
    }
  };

  
  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage]);

  
 

  // Delete product
  const handleDeleteClick = async (productId) => {
    try {
      await axios.delete(`http://localhost:5050/product/${productId}`);
      setProducts(products.filter(product => product._id !== productId));
      setTotalProducts(totalProducts - 1); 
      toast.success('Delete successful!', {
        position: 'top-center'
      });
    } catch (error) {
      console.error('Error deleting product:', error);
      toast.error('Remove Product !', {
        position: 'top-center'
      });
    }
  };

 
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    
    <div className="container-fluid pt-5 pb-5">
      <div className="container">
        <div className="row pb-5">
          <h2 className="fw-bolder">Products List</h2>
        </div>
        <ToastContainer />
        <div className="container">
        
          {products && products.length > 0 ? (
            products.map((product, index) => (
              <div key={index} className="d-flex align-items-center justify-content-between mb-3 p-2 border-bottom">
             
                <div style={{ width: '20%' }}>
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ width: '70%', height: '80px', objectFit: 'cover' }}
                  />
                </div>

               
                <div style={{ width: '50%', paddingLeft: '15px' }}>
                  <p><strong>{product.name}</strong></p>
                  <p>Price: ${product.price}</p>
                </div>

                <div className="d-flex align-items-center justify-content-end" style={{ width: '25%' }}>
                 

                <button
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => handleDeleteClick(product._id)}
                    >
                      <i className="bi bi-trash3"></i>
                    </button>
                </div>
              </div>
            ))
          ) : (
            <p>No products found</p>
          )}
        </div>

        {/* Pagination */}
        <div className="d-flex justify-content-center">
          <nav>
            <ul className="pagination custom-pagination">
              {/* Previous button */}
              <li className={`page-item previous ${currentPage === 1 ? 'disabled' : ''}`}>
                <button
                  className="page-link"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1} // Disable if on the first page
                >
                  Previous
                </button>
              </li>

              {/* Page numbers */}
              {Array.from({ length: totalPages }, (_, index) => (
                <li key={index + 1} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                  <button
                    className="page-link"
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}

              {/* Next button */}
              <li className={`page-item next ${currentPage === totalPages ? 'disabled' : ''}`}>
                <button
                  className="page-link"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages} 
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Productlist;
