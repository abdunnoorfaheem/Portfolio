import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import FooterBottom from "./components/FooterBottom";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <FooterBottom />
    </>
  );
}

export default App;
