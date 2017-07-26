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
        <a href="mailto:hello@creightonsoukup.com">contact</a>
        <a href={require('../assets/Creighton_Soukup_Resume.pdf')} download>download resume</a>
      </div>
      <div className="homepage-section social">
        <a href='https://github.com/creightonsoukup'><i className="fa fa-github-circle"></i></a>
        <a href='https://www.linkedin.com/in/creightonsoukup'><i className="fa fa-linkedin"></i></a>
        <a href='https://www.instagram.com/creightonsoukup/'><i className="fa fa-instagram-fa"></i></a>
        <a href='https://www.pinterest.com/creightonsoukup/'><i className="fa fa-pinterest"></i></a>
        <a href='https://medium.com/@creightonsoukup'><i className="fa fa-medium"></i></a>
      </div>
    </div>
  )
}

export default Homepage
