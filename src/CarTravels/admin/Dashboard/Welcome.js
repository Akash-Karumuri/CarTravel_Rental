import React, { useEffect, useState } from "react";
import axios from "axios";
import { GET_DASHBOARD_DATA } from "../../../Services/apiRoutes/apiRoutes";

const Welcome = ({ setView }) => {
  const [stats, setStats] = useState({
    totalCars: 0,
    totalServices: 0,
    totalBookings: 0,
  });

  useEffect(() => {
    axios
      .get(GET_DASHBOARD_DATA())
      .then((res) => setStats(res.data))
      .catch((err) => console.log(err));
  }, []);

  const statCards = [
    {
      label: "Total Cars",
      value: stats.totalCars,
      icon: "bi-car-front",
      iconBg: "#eff6ff",
      iconColor: "#1a56db",
      view: "ViewCars",
      action: "Manage fleet",
    },
    {
      label: "Total Services",
      value: stats.totalServices,
      icon: "bi-stars",
      iconBg: "#f0fdf4",
      iconColor: "#15803d",
      view: "ViewService",
      action: "Manage services",
    },
    {
      label: "Total Bookings",
      value: stats.totalBookings,
      icon: "bi-calendar-check",
      iconBg: "#fef9c3",
      iconColor: "#854d0e",
      view: "AdminBookings",
      action: "View bookings",
    },
    {
      label: "Customers",
      value: stats.totalBookings,
      icon: "bi-people",
      iconBg: "#faf5ff",
      iconColor: "#7e22ce",
      view: "CustomerDetails",
      action: "View customers",
    },
  ];

  return (
    <div>
      {/* Stat cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
          gap: "14px",
          marginBottom: "1.5rem",
        }}
      >
        {statCards.map((s) => (
          <div
            key={s.label}
            onClick={() => setView(s.view)}
            style={{
              background: "#fff",
              border: "1px solid #e8eaf0",
              borderRadius: "12px",
              padding: "1.1rem 1.25rem",
              cursor: "pointer",
              transition: "box-shadow 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.07)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
          >
            <div
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "10px",
                background: s.iconBg,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "0.85rem",
              }}
            >
              <i
                className={`bi ${s.icon}`}
                style={{ fontSize: "18px", color: s.iconColor }}
              />
            </div>
            <div
              style={{
                fontSize: "12px",
                color: "#9ca3af",
                marginBottom: "4px",
              }}
            >
              {s.label}
            </div>
            <div
              style={{
                fontSize: "26px",
                fontWeight: "700",
                color: "#111827",
                marginBottom: "6px",
              }}
            >
              {s.value}
            </div>
            <div
              style={{
                fontSize: "12px",
                color: "#1a56db",
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <i className="bi bi-arrow-right" style={{ fontSize: "11px" }} />
              {s.action}
            </div>
          </div>
        ))}
      </div>

      {/* Quick actions + Admin info */}
      <div
        className="quick-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "14px",
        }}
      >
        {/* Quick actions */}
        <div
          style={{
            background: "#fff",
            border: "1px solid #e8eaf0",
            borderRadius: "12px",
            padding: "1.25rem",
          }}
        >
          <h3
            style={{
              fontSize: "14px",
              fontWeight: "700",
              color: "#111827",
              marginBottom: "1rem",
              display: "flex",
              alignItems: "center",
              gap: "7px",
            }}
          >
            <i
              className="bi bi-lightning-charge"
              style={{ fontSize: "15px", color: "#f59e0b" }}
            />
            Quick Actions
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {[
              { label: "Add car", view: "AddCar", icon: "bi-plus-circle" },
              { label: "Add service", view: "AddService", icon: "bi-stars" },
              {
                label: "Bookings",
                view: "AdminBookings",
                icon: "bi-calendar-check",
              },
              {
                label: "Customers",
                view: "CustomerDetails",
                icon: "bi-people",
              },
            ].map((a) => (
              <button
                key={a.view}
                onClick={() => setView(a.view)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "7px 13px",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                  background: "#f9fafb",
                  fontSize: "13px",
                  fontWeight: "600",
                  color: "#374151",
                  cursor: "pointer",
                  transition: "background 0.15s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "#f3f4f6")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "#f9fafb")
                }
              >
                <i className={`bi ${a.icon}`} style={{ fontSize: "14px" }} />
                {a.label}
              </button>
            ))}
          </div>
        </div>

        {/* Admin info */}
        <div
          style={{
            background: "#fff",
            border: "1px solid #e8eaf0",
            borderRadius: "12px",
            padding: "1.25rem",
          }}
        >
          <h3
            style={{
              fontSize: "14px",
              fontWeight: "700",
              color: "#111827",
              marginBottom: "1rem",
              display: "flex",
              alignItems: "center",
              gap: "7px",
            }}
          >
            <i
              className="bi bi-person-circle"
              style={{ fontSize: "15px", color: "#1a56db" }}
            />
            Admin Info
          </h3>
          {[
            { icon: "bi-person", label: "Name", value: "Akash Karumuri" },
            { icon: "bi-shield-check", label: "Role", value: "Administrator" },
            {
              icon: "bi-check-circle",
              label: "Status",
              value: "Active session",
              green: true,
            },
          ].map((row) => (
            <div
              key={row.label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "0.6rem 0",
                borderBottom: "1px solid #f3f4f6",
              }}
            >
              <i
                className={`bi ${row.icon}`}
                style={{
                  fontSize: "16px",
                  color: row.green ? "#15803d" : "#9ca3af",
                  width: "18px",
                }}
              />
              <div>
                <div
                  style={{
                    fontSize: "13px",
                    fontWeight: "600",
                    color: "#111827",
                  }}
                >
                  {row.value}
                </div>
                <div style={{ fontSize: "11.5px", color: "#9ca3af" }}>
                  {row.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Welcome;
