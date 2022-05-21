import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import MediaQuery from "react-responsive";
import { Drawer } from 'antd';
import Logo from "./symbol.png"
import './navbar.css'
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

    return (
        <>
            <div className='nav-container'>

                    <div className='logo'> <Link to='/'> <img src={Logo}  style={{width:"70px"}}></img></Link>  </div>

                    <MediaQuery query="(max-width: 650px)">
               {/*<Button type="primary" onClick={showDrawer} style={{margin:"30px"}}>
                    Menu
    </Button>*/}
              <div>  <MenuIcon style={{color:"white",marginRight:"35px"}} onClick={showDrawer}>

                </MenuIcon></div>
                <Drawer title="Menu" placement="right" width="250px" onClose={onClose} visible={visible}>
                    <ul>
                    <li> <Link to='/'>Home</Link> </li>
                            <li><Link to='/faq'> FAQ</Link> </li>
                            <li><Link to='/'> About us</Link> </li>
                            <li> <Link to='/profile'> Profile</Link></li>
                    </ul>
                </Drawer>
            </MediaQuery>
            <MediaQuery query="(min-width: 992px)">
              <div className='navigation'>
                        <ul>
                        <li> <Link to='/'>Home</Link> </li>
                            <li><Link to='/faq'> FAQ</Link> </li>
                            <li><Link to='/'> About us</Link> </li>
                            <li> <Link to='/profile'> Profile</Link></li>
                        </ul>
                    </div>
                    </MediaQuery>




            </div>
        </>
    )
}

export default Navbar
