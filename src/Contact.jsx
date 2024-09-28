import React from 'react'

const Contact = () => {
    return (
        <>
          <div className="bg-dark bg-gradient" id='contact'>
            <div className="container-fluid text-white-50 p-4">
              <div className="row row-cols-md-2 d-flex justidy-content-around">
                <div className="col-lg-3 pt-3">
                  <h3 className='pb-3'>FoodNest</h3>
                  <p style={{ textAlign: 'justify' }}>
                    Your one stop destination for succulent non-veg food that will leave you wanting more, every time!
                  </p>
    
                </div>
                <div className="col-lg-2  pt-3">
                  <h3 className='ms-lg-4 pb-3'>Explore</h3>
                  <ul className='lis'>
                    <li>Company Profile</li>
                    <li>About</li>
                    <li>Help Center</li>
                    <li>Careers</li>
                    <li>Features</li>
                  </ul>
                </div>
                <div className="col-lg-4 pt-3">
    
                  <div className="row text-start">
                    <h3 className='ms-lg-4 pb-3'>Open Hours</h3>
                    <div className="col-6 text-start">
                      <ul className='lis'>
                        <li>Monday </li>
                        <li>Tuesday </li>
                        <li>Wednesday </li>
                        <li>Thursday </li>
                        <li>Friday</li>
                        <li>Saturday  </li>
                        <li>Sunday  </li>
                      </ul>
                    </div>
                    <div className="col-6 text-start">
                      <ul className='lis'>
                        <li> 9.00 - 24.00</li>
                        <li> 9.00 - 24.00</li>
                        <li> 9.00 - 24.00</li>
                        <li> 9.00 - 24.00</li>
                        <li> 9.00 - 24.00</li>
                        <li> 9.00 - 24.00</li>
                        <li> 9.00 - 24.00</li>
                      </ul>
                    </div>
                  </div>
                </div>
    
                <div className="col-lg-3 pt-3"  style={{textAlign:'justify'}}>
                <h3 className=' pb-3'>Contact info</h3>
                <p>
                <i class="bi bi-geo-alt"></i> &nbsp;  No. 3 Richard street, Near Temple-city, Madurai.
                </p>
                <p>
                <i class="bi bi-telephone"></i> &nbsp; +452 2367891
                </p>
                <p>
                <i class="bi bi-envelope-arrow-up"></i> &nbsp; foodnest@yahoo.in
                </p>
                </div>

              
              </div>
              <hr></hr>
              <div className='d-md-flex justify-content-md-between text-center'>
              <h6>© Copyright 2024 FoodNest. All Rights Reserved</h6> <span>Follow us  &nbsp;&nbsp;
              <i class="bi bi-facebook"></i> &nbsp;&nbsp;
              <i class="bi bi-instagram"></i> &nbsp;&nbsp;
              <i class="bi bi-twitter"></i>
              </span>
              </div>
             
            </div>
          </div>
    
        </>
      )
 
}

export default Contact;