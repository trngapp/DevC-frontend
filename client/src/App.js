import React,{useState,useEffect} from 'react';
import './App.css';
import { Route, Routes,useLocation } from 'react-router-dom';
import Apply from "./components/apply/apply"
import Admin from "./components/admin/admin"
import Footer from "./components/footer/footer2"
import Nav from "./components/navbar/navbar"
import Home from "./components/home/home"
//import Create from "./components/createform/create"
import Signin from "./components/signin/signin"
import Signup from "./components/signup/signup"
import Createus from './components/createform/createus';
import FAQ from './components/faq/faq';
import Aboutus from './components/aboutus/aboutus'
import Explore from "./components/ExploreMore/explore"
import AuthGuard from "./Guards/AuthGuard";
import {AuthProvider} from "./context/AuthContext";
import Loading from "./components/loading.js"
import Profile from "./components/Profile/profile";
const App = () => {
  const location =useLocation();
  const [isLoading,setLoading]=useState(true);
   useEffect(()=>{
     setTimeout(()=>{
       setLoading(false);
     },2000)
   })
  return (
    <>
    {isLoading==true?<Loading/> :
    <AuthProvider>
      <div>
      {location.pathname !== '/signin' && location.pathname !=='/signup' ? <Nav /> : null}


        <Routes>

 <Route element={<AuthGuard />}>
          <Route exact path="/" element={<Home />} />
         {/* <Route exact path="/create" element={<Create />} />*/}
          <Route exact path="/admin" element={<Admin />} />

          <Route exact path="/create" element={<Createus />} />
          <Route exact path="/apply"  element={<Apply />} />
          <Route exact path="/faq"   element={<FAQ />}/>
          <Route exact path="/aboutus" element={<Aboutus />}/>
          <Route exact path="/explore" element={<Explore />}/>
          </Route>
          <Route exact path="/profile" element={<Profile/>}/>
          <Route exact path="/signin" element={<Signin />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>

      </div>
      {location.pathname !== '/signin' && location.pathname !=='/signup' ? <Footer /> : null}

      </AuthProvider>
      }
</>
  );
};

export default App;