import React from 'react'
import mainBanner from './assets/mainbanner.png'
import Toyota from './assets/Toyota.jpeg'
import Hyundai from './assets/hyundai.jpg'
import Fortuner from './assets/ToyotaFortuner.jpg'
import BMW from './assets/BMW X1.jpg'
import Maruti from './assets/Maruti.jpg'
import Audi from './assets/Audi.jpg'
import { NavLink } from 'react-router-dom'


const Home = () => {
  const data = [
    {
      name: "Toyota Innova Crysta",
      description:"Toyota Innova Crysta is spacious and perfect for family trips, offers unmatched comfort, advanced safety features, and powerful performance. Ideal for both city drives and long road trips.",
      image: Toyota,
    },
    {
      name: "Hyundai Verna",
      description:"Stylish and ideal for corporate travel, the Hyundai Verna combines sleek design with cutting-edge technology. Its refined interiors and superior fuel efficiency make it a top choice for professionals.",
      image: Hyundai,
    },
    {
      name: "Toyota Fortuner",
      description:"Luxurious and powerful for adventure seekers, the Toyota Fortuner is built for rugged terrains and long journeys. With a commanding presence, spacious seating, it ensures a premium experience.",
      image: Fortuner,
    },
    {
      name: "BMW X1",
      description:"A touch of luxury for your special occasions, the BMW X1 boasts a sophisticated design, plush interiors, and high-end performance. Perfect for creating unforgettable memories on the go.",
      image: BMW,
    },
    {
      name: "Maruti Suzuki Ertiga",
      description:"A versatile MPV designed for family outings and group travel. The Maruti Suzuki Ertiga offers ample seating, fuel efficiency, and reliable performance, making it a popular choice for practical travelers.",
      image: Maruti, 
    },
    {
      name: "Audi Q7",
      description:"Experience unparalleled luxury and power with the Audi Q7. Equipped with advanced technology, a spacious cabin, and superior comfort, it’s the ultimate SUV for those who want to travel in style.",
      image: Audi, 
    },
  ];  
  return (
    <section className='container p-5 home-page'>
        <div className='row my-3'>
            <div data-aos="fade-right" className='col-sm-12 col-lg-6 p-5'>
                <h2 className='display-4 mt-3'>Travel with Comfort, Style, and Safety</h2>
                <p>Experience premier car rental services tailored for your travel needs. Enjoy unparalleled comfort, reliability, and affordability on every ride. Whether it's a business trip or a family getaway, we've got you covered with our extensive fleet.</p>
                <p>Welcome to <strong>AK Car Travels</strong>, where every journey begins with trust, comfort, and style. Whether you need a quick airport transfer, a luxurious ride for business meetings, or an adventurous road trip, we are here to make it happen. Choose from our wide fleet of well-maintained vehicles and experience a seamless travel service tailored to your needs.</p>
                <NavLink to="/About" className="text-decoration-none text-primary me-3">Know More <i className="bi bi-chevron-right"></i></NavLink>
                <NavLink to="/Cars" className="btn btn-primary">Book Now <i className="bi bi-chevron-right"></i></NavLink>
            </div>
            <div className='col-sm-12 col-lg-6 p-5'>
                <h1 className='text-pop-up-top text-center pt-3'><strong>Welcome to <br></br><span className='text-primary'>Ak Car Travels</span></strong></h1>
                <img className='mainBanner mt-0 w-100' src={mainBanner}/>
            </div>
        </div>
        <div className='mt-5 pt-5'>
          <h2>Our Premium Fleet</h2>
          <p>Take a look at some of our most popular vehicles</p>
        </div>
        <div className='row mt-Audi Q75 premium-cars'>
          {
            data.map((car, index) => (
              <div data-aos="zoom-out" key={index} className="col-md-6 col-lg-4 mb-4">
                  <div className="card">
                    <img src={car.image} alt={car.name} className="card-img-top"/>
                      <div className="card-body bg-light">
                        <figure className="m-0">
                            <figcaption className="px-3 py-2 bg-light">
                                <h5 className="mb-2">{car.name}</h5>
                                <p className="m-0">{car.description}</p>
                            </figcaption>
                        </figure>
                        <NavLink to="/Cars" className="btn btn-primary w-100 mt-3">Book Now <i className="bi bi-car-front-fill mx-2"></i></NavLink>
                      </div>
                  </div>
              </div>))
          }
        </div>
    </section>
  )
}

export default Home