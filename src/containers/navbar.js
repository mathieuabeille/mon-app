import React,{Component, useEffect } from 'react';
import '../stylesheets/navbar.css';
import logo from '../assets/logo.png';
import { Link, NavLink } from 'react-router-dom';


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

      <div className="logo-text">
        <Link to={`/home`}>
        Napoleon    <img
          src={logo}
          className='logo'
          alt='Logo Napoleon Agency'
        />    Agency
        </Link>
      </div>
      <div>

        <NavLink to={`/growth`} className="link" activeClassName="active">
          La Growth Toolbox
        </NavLink>
      </div>
    </div>
    )
  };

export default NavBar;
