import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  GET_SERVICES,
  GET_SERVICE_BY_ID,
  UPDATE_SERVICE,
  DELETE_SERVICE,
} from "../../../Services/apiRoutes/apiRoutes";

const SERVICE_ICONS = [
  "bi-steering-wheel",
  "bi-map",
  "bi-pin-map",
  "bi-airplane",
  "bi-building",
  "bi-stars",
];

const ViewService = () => {
  const [services, setServices] = useState([]);
  const [editData, setEditData] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const fetchServices = async () => {
    try {
      const res = await axios.get(GET_SERVICES());
      setServices(res?.data || []);
    } catch (err) {
      console.error(err?.message);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const deleteService = async (id) => {
    if (!window.confirm("Delete this service?")) return;
    try {
      await axios.delete(DELETE_SERVICE(id));
      fetchServices();
    } catch (err) {
      console.error(err?.message);
    }
  };

  const openEdit = async (id) => {
    try {
      const res = await axios.get(GET_SERVICE_BY_ID(id));
      setEditData(res?.data);
      setShowModal(true);
    } catch (err) {
      console.error(err?.message);
    }
  };

  const handleEditChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const updateService = async (e) => {
    e.preventDefault();
    try {
      await axios.put(UPDATE_SERVICE(editData._id), {
        title: editData.title,
        description: editData.description,
      });
      setShowModal(false);
      fetchServices();
    } catch (err) {
      console.error(err?.message);
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="page-header">
        <h2>Services</h2>
        <span className="record-count">{services.length} services</span>
      </div>

      {/* Service grid */}
      <div className="service-grid">
        {services.map((svc, idx) => (
          <div key={svc._id} className="service-card">
            <div className="service-card-top">
              <i
                className={`bi ${SERVICE_ICONS[idx % SERVICE_ICONS.length]}`}
              />
              <span>{svc.title}</span>
            </div>
            <div className="service-card-desc">{svc.description}</div>
            <div className="service-card-footer">
              <button className="btn-edit" onClick={() => openEdit(svc._id)}>
                <i className="bi bi-pencil" />
                Edit
              </button>
              <button
                className="btn-danger"
                onClick={() => deleteService(svc._id)}
              >
                <i className="bi bi-trash" />
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Modal */}
      {showModal && editData && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="modal-head">
              <h3>Edit service</h3>
              <button
                className="modal-close"
                onClick={() => setShowModal(false)}
              >
                <i className="bi bi-x-lg" />
              </button>
            </div>
            <form onSubmit={updateService}>
              <div className="modal-body">
                <div className="form-field">
                  <label>Service name</label>
                  <input
                    name="title"
                    value={editData.title || ""}
                    onChange={handleEditChange}
                    required
                  />
                </div>
                <div className="form-field">
                  <label>Description</label>
                  <input
                    name="description"
                    value={editData.description || ""}
                    onChange={handleEditChange}
                    required
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

export default ViewService;
