import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonSnowboarding } from '@fortawesome/free-solid-svg-icons'
import React from 'react';

function Title() {
  return (
    <div>
      <script src="https://kit.fontawesome.com/83f09b8128.js" crossOrigin="anonymous"></script>
      <header>
        <div className='icon-title'>
          <h1 id='main-title'>Let's go Snowboarding!</h1>
        </div>
        <nav className='navbar'>
          <ul className='nav-links'>
            <li className='nav-item'>
              <a href='#'>Home</a>
            </li>
            <li className='nav-item'>
              <a href='#'>Projects</a>
            </li>
            <li className='nav-item'>
              <a href='#'>Contact</a>
            </li>
            <li className='nav-item'>
              <a href='#'>Blog</a>
            </li>
          </ul>
        </nav>
      </header>
      <p id='subtitle'>
        This is a personal project to get information about snow conditions,
        weather and ski resorts around Alberta.
      </p>
      <div id="sbIcon">
      <FontAwesomeIcon icon={faPersonSnowboarding} size="3x" inverse spinPulse />
      </div>
    </div>
  )
}

export default Title