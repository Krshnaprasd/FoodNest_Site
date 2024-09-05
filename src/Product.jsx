import React from 'react'

const Product = () => {

    const [product] = [
        {
          img: "../src/assets/Product.jpg",
        }
      ]


  return (
    <>
    <div className="container-fluid pt-3">
        <div className="container">
            <div className="row text-center">
                <div className="col-md-6 pt-lg-5 mt-lg-5">
                   <h1 className='logotxt fw-bolder'>FoodNest</h1>
                   <h4 className='fw-bolder pb-md-3 d-none d-sm-block'>" Place for Peace - Feast for Food "</h4>
                   <h5 className='fw-bolder pb-3  d-sm-none d-block'>" Place for Peace - Feast for Food "</h5>

                   <div>
                    <input type="text" className='mb-3' placeholder='Product Name' /><br></br>
                    <input type="text" className='mb-3' placeholder='Product Img' /><br></br>
                    <input type="text" className='mb-3' placeholder='Product Price'/><br></br>
                    <button className='fd-btn border-0 fw-bolder text-white'>Add</button>
                   </div>
                </div>
                <div className="col-md-6">
                <img className='img-fluid prod-img' src={product.img}/>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Product;