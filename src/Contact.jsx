import React from 'react'
import Container from 'react-bootstrap/Container';

const Contact = () => {
    return (
        <>
            <Container fluid className='text-center pb-5'>
                <h1 className='fw-bolder '>Contact info</h1>
                <div className="row text-center">
                    <div className="col-md-5 cart-bg fw-bolder text-white mt-5" style={{ padding: 50 }}>
                        <h1>Share your Experience</h1>
                        <h1>Real Receipe taste</h1>
                    </div>
                    <div className="col-md-7 pt-5" >
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label htmlFor="floatingInput">Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingDes" placeholder="Designation" />
                            <label htmlFor="floatingDes">Designation</label>
                        </div>

                        <div className="form-floating mb-3">
                            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                            <label htmlFor="floatingTextarea">Comments</label>
                        </div>
                      
                        <div class="d-grid gap-3">
                            <button className="cart-bg border-0 rounded-2 text-white fw-bold p-3" type="button">Review</button>
                            
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Contact;