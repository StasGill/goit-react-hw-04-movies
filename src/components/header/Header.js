// import React, { Component } from 'react'
import style from './Header.module.css'
import {  NavLink, useLocation } from "react-router-dom";





const Header = () => {
    const location = useLocation();
    return (
        <header>
        <div className={style.navContainer}>
         <ul className={style.list}>
          <li>  <NavLink to={{pathname: "/", state: { from: location.pathname }, }} exact className={style.link} activeClassName={style.active}> Home </NavLink></li>
          <li>  <NavLink to='/movies' className={style.link} activeClassName={style.active}> Movies </NavLink></li>
          
        </ul>
       </div>
      </header>
    );
}

export default Header;