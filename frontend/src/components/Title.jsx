import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonSnowboarding } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
// import useLocalStorage from 'use-local-storage'


function Title() {
//   const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
// const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

// const switchTheme = () => {
//   const newTheme = theme === 'light' ? 'dark' : 'light'
//   setTheme(newTheme)
// }

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
          {/* <button onClick={switchTheme}>
            Switch to {theme === 'light' ? 'Dark' : 'Light'} theme
          </button> */}
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