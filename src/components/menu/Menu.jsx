import React from 'react'
import './menu.scss'

const Menu = ({openMenu, setOpenMenu}) => {
  return (
    <div className={'menuContainer ' + (openMenu && 'active')}>
        <ul>
            <li onClick={() => setOpenMenu(false)}>
                <a href='#intro'>Home</a>
            </li>
            <li onClick={() => setOpenMenu(false)}>
                <a href='#featured'>Portfolio</a>
            </li>
            <li onClick={() => setOpenMenu(false)}>
                <a href='#works'>Trabalhos</a>
            </li>
            <li onClick={() => setOpenMenu(false)}>
                <a href='#skills'>Skills</a>
            </li>
            <li onClick={() => setOpenMenu(false)}>
                <a href='#contact'>Contato</a>
            </li>
        </ul>
    </div>
  )
}

export default Menu