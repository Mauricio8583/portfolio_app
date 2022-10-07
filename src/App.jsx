import { useState } from 'react'
import Topbar from './components/topbar/Topbar'
import Intro from './components/intro/Intro'
import Featured from './components/featured/Featured'
import Works from './components/works/Works'
import Contact from './components/contact/Contact'
import './app.scss'

function App() {

  return (
    <div className="App">
      <Topbar />
      <div className='sections'>
        <Intro />
        <Featured />
        <Works />
        <Contact />                                
      </div>
    </div>
  )
}


export default App
