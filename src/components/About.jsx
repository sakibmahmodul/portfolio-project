import React from 'react'
import aboutImg from '../assets/aboutImg.png'
import {motion} from 'motion/react'
import { useInView } from 'react-intersection-observer'

function About() {
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger when 20% of the component is in view
    triggerOnce: true, // Only trigger once
  });
  return (
    <div className='text-white py-16'>
      <div className='container mx-auto px-4 text-center'>
        <motion.h2
        ref={ref}
        initial={{opacity: 0, y: 100}}
        animate={inView ? {opacity: 1, y: 0} : {}}
        transition={{delay: 0.3, duration: .5}}
        className='text-3xl md:text-4xl font-bold mb-8 underline'>About Me</motion.h2>
        <motion.p
        ref={ref}
        initial={{opacity: 0, y: 100}}
        animate={inView ? {opacity: 1, y: 0} : {}}
        transition={{delay: 0.5, duration: .5}}
        className='mb-12 text-gray-400 text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis ex ullam totam repellat non animi? Eligendi dolor modi voluptatem commodi necessitatibus eius, impedit, nulla cumque perspiciatis velit nam, voluptatum animi maiores! In fuga obcaecati mollitia illo doloremque nisi delectus sed porro, minus, vel aut corporis animi. Ea itaque laudantium vero.</motion.p>
        <div className='flex flex-col md:flex-row justify-center items-center gap-8'>
            <motion.div 
            ref={ref}
            initial={{opacity: 0, x: -100}}
            animate={inView ? {opacity: 1, x: 0} : {}}
            transition={{delay: 0.6, duration: .5}}
            className='mb-8 md:mb-0 md:mr-8 flex justify-center'>
                <img className='w-2/3 sm:w-1/2 md:w-8/12' src={aboutImg} alt="" />
            </motion.div>
            <motion.p
            ref={ref}
            initial={{opacity: 0, x: 100}}
            animate={inView ? {opacity: 1, x: 0} : {}}
            transition={{delay: 0.6, duration: .5}}
            className='md:w-1/2 text-gray-400 px-4 md:px-0 text-base sm:text-lg md:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui numquam exercitationem, soluta perspiciatis blanditiis nostrum voluptatibus dignissimos laborum esse ratione veritatis dolore incidunt magnam. Quas alias sequi cupiditate quis iusto?</motion.p>
        </div>
        <div className='flex flex-col sm:flex-row justify-around items-center gap-8 mt-12 space-y-6 sm:space-y-0'>
            <motion.div
            ref={ref}
            initial={{opacity: 0}}
            animate={inView ? {opacity: 1} : {}}
            transition={{delay: 1.2, duration: 0.3}}
            className='text-center'>
                <h3 className='text-3xl md:text-8xl font-bold md:my-6 text-purple-500'>3+</h3>
                <motion.p
                ref={ref}
                initial={{opacity: 0, y: 100}}
                animate={inView ? {opacity: 1, y:0} : {}}
                transition={{delay: 1.7, duration: 0.3}}
                className='text-sm sm:text-base text-gray-300'>Years of Design Experience</motion.p>
            </motion.div>
            <motion.div
            ref={ref}
            initial={{opacity: 0}}
            animate={inView ? {opacity: 1} : {}}
            transition={{delay: 1.4, duration: 0.3}}
            className='text-center'>
                <h3 className='text-3xl md:text-8xl font-bold md:my-6 text-purple-500'>20+</h3>
                <motion.p
                ref={ref}
                initial={{opacity: 0, y: 100}}
                animate={inView ? {opacity: 1, y:0} : {}}
                transition={{delay: 1.8, duration: 0.5}}
                className='text-sm sm:text-base text-gray-300'>Overall Global Customers</motion.p>
            </motion.div>
            <motion.div
            ref={ref}
            initial={{opacity: 0}}
            animate={inView ? {opacity: 1} : {}}
            transition={{delay: 1.6, duration: 0.3}}
            className='text-center'>
                <h3 className='text-3xl md:text-8xl font-bold md:my-6 text-purple-500'>30+</h3>
                <motion.p
                ref={ref}
                initial={{opacity: 0, y: 100}}
                animate={inView ? {opacity: 1, y:0} : {}}
                transition={{delay: 1.9, duration: 0.5}}
                className='text-sm sm:text-base text-gray-300'>Projects have been made</motion.p>
            </motion.div>
        </div>
      </div>
    </div>
  )
}

export default About
