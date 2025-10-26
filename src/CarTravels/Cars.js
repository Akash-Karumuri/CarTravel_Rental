import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AddCar from './admin/AddCar';
import { NavLink } from 'react-router-dom';

const Cars = () => {
     const [car,setCar]=useState([])
     useEffect(()=>{
      axios.get(`http://localhost:4000/Cars`)
      .then((res)=>setCar(res.data))
      .catch((err)=>console.log(err))
     }) 
  return (
    <section className='container cars p-5 mt-5'>
        <h2>Choose from a Wide Range of Vehicles Tailored to Your Needs</h2>
        <p><strong>At AK Car Travels</strong>, we take pride in offering a diverse fleet of well-maintained vehicles to suit every travel requirement. Whether you're looking for a compact car for a city ride, a spacious SUV for a family trip, or a luxury sedan for a special occasion, we have the perfect vehicle for you. Explore our options and book the car that fits your journey best.</p>
        <h1 className='text-center'>{car.length}+ Cars <i className="bi bi-car-front-fill"></i></h1>
        <div className='row mt-5'>
            {
                car.map((car,index) => {
                    return (
                        <div data-aos="zoom-in" key={index} className='col-md-4 mb-3'>
                            <figure className='shadow'>
                            <figcaption>
                                <h4 className='px-3 py-2 m-0'><strong>{car.name}</strong></h4>
                                <img src={car.imageUrl} alt={car.name} className="img-fluid rounded w-100"/>
                                
                                <p className='px-3 pt-3 m-0'><strong>Type:</strong> {car.type}</p>
                                  <p className='px-3 py-2 m-0'><strong>Seating Capacity:</strong> {car.seatingCapacity}</p>
                                  <div className="d-flex justify-content-center my-3">
                                    <NavLink to={`/CarDetails/${car.id}`}><button className='btn btn-primary w-100'>Know More</button></NavLink>
                                  </div>
                            </figcaption>
                            </figure>
                        </div>
                    )
                })
            }
        </div>
    </section>
  )
}

export default Cars