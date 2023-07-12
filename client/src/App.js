/* eslint-disable */
import React,{useState,useEffect} from 'react';
import './App.css';
import { Route, Routes,useLocation } from 'react-router-dom';
import Apply from "./components/apply/apply1"
import Invalid from "./components/invalid/invalid"
import Admin from "./components/admin/admin"
import Footer from "./components/footer/footer2"
import Nav from "./components/navbar/navbar"
// eslint-disable-next-line
import Home from "./components/home/home"
import Home1 from "./components/home/home1"
//import Create from "./components/createform/create"
import Signin from "./components/signin/signin"
import Signup from "./components/signup/signup"
import Gmail from "./components/signup/gmailCheck.js/gmail.js"
import Createus from './components/createform/create';
import FAQ from './components/faq/faq';
import Aboutus from './components/aboutus/aboutus'
import Explore from "./components/ExploreMore/explore"
import AuthGuard from "./Guards/AuthGuard";
//import AfterLoginGuard from "./Guards/afterLogin";
import {AuthProvider} from "./context/AuthContext";
import Loading from "./components/loading.js"
import Profile from "./components/Profile/profile";
import {ApplyProvider} from "./context/ApplyContext";
import {ApplyContext} from "./context/ApplyContext";
import {InfoProvider} from "./components/createform/context.js"
import {ProfileProvider} from "./components/Profile/profContext.js";
import { Helmet, HelmetProvider } from "react-helmet-async";
import MobileNA from "./static/images/mobile.png";
import Feedback from "./Feedback/feedback.js";
// only one tab opener
import { withOneTabEnforcer } from "react-one-tab-enforcer"
const App = () => {
  const location =useLocation();
  const [isLoading,setLoading]=useState(true);
  const [showMobileWarning, setShowMobileWarning] = useState(false)
   useEffect(()=>{
     if(window.innerWidth <= 600)
     {
      setShowMobileWarning(true);

     }
    setTimeout(()=>{
      setLoading(false);
    },3000)
   /* document.addEventListener('contextmenu', handleContextMenu);
    return () => {

      document.removeEventListener('contextmenu', handleContextMenu);
    };*/


   })
   const handleContextMenu = (event) => {
    event.preventDefault();
  };
   //const {from,to} = React.useContext(ApplyContext);
  return (
    <>
    { showMobileWarning ? <center><div><img src={MobileNA} style={{width:"100%",height:"100%"}}/></div></center> :
    <>
    <HelmetProvider>
    <Helmet>
  <title>Create+Collaborate</title>
</Helmet>
<Helmet>
<meta
  name="description"
  content="Learn design and code by building real apps with React and Swift. Complete courses about UI design, web and iOS development using Figma, CSS, React Hooks and SwiftUI."
/>
</Helmet>
    </HelmetProvider>
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
          <Route exact path="/profile" element={<Profile/>}/>
          <Route exact path="/feedback" element={<Feedback/>}/>
          </Route>
         {/* <Route element={<AfterLoginGuard/>}></Route>*/}
          <Route exact path="/signin" element={<Signin />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/gmailcheck" element={<Gmail/>}/>

          <Route  path="*" element={<Invalid />} />
        </Routes>

      </div>
      {location.pathname !== '/signin' && location.pathname !=='/signup' ? <Footer sx={{position:"absolute"}} /> : null}
      </ProfileProvider>
      </InfoProvider>
      </ApplyProvider>
      </AuthProvider>
      }
</>
    }
    </>
  );
};

export default withOneTabEnforcer({appName: "devcera"}) (App);
