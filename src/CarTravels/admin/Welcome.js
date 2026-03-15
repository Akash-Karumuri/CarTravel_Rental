import React, { useEffect, useState } from "react";
import axios from "axios";
import { GET_DASHBOARD_DATA } from "../../Services/apiRoutes/apiRoutes";

const Welcome = ({ setView }) => {
  const [stats, setStats] = useState({
    totalCars: 0,
    totalServices: 0,
    totalBookings: 0,
  });

  useEffect(() => {
    axios
      .get(GET_DASHBOARD_DATA())
      .then((res) => {
        setStats(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container p-5">
      <h1 className="text-center">
        Admin Dashboard – <b>Ak Car Travels</b>
      </h1>

      <div data-aos="fade-right" className="col-sm-12 p-5">
        <h2 className="mt-3">
          Hello, Akash Karumuri! Welcome back to your dashboard.
        </h2>

        <div className="row p-5">

          <div className="shadow col-sm-6 col-lg-4 mb-3 p-3">
            <h2>Cars {stats.totalCars} +</h2>
            <button
              onClick={() => setView("ViewCars")}
              className="btn btn-primary mt-3"
            >
              View Cars
            </button>
          </div>

          <div className="shadow col-sm-6 col-lg-4 mb-3 p-3">
            <h2>Services {stats.totalServices} +</h2>
            <button
              onClick={() => setView("ViewService")}
              className="btn btn-primary mt-3"
            >
              View Services
            </button>
          </div>

          <div className="shadow col-sm-6 col-lg-4 mb-3 p-3">
            <h2>Bookings {stats.totalBookings} +</h2>
            <button
              onClick={() => setView("AdminBookings")}
              className="btn btn-primary mt-3"
            >
              View Bookings
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Welcome;