import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollTop';
import Home from './Home';
import About from './About';
import Services from './Services';
import Cars from './Cars';
import Contact from './Contact';
import NoPage from './NoPage';
import Login from './admin/Login';
import Dashboard from './admin/Dashboard';
import CarDetails from './CarDetails';
import ViewService from './admin/ViewService';
import ViewCars from './admin/ViewCars';
import CustomerDetails from './admin/CustomerDetails';

const Routing = () => {
  return (
    <>
    <ScrollToTop />
    <Routes>
      <Route path='/' Component={Home} />
      <Route path='/about' Component={About} />
      <Route path='/services' Component={Services} />
      <Route path='/cars' Component={Cars} />
      <Route path='/CarDetails/:id' Component={CarDetails}/>
      <Route path='/contact' Component={Contact} />
      <Route path='/admin' Component={Login} />
      <Route path='*' Component={NoPage} />
      <Route path="/Dashboard" Component={Dashboard}/>
    </Routes>
    </>
  );
}

export default Routing;
