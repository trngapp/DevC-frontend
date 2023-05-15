import React,{useState,useEffect} from 'react';
import './App.css';
import { Route, Routes,useLocation } from 'react-router-dom';
import Apply from "./components/apply/apply1"
import Invalid from "./components/invalid/invalid"
import Admin from "./components/admin/admin"
import Footer from "./components/footer/footer2"
import Nav from "./components/navbar/navbar"
import Home from "./components/home/home"
import Home1 from "./components/home/home1"
//import Create from "./components/createform/create"
import Signin from "./components/signin/signin"
import Signup from "./components/signup/signup"
import Createus from './components/createform/create';
import FAQ from './components/faq/faq';
import Aboutus from './components/aboutus/aboutus'
import Explore from "./components/ExploreMore/explore"
import AuthGuard from "./Guards/AuthGuard";
import {AuthProvider} from "./context/AuthContext";
import Loading from "./components/loading.js"
import Profile from "./components/Profile/profile";
import {ApplyProvider} from "./context/ApplyContext";
import {ApplyContext} from "./context/ApplyContext";
import {InfoProvider} from "./components/createform/context.js"
import {ProfileProvider} from "./components/Profile/profContext.js";
const App = () => {
  const location =useLocation();
  const [isLoading,setLoading]=useState(true);
   useEffect(()=>{
     setTimeout(()=>{
       setLoading(false);
     },2000)
   })
   //const {from,to} = React.useContext(ApplyContext);
  return (
    <>
    {isLoading===true?<Loading/> :
    <AuthProvider>
      <ApplyProvider>
      <InfoProvider>
        <ProfileProvider>
      <div>
      {location.pathname !== '/signin' && location.pathname !=='/signup' ? <Nav /> : null}


        <Routes>

 <Route element={<AuthGuard />}>
          <Route exact path="/" element={<Home1 />} />
         {/* <Route exact path="/create" element={<Create />} />*/}
          <Route exact path="/admin" element={<Admin />} />

          <Route exact path="/create" element={<Createus />} />

          <Route exact path="/apply"  element={<Apply /*To="tarang@gmail.com"  From="taran@gmail.com"*/ />} />
          <Route exact path="/faq"   element={<FAQ />}/>
          <Route exact path="/aboutus" element={<Aboutus />}/>
          <Route exact path="/explore" element={<Explore />}/>
          </Route>
          <Route exact path="/profile" element={<Profile/>}/>
          <Route exact path="/signin" element={<Signin />} />
          <Route exact path="/signup" element={<Signup />} />

          <Route  path="*" element={<Invalid />} />
        </Routes>

      </div>
      {location.pathname !== '/signin' && location.pathname !=='/signup' ? <Footer /> : null}
      </ProfileProvider>
      </InfoProvider>
      </ApplyProvider>
      </AuthProvider>
      }
</>
  );
};

export default App;
