import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  DELETE_CAR,
  GET_CAR_BY_ID,
  GET_CARS,
  UPDATE_CAR,
} from "../../../Services/apiRoutes/apiRoutes";

const SERVICE_ICONS = [
  "bi-steering-wheel",
  "bi-car-front",
  "bi-map",
  "bi-airplane",
  "bi-building",
];

const ViewCars = () => {
  const [cars, setCars] = useState([]);
  const [editData, setEditData] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const fetchCars = async () => {
    try {
      const res = await axios.get(GET_CARS());
      setCars(res?.data || []);
    } catch (err) {
      console.error(err?.message);
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);

  const deleteCar = async (id) => {
    if (!window.confirm("Delete this car?")) return;
    try {
      await axios.delete(DELETE_CAR(id));
      fetchCars();
    } catch (err) {
      console.error(err?.message);
    }
  };

  const openEdit = async (id) => {
    try {
      const res = await axios.get(GET_CAR_BY_ID(id));
      setEditData(res?.data);
      setShowModal(true);
    } catch (err) {
      console.error(err?.message);
    }
  };

  const handleEditChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const updateCar = async (e) => {
    e.preventDefault();
    try {
      await axios.put(UPDATE_CAR(editData._id), {
        name: editData.name,
        type: editData.type,
        imageUrl: editData.imageUrl,
        seatingCapacity: editData.seatingCapacity,
        features: editData.features,
        pricePerDay: editData.pricePerDay,
      });
      setShowModal(false);
      fetchCars();
    } catch (err) {
      console.error(err?.message);
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="page-header">
        <h2>Fleet</h2>
        <span className="record-count">{cars.length} cars</span>
      </div>

      {/* Car grid */}
      <div className="car-grid">
        {cars.map((car) => (
          <div key={car._id} className="car-card">
            {car.imageUrl ? (
              <img
                src={car.imageUrl}
                alt={car.name}
                className="car-img"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            ) : (
              <div className="car-img">
                <i className="bi bi-car-front" />
              </div>
            )}

            <div className="car-body">
              <div className="car-name">{car.name}</div>
              <div className="car-type-tag">{car.type}</div>
              <div className="car-meta">
                <div className="car-meta-row">
                  <span>Seats</span>
                  <span>{car.seatingCapacity}</span>
                </div>
                <div className="car-meta-row">
                  <span>Features</span>
                  <span>
                    {Array.isArray(car.features)
                      ? car.features.join(", ")
                      : car.features}
                  </span>
                </div>
              </div>
              <div className="car-price">
                ₹{Number(car.pricePerDay).toLocaleString("en-IN")} / day
              </div>
              <div className="car-actions">
                <button className="btn-edit" onClick={() => openEdit(car._id)}>
                  <i className="bi bi-pencil" />
                  Edit
                </button>
                <button
                  className="btn-danger"
                  onClick={() => deleteCar(car._id)}
                >
                  <i className="bi bi-trash" />
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Modal */}
      {showModal && editData && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="modal-head">
              <h3>Edit car</h3>
              <button
                className="modal-close"
                onClick={() => setShowModal(false)}
              >
                <i className="bi bi-x-lg" />
              </button>
            </div>
            <form onSubmit={updateCar}>
              <div className="modal-body">
                <div className="form-row">
                  <div className="form-field">
                    <label>Car name</label>
                    <input
                      name="name"
                      value={editData.name || ""}
                      onChange={handleEditChange}
                      required
                    />
                  </div>
                  <div className="form-field">
                    <label>Type</label>
                    <input
                      name="type"
                      value={editData.type || ""}
                      onChange={handleEditChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-field">
                  <label>Image URL</label>
                  <input
                    name="imageUrl"
                    value={editData.imageUrl || ""}
                    onChange={handleEditChange}
                  />
                </div>
                <div className="form-row">
                  <div className="form-field">
                    <label>Seats</label>
                    <input
                      name="seatingCapacity"
                      type="number"
                      value={editData.seatingCapacity || ""}
                      onChange={handleEditChange}
                      required
                    />
                  </div>
                  <div className="form-field">
                    <label>Price / day (₹)</label>
                    <input
                      name="pricePerDay"
                      type="number"
                      value={editData.pricePerDay || ""}
                      onChange={handleEditChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-field">
                  <label>Features</label>
                  <input
                    name="features"
                    value={editData.features || ""}
                    onChange={handleEditChange}
                  />
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

export default ViewCars;
