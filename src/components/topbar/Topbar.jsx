import React from 'react'
import './topbar.scss'
import {Mail, Person} from '@material-ui/icons'

const Topbar = ({openMenu, setOpenMenu}) => {

  return (
    <div className={'topbar ' + (openMenu && 'active') }>
        <div className='wrapper'>
          <div className='left'>
            <a href='#intro' className='logo'>genius.</a>
            <div className='itemContainer'>
              <Person className='icons' />
              <span>+55 51 997193783</span>              
            </div>
            <div className='itemContainer'>
              <Mail className='icons' />
              <span>mauricio.oliveira8583@gmail.com</span>              
            </div>
          </div>
          <div className='right'>
            <div className="menu" onClick={() => setOpenMenu(!openMenu) }>
              <span className='line_1'></span>
              <span className='line_2'></span>
              <span className='line_3'></span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Topbar