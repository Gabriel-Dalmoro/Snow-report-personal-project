import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Snowfall from 'react-snowfall'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <div style={{ height: 100%}}> */}
    <Snowfall snowflakeCount={500} wind={[0, 0]} radius={[0.5, 4]}/>
    {/* </div> */}
    <App />
  </React.StrictMode>
)
