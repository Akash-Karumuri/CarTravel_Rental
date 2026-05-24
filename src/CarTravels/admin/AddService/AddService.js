import axios from "axios";
import React, { useState } from "react";
import { POST_SERVICE } from "../../../Services/apiRoutes/apiRoutes";

const AddService = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(POST_SERVICE(), { title, description });
      setTitle("");
      setDescription("");
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      console.error(err?.response?.data?.message || err?.message);
    }
  };

  return (
    <div className="form-wrap">
      <h2>Add new service</h2>

      {success && (
        <div className="toast-success show">
          <i className="bi bi-check-circle-fill" />
          Service added successfully!
        </div>
      )}

      <div className="form-card">
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label>Service name</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Airport Transfer"
              required
            />
          </div>

          <div className="form-field">
            <label>Description</label>
            <input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Short description of the service"
              required
            />
          </div>

          <button type="submit" className="btn-primary">
            <i className="bi bi-plus-circle" />
            Add service
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddService;
