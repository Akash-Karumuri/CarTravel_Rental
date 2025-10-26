import React, { useEffect } from 'react'
import Logo from './assets/Logo.png'
import { NavLink, useLocation } from 'react-router-dom'

const Header = () => {
    const location = useLocation();
    useEffect(() => {
      const navbarToggler = document.querySelector('.navbar-collapse');
      if (navbarToggler && navbarToggler.classList.contains('show')) {
        navbarToggler.classList.remove('show');
      }
    }, [location]);
  return (
    <header className='px-3 container-fluid fixed-top mb-5'>
        <nav
            className="navbar navbar-expand-md py-2"
        >
            <div className="container center d-flex align-items-center justify-content-between">
                <NavLink className="navbar-brand py-0" to="/"><img  src={Logo}/></NavLink>
                <button
                    className="navbar-toggler d-lg-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsibleNavId"
                    aria-controls="collapsibleNavId"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active py-0" to="/" aria-current="page">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link py-0" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link py-0" to="/services">Services</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link py-0" to="/cars">Cars</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link py-0" to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        

    </header>
  )
}

export default Header