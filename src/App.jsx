import React from 'react';
import './App.css';
import Home from './pages/Home';
import {Outlet} from 'react-router-dom';
import Footer from './pages/Footer';
import Navbar from './components/Navbar';


function App() {



  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
      
    </>
  )
}

export default App
