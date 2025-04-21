import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'

const App = () => {
  return (
    <div className='bg-[#0c0e1e]'>
      <Navbar />
      <Hero />
      <About />
      <Services />
    </div>
  )
}

export default App
