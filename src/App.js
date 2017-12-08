import React, { Component } from 'react';
import { HashRouter, Route, Link, NavLink, Switch, Redirect } from 'react-router-dom'
import scrollToComponent from 'react-scroll-to-component'
import './App.css';
import './style/Services.css';

import Scroll from 'react-scroll'
import {scroller} from 'react-scroll'

import Services from './components/Services'
import Portfolio from './components/Portfolio'
import OurTeam from './components/OurTeam'
import Blog from './components/Blog'
import ContactUs from './components/ContactUs'
import NotFound from './components/NotFound'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <header className='App'>
            <h1 className='logo'> ProJex   </h1>
            <p className='logo-text'> One Page Business Theme </p>
            <nav className='nav'>
              <NavLink className='nav-btn' activeClassName='active' to='/home'>Home</NavLink>
              <NavLink className='nav-btn' activeClassName='active' to='/services'>Services</NavLink>
              <NavLink className='nav-btn' activeClassName='active' to='/portfolio'>Portfolio</NavLink>
              <NavLink className='nav-btn' activeClassName='active' to='/our-team'>Our Team</NavLink>
              <NavLink className='nav-btn' activeClassName='active' to='/blog'>Blog</NavLink>
              <NavLink className='nav-btn' activeClassName='active' to='/contact-us'>Contact Us</NavLink>
            </nav>
          </header>
          <main className='main-content'>
             <img className='main-img' src={'http://i.aquarel-art.ru/u/94/d4675e8e0111e59f04d3413aabcfe8/-/Beiersdorf-Sotrudniki-9-Beiersdorf.png'}/>
             <div className='content'>
              <h2>One page </h2>
              <h3>Is all that you need</h3>  
              <p>
                Suspendisse mi nisl, adipiscing sit amet tellus sed, auctor aliquet felis.
                Aenean neque elit, blandit quis tempor eu, feugiat rhoncus lectus.
                Quisque sit amet pretium risus.
              </p>
              <NavLink className='main-btn' activeClassName='asset' exact to='/our-team'>Our Team</NavLink>
              <NavLink className='main-btn' activeClassName='asset' to='/contact-us'>Contact Us</NavLink>
             </div>
             <img className='content-img' src={'https://cdn1.savepice.ru/uploads/2017/12/3/37bd28f8c3d92973272db00760966d03-full.png'} />
          </main>
          <Services />
          <Portfolio />
          <OurTeam />
          <Blog />
          <ContactUs />
          <p className='footer'> <i> &#169; Copyright 2013 By Projex - All rights Reserved</i> </p>
        </div>
      </HashRouter>
    );
  }
}

export default App
