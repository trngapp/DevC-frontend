import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';

import SignUp from './components/SignUp';
import Footer from "./components/footer/footer.js"
import Nav from "./components/navbar/navbar"
import Home from "./components/home/home"

const App = () => {
  return (
    <>
    <div>
      <Nav/>
      <Routes>

        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/" element={<Home />} />




      </Routes>

    </div>

<Footer/>
</>
  );
};

export default App;
