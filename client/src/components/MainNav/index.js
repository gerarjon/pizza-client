import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import './style.css';


const MainNav = ({isActive, isActiveHandle}) => {

  return (
    <nav className='navbar main-nav' role='navigation' aria-label='main-navigation'>
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          Pizzathing
        </Link>

        {/* navbar burger */}
        <div role="button" data-target="navMenu"  aria-label="menu" className={`navbar-burger ${isActive ? 'is-active' : ""}`} aria-expanded="false" onClick={isActiveHandle}>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </div>
      </div>

      <div className={`navbar-menu ${isActive ? 'is-active' : ""}`} id="navMenu">
        {/* Navbar start */}
        <div className="navbar-start">
          <NavLink className={({ isActive }) => "navbar-item" + (isActive ? " active" : "")} to="/">
            Home
          </NavLink>
          
        </div>

        {/* Navbar End */}
        <div className="navbar-end">
          <NavLink className={({ isActive }) => "navbar-item" + (isActive ? " active" : "")} to="/cart">
            Cart
          </NavLink>
          <NavLink className={({ isActive }) => "navbar-item" + (isActive ? " active" : "")} to="/user">
            User?
          </NavLink> 
        </div>
      </div>
    </nav>
  )
}


export default MainNav;