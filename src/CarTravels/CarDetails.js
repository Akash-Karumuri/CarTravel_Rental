import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  GET_CAR_BY_ID,
  POST_BOOKING,
} from "../Services/apiRoutes/apiRoutes";

const CarDetails = () => {
  const { id } = useParams();
  const [car, setCar] = useState({});
  const [showForm, setShowForm] = useState(false);

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [days, setDays] = useState(1);

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const res = await axios.get(GET_CAR_BY_ID(id));
        setCar(res?.data || {});
        console.log(res.data);
        
      } catch (err) {
        console.error(err?.message);
      }
    };

    fetchCar();
  }, [id]);

  const bookNow = async (e) => {
  e.preventDefault();

  try {
    const payload = {
      fname,
      lname,
      email,
      phone,
      carId: car._id,
      carName: car.name,             
      days: Number(days),
      pricePerDay: Number(car.pricePerDay),
      totalAmount: Number(days) * Number(car.pricePerDay),
      status: "Pending",              
    };

    console.log("Sending booking:", payload);

    await axios.post(POST_BOOKING(), payload);

    alert("Booking Successful!");

    setShowForm(false);
    setFname("");
    setLname("");
    setEmail("");
    setPhone("");
    setDays(1);

  } catch (err) {
    console.error(err.response?.data || err.message);
  }
};

  return (
    <div className="container p-5 mt-5">
      <div className="row">
        <div className="col-lg-6">
          <img
            src={car?.imageUrl}
            alt={car?.name}
            className="img-fluid"
          />
        </div>

        <div className="col-lg-6">
          <h3>{car?.name}</h3>
          <p>Type: {car?.type}</p>
          <p>Price: {car?.pricePerDay} ₹</p>

          <button
            onClick={() => setShowForm(true)}
            className="btn btn-primary"
          >
            Book Now
          </button>
        </div>
      </div>

      {showForm && (
        <div className="card mt-5 p-4">
          <h4>Enter Your Details</h4>

          <form onSubmit={bookNow}>
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

            <input
              value={days}
              onChange={(e) => setDays(e.target.value)}
              type="number"
              min="1"
              className="form-control mb-3"
              required
            />

            <button className="btn btn-success w-100">
              Confirm Booking
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default CarDetails;