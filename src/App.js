import React, { Component } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

import './App.css'
import './style/Services.css'
import './style/Home.css'
import './style/Portfolio.css'
import './style/OurTeam.css'
import './style/Blog.css'
import './style/Contact.css'

import Services from './components/Services'
import Portfolio from './components/Portfolio'
import OurTeam from './components/OurTeam'
import Blog from './components/Blog'
import ContactUs from './components/ContactUs'

class App extends Component {

    render() {
        return (
            <div>
                <ScrollableAnchor id={'Home'}>
                    <div className='home'>
                        <header className='App'>
                            <h1 className='logo'><a href='#Home'>ProJex</a></h1>
                            <p className='logo-text'>One Page Business Theme</p>
                            <nav className='nav'>
                                <a className='nav-btn' href='#Home'>Home</a>
                                <a className='nav-btn' href='#Services'>Services</a>
                                <a className='nav-btn' href='#Portfolio'>Portfolio</a>
                                <a className='nav-btn' href='#OurTeam'>Our Team</a>
                                <a className='nav-btn' href='#Blog'>Blog</a>
                                <a className='nav-btn' href='#ContactUs'>Contact Us</a>
                            </nav>
                        </header>
                        <main className='main-content'>
                            <div className='content'>
                                <h2>One page</h2>
                                <h3>Is all that you need</h3>
                                <p>
                                    Suspendisse mi nisl, adipiscing sit amet tellus sed, auctor aliquet felis.
                                    Aenean neque elit, blandit quis tempor eu, feugiat rhoncus lectus.
                                    Quisque sit amet pretium risus.
                                </p>
                                <a className='main-btn' href='#OurTeam'>Our
                                    Team</a>
                                <a className='main-btn' href='#ContactUs'>Contact Us</a>
                            </div>
                            <img className='content-img' alt=''
                                 src={'https://cdn1.savepice.ru/uploads/2017/12/3/37bd28f8c3d92973272db00760966d03-full.png'}/>
                        </main>
                    </div>
                </ScrollableAnchor>
                <ScrollableAnchor id={'Services'}>
                    <Services/>
                </ScrollableAnchor>
                <ScrollableAnchor id={'Portfolio'}>
                    <Portfolio/>
                </ScrollableAnchor>
                <ScrollableAnchor id={'OurTeam'}>
                    <OurTeam/>
                </ScrollableAnchor>
                <ScrollableAnchor id={'Blog'}>
                    <Blog/>
                </ScrollableAnchor>
                <ScrollableAnchor id={'ContactUs'}>
                    <ContactUs/>
                </ScrollableAnchor>
                <p className='footer'><i> &#169; Copyright 2013 By Projex - All rights Reserved</i></p>
            </div>

        )
    }
}

export default App
