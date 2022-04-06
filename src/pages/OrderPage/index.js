import React from 'react';
import './style.css';

const OrderPage = () => {
  return (
    <main>
      <div className='container'>
        <div className='orderpage-wrapper'>
          <section className='orderpage-order-list'>
            <div className='orderpage-order-item'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, eaque voluptates rem labore beatae sed dignissimos illum! Ipsum nisi distinctio voluptatibus repellat commodi, modi obcaecati at. Et suscipit excepturi dignissimos.

              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, eaque voluptates rem labore beatae sed
            </div>
            <div className='orderpage-order-item'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, eaque voluptates rem labore beatae sed dignissimos illum! Ipsum nisi distinctio voluptatibus repellat commodi, modi obcaecati at. Et suscipit excepturi dignissimos.
            </div>
            <div className='orderpage-order-item'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, eaque voluptates rem labore beatae sed dignissimos illum!
            </div>
            <div className='orderpage-order-item'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, eaque voluptates rem labore beatae sed dignissimos illum! Ipsum nisi distinctio voluptatibus repellat commodi, modi obcaecati at. Et suscipit excepturi dignissimos.
            </div>
            <div className='orderpage-order-item'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, eaque voluptates rem labore beatae sed dignissimos illum! Ipsum nisi distinctio voluptatibus repellat commodi, modi obcaecati at. Et suscipit excepturi dignissimos.

              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, eaque voluptates rem labore beatae sed dignissimos illum! Ipsum nisi distinctio voluptatibus repellat commodi, modi obcaecati at. Et suscipit excepturi dignissimos.
            </div>
          </section>
          <section className='orderpage-button-wrapper'>
            <button className='button'>Bump</button>
            <button className='button'>◀</button>
            <button className='button'>▶</button>
            <button className='button'>History</button>
            <button className='button'>Unbump</button>
          </section>
        </div>
      </div> 
    </main>
  )
}

export default OrderPage;