import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginStatus } from "../../App";
import { ADMIN_LOGIN } from "../../Services/apiRoutes/apiRoutes";
import axios from "axios";

const Login = () => {
  const [details, setDetails] = useState({});
  const [login, setLogin] = useContext(loginStatus);
  const navigate = useNavigate();
  const ChangeData = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };
  const SubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(ADMIN_LOGIN(), details);

      localStorage.setItem("token", res.data.token);

      setLogin(true);
      navigate("/Dashboard");
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="container p-5 mt-5">
      <div className="shadow p-5 col-lg-6 mx-auto">
        <form onSubmit={SubmitHandler}>
          <h2 className="text-center">Admin Login</h2>
          <label>Username:</label>
          <input
            onChange={ChangeData}
            type="text"
            id="UserName"
            name="userName"
            placeholder="Username"
            className="from-control mb-3"
            required
          ></input>
          <label>Password:</label>
          <input
            onChange={ChangeData}
            type="password"
            id="password"
            name="password"
            placeholder="Enter Password"
            className="from-control mb-3"
            required
          ></input>
          <button type="submit" className="form-control btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
