import React from 'react';
import { motion } from 'motion/react';

const Companies = () => {
  const companies = [
    "Uber Eats", "Twitch", "Twitter", "Tesla", "Spotify", "Snapchat", "Slack", "Samsung", "Salesforce"
  ];

  // Duplicate the companies list for seamless scrolling
  const companiesList = [...companies, ...companies];

  return (
    <div className="text-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Companies I've Worked With</h2>
        
        {/* First Scrolling Row */}
        <div className="overflow-hidden relative w-full">
          <motion.div 
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="whitespace-nowrap flex space-x-10">
            {companiesList.map((company, index) => (
              <div
                key={index}
                className="text-lg bg-gray-800 px-6 py-3 rounded-full inline-block"
              >
                {company}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Second Scrolling Row (Reverse Direction) */}
        <div className="overflow-hidden relative w-full mt-5">
          <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="whitespace-nowrap flex space-x-10">
            {companiesList.map((company, index) => (
              <div
                key={index}
                className="text-lg bg-gray-800 px-6 py-3 rounded-full inline-block"
              >
                {company}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Companies;