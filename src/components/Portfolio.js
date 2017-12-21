import React, {Component} from 'react'

class Portfolio extends Component {
    render() {
        return (
            <div className='portfolio'>
                <h1>Our Portfolio</h1>
                <hr className='left'/>
                <span className='dot'></span>
                <hr className='right'/>
                <div className='firstRow'>
                    <a href='/#'><img src={[require('../images/portfolio1.jpg')]} alt=""/></a>
                    <a href='/#'><img src={[require('../images/portfolio2.jpg')]} alt=""/></a>
                </div>
                <div className='secondRow'>
                    <a href='/#'><img src={[require('../images/portfolio3.jpg')]} alt=""/></a>
                    <a href='/#'><img src={[require('../images/portfolio4.jpg')]} alt=""/></a>
                    <a href='/#'><img src={[require('../images/portfolio3.jpg')]} alt=""/></a>
                    <a href='/#'><img src={[require('../images/portfolio5.jpg')]} alt=""/></a>
                </div>
            </div>
        )
    }
}

export default Portfolio
