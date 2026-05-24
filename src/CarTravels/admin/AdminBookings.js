import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  GET_BOOKINGS,
  DELETE_BOOKING,
} from "../../Services/apiRoutes/apiRoutes";

const statusClass = (status) => {
  if (status === "confirmed") return "badge badge-confirmed";
  if (status === "cancelled") return "badge badge-cancelled";
  return "badge badge-pending";
};

const AdminBookings = () => {
  const [bookings, setBookings] = useState([]);

  const fetchBookings = async () => {
    try {
      const res = await axios.get(GET_BOOKINGS());
      setBookings(res?.data || []);
    } catch (err) {
      console.error(err?.message);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const deleteBooking = async (id) => {
    if (!window.confirm("Delete this booking?")) return;
    try {
      await axios.delete(DELETE_BOOKING(id));
      fetchBookings();
    } catch (err) {
      console.error(err?.message);
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="page-header">
        <h2>Bookings</h2>
        <span className="record-count">{bookings.length} bookings</span>
      </div>

      {/* Table */}
      <div className="page-card">
        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>Customer</th>
                <th>Car</th>
                <th>Days</th>
                <th>Total</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((b) => (
                <tr key={b?._id}>
                  <td className="td-name">
                    {b?.fname} {b?.lname}
                  </td>
                  <td>{b?.carName}</td>
                  <td>{b?.days}</td>
                  <td>₹{Number(b?.totalAmount).toLocaleString("en-IN")}</td>
                  <td>
                    <span className={statusClass(b?.status)}>{b?.status}</span>
                  </td>
                  <td>
                    <button
                      className="btn-danger"
                      onClick={() => deleteBooking(b?._id)}
                    >
                      <i className="bi bi-trash" />
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {bookings.length === 0 && (
                <tr>
                  <td
                    colSpan="6"
                    style={{
                      textAlign: "center",
                      padding: "2rem",
                      color: "#9ca3af",
                    }}
                  >
                    No bookings found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminBookings;
