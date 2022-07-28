import React from 'react';
import './style.css';

const MainNav = () => {

  return (
    <div className='main-nav-body'>
      <section className='home-link'>
        <a href='/'>Pizzathing Home</a>
      </section>
      <section className='user-links'>
        <a href='/cart'>Cart</a>
        <a>Help?</a>
      </section>
    </div>
  )
}


export default MainNav;