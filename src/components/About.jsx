import React from 'react';
import aboutImg from '../assets/aboutImg.png';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';

// Reusable StatisticCard Component
const StatisticCard = ({ value, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 0.3 }}
      className="text-center"
    >
      <h3 className="text-3xl md:text-8xl font-bold md:my-6 text-purple-500">{value}</h3>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: delay + 0.5, duration: 0.3 }}
        className="text-sm sm:text-base text-gray-300"
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

function About() {
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger when 20% of the component is in view
    triggerOnce: true, // Only trigger once
  });

  return (
    <div id='about' className="text-white py-16">
      <div className="container mx-auto px-4 text-center" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-8 underline"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mb-12 text-gray-400 text-center"
        >

          Hello! I'm Sakib Mahmodul, a passionate and detail-oriented web developer. I enjoy building clean, user-friendly websites and love transforming ideas into real-life digital experiences.

          My journey into web development started with curiosity and grew into a deep passion for learning new technologies. I specialize in front-end development using <strong>HTML, CSS, JavaScript</strong>, and modern frameworks like <strong>React.js and Next.js</strong>. I'm also comfortable working with <strong>MongoDB, Express.js</strong>, and building full-stack applications.

          I am continuously learning and improving my skills, building real-world projects, and exploring new tools in the ever-evolving tech world.
        </motion.p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mb-8 md:mb-0 md:mr-8 flex justify-center"
          >
            <img className="w-2/3 sm:w-1/2 md:w-8/12" src={aboutImg} alt="" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="md:w-1/2 text-gray-400 px-4 md:px-0 text-base sm:text-lg md:text-xl"
          >
            Whether it’s crafting a responsive landing page or developing a full-featured web app, I strive for performance, accessibility, and good design.
            🚀 Currently, I'm working on several personal projects and always looking for opportunities to grow and collaborate!

            ---          </motion.p>
        </div>
        <div className="flex flex-col sm:flex-row justify-around items-center gap-8 mt-12 space-y-6 sm:space-y-0">
          {/* Using the reusable StatisticCard component */}
          <StatisticCard
            value="3+"
            description="Years of Design Experience"
            delay={1.2}
          />
          <StatisticCard
            value="20+"
            description="Overall Global Customers"
            delay={1.4}
          />
          <StatisticCard
            value="30+"
            description="Projects have been made"
            delay={1.6}
          />
        </div>
      </div>
    </div>
  );
}

export default About;