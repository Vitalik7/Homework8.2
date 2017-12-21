import React, { Component } from 'react'

class Blog extends  Component {
  render () {
    return (
      <div className='blog'>
        <h1>The Latest News</h1>
        <hr className='left'/>
        <span className='dot'></span>
        <hr className='right'/>
      </div>
    )
  }
}

export default Blog
