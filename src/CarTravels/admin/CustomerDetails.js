import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  GET_BOOKINGS,
  DELETE_BOOKING,
  UPDATE_BOOKING,
  GET_BOOKING_BY_ID,
} from "../../Services/apiRoutes/apiRoutes";

const statusClass = (status) => {
  if (status === "confirmed") return "badge badge-confirmed";
  if (status === "cancelled") return "badge badge-cancelled";
  return "badge badge-pending";
};

const CustomerDetails = () => {
  const [users, setUsers] = useState([]);
  const [editData, setEditData] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const fetchUsers = async () => {
    try {
      const res = await axios.get(GET_BOOKINGS());
      setUsers(res.data || []);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const deleteUser = async (_id) => {
    if (!window.confirm("Delete this booking?")) return;
    try {
      await axios.delete(DELETE_BOOKING(_id));
      fetchUsers();
    } catch (err) {
      console.error(err.message);
    }
  };

  const openEdit = async (_id) => {
    try {
      const res = await axios.get(GET_BOOKING_BY_ID(_id));
      setEditData(res.data);
      setShowModal(true);
    } catch (err) {
      console.error(err);
    }
  };

  const handleEditChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const updateUserData = async (e) => {
    e.preventDefault();
    try {
      await axios.put(UPDATE_BOOKING(editData._id), {
        fname: editData.fname,
        lname: editData.lname,
        email: editData.email,
        phone: editData.phone,
        service: editData.service,
        carName: editData.carName,
        days: Number(editData.days),
      });
      setShowModal(false);
      fetchUsers();
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="page-header">
        <h2>Customer bookings</h2>
        <span className="record-count">{users.length} records</span>
      </div>

      {/* Table */}
      <div className="page-card">
        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Car</th>
                <th>Days</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td className="td-name">
                    {user.fname} {user.lname}
                  </td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.carName}</td>
                  <td>{user.days}</td>
                  <td>
                    <span className={statusClass(user.status)}>
                      {user.status}
                    </span>
                  </td>
                  <td>
                    <div className="action-group">
                      <button
                        className="btn-edit"
                        onClick={() => openEdit(user._id)}
                      >
                        <i className="bi bi-pencil" />
                        Edit
                      </button>
                      <button
                        className="btn-danger"
                        onClick={() => deleteUser(user._id)}
                      >
                        <i className="bi bi-trash" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {users.length === 0 && (
                <tr>
                  <td
                    colSpan="7"
                    style={{
                      textAlign: "center",
                      padding: "2rem",
                      color: "#9ca3af",
                    }}
                  >
                    No customer bookings found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit Modal */}
      {showModal && editData && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="modal-head">
              <h3>Edit booking</h3>
              <button
                className="modal-close"
                onClick={() => setShowModal(false)}
              >
                <i className="bi bi-x-lg" />
              </button>
            </div>
            <form onSubmit={updateUserData}>
              <div className="modal-body">
                <div className="form-row">
                  <div className="form-field">
                    <label>First name</label>
                    <input
                      name="fname"
                      value={editData.fname || ""}
                      onChange={handleEditChange}
                      required
                    />
                  </div>
                  <div className="form-field">
                    <label>Last name</label>
                    <input
                      name="lname"
                      value={editData.lname || ""}
                      onChange={handleEditChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-field">
                    <label>Email</label>
                    <input
                      name="email"
                      type="email"
                      value={editData.email || ""}
                      onChange={handleEditChange}
                      required
                    />
                  </div>
                  <div className="form-field">
                    <label>Phone</label>
                    <input
                      name="phone"
                      value={editData.phone || ""}
                      onChange={handleEditChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-field">
                    <label>Car</label>
                    <input
                      name="carName"
                      value={editData.carName || ""}
                      onChange={handleEditChange}
                      required
                    />
                  </div>
                  <div className="form-field">
                    <label>Days</label>
                    <input
                      name="days"
                      type="number"
                      value={editData.days || ""}
                      onChange={handleEditChange}
                      min="1"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="btn-primary">
                  <i className="bi bi-check-lg" />
                  Save changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerDetails;
