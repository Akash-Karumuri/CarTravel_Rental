import React from 'react'
import about1 from './assets/about1.jpg'
import about2 from './assets/about2.jpg'

const About = () => {
  return (
    <section className='container about-page p-3'>
        <div data-aos="fade-right" className='row p-5'>
            <div className='col-sm-12 col-lg-6 p-5'>
                <h2>Who We Are</h2>
                <p className='py-0'><strong>Welcome to AK Car Travels</strong>, your trusted partner for comfortable, reliable, and luxurious travel experiences. At AK Car Travels, we believe that every journey should be as delightful as the destination. Since our inception, we have been committed to redefining the way people travel, blending exceptional quality of service with affordability to meet the diverse needs of our customers.</p>
                <p>Whether you’re embarking on a business trip requiring punctuality and professionalism, a family vacation filled with excitement and bonding moments, or a quick getaway to escape the daily grind, we ensure that every mile you travel with us is seamless, memorable, and stress-free.</p>
            </div>
            <div data-aos="fade-left" className='col-sm-12 col-lg-6 center'>
                <img className='about1' src={about1}/>
            </div>
        </div>
        <div className='row p-5'>
            <div data-aos="fade-right" className='col-sm-12 col-lg-6 order-sm-2 order-lg-1 center'>
                <img className='about2' src={about2}/>
            </div>
            <div data-aos="fade-left" className='col-sm-12 col-lg-6 order-sm-1 order-lg-2 p-5'>
                <h2>Our Mission</h2>
                <p><strong>At AK Car Travels</strong>, our mission is simple yet impactful: to provide top-tier car rental and travel solutions that consistently exceed customer expectations. We are passionate about delivering more than just transportation; we aim to create an experience that embodies convenience, safety, and luxury at every step of your journey.</p>
                <p>Our dedication goes beyond just meeting your needs we strive to anticipate them. Whether you require a dependable vehicle for a business trip, a luxurious ride for a special event, or a family-friendly option for a vacation, we ensure our services are tailored to fit your unique requirements.</p>
            </div>
        </div>
        <div className='row p-5'>
            <div data-aos="fade-right" className='col-sm-12 col-lg-6'>
            <h2>Why Choose Us?</h2>
            <ul>
                <li><strong>Diverse Fleet</strong>: From sleek sedans to spacious SUVs, our well-maintained vehicles cater to all travel needs.</li>
                <li><strong>Professional Drivers</strong>: Our experienced and courteous drivers are trained to prioritize safety and customer comfort.</li>
                <li><strong>Customizable Packages</strong>: We offer flexible travel solutions, whether for business, leisure, or events.</li>
                <li><strong>24/7 Customer Support</strong>: Our team is always on hand to assist with bookings, queries, or last-minute changes.</li>
            </ul>

            </div>
            <div data-aos="fade-left" className='col-sm-12 col-lg-6'>
                <h2>Our Mission</h2>
                <ul>
                    <li><strong>Customer First</strong>: Your satisfaction is at the heart of everything we do.</li>
                    <li><strong>Reliability</strong>: Count on us for punctuality and dependable service.</li>
                    <li><strong>Innovation</strong>: We continually enhance our offerings to deliver a seamless experience.</li>
                    <li><strong>Sustainability</strong>: Committed to eco-friendly practices, we are exploring greener travel solutions.</li>
                </ul>

            </div>
        </div>
        <div data-aos="zoom-in" className='px-5'>
            <h2>Our Promise</h2>
            <p>We promise to make every trip with us safe, comfortable, and enjoyable. When you choose AK Car Travels, you choose peace of mind, unparalleled quality, and a partner that values your trust.</p>
        </div>
    </section>
  )
}

export default About