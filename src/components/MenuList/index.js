import React from 'react';
import menu from '../../utils/menu';
import { Link } from "react-router-dom";

const MenuList = () => {
  const pizzaImage = "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80";
  
  return (
    <div className='columns is-multiline'>
      <div className='column is-4'>
        <div className='box menu-item-wrapper'>
          <div className='menu-item-content'>
            <div className='menu-item-description'>
              <Link to='build-pizza'>Build a Pizza</Link> 
              <p>$12.99</p>
            </div>
            <div className='menu-item-image'>
                <figure className='image is-3by4'>
                  <img src={pizzaImage} alt='pizza' />
                </figure>
              </div>
            </div>
          <div className='menu-item-footer'>
            <button className='button'><Link to='build-pizza'>Start Creation</Link></button>
          </div>
        </div>
      
      </div>
      {
        menu.map((item, index) => (
          <div className='column is-4' id={item.id} key={index}>
            <div className='box menu-item-wrapper'>
              <div className='menu-item-content'>
                <div className='menu-item-description'>
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                </div>
                <div className='menu-item-image'>
                  <figure className='image is-3by4'>
                    <img src={item.image} alt={`${item.type}: ${item.name}`} />
                  </figure>
                </div>
              </div>
              <div className='menu-item-footer'>
                <button className='button'>Add to Cart</button>
              </div>
          </div>
          </div>
        ))
      }
    </div>
  )
}

export default MenuList;