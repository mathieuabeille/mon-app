import React,{Component, useEffect } from 'react';
import '../stylesheets/navbar.css';
import logo from '../assets/logo.png';



function NavBar() {


  const handleScroll = () => {
    if (window.scrollY > 350) {
      document.querySelector(".navigation").className = "navigation navigation-scrolled";
    } else {
      document.querySelector(".navigation").className = "navigation";
    }
  };

  window.addEventListener("scroll", handleScroll);

  return(
    <div className="navigation" >
      Napoleon    <img
        src={logo}
        className='logo'
        alt='Logo Napoleon Agency'
      />    Agency
    </div>
    )
  };

export default NavBar;
