import React, {Component} from 'react'

class Portfolio extends Component {
    render() {
        return (
            <div className='portfolio'>
                <h1>Our Portfolio</h1>
                <hr className='left'/>
                <span className='dot'></span>
                <hr className='right'/>
                <ul className='firstRow'>
                    <li className='imagesPortfolio'>
                        <img src={[require('../images/portfolio1.jpg')]} alt=""/>
                        <p>Love Conquers All</p>
                        <a href='/#' className='favorites'>favorites</a>
                        <a href='/#' className='star'>star</a>
                    </li>
                    <li className='imagesPortfolio'>
                        <img src={[require('../images/portfolio2.jpg')]} alt=""/>
                        <p>Love Conquers All</p>
                        <a href='/#' className='favorites'>favorites</a>
                        <a href='/#' className='star'>star</a>
                    </li>
                </ul>
                <ul className='secondRow'>
                    <li className='imagesPortfolio'>
                        <img src={[require('../images/portfolio3.jpg')]} alt=""/>
                        <p>Love Conquers All</p>
                        <a href='/#' className='favorites'>favorites</a>
                        <a href='/#' className='star'>star</a>
                    </li>
                    <li className='imagesPortfolio'>
                        <img src={[require('../images/portfolio4.jpg')]} alt=""/>
                        <p>Love Conquers All</p>
                        <a href='/#' className='favorites'>favorites</a>
                        <a href='/#' className='star'>star</a>
                    </li>
                    <li className='imagesPortfolio'>
                        <img src={[require('../images/portfolio3.jpg')]} alt=""/>
                        <p>Love Conquers All</p>
                        <a href='/#' className='favorites'>favorites</a>
                        <a href='/#' className='star'>star</a>
                    </li>
                    <li className='imagesPortfolio'>
                        <img src={[require('../images/portfolio5.jpg')]} alt=""/>
                        <p>Love Conquers All</p>
                        <a href='/#' className='favorites'>favorites</a>
                        <a href='/#' className='star'>star</a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Portfolio
