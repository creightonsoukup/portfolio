import React from 'react';

const Homepage = (props) => {
  return (
    <div className='homepage'>
      <img className='homepage-section logo' src={require('../assets/mobile-c.png')}/>
      <h1 className='homepage-section'>{'Creighton Soukup'}</h1>
      <ul className='homepage-section'>
        <li>{'fullstack development'}</li>
        <li>{'growth hacking'}</li>
        <li>{'brand development'}</li>
      </ul>
      <h3 className='homepage-section'>{'coming soon'}</h3>
      <div className='homepage-section'>
        <a>contact</a>
        <a>download resume</a>
      </div>
      <div className="homepage-section social">
        <i className="fa fa-github-circle"></i>
        <i className="fa fa-linkedin"></i>
        <i className="fa fa-instagram-fa"></i>
        <i className="fa fa-pinterest"></i>
        <i className="fa fa-medium"></i>
      </div>
    </div>
  )
}

export default Homepage
