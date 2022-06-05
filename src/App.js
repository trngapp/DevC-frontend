import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Admin from "./components/admin/admin"
import Createus from "./components/createform/createus"
import Footer from "./components/footer/footer.js"
import Nav from "./components/navbar/navbar"
import Home from "./components/home/home"
import Create from "./components/createform/create"
import Signin from "./components/signin/signin"
import Signup from "./components/signup/signup"

const App = () => {
  return (
    <>
      <div>
        <Nav />
        <Routes>

          <Route exact path="/" element={<Home />} />
          <Route exact path="/create" element={<Create />} />
          <Route exact path="/form" element={<Createus/>} />
          <Route exact path="/admin" element={<Admin />} />
          <Route exact path="/sigin" element={<Signin />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>

      </div>

      <Footer />
    </>
  );
};

export default App;
