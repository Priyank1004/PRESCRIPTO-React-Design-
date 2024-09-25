import React from "react";
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Doctors from './pages/Doctors';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import MyAppointments from './pages/MyAppointments';
import MyProfile from './pages/MyProfile';
import Apponitment from "./pages/Apponitment";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {

  return (
    <div className="mx-4 sm:mx-[10%]">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/doctors" element={<Doctors/>}></Route>
        <Route path="/doctors/:speciality" element={<Doctors/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/my-appointments" element={<MyAppointments/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/my-profile" element={<MyProfile/>}></Route>
        <Route path="/appointment/:docId" element={<Apponitment/>}></Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
