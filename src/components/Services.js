import React, { Component } from 'react'

class Services extends  Component {
  render () {
    return (
      <div className='services'>
        <h1> Our Services </h1>
         <hr className='left'/>
         <span className='dot'></span>
         <hr className='right'/>
        <div className='block1'>
          <img className='block1-img' alt='' src={'https://cdn1.savepice.ru/uploads/2017/12/8/b4bf89de5d29b82f846f57e66374abb3-full.png'}/>
          <h3> html 5 &amp; css3 </h3>
          <p> Sed fermentum, ante vel sagittis adipiscing, purus nisi
          ultrices dolor, a aliquam nunc lacus in turpis. Nunc
          molestie nisi diam. Donec commodo quam sit amet
          mauris pellentesque, in commodo lorem venenatis. </p>
        </div>
        <div className='block2'>
          <img className='block2-img' alt='' src={'https://cdn1.savepice.ru/uploads/2017/12/8/34e901a8196f118e49f025db12704b07-full.png'}/>
          <h3> SEO Optimization </h3>
          <p> Sed fermentum, ante vel sagittis adipiscing, purus nisi
          ultrices dolor, a aliquam nunc lacus in turpis. Nunc
          molestie nisi diam. Donec commodo quam sit amet
          mauris pellentesque, in commodo lorem venenatis. </p>
        </div>
        <div className='block3'>
          <img className='block3-img' alt='' src={'https://cdn1.savepice.ru/uploads/2017/12/8/11b2b5b212295e45d2af1089044dcabf-full.png'}/>
          <h3> Graphic Design </h3>
          <p> Sed fermentum, ante vel sagittis adipiscing, purus nisi
          ultrices dolor, a aliquam nunc lacus in turpis. Nunc
          molestie nisi diam. Donec commodo quam sit amet
          mauris pellentesque, in commodo lorem venenatis. </p>
          </div>
      </div>
    )
  }
}

export default Services
