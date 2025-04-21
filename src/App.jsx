import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Work from './components/Work'

const App = () => {
  return (
    <div className='bg-[#0c0e1e]'>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Work />
    </div>
  )
}

export default App
