import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils} from '@fortawesome/free-solid-svg-icons';

const HomePage = () => {
  
  const [Home] = [
    {
      video: "../src/assets/food.mp4",
      img:"../src/assets/Chicken.png",
      img1:"../src/assets/pizaa1.png",
      img2:"../src/assets/pizza.png"


    }
  ]

  return (
    <>
    
    <div className="video-container container-fluid">
    <video className="video-bg" src={Home.video} autoPlay loop muted></video>
    </div>
    <div className=" container-fluid">
      <div className="container fd-content">
      <div className=" row  d-flex justify-content-around text-white" style={{ textAlign: 'justify' }}>
      <div className="col-lg-5 pt-3 pt-sm-0 pb-5 fd-content col-12 text-center order-md-1 order-2">
        <h2 className='fw-bolder'> We believe Good food</h2>
        <h2 className='fw-bolder'> Offers Great smile <i className="icn fas fa-smile-wink"></i></h2>
        <p>
        " Get ready to nestle into a world of flavor with FoodNest's scrumptious non-veg dishes, crafted to satisfy your cravings !!"
        Your one-stop destination for succulent non-veg food that will leave you wanting more, every time !"
        </p><br></br>
        <div className=' text-center'>
        <button className="fd-btn border-0 text-white">Order Now</button>  <button className='fd-btn2  border-0'>Reserve</button>
        </div>
        

      </div>
      <div className="col-lg-3 col-10 pt-md-5 mt-md-5 mt-lg-5 mt-xl-1 order-md-2 order-1">
        <img className='img-fluid fd-rotate d-block d-md-none d-lg-block' src={Home.img} alt="" />
        <img className="img-fluid fd-img d-block d-md-none d-lg-block" src={Home.img1} alt="" />
        </div>
      </div>
      </div>
    </div>
    
    
    </>
    
  )
}

export default HomePage;