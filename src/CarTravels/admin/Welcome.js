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
    <div className="container-fluid p-4">

      <h2 className="mb-4 fw-bold">
        Admin Dashboard – <span className="text-primary">AK Car Travels</span>
      </h2>

      <div className="row g-4">

        {/* Cars */}
        <div className="col-md-4">
          <div className="card shadow border-0 bg-primary text-white">
            <div className="card-body">
              <h5>Total Cars</h5>
              <h2 className="fw-bold">{stats.totalCars}</h2>
              <button
                onClick={() => setView("ViewCars")}
                className="btn btn-light btn-sm mt-2"
              >
                Manage Cars
              </button>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="col-md-4">
          <div className="card shadow border-0 bg-success text-white">
            <div className="card-body">
              <h5>Total Services</h5>
              <h2 className="fw-bold">{stats.totalServices}</h2>
              <button
                onClick={() => setView("ViewService")}
                className="btn btn-light btn-sm mt-2"
              >
                Manage Services
              </button>
            </div>
          </div>
        </div>

        {/* Bookings */}
        <div className="col-md-4">
          <div className="card shadow border-0 bg-warning text-dark">
            <div className="card-body">
              <h5>Total Bookings</h5>
              <h2 className="fw-bold">{stats.totalBookings}</h2>
              <button
                onClick={() => setView("AdminBookings")}
                className="btn btn-dark btn-sm mt-2"
              >
                View Bookings
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Quick Actions */}
      <div className="row mt-5">

        <div className="col-md-6">
          <div className="card shadow border-0">
            <div className="card-body">
              <h5 className="fw-bold">Quick Actions</h5>

              <button
                className="btn btn-outline-primary me-2 mt-3"
                onClick={() => setView("AddCar")}
              >
                Add New Car
              </button>

              <button
                className="btn btn-outline-success me-2 mt-3"
                onClick={() => setView("AddService")}
              >
                Add Service
              </button>

              <button
                className="btn btn-outline-warning mt-3"
                onClick={() => setView("AdminBookings")}
              >
                Check Bookings
              </button>

            </div>
          </div>
        </div>

        {/* Info Panel */}
        <div className="col-md-6">
          <div className="card shadow border-0">
            <div className="card-body">
              <h5 className="fw-bold">Admin Info</h5>
              <p className="mt-3">
                Welcome back <b>Akash Karumuri</b>.  
                Manage your vehicles, services, and customer bookings easily
                from this dashboard.
              </p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Welcome;