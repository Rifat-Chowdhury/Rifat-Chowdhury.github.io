import React from 'react';
import { motion } from 'framer-motion';

interface SkillCardProps {
  name: string;
  icon: React.ReactNode;
  level: number;
  description: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, icon, level, description }) => {
  return (
    <motion.div 
      className="card p-6 flex flex-col items-center text-center"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-4 text-primary-600 dark:text-primary-400">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      
      <div className="w-full bg-gray-200 dark:bg-dark-600 rounded-full h-2.5 mb-4">
        <div 
          className="bg-primary-600 dark:bg-primary-500 h-2.5 rounded-full" 
          style={{ width: `${level}%` }}
        ></div>
      </div>
      
      <p className="text-gray-600 dark:text-gray-400 text-sm">{description}</p>
    </motion.div>
  );
};

export default SkillCard;