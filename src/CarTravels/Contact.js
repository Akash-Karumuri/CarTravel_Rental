import axios from 'axios';
import React, { useEffect, useState } from 'react'
const Contact = () => {
  const [fname,setfName]=useState("")
  const [lname,setlName]=useState("")
  const [email,setEmail]=useState("")
  const [phone,setPhone]=useState("")
  const [service, setService] = useState("");
  const [car, setCar] = useState("");
  const [days, setDays] = useState(1);
  const [services, setServices] = useState([]);
  const [cars, setCars] = useState([]);
  useEffect(() => {
    // Fetch service titles
    axios.get('http://localhost:4000/Services')
      .then(res => setServices(res.data))
      .catch(err => console.log(err));

    // Fetch car names
    axios.get('http://localhost:4000/Cars')
      .then(res => setCars(res.data))
      .catch(err => console.log(err));
  }, []);
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:4000/CustomerData`, { fname, lname, email, phone, service, car, days })
      .then((res) => {
        alert("Details Submitted Successfully");
        // Clear form fields
        setfName("");
        setlName("");
        setEmail("");
        setPhone("");
        setService("");
        setCar("");
        setDays("");
      })
      .catch((err) => console.log(err));
  };
  return (
    <section className='contact-page p-5 container-fluid'>
        <div className='row px-5'>
            <div className='col-sm-12 col-lg-6 p-5 mt-5'>
                <h2>Get in Touch with <strong>AK Car Travels</strong></h2>
                <p>We’re here to assist you with all your travel needs. Reach out to us anytime!</p>
                <h2 className='mt-5'>Contact Information:</h2>
                <h4><i className="bi bi-telephone-fill"></i> Phone:</h4>
                <p>Call us at <strong>+91-9392968885</strong> for instant bookings or inquiries. Our lines are open 24/7 to serve you better</p>
                <h4><i className="bi bi-envelope-at-fill"></i> Email:</h4>
                <p>Drop us an email at <strong>info@akcartravels.com</strong>, and we’ll get back to you within 24 hours.</p>
                <h4><i className="bi bi-geo-alt-fill"></i> Address:</h4>
                <p>AK Car Travels, <br></br>
                Plot No. 123, Main Road, <br></br>
                Kakinada, India – 533003.</p>
            </div>
            <div className='col-sm-12 col-lg-6 p-5 mt-5'>
                <h2>Inquiry Form</h2>
                <p className='text-center'>Use the form below to send us your queries or feedback.</p>
                <form onSubmit={submitHandler}>
                  <label htmlFor="name">First Name: <span className='text-danger'>*</span></label>
                  <input onChange={(e)=>setfName(e.target.value)} value={fname} type="text" id="fname" name="fname" placeholder="Enter your first name" className='form-control' required></input>
                  <label htmlFor="name">Last Name: <span className='text-danger'>*</span></label>
                  <input onChange={(e)=>setlName(e.target.value)} value={lname} type="text" id="lname" name="lname" placeholder="Enter your last name" className='form-control' required></input>
                  <label htmlFor="email">Email: <span className='text-danger'>*</span></label>
                  <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" id="email" name="email" placeholder="Enter your email" className='form-control' required></input>
                  <label htmlFor="phone">Phone Number: <span className='text-danger'>*</span></label>
                  <input onChange={(e)=>setPhone(e.target.value)} value={phone} type="tel" id="phone" name="phone" placeholder="Enter your phone number" className='form-control' required></input>
                  <label htmlFor="service">Service: <span className='text-danger'>*</span></label>
                  <select onChange={(e) => setService(e.target.value)} value={service} id="service" name="service" className='form-control' required>
                  <option value="">Select a service</option>
                  {services.map(service => (
                  <option key={service.id} value={service.title}>{service.title}</option>
              ))}
            </select>

            <label htmlFor="car">Car: <span className='text-danger'>*</span></label>
            <select onChange={(e) => setCar(e.target.value)} value={car} id="car" name="car" className='form-control' required>
              <option value="">Select a car</option>
              {cars.map(car => (
                <option key={car.id} value={car.name}>{car.name}</option>
              ))}
            </select>

            <label htmlFor="days">Number of Days: <span className='text-danger'>*</span></label>
            <input onChange={(e) => setDays(e.target.value)} value={days} type="number" id="days" name="days" placeholder="Enter number of days" className='form-control' min="1" max="15" required />
                  <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact