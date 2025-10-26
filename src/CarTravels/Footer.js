import React from 'react'

const Footer = () => {
  return (
    <footer className='text-bg-dark p-5 pb-0 container-fluid'>
      <div className="">
        <div className="row px-5">
          <div className="col-md-4">
            <h3>AK Car Travels</h3>
            <p>Your trusted partner for safe, reliable, and luxurious travel solutions. Explore the world with comfort and ease, every journey with us is a memorable one.</p>
          </div>
          <div className="col-md-2">
            <h4>Quick Links</h4>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white text-decoration-none">Home</a></li>
              <li><a href="/about" className="text-white text-decoration-none">About Us</a></li>
              <li><a href="/services" className="text-white text-decoration-none">Services</a></li>
              <li><a href="/contact" className="text-white text-decoration-none">Contact Us</a></li>
            </ul>
          </div>
      
          <div className="col-md-3">
            <h4>Contact Information</h4>
            <p><strong>Phone:</strong> +91-9392968885</p>
            <p><strong>Email:</strong> info@akcartravels.com</p>
            <p><strong>Address:</strong> AK Car Travels, Main Road, Kakinada, India – 533003</p>
          </div>
      
          <div className="col-md-3">
            <h4>Follow Us</h4>
            <div className='lh-lg'>
              <a href="https://facebook.com" target="_blank" className="text-white text-decoration-none mr-3"><i className="bi bi-facebook"></i> Facebook</a> <br></br>
              <a href="https://twitter.com" target="_blank" className="text-white text-decoration-none mr-3"><i className="bi bi-twitter-x"></i> Twitter-X</a> <br></br>
              <a href="https://instagram.com" target="_blank" className="text-white text-decoration-none"><i className="bi bi-instagram"></i> Instagram</a> <br></br>
              <a href="https://www.threads.net/" target="_blank" className="text-white text-decoration-none"><i className="bi bi-threads"></i> Threads</a>
            </div>
          </div>
        </div>
        
      
        <div className="row">
          <div className="col-12 text-center m-0 py-3">
            <p>&copy; 2024 AK Car Travels. All Rights Reserved.</p>
          </div>
        </div>
      </div>
</footer>

  )
}

export default Footer