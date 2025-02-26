import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/shared-page.css';

const Updates: React.FC = () => {
  useEffect(() => {
    document.title = "Updates | Yunus Emre Vurgun";
  }, []);

  return (
    <div className="updates-container">
      <motion.div 
        className="updates-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Updates
        </motion.h1>
        <div className="placeholder-content">
          DYNAMIC_CONTENT
        </div>
      </motion.div>
    </div>
  );
};

export default Updates;
