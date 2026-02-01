import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AddService from './admin/AddService'
import { GET_SERVICES } from '../Services/apiRoutes/apiRoutes'

const Services = () => {
    // const data = [
    //     {
    //         title: "Airport Transfers",
    //         description: "Enjoy hassle-free transportation to and from the airport. Our professional drivers ensure punctual pickups and drop-offs, so you never have to worry about missing a flight or waiting long hours. Sit back and relax in our comfortable vehicles, whether you're arriving in style or heading out for your next adventure."
    //       },
    //       {
    //         title: "Business Travel Solutions",
    //         description: "For corporate clients, we offer specialized travel solutions that prioritize punctuality, professionalism, and comfort. Whether it's a single executive trip or group transportation for conferences and meetings, our fleet and experienced drivers are here to support your business goals."
    //       },
    //       {
    //         title: "Tour Packages",
    //         description: "Explore stunning destinations with our thoughtfully designed tour packages. From scenic road trips to popular tourist spots, we provide customizable packages to suit your preferences. Whether you're traveling solo, with family, or in a group, we ensure your journey is as memorable as the destination."
    //       },
    //       {
    //         title: "Event Transportation",
    //         description: "Make every event special with our seamless transportation services. Be it weddings, parties, corporate gatherings, or cultural events, our reliable fleet and skilled drivers ensure your guests arrive safely and on time, leaving you to focus on the event itself."
    //       },
    //       {
    //         title: "Customized Travel Plans",
    //         description: "Have a unique itinerary in mind? Our customized travel plans allow you to create a journey that matches your needs perfectly. From choosing the vehicle to planning routes and stops, we work closely with you to turn your travel ideas into reality."
    //       },
    //       {
    //         title: "City Tours",
    //         description: "Discover the charm of your city or a new one with our guided city tours. Sit back and enjoy the ride as we take you to the most iconic spots and hidden gems."
    //       },
    //       {
    //         title: "Outstation Trips",
    //         description: "Planning a long-distance journey? Our outstation travel services ensure you reach your destination comfortably and on time, with safe and reliable vehicles for extended trips."
    //       }
    //     ];
      const [service,setService]=useState([])
      useEffect(() => {
        axios.get(GET_SERVICES())
        .then((res)=>setService(res.data))
        .catch((err)=>console.log(err))
      },[])
  return (
    <section className='container p-5 mt-5 services'>
        <h2>What We Offer</h2>
        <p>At AK Car Travels, we pride ourselves on offering a diverse range of services designed to cater to your every travel need. Whether you're traveling for business, leisure, or a special event, our services are tailored to provide convenience, luxury, and reliability. Here's a closer look at what we offer:</p>
        <div className='row mt-5'>
            {
                service.map((service,index) => {
                    return (
                        <div key={index} className='col-md-4 mb-3'>
                            <div data-aos="flip-up" className='card'>
                                <h4 className='px-3 py-2 m-0'>{service.title}</h4>
                                <p className='p-3 m-0'>{service.description}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </section>
  )
}

export default Services