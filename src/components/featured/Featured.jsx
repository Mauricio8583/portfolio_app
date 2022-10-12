import React, { useEffect, useState } from 'react'
import List from '../list/List'
import './featured.scss'
import {featuredPortfolio, pizzaApp, storeApp, eSportsApp} from '../../data'

const Featured = () => {

  const [selected, setSelected] = useState('featured');
  const [data, setData]= useState([]);

  const list = [{
    id: 'featured',
    text: 'Featured',
  },
  {
    id: 'store',
    text: 'Store App'
  },{
    id: 'e-sports',
    text: 'E-Sports',
  },{
    id: 'pizza',
    text: "Pizza Delivery App",
  }]

  useEffect(() => {
    switch (selected) {
      case 'featured':
        setData(featuredPortfolio);
        break;
      case 'pizza':
          setData(pizzaApp);
          break;
      case 'store':
            setData(storeApp);
            break;
      case 'e-sports':
              setData(eSportsApp);
              break;
      default:
             setData(featuredPortfolio);
             
            
    }
  },[selected])

  return (
    <div className='featured' id='featured'>
        <h1>Portfolio</h1>
        <ul>
          {list.map((item) => (
            <List key={item.id} text={item.text} active={selected === item.id} setSelected={setSelected} id={item.id}></List>
          ))}          
        </ul>
        <div className='appsContainer'>
          {data.map((items) => (
            <div className='appsContainerItem' key={items.id}>
            <img src={items.img} alt='' />
            <h3>{items.title}</h3>            
         </div>
          ))}          
        </div>
    </div>
  )
}

export default Featured