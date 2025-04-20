import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className='container mx-auto hidden md:flex justify-between items-center py-6'>
        <div className='text-xl lg:text-2xl font-bold flex items-center gap-1'>
            <span className='text-white'>SAKIB</span>
            <span className='text-purple-500'>MAHMODUL</span>
        </div>
        <div className='hidden md:flex items-center space-x-6 list-none lg:text-lg md:text-base text-white'>
            <ul>
                <li>About</li>
                <li>Services</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>
        </div>
        <a className="md:text-base lg:text-lg bg-purple-500 hover:bg-purple-400 text-white px-4 py-2 rounded-full" href="#">Download CV</a>
      </div>
    </div>
  )
}

export default Navbar
