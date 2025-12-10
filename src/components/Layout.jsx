import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'

const Layout = () => {
  return (
    <div>
        <Navbar/>
  <Home/>
  <About/>
  <Projects/>
  <Contact/>
    </div>
  )
}

export default Layout