import axios from "axios";
import React, { useEffect, useState } from "react";
import { Modal } from "bootstrap"; 

import {
  GET_BOOKINGS,
  DELETE_BOOKING,
  UPDATE_BOOKING,
  GET_BOOKING_BY_ID,
} from "../../Services/apiRoutes/apiRoutes";

const CustomerDetails = () => {
  const [users, setUsers] = useState([]);

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [carName, setCarName] = useState("");
  const [days, setDays] = useState(1);
  const [id, setId] = useState("");

  // Fetch bookings
  const fetchUsers = async () => {
    try {
      const res = await axios.get(GET_BOOKINGS());
      setUsers(res.data || []);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Delete booking
  const deleteUser = async (_id) => {
    try {
      await axios.delete(DELETE_BOOKING(_id));
      alert("Booking deleted");
      fetchUsers();
    } catch (err) {
      console.log(err.message);
    }
  };

  // Get one booking
  const getOneRecord = async (_id) => {
    try {
      const res = await axios.get(GET_BOOKING_BY_ID(_id));

      setFname(res.data.fname);
      setLname(res.data.lname);
      setEmail(res.data.email);
      setPhone(res.data.phone);
      setService(res.data.service || "");
      setCarName(res.data.carName);
      setDays(res.data.days);
      setId(res.data._id);

      const modalEl = document.getElementById("updateCustomerData");
      const modal = new Modal(modalEl);
      modal.show();

    } catch (err) {
      console.log(err);
    }
  };

  // Update booking
  const updateUserData = async (e) => {
    e.preventDefault();

    try {
      await axios.put(UPDATE_BOOKING(id), {
        fname,
        lname,
        email,
        phone,
        service,
        carName,
        days: Number(days),
      });

      alert("Booking Updated");
      fetchUsers();

      const modalEl = document.getElementById("updateCustomerData");
      const modal = Modal.getInstance(modalEl);
      modal.hide();

    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="container p-5 view-customers-page">
      <h2 className="text-center mb-3">Customer Bookings</h2>

      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Car</th>
            <th>Days</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.fname} {user.lname}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.carName}</td>
              <td>{user.days}</td>
              <td>{user.status}</td>
              <td>
                <button
                  onClick={() => getOneRecord(user._id)}
                  className="btn btn-primary me-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteUser(user._id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Update Modal */}
      <div
        className="modal fade"
        id="updateCustomerData"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Update Booking</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>

            <div className="modal-body">
              <form onSubmit={updateUserData}>
                <input
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                  className="form-control mb-2"
                  required
                />
                <input
                  value={lname}
                  onChange={(e) => setLname(e.target.value)}
                  className="form-control mb-2"
                  required
                />
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control mb-2"
                  required
                />
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="form-control mb-2"
                  required
                />
                <input
                  value={carName}
                  onChange={(e) => setCarName(e.target.value)}
                  className="form-control mb-2"
                  required
                />
                <input
                  value={days}
                  onChange={(e) => setDays(e.target.value)}
                  type="number"
                  className="form-control mb-3"
                  required
                />

                <button className="btn btn-success w-100">
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetails;