import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginStatus } from '../../App'

const Login = () => {
    const [details,setDetails]=useState({})
    const [login,setLogin]=useContext(loginStatus)
    const navigate=useNavigate()
    const ChangeData=(e)=>{
        setDetails({...details,[e.target.name]:e.target.value})
    }
    const SubmitHandler=(e)=>{
        e.preventDefault();
        const {userName,password}=details;
        if (userName==="karumuriakash888@gmail.com" && password==="Akash888"){
            setLogin(true)
            navigate("/Dashboard")
        }
        else{
            alert("Invalid Credentials")
        }
    }
  return (
    <div className='container p-5 mt-5'>
        <div className='shadow p-5 col-lg-6 mx-auto'>
            <form onSubmit={SubmitHandler}>
                <h2 className='text-center'>Admin Login</h2>
                <label>Username:</label>
                <input onChange={ChangeData} type="text" id="UserName" name="userName" placeholder="Username" className='from-control mb-3' required></input>
                <label>Password:</label>
                <input onChange={ChangeData}  type="password" id="password" name="password" placeholder="Enter Password" className='from-control mb-3' required></input>
                <button type="submit" className='form-control btn btn-primary'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Login