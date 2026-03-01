import axios from "axios";
import React, { useState } from "react";
import { POST_SERVICE } from "../../Services/apiRoutes/apiRoutes";

const AddService = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const AddNewService = async (e) => {
    e.preventDefault();

    try {
      await axios.post(POST_SERVICE(), {
        title,
        description,
      });

      alert("Service Added Successfully");

      // reset form
      setTitle("");
      setDescription("");
    } catch (err) {
      console.error(err?.response?.data?.message || err?.message);
    }
  };

  return (
    <div className="container col-lg-6 mx-auto shadow p-5 m-5">
      <h2>Add New Service</h2>
      <form onSubmit={AddNewService}>
        <label>Service Name:</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Enter Service name"
          className="form-control mb-3"
          required
        />

        <label>Service Description:</label>
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          placeholder="Enter Description"
          className="form-control mb-3"
          required
        />

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddService;
