import React from 'react'
import {motion} from 'motion/react'
import { useInView } from 'react-intersection-observer'

const Services = () => {
    const servicesData = [
        {
            title: "Web Development",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptatibus.",
            icon: "🌐"
        },
        {
            title: "Mobile Development",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptatibus.",
            icon: "📱"
        },
        {
            title: "UI/UX Design",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptatibus.",
            icon: "🎨"
        },
        {
            title: "SEO Optimization",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptatibus.",
            icon: "🔍"
        },
        {
            title: "Digital Marketing",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptatibus.",
            icon: "📈"
        },
        {
            title: "Content Writing",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptatibus.",
            icon: "✍️"
        }
    ]
    const { ref, inView } = useInView({
        threshold: 0.2, // Trigger when 20% of the component is in view
        triggerOnce: true, // Only trigger once
      });
  return (
    <div className='text-white py-16'>
      <motion.div
      ref={ref}
      initial={{opacity: 0, y: 50}}
      animate={inView ? {opacity: 1, y: 0} : {}}
      transition={{duration: .5}}
      className='container mx-auto px-4 text-center'>
        <h2 className='text-3xl md:text-4xl font-bold underline mb-8'>Services</h2>
        <p className='mb-12 text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, eveniet.</p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {servicesData.map((service, index) => (
                <motion.div
                ref={ref}
                initial={{opacity: 0, scale: 0.8}}
                animate={inView ? {opacity: 1, scale: 1} : {opacity: 0, scale: 0.8}}
                transition={{delay: index * 0.2, duration: .5}}
                key={index} className="bg-[#1c1a2b] rounded-lg p-6 text-center hover:shadow-lg hover:shadow-purple-500 transition duration-300">
                    <h3 className='text-purple-500 text-lg sm:text-xl lg:text-2xl font-semibold mb-4 mx-auto'>{service.icon} {service.title}</h3>
                    <p className='text-sm sm:text-base lg:text-lg text-gray-400'>{service.description}</p>
                </motion.div>
            ))}
        </div>
      </motion.div>
    </div>
  )
}

export default Services
