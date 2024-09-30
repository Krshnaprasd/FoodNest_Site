import React from 'react'
import Card from 'react-bootstrap/Card';

const Blog = () => {
    return (
        <>

            <h1 className='fw-bolder pb-4 text-center'>Our Latest News & Blog</h1>
            <div className="container ">
                <div className="row d-flex justify-content-around">
                    <div className="col-lg-3 pt-3">
                    <Card >
                    <Card.Img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRel3Sm32tvKaRlD8IIIF44msr90jz-dDSeJhV0OH4QsUDNQhZ7rQjqXNb2yBRvNXC4cu8&usqp=CAU" />
                    <Card.Body>
                        <Card.Title>The Rise of Plant-Based Eating: A Health Revolution</Card.Title>
                        <Card.Text  style={{textAlign:'justify'}}>
                        Plant-based diets are gaining popularity worldwide. Learn about the health benefits and sustainability impacts of choosing plant-based meals, and get inspired by creative ways to incorporate more veggies into your diet.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 days ago</small>
                    </Card.Footer>
                </Card>
                    </div>
                    <div className="col-lg-3 pt-3">
                    <Card >
                    <Card.Img  src="https://www.gastrotravelogue.com/wp-content/uploads/2019/09/food-1603759_1920.jpg" />
                    <Card.Body>
                        <Card.Title> Exploring Global attire Flavors: Spice Up Your Kitchen</Card.Title>
                        <Card.Text  style={{textAlign:'justify'}}>
                        From Moroccan tagines to Thai curries, discover how you can take your taste buds on a world tour by adding exotic spices and flavors to your cooking. A guide to bringing global cuisine into your kitchen with simple, authentic ingredients.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 10 days ago</small>
                    </Card.Footer>
                </Card>
                    </div>
                    <div className="col-lg-3 pt-3">
                    <Card >
                    <Card.Img  src="../src/assets/Nonveg.jpg" />
                    <Card.Body>
                        <Card.Title>Mastering the Art of Cooking Tips </Card.Title>
                        <Card.Text className='pb-3'  style={{textAlign:'justify'}}>
                        It comes to non-vegetarian cuisine, the key to mastering dishes often lies in the proper preparation, choosing the right cut of meat like searing, roasting and grilling is a journey worth taking, ensure your dishes  always crowd-pleasers. </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 7 days ago</small>
                    </Card.Footer>
                </Card>
                    </div>
                </div>
               
              
               
            </div>
        </>
    )
}

export default Blog;