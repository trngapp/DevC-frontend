import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Apply from "./components/apply/apply"
import Admin from "./components/admin/admin"
import Footer from "./components/footer/footer.js"
import Nav from "./components/navbar/navbar"
import Home from "./components/home/home"
import Create from "./components/createform/create"
import Signin from "./components/signin/signin"
import Signup from "./components/signup/signup"
import Createus from './components/createform/createus';
import FAQ from './components/faq/faq';
import Aboutus from './components/aboutus/aboutus'

const App = () => {
  return (
    <>
      <div>
        <Nav />
        <Routes>

          <Route exact path="/" element={<Home />} />
         {/* <Route exact path="/create" element={<Create />} />*/}
          <Route exact path="/admin" element={<Admin />} />
          <Route exact path="/signin" element={<Signin />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/create" element={<Createus />} />
          <Route exact path="/apply"  element={<Apply />} />
          <Route exact path="/faq"   element={<FAQ />}/>
          <Route exact path="/aboutus" element={<Aboutus />}/>

        </Routes>

      </div>

      <Footer />
    </>
  );
};

export default App;
