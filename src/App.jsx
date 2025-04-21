import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'

const App = () => {
  return (
    <div className='bg-[#0c0e1e]'>
      <Navbar />
      <Hero />
      <About />
    </div>
  )
}

export default App
