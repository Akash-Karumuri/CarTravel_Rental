import React, { useContext, useState } from "react";
import AddService from "../AddService/AddService";
import Welcome from "./Welcome";
import ViewService from "../ViewServices/ViewService";
import AddCar from "../AddCar/AddCar";
import ViewCars from "../ViewCars/ViewCars";
import CustomerDetails from "../CustomerDetails";
import AdminBookings from "../AdminBookings";
import { loginStatus } from "../../../App";
import Login from "../Login";
import "./Dashboard.css";

const NAV_ITEMS = [
  { key: "", label: "Dashboard", icon: "bi-speedometer2", section: "Overview" },
  { key: "AddCar", label: "Add Car", icon: "bi-plus-circle", section: "Fleet" },
  { key: "ViewCars", label: "View Cars", icon: "bi-car-front", section: null },
  {
    key: "AddService",
    label: "Add Service",
    icon: "bi-stars",
    section: "Services",
  },
  {
    key: "ViewService",
    label: "View Services",
    icon: "bi-list-ul",
    section: null,
  },
  {
    key: "CustomerDetails",
    label: "Customers",
    icon: "bi-people",
    section: "Customers",
  },
  {
    key: "AdminBookings",
    label: "Bookings",
    icon: "bi-calendar-check",
    section: null,
  },
];

const PAGE_TITLES = {
  "": "Dashboard",
  AddCar: "Add Car",
  ViewCars: "Fleet",
  AddService: "Add Service",
  ViewService: "Services",
  CustomerDetails: "Customers",
  AdminBookings: "Bookings",
};

const Dashboard = () => {
  const [view, setView] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
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

  const handleNav = (key) => {
    setView(key);
    setSidebarOpen(false);
  };

  if (!login) return <Login />;

  return (
    <div className="dash-root">
      {/* Sidebar overlay (mobile) */}
      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`dash-sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-brand">
          <div className="brand-icon">
            <i className="bi bi-car-front-fill" />
          </div>
          <div>
            <div className="brand-name">AK Car Travels</div>
            <div className="brand-sub">Admin Portal</div>
          </div>
        </div>

        <nav className="sidebar-nav">
          {NAV_ITEMS.map((item) => (
            <React.Fragment key={item.key}>
              {item.section && (
                <div className="nav-section">{item.section}</div>
              )}
              <button
                className={`nav-item ${view === item.key ? "active" : ""}`}
                onClick={() => handleNav(item.key)}
              >
                <i className={`bi ${item.icon}`} />
                <span>{item.label}</span>
              </button>
            </React.Fragment>
          ))}
        </nav>

        <button className="logout-btn" onClick={handleLogout}>
          <i className="bi bi-box-arrow-left" />
          <span>Logout</span>
        </button>
      </aside>

      {/* Main area */}
      <div className="dash-main">
        {/* Topbar */}
        <header className="dash-topbar">
          <button
            className="menu-toggle"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open menu"
          >
            <i className="bi bi-list" />
          </button>
          <span className="topbar-title">{PAGE_TITLES[view]}</span>
          <div className="topbar-right">
            <div className="topbar-date">
              <i className="bi bi-calendar3" />
              {new Date().toLocaleDateString("en-IN", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </div>
            <div className="topbar-avatar">AK</div>
          </div>
        </header>

        {/* Content */}
        <main className="dash-content">
          {views[view] || <Welcome setView={setView} />}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
