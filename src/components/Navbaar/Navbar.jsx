import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../Images/Afroj-Logo.png"
import {NavLink,Link} from "react-router-dom";
import FeatherIcon from 'feather-icons-react';
import AOS from "aos";
import "aos/dist/aos.css";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
      AOS.init();
      AOS.refresh();
  }, []);
  return (
        <nav className='navbar'>
             <NavLink className="nav-link " to="/"><div className="logo"><img src={logo} alt="" /></div></NavLink>
         <ul className={isMobile ? "nav-links nav-links-mobile":"nav-links"} onClick={()=> setIsMobile(false)}>
            
             <div class="dropdown">
                    <button class="dropbtn">
                        <NavLink className="nav-link " to="/" >Home</NavLink>
                    </button>
                    <div class="dropdown-content">
                        <Link to="/faqs">Compendious Med Works Pvt. Ltd.</Link>
                        <Link to="/blogs">Compendious Med WorksPvt. Ltd.</Link>
                        <Link to="/contactus">Compendious Med Works Pvt. Ltd.</Link>
                        <Link to="/login">Compendious Med Works Pvt. Ltd.</Link>
                    </div>
                </div>
             <Link to="/" className='faqs'><li>FAQs</li></Link>
             <Link to="/" className='blogs'><li>Blogs</li></Link>
             <Link to="/" className='contactus'><li>ContactUs</li></Link>
             <Link to="/" className='login'><li>Login</li></Link>
          </ul>
          <button className="mobile-menu-icon" onClick={ () => setIsMobile(!isMobile) }>{isMobile?<i><FeatherIcon icon="x" /></i>:<i><FeatherIcon icon="menu" /></i>} </button>
        </nav>
  )
}

export default Navbar