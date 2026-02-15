import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  DELETE_CAR,
  GET_CAR_BY_ID,
  GET_CARS,
  UPDATE_CAR,
} from "../../Services/apiRoutes/apiRoutes";

const ViewCars = () => {
  const [car, setCar] = useState([]);
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [seatingCapacity, setSeatingCapacity] = useState("");
  const [features, setFeatures] = useState("");
  const [pricePerDay, setPricePerPrice] = useState("");
  const [id, setId] = useState("");

  // Reading data
const fetchCars = async () => {
  try {
    const res = await axios.get(GET_CARS());
    setCar(res?.data || []);
  } catch (err) {
    console.error(err?.message);
  }
};
useEffect(() => {
  fetchCars();
}, []);


  //  Deleting a car
const deleteCar = async (id) => {
  try {
    await axios.delete(DELETE_CAR(id));
    alert("Car deleted");

    fetchCars(); // refetch
  } catch (err) {
    console.error(err?.message);
  }
};


  // Getting one record of Car
  const getOneRecord = async (id) => {
    try {
      const res = await axios.get(GET_CAR_BY_ID(id));
      const data = res?.data;

      setName(data?.name || "");
      setType(data?.type || "");
      setImageUrl(data?.imageUrl || "");
      setSeatingCapacity(data?.seatingCapacity || "");
      setFeatures(data?.features || "");
      setPricePerPrice(data?.pricePerDay || "");
      setId(data?._id || "");
    } catch (err) {
      console.error(err?.message);
    }
  };

  // Updating Car
const updateCar = async (e) => {
  e.preventDefault();

  try {
    await axios.put(UPDATE_CAR(id), {
      name,
      type,
      imageUrl,
      seatingCapacity,
      features,
      pricePerDay,
    });

    alert("Car Updated");

    fetchCars(); // refetch

    // close bootstrap modal
    const modalEl = document.getElementById("updateCar");
    const modal = window.bootstrap.Modal.getInstance(modalEl);
    modal.hide();

    // reset form
    setName("");
    setType("");
    setImageUrl("");
    setSeatingCapacity("");
    setFeatures("");
    setPricePerPrice("");
    setId("");
  } catch (err) {
    console.error(err?.message);
  }
};


  return (
    <section className="container view-cars p-5 mt-5">
      <h2 className="text-center mb-5">Available Cars</h2>
      <div className="row mt-5">
        {car.map((car, index) => (
          <div data-aos="zoom-in" key={index} className="col-md-4 mb-3">
            <div className="card shadow">
              <h4 className="px-3 py-2 m-0">
                <strong>{car.name}</strong>
              </h4>
              <img
                src={car.imageUrl}
                alt={car.name}
                className="img-fluid rounded w-100"
              />
              <p className="px-3 pt-3 m-0">
                <strong>Type:</strong> {car.type}
              </p>
              <p className="px-3 py-2 m-0">
                <strong>Seating Capacity:</strong> {car.seatingCapacity}
              </p>
              <p className="px-3 py-2 m-0">
                <strong>Features:</strong> {car.features.toString()}
              </p>
              <p className="px-3 py-2 m-0">
                <strong>Price Per Day:</strong> {car.pricePerDay} ₹
              </p>
              <div className="p-3 d-flex d-flex flex-row-reverse">
                <button
                  onClick={() => getOneRecord(car?._id)}
                  data-bs-toggle="modal"
                  data-bs-target="#updateCar"
                  className="btn btn-primary"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteCar(car?._id)}
                  className="btn btn-danger mx-3"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        className="modal fade"
        id="updateCar"
        tabIndex="-1"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        role="dialog"
        aria-labelledby="modalTitleId"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-md"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalTitleId">
                Update Car
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={updateCar}>
                <label>Car Name:</label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter Car Name"
                  value={name}
                  className="form-control"
                  required
                />
                <label>Car Type:</label>
                <input
                  onChange={(e) => setType(e.target.value)}
                  type="text"
                  id="type"
                  name="type"
                  placeholder="Enter Car Type"
                  value={type}
                  className="form-control"
                  required
                />
                <label>Image URL:</label>
                <input
                  onChange={(e) => setImageUrl(e.target.value)}
                  type="text"
                  id="image"
                  name="image"
                  placeholder="Enter Image URL"
                  value={imageUrl}
                  className="form-control"
                  required
                />
                <label>Seating Capacity:</label>
                <input
                  onChange={(e) => setSeatingCapacity(e.target.value)}
                  type="number"
                  id="seatingCapacity"
                  name="seatingCapacity"
                  placeholder="Enter Seating Capacity"
                  value={seatingCapacity}
                  className="form-control"
                  required
                />
                <label>Car Features:</label>
                <input
                  onChange={(e) => setFeatures(e.target.value)}
                  type="text"
                  id="features"
                  name="features"
                  placeholder="Enter Car Features"
                  value={features}
                  className="form-control"
                  required
                />
                <label>Price Per Day:</label>
                <input
                  onChange={(e) => setPricePerPrice(e.target.value)}
                  type="number"
                  id="pricePerDay"
                  name="pricePerDay"
                  placeholder="Enter Price Per Day"
                  value={pricePerDay}
                  className="form-control"
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

export default ViewCars;
