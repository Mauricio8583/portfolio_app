import React, { useEffect, useState } from 'react'
import List from '../list/List'
import './featured.scss'
import {featuredPortfolio, pizzaApp, storeApp, eSportsApp} from '../../data'

const Featured = () => {

  const [selected, setSelected] = useState('featured');
  const [data, setData]= useState([]);
  const [openImage, setOpenImage] = useState(false);
  const [image, setImage] = useState("");

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
  },[selected]);

  const handleOpenImage = (e) => {
    setOpenImage(true);
    setImage(e.target.id)    
  }

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
            <img src={items.img} alt='' id={items.img} onClick={handleOpenImage} />
            <h3>{items.title}</h3>            
         </div>
         ))} 
              
        </div>
        <div className='imgOpen'>
          {openImage && <>
          <img src={image} alt='' />
          <span onClick={() => setOpenImage(false) }>X</span>
          </>
          }
         </div>   
    </div>
  )
}

export default Featured