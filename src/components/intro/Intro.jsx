import { ArrowDownward } from '@material-ui/icons'
import React from 'react'
import './intro.scss'

const Intro = () => {
  return (
    <div className='intro' id='intro'>
        <div className='left'>
          <div className='imgContainer'>
            <img src='../../images/perfil.jpg' alt='Perfil' />
          </div>
        </div>
        <div className='right'>
          <div className='wrapper'>
            <h2>Desenvolvedor Web</h2>
            <h1>Mauricio Oliveira</h1>
            <h3>FullStack</h3>
          </div>
          <a href='#featured'>
            <img src='../../images/arrow_down.png' alt='' className='arrowDown' />
          </a>
        </div>
    </div>
  )
}

export default Intro