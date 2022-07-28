import React from 'react';
import { Link, Outlet, useLocation } from "react-router-dom";
import './style.css'

const Menu = () => {
  let location = useLocation();
  return (
    <section>
      <div className='container is-max-desktop'>
        <p className='title'>Menu</p>
        {location.pathname === '/menu' ? null : <Link to=''>Back</Link> }
        <Outlet />
      </div>
    
    </section>
  )
}

export default Menu;