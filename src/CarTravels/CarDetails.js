import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { bookCar } from "./Redux/Actions";
import { connect } from "react-redux";

const CarDetails = (props) => {
  const [outOfCars, setOutOfCars]=useState(false);
  useEffect(()=>{
    if(props.noOfCars===0){
    setOutOfCars(true)}
  }
)
  const { id } = useParams();
  const [car, setCar] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:4000/Cars/${id}`)
      .then((res) => setCar(res.data))
      .catch((err) => console.log(err));
  });
  return (
    <div className="container p-5 mt-5 CarDetails">
      <div className="row my-3">
      <div className="col-sm-12 col-lg-6 text-center">
        <img src={car.imageUrl} alt={car.name} className="img-fluid rounded w-100 h-100"/>
        </div>
        <div className="col-sm-12 col-lg-6">
          <div className="shadow my-3">
            <h4 className="px-3 py-2 m-0">
              <strong>{car.name}</strong>
            </h4>
            <div className="card-body">
              <p className="px-3 pt-3 m-0">
                <strong>Type:</strong> {car.type}
              </p>
              <p className="px-3 py-2 m-0">
                <strong>Seating Capacity:</strong> {car.seatingCapacity}
              </p>
              <p className="px-3 py-2 m-0">
                <strong>Features:</strong> {car.features}
              </p>
              <p className="px-3 py-2 pb-3 m-0">
                <strong>Price Per Day:</strong> {car.pricePerDay}₹
              </p>
              <p className="px-3 py-2 pb-3 m-0"><b>Number of cars:</b> {props.noOfCars}</p>
              <p className="px-3 py-2 pb-3 m-0"><b>cars:</b> {props.noOfCars > 5 ?"Available":props.noOfCars===0 ? "Out of Cars":"Limited Cars"}</p>
            </div>
            <div className="d-flex justify-content-center">
            <button disabled={outOfCars} onClick={props.bookCar} className='btn btn-primary me-1 my-3 w-50' type="submit" value="Submit">Book Now <i className="bi bi-car-front-fill mx-2"></i></button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};
const mapStateToProps=(state)=>{
  return{
      noOfCars:state.noOfCars
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
      bookCar:()=>dispatch(bookCar())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(CarDetails)

