import { useState } from 'react'
import './App.css'
import Body from './components/Body.jsx'
import Carousel from './components/Carousel.jsx'
import Head from './components/Head.jsx'
import Title from './components/Title.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Head />
    <Title />
    <Carousel />
    <Body />
    </>
  )
}

export default App