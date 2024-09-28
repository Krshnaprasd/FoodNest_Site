import React from 'react'
import { Carousel, Card } from 'react-bootstrap';

 const Review = () => {

  const reviews = [
    {
      id: 1,
      name: 'Sabesh Kanna ',
      review: 'Amazing food,  The dishes were a delightful mix of flavors and textures, and each bite was better than the last. The presentation was exquisite, and the service made it a memorable dining experience!',
      image: '../src/assets/Sabesh.JPG',  
      stars: 5 
    },
    {
      id: 2,
      name: 'Karthikeyan',
      review: 'Loved the flavors and the presentation! The quality of the ingredients really shines through in every dish. From appetizers to dessert, everything was crafted with care. Definitely a top-notch dining spot!',
      image: '../src/assets/Karthi.JPG',
      stars: 4
    },
    {
      id: 3,
      name: 'Krishna Prasad',
      review: 'Excellent dining experience! An absolute culinary delight! Every dish was packed with flavor and the perfect balance of spices. I especially loved the innovative menu and cozy ambiance.',
      image: '../src/assets/Krishna.JPG',
      stars: 5
    },
    {
      id: 4,
      name: 'Karthikeyan',
      review: 'What an incredible experience! The food was mouth-watering and the desserts were heavenly. The staff was very attentive, and it’s clear that quality is their priority. The desserts were fantastic!',
      image: '../src/assets/Karthic.JPG',
      stars: 4
    },
    {
      id: 5,
      name: 'Vasu Dev',
      review: 'Great ambiance and food! From the moment we stepped in, we were treated to impeccable service and even better food. The flavors were bold, the ingredients fresh, and every plate was a work of art!',
      image:'../src/assets/Vasu.JPG',
      stars: 5
    },
    {
      id: 5,
      name: 'Athriyan',
      review: 'The variety on the menu is impressive, and every dish we tried was a hit. The ambiance was warm and welcoming, making it perfect for a special evening out. Will definitely be back!',
      image: '../src/assets/Virat.JPG',
      stars: 5
    }
  ];
  return (
<>
<div className="container text-center pb-5 pt-4">

  <div className="row" id='review'>

  <h1 className='fw-bolder pb-lg-5 pb-3 pt-5'> Reviews</h1>

  <Carousel  className='d-lg-block d-none' interval={3000}>
  {reviews.map((_, index) => {
    // Create chunks of 3 reviews for each slide
    if (index % 3 === 0) {
      return (
        <Carousel.Item key={index}>
          <div className="d-flex justify-content-center">
            {reviews.slice(index, index + 3).map((review) => (
              <Card className='review-bg' style={{ width: '18rem', margin: '0 10px' }} key={review.id}>
                <div className="d-flex flex-row">
                  {/* Left side image */}
                  <Card.Img
                    variant="left"
                    src={review.image}
                    alt={review.name}
                    style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      margin: '20px',
                    }}
                  />
                  {/* Right side content */}
                  <Card.Body>
                    <Card.Title>{review.name}</Card.Title>
                   
                    <div className="stars">
                      {[...Array(review.stars)].map((_, index) => (
                        <i key={index} className="bi bi-star-fill" style={{ color: 'gold' }}></i>
                      ))}
                    </div>
                   
                  </Card.Body>
                </div>
                <Card.Text className='p-4' style={{textAlign:'justify'}}>{review.review}
                    </Card.Text>
              </Card>
            ))}
          </div>
        </Carousel.Item>
      );
    }
  })}
</Carousel>
<Carousel  className='d-md-block d-lg-none d-none' interval={3000}>
  {reviews.map((_, index) => {
    // Create chunks of 3 reviews for each slide
    if (index % 2 === 0) {
      return (
        <Carousel.Item key={index}>
          <div className="d-flex justify-content-center">
            {reviews.slice(index, index + 2).map((review) => (
              <Card style={{ width: '18rem', margin: '0 10px' }} key={review.id}>
                <div className="d-flex flex-row">
                  {/* Left side image */}
                  <Card.Img
                    variant="left"
                    src={review.image}
                    alt={review.name}
                    style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      margin: '20px',
                    }}
                  />
                  {/* Right side content */}
                  <Card.Body>
                    <Card.Title>{review.name}</Card.Title>
                   
                    <div className="stars">
                      {[...Array(review.stars)].map((_, index) => (
                        <i key={index} className="bi bi-star-fill" style={{ color: 'gold' }}></i>
                      ))}
                    </div>
                   
                  </Card.Body>
                </div>
                <Card.Text className='p-4' style={{textAlign:'justify'}}>{review.review}
                    </Card.Text>
              </Card>
            ))}
          </div>
        </Carousel.Item>
      );
    }
  })}
</Carousel>
<Carousel className='d-md-none d-block' interval={2000}>
      {reviews.map((review) => (
        <Carousel.Item key={review.id}>
        <div className="d-flex justify-content-center">
        
            <Card style={{ width: '18rem', margin: '0 10px' }} key={review.id}>
              <div className="d-flex flex-row">
                {/* Left side image */}
                <Card.Img
                  variant="left"
                  src={review.image}
                  alt={review.name}
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    margin: '20px',
                  }}
                />
                {/* Right side content */}
                <Card.Body>
                  <Card.Title>{review.name}</Card.Title>
                 
                  <div className="stars">
                    {[...Array(review.stars)].map((_, index) => (
                      <i key={index} className="bi bi-star-fill" style={{ color: 'gold' }}></i>
                    ))}
                  </div>
                 
                </Card.Body>
              </div>
              <Card.Text className='p-4' style={{textAlign:'justify'}}>{review.review}
                  </Card.Text>
            </Card>
          
        </div>
      </Carousel.Item>
      ))}
  </Carousel> 

  </div>
</div>



</>
    
  )
}

export default Review;