import React, { useState } from 'react'
import './works.scss'

const Works = () => {

  const [currentSlider, setCurrentSlider] = useState(0);

  const data = [
    {
      id: 1,
      title: 'Pizza Delivery App',
      desc: 'Utilizando React, Next, MongoDB e CSS',
      img: '../../images/pizza_1.png'
    },
    {
      id: 2,
      title: 'E-Sports App',
      desc: 'Utilizando React, Nodejs, Tailwind CSS e Prisma',
      img: '../../images/e-sports_1.png'
    },
    {
      id: 3,
      title: 'Clothes Store App',
      desc: 'Utilizando React, Express, MongoDB e Styled Components',
      img: '../../images/store_1.png'
    }
  ]

  const handleSlider = (side) => {
    if(side === 'left') {
      setCurrentSlider(currentSlider > 0 ? currentSlider-1: 2);
    }
    if(side === 'right') {
      setCurrentSlider(currentSlider < 2 ? currentSlider+1 : 0);
    }
  }

  return (
    <div className='works' id='works'>
        <div className='slider' style={{transform: `translateX(-${currentSlider * 100}vw)`}}>
          {data.map((data) => (
            <div className='itemsContainer' key={data.id}>
            <div className='items'>
              <div className='left'>
                <div className='leftContainer'>
                  <div className='imgContainer'>
                    <img src='../../images/web.png' alt='' />
                  </div>
                  <h2>{data.title}</h2>
                  <p>{data.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className='right'>
                <img src={data.img} alt='' />
              </div>
            </div>
          </div>
        
          ))}
          </div>
        <img src='../../images/arrow_left.png' alt='' className='arrowLeft' onClick={() => handleSlider('left')} />
        <img src='../../images/arrow_right.png' alt='' className='arrowRight' onClick={() => handleSlider('right')} />
      
    </div>
  )
}

export default Works