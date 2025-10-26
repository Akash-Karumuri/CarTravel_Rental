import React from 'react'
import { NavLink } from 'react-router-dom'
import CallApi from '../CallApi'

const Welcome = ({setView}) => {
  const cars=CallApi(`http://localhost:4000/Cars`)
  const services=CallApi(`http://localhost:4000/Services`)
  const customer=CallApi(`http://localhost:4000/CustomerData`)
  return (
    <div className='container p-5'>
        <h1 className='text-center'>Admin Dashboard – <b>Ak Car Travels</b>
        </h1>
        <div data-aos="fade-right" className='col-sm-12 p-5'>
            <h2 className='mt-3'>Hello, Akash Karumuri! Welcome back to your dashboard.</h2>
            <div className='row p-5'>
              <div className='shadow col-sm-6 col-lg-4 mb-3 p-3'>
                <h2>Cars {cars.length} +</h2>
                <button onClick={() => setView("ViewCars")} className="btn btn-primary mt-3">View Cars</button>
              </div>
              <div className='shadow col-sm-6 col-lg-4 mb-3 p-3'>
                <h2>Services {services.length} +</h2>
                <button onClick={() => setView("ViewService")} className="btn btn-primary mt-3">View Services</button>
              </div>
              <div className='shadow col-sm-6 col-lg-4 mb-3 p-3'>
                <h2>Queries {customer.length} +</h2>
                <button onClick={() => setView("CustomerDetails")} className="btn btn-primary mt-3">View Queries</button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Welcome