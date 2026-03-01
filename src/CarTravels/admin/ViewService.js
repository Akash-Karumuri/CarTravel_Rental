import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  GET_SERVICES,
  GET_SERVICE_BY_ID,
  UPDATE_SERVICE,
  DELETE_SERVICE,
} from "../../Services/apiRoutes/apiRoutes";

const ViewService = () => {
  const [service, setService] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [id, setId] = useState("");

  //  Fetch Services
  const fetchServices = async () => {
    try {
      const res = await axios.get(GET_SERVICES());
      setService(res?.data || []);
    } catch (err) {
      console.error(err?.message);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  //  Delete Service
  const deleteService = async (id) => {
    try {
      await axios.delete(DELETE_SERVICE(id));
      alert("Service deleted");
      fetchServices(); // refetch
    } catch (err) {
      console.error(err?.message);
    }
  };

  // Get Single Service
  const getOneRecord = async (id) => {
    try {
      const res = await axios.get(GET_SERVICE_BY_ID(id));
      const data = res?.data;

      setTitle(data?.title || "");
      setDescription(data?.description || "");
      setId(data?._id || "");
    } catch (err) {
      console.error(err?.message);
    }
  };

  // Update Service
  const updateService = async (e) => {
    e.preventDefault();

    try {
      await axios.put(UPDATE_SERVICE(id), {
        title,
        description,
      });

      alert("Service Updated");

      fetchServices();

      // Close modal
      const modalEl = document.getElementById("updateService");
      const modal = window.bootstrap.Modal.getInstance(modalEl);
      modal?.hide();

      setTitle("");
      setDescription("");
      setId("");
    } catch (err) {
      console.error(err?.message);
    }
  };

  return (
    <section className="container p-5 mt-5">
      <h2 className="text-center mb-5">Available Services</h2>

      <div className="row mt-5">
        {service.map((service) => (
          <div key={service?._id} className="col-md-4 mb-3">
            <div className="card shadow">
              <h4 className="px-3 py-2 m-0 bg-primary text-light">
                {service?.title}
              </h4>

              <p className="p-3 m-0">
                {service?.description}
              </p>

              <div className="p-3 d-flex flex-row-reverse">
                <button
                  onClick={() => getOneRecord(service?._id)}
                  data-bs-toggle="modal"
                  data-bs-target="#updateService"
                  className="btn btn-primary mb-2"
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteService(service?._id)}
                  className="btn btn-danger mx-3 mb-2"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Update Modal */}
      <div
        className="modal fade"
        id="updateService"
        tabIndex="-1"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
      >
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Update Service</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>

            <div className="modal-body">
              <form onSubmit={updateService}>
                <label>Service Name:</label>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  className="form-control mb-3"
                  required
                />

                <label>Service Description:</label>
                <input
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  type="text"
                  className="form-control mb-3"
                  required
                />

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>

                  <button type="submit" className="btn btn-success">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViewService;