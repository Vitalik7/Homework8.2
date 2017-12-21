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
                    <a href='/#' className='imagesPortfolio'>
                        <img src={[require('../images/portfolio1.jpg')]} alt=""/>
                        <p>Love Conquers All</p>
                        <a href='/#' className='favorites'></a>
                        <a href='/#' className='star'></a>
                    </a>
                    <a href='/#' className='imagesPortfolio'>
                        <img src={[require('../images/portfolio2.jpg')]} alt=""/>
                        <p>Love Conquers All</p>
                        <a href='/#' className='favorites'></a>
                        <a href='/#' className='star'></a>
                    </a>
                </div>
                <div className='secondRow'>
                    <a href='/#' className='imagesPortfolio'>
                        <img src={[require('../images/portfolio3.jpg')]} alt=""/>
                        <p>Love Conquers All</p>
                        <a href='/#' className='favorites'></a>
                        <a href='/#' className='star'></a>
                    </a>
                    <a href='/#' className='imagesPortfolio'>
                        <img src={[require('../images/portfolio4.jpg')]} alt=""/>
                        <p>Love Conquers All</p>
                        <a href='/#' className='favorites'></a>
                        <a href='/#' className='star'></a>
                    </a>
                    <a href='/#' className='imagesPortfolio'><img src={[require('../images/portfolio3.jpg')]} alt=""/><p>Love Conquers All</p>
                        <a href='/#' className='favorites'></a>
                        <a href='/#' className='star'></a>
                    </a>
                    <a href='/#'className='imagesPortfolio'>
                        <img src={[require('../images/portfolio5.jpg')]} alt=""/>
                        <p>Love Conquers All</p>
                        <a href='/#' className='favorites'></a>
                        <a href='/#' className='star'></a>
                    </a>
                </div>
            </div>
        )
    }
}

export default Portfolio
