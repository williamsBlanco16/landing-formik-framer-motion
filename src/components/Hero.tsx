import { FC } from "react";
import { motion } from 'framer-motion';

interface HeroProps {
  description: string
}
export const Hero: FC<HeroProps> = ({description}) => {
  return (
    <motion.section 
      className="hero bg-gray-800 text-center pt-20 sm:px-4 lg:relative lg:px-0 mt-16" 
      aria-labelledby="hero-title" 
      initial={{ opacity: 0, y: -20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
    >
      <div className="hero-content max-w-3xl mx-auto">
        <h2 
          id="hero-title" 
          className="text-4xl font-bold text-white"
        >
          Domus TechFit
        </h2>
        <h3 
          className="mt-4 text-lg text-white mb-6 md:text-xl"
          aria-label="Description of the tool"
        >
          {description}
        </h3>
      </div>
    </motion.section>
  );
};
