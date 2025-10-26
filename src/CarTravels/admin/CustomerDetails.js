import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Select from 'react-select/base'

const CustomerDetails = () => {
    const [users,setUser]=useState([])
    const [fname,setfName]=useState("")
    const [lname,setlName]=useState("")
    const [email,setEmail]=useState("")
    const [phone,setPhone]=useState("")
    const [service, setService] = useState("");
    const [car, setCar] = useState("");
    const [days, setDays] = useState(1);
    const [id,setId]=useState("")
    // reading data
    useEffect(() => {
        axios.get(`http://localhost:4000/CustomerData/`)
        .then((res)=>setUser(res.data))
        .catch((err)=>console.log(err))
    } )

    // deleting user
    const deleteUser = (id) => {
        axios.delete(`http://localhost:4000/CustomerData/${id}`)
            .then(() => {alert("user deleted")
            })
            .catch((err) => console.log(err));
    };
    // Getting one record of Service
    const getOneRecord = async (id) => {
        try {
            const res = await axios.get(`http://localhost:4000/CustomerData/${id}`);
            setfName(res.data.fname);
            setlName(res.data.lname);
            setEmail(res.data.email);
            setPhone(res.data.phone);
            setService(res.data.service);
            setCar(res.data.car);
            setDays(res.data.days);
            setId(res.data.id);
    
            // Open modal after data is set
            const modal = new window.bootstrap.Modal(document.getElementById('updateCustomerData'));
            modal.show();
        } catch (err) {
            console.log(err);
        }
    };
    // Updating Service
    const updateUserData=(e)=>{
        e.preventDefault();
        axios.put(`http://localhost:4000/CustomerData/${id}`,{id,fname,lname,email,phone,service,car,days})
        .then((res)=>alert("Details Updated"))
        .catch((err)=> console.log(err))
    }
    
  return (
    <div className='container p-5 view-customers-page'>
        <h2 className='text-center mb-3'>Customer Details</h2>
        <table className='table table-bordered table-striped'>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Service</th>
                    <th>Car</th>
                    <th>Days</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user,index)=>{
                    return(
                        <tr key={index}>
                            <td>{user.fname}</td>
                            <td>{user.lname}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.service}</td>
                            <td>{user.car}</td>
                            <td>{user.days}</td>
                            <td>
                                <button onClick={() => getOneRecord(user.id)} data-bs-toggle="modal" data-bs-target="#updateCustomerData" className='btn btn-primary me-3 mb-2'>Edit</button>
                                <button onClick={() => deleteUser(user.id)} className='btn btn-danger mb-2'>Delete</button>
                            </td>
                        </tr>
                        
                    )
                })}
            </tbody>
        </table>
        <div
            className="modal fade"
            id="updateCustomerData"
            tabindex="-1"
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
                            Update Customer Data
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">
                    <form onSubmit={updateUserData}>
                        <label>First Name:</label>
                        <input onChange={(e)=>setfName(e.target.value)} type="text" id="fname" name="fname" value={fname} placeholder="Enter your first name" className='form-control' required></input>
                        <label>Last Name: <span className='text-danger'>*</span></label>
                        <input onChange={(e)=>setlName(e.target.value)} type="text" id="lname" name="lname" value={lname} placeholder="Enter your last name" className='form-control' required></input>
                        <label>Email: <span className='text-danger'>*</span></label>
                        <input onChange={(e)=>setEmail(e.target.value)} type="email" id="email" name="email" value={email} placeholder="Enter your email" className='form-control' required></input>
                        <label>Phone Number: <span className='text-danger'>*</span></label>
                        <input onChange={(e)=>setPhone(e.target.value)} type="tel" id="phone" name="phone" value={phone} placeholder="Enter your phone number" className='form-control' required></input>
                        <label>Service:</label>
                        <input onChange={(e)=>setService(e.target.value)} type="text" id="service" name="service" value={service} placeholder="Service" className='form-control' required></input>
                        <label>Car:</label>
                        <input onChange={(e)=>setCar(e.target.value)} type="text" id="car" name="car" value={car} placeholder="Car" className='form-control' required></input> 

                        <label>Number of Days:</label>
                        <input onChange={(e) => setDays(e.target.value)} type="number" value={days} className='form-control' min="1" required />
                          <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            Close
                        </button>
                        <button type="submit">Submit</button>
                        </div>
                        </form>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default CustomerDetails