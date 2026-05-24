import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginStatus } from "../../App";
import { ADMIN_LOGIN } from "../../Services/apiRoutes/apiRoutes";
import axios from "axios";

const Login = () => {
  const [details, setDetails] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [login, setLogin] = useContext(loginStatus);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await axios.post(ADMIN_LOGIN(), details);
      localStorage.setItem("token", res.data.token);
      setLogin(true);
      navigate("/Dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Invalid username or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f5f6fa",
        padding: "1rem",
        fontFamily: "'Inter', system-ui, sans-serif",
      }}
    >
      <div
        style={{
          background: "#fff",
          border: "1px solid #e8eaf0",
          borderRadius: "16px",
          width: "100%",
          maxWidth: "380px",
          padding: "2rem",
        }}
      >
        {/* Brand */}
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div
            style={{
              width: "52px",
              height: "52px",
              borderRadius: "14px",
              background: "#1a56db",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 0.85rem",
            }}
          >
            <i
              className="bi bi-car-front-fill"
              style={{ color: "#fff", fontSize: "24px" }}
            />
          </div>
          <h1
            style={{
              fontSize: "19px",
              fontWeight: "700",
              color: "#111827",
              marginBottom: "4px",
            }}
          >
            AK Car Travels
          </h1>
          <p style={{ fontSize: "13px", color: "#9ca3af" }}>
            Sign in to your admin portal
          </p>
        </div>

        {/* Error */}
        {error && (
          <div
            style={{
              background: "#fef2f2",
              border: "1px solid #fecaca",
              color: "#dc2626",
              padding: "10px 14px",
              borderRadius: "8px",
              fontSize: "13px",
              fontWeight: "600",
              marginBottom: "1rem",
              display: "flex",
              alignItems: "center",
              gap: "7px",
            }}
          >
            <i className="bi bi-exclamation-circle" />
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "1rem" }}>
            <label
              style={{
                display: "block",
                fontSize: "12.5px",
                fontWeight: "600",
                color: "#374151",
                marginBottom: "5px",
              }}
            >
              Username
            </label>
            <input
              type="text"
              name="userName"
              placeholder="Enter username"
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "10px 12px",
                border: "1px solid #d1d5db",
                borderRadius: "8px",
                fontSize: "13.5px",
                color: "#111827",
                outline: "none",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#1a56db";
                e.target.style.boxShadow = "0 0 0 3px rgba(26,86,219,0.12)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#d1d5db";
                e.target.style.boxShadow = "none";
              }}
            />
          </div>

          <div style={{ marginBottom: "1.5rem" }}>
            <label
              style={{
                display: "block",
                fontSize: "12.5px",
                fontWeight: "600",
                color: "#374151",
                marginBottom: "5px",
              }}
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "10px 12px",
                border: "1px solid #d1d5db",
                borderRadius: "8px",
                fontSize: "13.5px",
                color: "#111827",
                outline: "none",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#1a56db";
                e.target.style.boxShadow = "0 0 0 3px rgba(26,86,219,0.12)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#d1d5db";
                e.target.style.boxShadow = "none";
              }}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "11px",
              background: loading ? "#93c5fd" : "#1a56db",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: "700",
              cursor: loading ? "not-allowed" : "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              transition: "background 0.15s",
            }}
          >
            {loading ? (
              <>
                <i
                  className="bi bi-arrow-repeat"
                  style={{ animation: "spin 1s linear infinite" }}
                />
                Signing in...
              </>
            ) : (
              <>
                <i className="bi bi-box-arrow-in-right" />
                Sign in
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
