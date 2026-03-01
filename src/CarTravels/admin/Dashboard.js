import React, { useContext, useState } from "react";
import AddService from "./AddService";
import Welcome from "./Welcome";
import ViewService from "./ViewService";
import AddCar from "./AddCar";
import ViewCars from "./ViewCars";
import CustomerDetails from "./CustomerDetails";
import AdminBookings from "./AdminBookings";
import { loginStatus } from "../../App";
import Login from "./Login";

const Dashboard = () => {
  const [view, setView] = useState("");
  const [login, setLogin] = useContext(loginStatus);

  const views = {
    AddService: <AddService />,
    ViewService: <ViewService />,
    AddCar: <AddCar />,
    ViewCars: <ViewCars />,
    CustomerDetails: <CustomerDetails />,
    AdminBookings: <AdminBookings />,
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setLogin(false);
  };

  // Protect Admin Dashboard
  if (!login) {
    return <Login />;
  }

  return (
    <div className="container-fluid dashboard mt-5">
      <div className="row">

        {/* Sidebar */}
        <aside className="col-lg-2 pt-3 px-2 text-center bg-light min-vh-100">
          <div className="row">
            <h4
              onClick={() => setView("")}
              className="mb-3 text-bg-primary m-0 p-3 cursor-pointer"
            >
              Admin Dashboard
            </h4>
          </div>

          <button
            onClick={() => setView("AddService")}
            className="btn btn-outline-primary w-100 mb-2"
          >
            Add Service
          </button>

          <button
            onClick={() => setView("ViewService")}
            className="btn btn-outline-primary w-100 mb-2"
          >
            View Services
          </button>

          <button
            onClick={() => setView("AddCar")}
            className="btn btn-outline-primary w-100 mb-2"
          >
            Add Car
          </button>

          <button
            onClick={() => setView("ViewCars")}
            className="btn btn-outline-primary w-100 mb-2"
          >
            View Cars
          </button>

          <button
            onClick={() => setView("CustomerDetails")}
            className="btn btn-outline-primary w-100 mb-2"
          >
            View Customers
          </button>

          <button
            onClick={() => setView("AdminBookings")}
            className="btn btn-outline-primary w-100 mb-2"
          >
            View Bookings
          </button>

          <button
            onClick={handleLogout}
            className="btn btn-danger w-100 mt-4"
          >
            Logout
          </button>
        </aside>

        {/* Main Content */}
        <div className="col-lg-10 p-4">
          {views[view] || <Welcome setView={setView} />}
        </div>

      </div>
    </div>
  );
};

export default Dashboard;