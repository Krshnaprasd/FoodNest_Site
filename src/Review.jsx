import React from 'react'
import { Carousel, Card } from 'react-bootstrap';
import Contact from './Contact.jsx'
 const Review = () => {

  const reviews = [
    {
      id: 1,
      name: 'Sabesh Kanna',
      review: 'Amazing food, great service!',
      image: 'assets/img/testimonials/testimonials-1.jpg',  // Add image URL
      stars: 5  // Add a star rating
    },
    {
      id: 2,
      name: 'KarthiKeyan',
      review: 'Loved the flavors and the presentation!',
      image: 'assets/img/testimonials/testimonials-2.jpg',
      stars: 4
    },
    {
      id: 3,
      name: 'Krishna Prasad',
      review: 'Excellent dining experience!',
      image: '../src/assets/Krishna.PNG',
      stars: 5
    },
    {
      id: 4,
      name: 'Karthik Somasundaram',
      review: 'The desserts were fantastic!',
      image: 'assets/img/testimonials/testimonials-4.jpg',
      stars: 4
    },
    {
      id: 5,
      name: 'Vasu Dev',
      review: 'Great ambiance and food!',
      image: 'assets/img/testimonials/testimonials-5.jpg',
      stars: 5
    }
  ];
  return (
<>
<div className="container text-center pb-5 pt-5">
<h1 className='fw-bolder pb-5'> Reviews</h1>
  <div className="row  g-5">
  <Carousel interval={3000}>
      {reviews.map((review) => (
        <Carousel.Item key={review.id}>
          <div className="d-flex justify-content-center">
            <Card style={{ width: '65rem' }}>
              <div className="row">
                <div className="col-md-5 p-3">
                <Card.Img src={review.image}  />
                </div>
                <div className="col-md-5 text-start ">
                <Card.Body className='pb-5'>
                <Card.Title><h2 className='fw-bolder pt-md-5'>{review.name}</h2></Card.Title>
                <div className="stars pb-3">
                  {/* Render stars dynamically based on the rating */}
                  {[...Array(review.stars)].map((_, index) => (
                    <i key={index} className="bi bi-star-fill" style={{ color: 'gold' }}></i>
                  ))}
                </div>
                <Card.Text>{review.review}</Card.Text>
              </Card.Body>
                </div>
              </div>      
            </Card>
          </div>
        </Carousel.Item>
      ))}
  </Carousel>
  </div>
</div>


<div className="container-fluid mb-5" id='contact'>
<Contact/>
</div>
</>
    
  )
}

export default Review;