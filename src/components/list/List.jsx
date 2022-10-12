import React from 'react'
import './list.scss'

const List = ({text, active, setSelected, id}) => {
  return (
    <li className={active ? 'portfolioList active' : 'portfolioList'} onClick={() => setSelected(id)}>
        {text}
    </li>
  )
}

export default List