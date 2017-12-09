import React, { Component } from 'react'
import { NavLink} from 'react-router-dom'

class Home extends  Component {
  render () {
    return (
      <div className='home'>
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
           <img className='main-img' alt='' src={'http://i.aquarel-art.ru/u/94/d4675e8e0111e59f04d3413aabcfe8/-/Beiersdorf-Sotrudniki-9-Beiersdorf.png'}/>
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
           <img className='content-img' alt='' src={'https://cdn1.savepice.ru/uploads/2017/12/3/37bd28f8c3d92973272db00760966d03-full.png'} />
        </main>
      </div>
    )
  }
}

export default Home
