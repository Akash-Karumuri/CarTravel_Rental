import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewCars = () => {
    const [car,setCar]=useState([])
    const [name,setName]=useState("")
    const [type,setType]=useState("")
    const [imageUrl, setImageUrl] = useState('');
    const [seatingCapacity,setSeatingCapacity]=useState("")
    const [features,setFeatures]=useState("")
    const [pricePerDay,setPricePerPrice]=useState("")
    const [id,setId]=useState("")

    // Reading data
     useEffect(()=>{
      axios.get(`http://localhost:4000/Cars`)
      .then((res)=>setCar(res.data))
      .catch((err)=>console.log(err))
     }) 

    //  Deleting a car
     const deleteCar = (id) => {
        axios.delete(`http://localhost:4000/Cars/${id}`)
            .then(() => {alert("Car deleted")
            })
            .catch((err) => console.log(err));
    };

    // Getting one record of Car
    const getOneRecord =(id)=>{
        axios.get(`http://localhost:4000/Cars/${id}`)
        .then((res)=>{
            setName(res.data.name)
            setType(res.data.type)
            setImageUrl(res.data.imageUrl);
            setSeatingCapacity(res.data.seatingCapacity)
            setFeatures(res.data.features)
            setPricePerPrice(res.data.pricePerDay)
            setId(res.data.id)
        })
        .catch((err)=> console.log(err))
    }

    // Updating Car
    const updateCar=(e)=>{
        e.preventDefault();
        axios.put(`http://localhost:4000/Cars/${id}`,{id,name,type,imageUrl,seatingCapacity,features,pricePerDay})
        .then(() => {
            alert('Car Updated');
            setName('');
            setType('');
            setImageUrl('');
            setSeatingCapacity('');
            setFeatures('');
            setPricePerPrice('');
        })
        .catch((err)=> console.log(err))
    }
  return (
    <section className='container view-cars p-5 mt-5'>
    <h2 className='text-center mb-5'>Available Cars</h2>
    <div className='row mt-5'>
        {car.map((car, index) => (
            <div data-aos="zoom-in" key={index} className='col-md-4 mb-3'>
                <div className='card shadow'>
                    <h4 className='px-3 py-2 m-0'><strong>{car.name}</strong></h4>
                    <img src={car.imageUrl} alt={car.name} className='img-fluid rounded w-100' />
                    <p className='px-3 pt-3 m-0'><strong>Type:</strong> {car.type}</p>
                    <p className='px-3 py-2 m-0'><strong>Seating Capacity:</strong> {car.seatingCapacity}</p>
                    <p className='px-3 py-2 m-0'><strong>Features:</strong> {car.features.toString()}</p>
                    <p className='px-3 py-2 m-0'><strong>Price Per Day:</strong> {car.pricePerDay} ₹</p>
                    <div className='p-3 d-flex d-flex flex-row-reverse'>
                        <button onClick={() => getOneRecord(car.id)} data-bs-toggle="modal" data-bs-target="#updateCar" className='btn btn-primary'>Edit</button>
                        <button onClick={() => deleteCar(car.id)} className='btn btn-danger mx-3'>Delete</button>
                    </div>
                </div>
            </div>
        ))}
    </div>
    
    <div className="modal fade" id="updateCar" tabIndex="-1" data-bs-backdrop="static" data-bs-keyboard="false" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
        <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-md" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="modalTitleId">Update Car</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form onSubmit={updateCar}>
                        <label>Car Name:</label>
                        <input onChange={(e) => setName(e.target.value)} type="text" id="name" name="name" placeholder="Enter Car Name" value={name} className='form-control' required />
                        <label>Car Type:</label>
                        <input onChange={(e) => setType(e.target.value)} type="text" id="type" name="type" placeholder="Enter Car Type" value={type} className='form-control' required />
                        <label>Image URL:</label>
                        <input onChange={(e) => setImageUrl(e.target.value)} type="text" id="image" name="image" placeholder="Enter Image URL" value={imageUrl} className='form-control' required />
                        <label>Seating Capacity:</label>
                        <input onChange={(e) => setSeatingCapacity(e.target.value)} type="number" id="seatingCapacity" name="seatingCapacity" placeholder="Enter Seating Capacity" value={seatingCapacity} className='form-control' required />
                        <label>Car Features:</label>
                        <input onChange={(e) => setFeatures(e.target.value)} type="text" id="features" name="features" placeholder="Enter Car Features" value={features} className='form-control' required />
                        <label>Price Per Day:</label>
                        <input onChange={(e) => setPricePerPrice(e.target.value)} type="number" id="pricePerDay" name="pricePerDay" placeholder="Enter Price Per Day" value={pricePerDay} className='form-control' required />
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-success">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>

  )
}

export default ViewCars