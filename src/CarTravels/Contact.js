import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  GET_SERVICES,
  GET_CARS,
  POST_BOOKING,
} from "../Services/apiRoutes/apiRoutes";

const Contact = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [selectedCar, setSelectedCar] = useState("");
  const [days, setDays] = useState(null);

  const [services, setServices] = useState([]);
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const servicesRes = await axios.get(GET_SERVICES());
        const carsRes = await axios.get(GET_CARS());

        setServices(servicesRes.data || []);
        setCars(carsRes.data || []);
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchData();
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const carData = cars.find((c) => c._id === selectedCar);

      if (!carData) {
        alert("Please select a car");
        return;
      }

      const payload = {
        fname,
        lname,
        email,
        phone,
        service, 
        carId: carData._id,
        carName: carData.name,
        days: Number(days),
        pricePerDay: Number(carData.pricePerDay),
        totalAmount: Number(days) * Number(carData.pricePerDay),
        status: "Pending",
      };

      console.log("Booking Payload:", payload);

      await axios.post(POST_BOOKING(), payload);

      alert("Details Submitted Successfully");

      // Clear form
      setFname("");
      setLname("");
      setEmail("");
      setPhone("");
      setService("");
      setSelectedCar("");
      setDays(1);

    } catch (err) {
      console.error(err.response?.data || err.message);
    }
  };

  return (
    <section className="contact-page p-5 container-fluid">
      <div className="row px-5">
        
        {/* LEFT SIDE CONTENT (UNCHANGED) */}
        <div className="col-sm-12 col-lg-6 p-5 mt-5">
          <h2>Get in Touch with <strong>AK Car Travels</strong></h2>
          <p>We’re here to assist you with all your travel needs.</p>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="col-sm-12 col-lg-6 p-5 mt-5">
          <h2>Inquiry Form</h2>

          <form onSubmit={submitHandler}>

            <input
              value={fname}
              onChange={(e) => setFname(e.target.value)}
              placeholder="First Name"
              className="form-control mb-2"
              required
            />

            <input
              value={lname}
              onChange={(e) => setLname(e.target.value)}
              placeholder="Last Name"
              className="form-control mb-2"
              required
            />

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              className="form-control mb-2"
              required
            />

            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone"
              className="form-control mb-2"
              required
            />

            {/* SERVICE DROPDOWN (KEPT) */}
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="form-control mb-2"
              required
            >
              <option value="">Select Service</option>
              {services.map((s) => (
                <option key={s._id} value={s.title}>
                  {s.title}
                </option>
              ))}
            </select>

            {/*  CAR DROPDOWN */}
            <select
              value={selectedCar}
              onChange={(e) => setSelectedCar(e.target.value)}
              className="form-control mb-2"
              required
            >
              <option value="">Select Car</option>
              {cars.map((car) => (
                <option key={car._id} value={car._id}>
                  {car.name}
                </option>
              ))}
            </select>

            <input
              value={days}
              onChange={(e) => setDays(e.target.value)}
              placeholder="days"
              type="number"
              min="1"
              max="15"
              className="form-control mb-3"
              required
            />

            <button className="btn btn-success w-100">
              Submit
            </button>

          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;