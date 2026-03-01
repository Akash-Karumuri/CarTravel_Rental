import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { GET_CARS } from "../Services/apiRoutes/apiRoutes";

const Cars = () => {
  const [car, setCar] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const res = await axios.get(GET_CARS());
        setCar(res?.data || []);
      } catch (err) {
        console.error(err?.message);
      }
    };

    fetchCars();
  }, []);

  return (
    <section className="container cars p-5 mt-5">
      <h2>
        Choose from a Wide Range of Vehicles Tailored to Your Needs
      </h2>

      <h1 className="text-center">
        {car?.length}+ Cars <i className="bi bi-car-front-fill"></i>
      </h1>

      <div className="row mt-5">
        {car?.map((item) => (
          <div
            data-aos="zoom-in"
            key={item?._id}
            className="col-md-4 mb-3"
          >
            <figure className="shadow">
              <figcaption>
                <h4 className="px-3 py-2 m-0">
                  <strong>{item?.name}</strong>
                </h4>

                <img
                  src={item?.imageUrl}
                  alt={item?.name}
                  className="img-fluid rounded w-100"
                />

                <p className="px-3 pt-3 m-0">
                  <strong>Type:</strong> {item?.type}
                </p>

                <p className="px-3 py-2 m-0">
                  <strong>Seating Capacity:</strong>{" "}
                  {item?.seatingCapacity}
                </p>

                <div className="d-flex justify-content-center my-3">
                  <NavLink to={`/CarDetails/${item?._id}`}>
                    <button className="btn btn-primary w-100">
                      Know More
                    </button>
                  </NavLink>
                </div>
              </figcaption>
            </figure>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cars;