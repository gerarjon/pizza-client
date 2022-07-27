import React from 'react';
import './style.css';

const MainNav = () => {

  return (
    <div className='main-nav-body'>
      <section className='home-link'>
        <a>Pizzathing Home</a>
      </section>
      <section className='user-links'>
        <a>Cart</a>
        <a>Help?</a>
      </section>
    </div>
  )
}


export default MainNav;