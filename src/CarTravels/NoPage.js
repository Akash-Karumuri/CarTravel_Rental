import React from 'react'
import ErrorPage from './assets/404-error-page.gif'
import { NavLink } from 'react-router-dom'
const NoPage = () => {
  return (
    <div className='container-fluid position-relative p-0 m-0'>
        <img className='w-100' src={ErrorPage}></img>
        <NavLink to="/" className='btn btn-primary position-absolute bottom-50 start-50 translate-middle mb-3'> Back to Home <i className="bi bi-chevron-right mx-2"></i></NavLink>
    </div>
  )
}

export default NoPage