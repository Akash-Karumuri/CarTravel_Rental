import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  GET_BOOKINGS,
  DELETE_BOOKING,
} from "../../Services/apiRoutes/apiRoutes";

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
    try {
      await axios.delete(DELETE_BOOKING(id));
      alert("Deleted");
      fetchBookings();
    } catch (err) {
      console.error(err?.message);
    }
  };

  return (
    <div className="container p-5">
      <h2>Bookings</h2>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
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
              <td>{b?.fname} {b?.lname}</td>
              <td>{b?.carName}</td>
              <td>{b?.days}</td>
              <td>{b?.totalAmount} ₹</td>
              <td>{b?.status}</td>
              <td>
                <button
                  onClick={() => deleteBooking(b?._id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminBookings;