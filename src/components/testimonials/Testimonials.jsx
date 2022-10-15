import React from 'react'
import './testimonials.scss'

const Testimonials = () => {

  const skillsData = [
    {
      id: 1,
      name: 'Nodejs',
      img: '../../images/nodejs.png',
      desc: 'Linguagem que possuo mais familiaridade ao trabalhar com Back-End',
      time: 'Conhecimentos nessa tecnologia desde 2020'
    },
    {
      id: 2,
      name: 'Reactjs',
      img: '../../images/reactjs.png',
      desc: 'Linguagem que possuo mais familiaridade ao trabalhar com Front-End',
      time: 'Conhecimentos nessa tecnologia desde 2020'
    },
    {
      id: 3,
      name: 'Javascript',
      img: '../../images/javascript.png',
      desc: 'Meu foco de carreira é no conhecimento do Javascript e do seu ecossistema',
      time: 'Conhecimentos nessa tecnologia desde 2014'
    },
    {
      id: 4,
      name: 'PHP',
      img: '../../images/php.png',
      desc: 'Possuo conhecimento no PHP convencional e também Orientado a Objeto',
      time: 'Conhecimentos nessa tecnologia desde 2014'
    },
    {
      id: 5,
      name: 'SQL',
      img: '../../images/sql.png',
      desc: 'Tecnologia que possuo mais familiaridade ao trabalhar com Banco de Dados Relacional',
      time: 'Conhecimentos nessa tecnologia desde 2014'
    },
    {
      id: 6,
      name: 'MongoDB',
      img: '../../images/mongoDB.png',
      desc: 'Tecnologia que possuo mais familiaridade ao trabalhar com Banco de Dados Não-Relacional',
      time: 'Conhecimentos nessa tecnologia desde 2021'
    },
  ]

  return (
    <div className='testimonials' id='skills'>
        <h1>Skills</h1>
        <div className='skillsContainer'>
          {skillsData.map((data) => (
            <div className='skillsCard' key={data.id}>
            <div className='top'>
              <img src={data.img} alt='' />
              <h2>{data.name}</h2>
            </div>
            <div className='center'>
              {data.desc}
            </div>
            <div className='bottom'>
              <h3>{data.time}</h3>
            </div>
          </div>
          ))}
        </div>
    </div>
  )
}

export default Testimonials