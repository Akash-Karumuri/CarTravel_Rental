import React, { useContext, useState } from 'react'
import AddService from './AddService'
import Welcome from './Welcome'
import ViewService from './ViewService';
import AddCar from './AddCar';
import ViewCars from './ViewCars';
import CustomerDetails from './CustomerDetails';
import { loginStatus } from '../../App';
import Login from './Login';

const Dashboard = () => {
    const [view,setView]=useState("");
    const [login,setLogin]=useContext(loginStatus)
    const DashboardView=()=>{
        if (view === "") {
            return <Welcome setView={setView} />;
        } 
        else if (view === "AddService") {
            return <AddService />;
        } else if (view === "ViewService") {
            return <ViewService />;
        } 
        else if (view === "AddCar") {
            return <AddCar />;
        } 
        else if (view === "ViewCars") {
            return <ViewCars />;
        } 
        else if (view === "CustomerDetails") {
            return <CustomerDetails />;
        } 
        else {
            return <h2 className='m-5'>Invalid View</h2>;
        }
    }
    

  if (login){
    return (
        <div className='container-fluid dashboard mt-5'>
            <div className='row'>
                <aside className='col-lg-2 pt-3 px-2 text-center'>
                    <div className='row'><h4 onClick={()=>setView("")} className='mb-3 text-bg-primary m-0 p-3'>Admin Dashboard</h4></div>
                    <button onClick={()=>setView("AddService")} >Add Service</button>
                    <button onClick={()=>setView("ViewService")} >View Services</button>
                    <button onClick={()=>setView("AddCar")} >Add Car</button>
                    <button onClick={()=>setView("ViewCars")} >View Cars</button>
                    <button onClick={()=>setView("CustomerDetails")} >View Customers</button>
                    <button onClick={()=>setLogin(false)} >Logout</button>
                </aside>
                <div className='col-lg-10'>
                    {DashboardView()}
                </div>
            </div>
        </div>
      )
  }else{
    return <Login />;
  }
}

export default Dashboard