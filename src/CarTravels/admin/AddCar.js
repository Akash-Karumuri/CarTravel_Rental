import axios from 'axios'
import React, { useState } from 'react'

const AddCar = () => {
   const [name,setName]=useState("")
   const [type,setType]=useState("")
   const [imageUrl,setImageUrl]=useState("")
   const [seatingCapacity,setSeatingCapacity]=useState("")
   const [features,setFeatures]=useState("")
   const [pricePerDay,setPricePerPrice]=useState("")
   const AddNewCar=(e)=>{
    e.preventDefault();
    axios.post(`http://localhost:4000/Cars` ,{name,type,imageUrl,seatingCapacity,features,pricePerDay})
    .then((res) => {
      alert("Shirt Added Successfully")
      setName("")
      setType("")
      setImageUrl("") 
      setSeatingCapacity("")
      setFeatures("")
      setPricePerPrice("")
    })
    .catch((err)=>console.log(err))
   }
  return (
    <div className='container col-lg-6 mx-auto shadow p-5 m-5'>
      <h2 className='text-center'>Add New Car</h2>
      <form onSubmit={AddNewCar}>
        <label>Car Name:</label>
        <input value={name} onChange={(e)=>setName(e.target.value)} type="text" id="name" name="name" placeholder="Enter Car name" className='from-control' required></input>
        <label>Car Type:</label>
        <input value={type} onChange={(e)=>setType(e.target.value)} type="text" id="type" name="type" placeholder="Enter Car Type" className='from-control' required></input>
        <label>Image URL:</label>
        <input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} type="text" id="image" name="image" placeholder="Enter Image URL" className='form-control' required />
        <label>Seating Capacity:</label>
        <input value={seatingCapacity} onChange={(e)=>setSeatingCapacity(e.target.value)} type="number" id="seatingCapacity" name="seatingCapacity" placeholder="Enter Seating Capacity" className='from-control' required></input>
        <label>Car Features:</label>
        <input value={features} onChange={(e)=>setFeatures(e.target.value)} type="text" id="features" name="features" placeholder="Enter Car Features" className='from-control' required></input>
        <label>Price per Day:</label>
        <input value={pricePerDay} onChange={(e)=>setPricePerPrice(e.target.value)} type="number" id="pricePerDay" name="pricePerDay" placeholder="Enter price per day" className='from-control' required></input>  
        <button type="submit">Submit</button>       
      </form>
    </div>
  )
}

export default AddCar