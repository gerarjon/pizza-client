import React from 'react';
import { Link } from 'react-router-dom'
import './style.css';

const SideNav = () => {

  return (
    <nav id="sideNav" className='side-links'>
      <Link to='/menu'>Menu</Link>
      <Link to='/maketable'>Make Table</Link>
    </nav>
  )
}


export default SideNav;