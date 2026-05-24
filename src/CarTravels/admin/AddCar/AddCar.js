import axios from "axios";
import React, { useState } from "react";
import { POST_CAR } from "../../../Services/apiRoutes/apiRoutes";

const AddCar = () => {
  const [form, setForm] = useState({
    name: "",
    type: "",
    imageUrl: "",
    seatingCapacity: "",
    features: "",
    pricePerDay: "",
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(POST_CAR(), form);
      setSuccess(true);
      setForm({
        name: "",
        type: "",
        imageUrl: "",
        seatingCapacity: "",
        features: "",
        pricePerDay: "",
      });
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="form-wrap">
      <h2>Add new car</h2>

      {success && (
        <div className="toast-success show">
          <i className="bi bi-check-circle-fill" />
          Car added successfully!
        </div>
      )}

      <div className="form-card">
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-field">
              <label>Car name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="e.g. Toyota Innova"
                required
              />
            </div>
            <div className="form-field">
              <label>Car type</label>
              <input
                name="type"
                value={form.type}
                onChange={handleChange}
                placeholder="e.g. SUV, Sedan"
                required
              />
            </div>
          </div>

          <div className="form-field">
            <label>Image URL</label>
            <input
              name="imageUrl"
              value={form.imageUrl}
              onChange={handleChange}
              placeholder="https://..."
              required
            />
          </div>

          <div className="form-row">
            <div className="form-field">
              <label>Seating capacity</label>
              <input
                name="seatingCapacity"
                value={form.seatingCapacity}
                onChange={handleChange}
                type="number"
                placeholder="e.g. 7"
                min="1"
                required
              />
            </div>
            <div className="form-field">
              <label>Price per day (₹)</label>
              <input
                name="pricePerDay"
                value={form.pricePerDay}
                onChange={handleChange}
                type="number"
                placeholder="e.g. 2500"
                required
              />
            </div>
          </div>

          <div className="form-field">
            <label>Features</label>
            <input
              name="features"
              value={form.features}
              onChange={handleChange}
              placeholder="AC, GPS, Bluetooth..."
              required
            />
          </div>

          <button type="submit" className="btn-primary">
            <i className="bi bi-plus-circle" />
            Add car
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCar;
