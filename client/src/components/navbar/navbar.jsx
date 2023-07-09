/* eslint-disable */
import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import MediaQuery from "react-responsive";
import { Drawer } from 'antd';
import Logo from "./symbol1.png"
import './navbar.css'
//import PersonIcon from '@mui/icons-material/Person';
//import HomeIcon from '@mui/icons-material/Home';
//import QuizIcon from '@mui/icons-material/Quiz';
//import InfoIcon from '@mui/icons-material/Info';
//import Tooltip from '@mui/material/Tooltip';

//import  "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {

    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    const [isOne,clickone]=useState(false);

    const [isTwo,clicktwo]=useState(false);


    const [isThree,clickthree]=useState(false);


    const [isFour,clickfour]=useState(false);

    return (
        <>
            <div className='nav-container' style={{borderBottom:"groove"}}>

                    <div className='logo'> <Link to='/'> <img src={Logo} alt="logo" style={{width:"200px",marginLeft:50}}></img></Link>  </div>

                    <MediaQuery query="(max-width: 650px)">
               {/*<Button type="primary" onClick={showDrawer} style={{margin:"30px"}}>
                    Menu
    </Button>*/}
              <div>  <MenuIcon style={{color:"black",marginRight:"35px"}} onClick={showDrawer}>

                </MenuIcon></div>
                <Drawer title="Menu" placement="left" width="250px" onClose={onClose} visible={visible}>
                    <ul>
                    <li> <Link to='/'>Home</Link> </li>
                            <li><Link to='/faq'> FAQ</Link> </li>
                            <li><Link to='/aboutus'> About us</Link> </li>
                            <li> <Link to='/profile'> Profile </Link></li>
                    </ul>
                </Drawer>
            </MediaQuery>
            <MediaQuery query="(min-width: 992px)">
              <div className='navigation'>
                        <ul>
                        {/*<Tooltip title="Home">*/}
                        <li> <Link  id="Item1" style={{borderBottom:isOne?"#89CFF0":"",fontFamily:"Inter,sans-serif",fontSize:"14px"}} to='/' ><strong>Home</strong></Link> </li>
                            <li><Link id="Item2" style={{borderBottom:isTwo?'#C81132':"",fontFamily:"Inter,sans-serif",fontSize:"14px"}} to='/faq'><strong>Faq</strong> </Link> </li>
                            <li><Link id="Item3" style={{borderBottom:isThree?'#C81132':"",fontFamily:"Inter,sans-serif",fontSize:"14px"}} to='/aboutus'> <strong>About-Us</strong></Link> </li>
                            <li> <Link id="Item5" style={{borderBottom:isFour?'#6495ED':"",fontFamily:"Inter,sans-serif",fontSize:"14px"}} to='/feedback'><strong>Feedback</strong></Link></li>
                            <li> <Link id="Item4" style={{borderBottom:isFour?'#C81132':"",fontFamily:"Inter,sans-serif",fontSize:"14px"}} to='/profile'><strong>Profile</strong></Link></li>

                        </ul>
                    </div>
                    </MediaQuery>




            </div>
        </>
    )
}

export default Navbar
