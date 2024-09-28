import React from 'react'
import Card from 'react-bootstrap/Card';

const Vision = () => {
  return (
   <>
 
   <div className="row row-cols-lg-4  row-cols-md-2  cart-img">
   

    <div className="col">
    <Card
        
        className=" cart-bg m-3 text-center" style={{height:380,}}
      >
      
        <Card.Body>
            <Card.Img style={{width:150, height:150, textAlign:'justify'}} src='../src/assets/burger.png'></Card.Img>
          <Card.Title className='fw-bolder'> Best Quality</Card.Title><br></br>
          <Card.Text  className='' style={{textAlign:'justify'}}>
           we serve the finest quality food crafted with the freshest ingredients, that delights your taste buds.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
    <div className="col">
    <Card
      
      className=" cart-bg m-3 text-center " style={{height:380}}
    >
    
      <Card.Body>
          
        <Card.Title className='pt-3 fw-bolder'> Home Delivery </Card.Title>
        <Card.Text className=' ' style={{textAlign:'justify'}}>
        While savoring our delicious dishes, delivered hot and fresh right. wherever you are!
        </Card.Text><br></br>
        <Card.Img style={{width:150, height:150, textAlign:'justify'}} src='../src/assets/delivery.png'></Card.Img>
      </Card.Body>
    </Card>
    </div>
    <div className="col">
    <Card
      
      className=" cart-bg m-3 text-center " style={{height:380}}
    >
    
      <Card.Body>
      <Card.Img style={{width:150, height:150, textAlign:'justify'}} src='../src/assets/taste.png'></Card.Img><br></br><br></br>
        <Card.Title  className='fw-bolder'> Real Taste </Card.Title>
        <Card.Text  className='' style={{textAlign:'justify'}}>
        Experience the real taste of authentic flavors,  delivering the true essence of culinary excellence in every bite
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    <div className="col">
    <Card
      
      className=" cart-bg m-3 text-center " style={{height:380}}
    >
    
      <Card.Body>
        <Card.Title className='pt-3 fw-bolder'> Traditional Food </Card.Title>
        <Card.Text  className='' style={{textAlign:'justify'}}>
        Discover the rich heritage of traditional cuisine at FoodNest, bring you the authentic taste in every dish
        </Card.Text>
        <Card.Img style={{width:150, height:150, textAlign:'justify'}} src='../src/assets/food.png'></Card.Img>
      </Card.Body>
    </Card>
    </div>
  
     
     
      
   </div>
  
 

       
   
   </>
  )
}

export default Vision;