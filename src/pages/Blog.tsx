import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/shared-page.css';

const Blog: React.FC = () => {
  useEffect(() => {
    document.title = "Blog | Yunus Emre Vurgun";
  }, []);

  return (
    <div className="blog-container">
      <motion.div 
        className="blog-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Blog
        </motion.h1>
        <div className="placeholder-content">
          DYNAMIC_CONTENT
        </div>
      </motion.div>
    </div>
  );
};

export default Blog;
