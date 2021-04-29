import React,{Component, useEffect } from 'react';
import '../stylesheets/navbar.css';




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
        src="https://www.flaticon.com/svg/vstatic/svg/1/1438.svg?token=exp=1619723703~hmac=e8be23430f59ef71f0e80fa2309dd926"
        className='logo'
        alt='Logo Napoleon Agency'
      />    Agency
    </div>
    )
  };




export default NavBar;
