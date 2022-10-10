import { useState } from 'react'
import Topbar from './components/topbar/Topbar'
import Intro from './components/intro/Intro'
import Featured from './components/featured/Featured'
import Works from './components/works/Works'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Menu from './components/menu/Menu'
import './app.scss'

function App() {

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="App">
      <Topbar openMenu={openMenu} setOpenMenu={setOpenMenu}/>
      <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <div className='sections'>
        <Intro />
        <Featured />
        <Works />
        <Testimonials />
        <Contact />                                
      </div>
    </div>
  )
}


export default App
