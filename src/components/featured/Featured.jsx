import React from 'react'
import './featured.scss'

const Featured = () => {
  return (
    <div className='featured' id='featured'>
        <h1>Portfolio</h1>
        <ul>
          <li className='active'>Featured</li>
          <li>Store App</li>
          <li>E-Sports</li>
          <li>Restaurant App</li>
        </ul>
        <div className='appsContainer'>
          <div className='appsContainerItem'>
             <img src='../../images/site_1.png' alt='' />
             <h3>Pizza Delivery App</h3>            
          </div>
          <div className='appsContainerItem'>
             <img src='../../images/site_1.png' alt='' />
             <h3>Pizza Delivery App</h3>            
          </div>
          <div className='appsContainerItem'>
             <img src='../../images/site_1.png' alt='' />
             <h3>Pizza Delivery App</h3>            
          </div>
          
        </div>
    </div>
  )
}

export default Featured