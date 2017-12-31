import React, { Component } from 'react'
import { HashRouter} from 'react-router-dom'

import './App.css'
import './style/Services.css'
import './style/Home.css'
import './style/Portfolio.css'
import './style/OurTeam.css'
import './style/Blog.css'
import './style/Contact.css'

// import scrollToComponent from 'react-scroll-to-component'
// import Scroll from 'react-scroll'
// import {scroller} from 'react-scroll'

import Home from './components/Home'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import OurTeam from './components/OurTeam'
import Blog from './components/Blog'
import ContactUs from './components/ContactUs'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Home />
          <Services />
          <Portfolio />
          <OurTeam />
          <Blog />
          <ContactUs />
          <p className='footer'> <i> &#169; Copyright 2013 By Projex - All rights Reserved</i> </p>
        </div>
      </HashRouter>
    )
  }
}

export default App
