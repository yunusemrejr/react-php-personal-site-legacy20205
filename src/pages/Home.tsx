import React, { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';
import { BiCode } from 'react-icons/bi';
import { FaXTwitter } from "react-icons/fa6";
import '../styles/Home.css';
import CodeAnimation from '../components/CodeAnimation';
import { GiLogicGateNxor } from "react-icons/gi";

const images = [
  '/selfie.jpg',
  '/selfie2.jpg',   
  '/selfie3.jpg',  
  '/selfie4.jpg', 
  '/selfie5.jpg', 
  '/selfie6.jpg', 
];

const Home: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    document.title = "Home | Yunus Emre Vurgun";
  }, []);

  return (
    <div className="home">
      <CodeAnimation />
      <section className="hero">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="profile-image-container"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <AnimatePresence mode='wait'>
              <motion.img 
                key={currentImageIndex}
                src={images[currentImageIndex]}
                alt={`Yunus Emre Vurgun ${currentImageIndex + 1}`}
                className="profile-image"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.2 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
       
          </motion.div>

          <motion.div
            className="title-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <TypeAnimation
              sequence={[
                 
                    "Welcome!",
                    1000,
                    "I'm Yunus Emre Vurgun",
                    1000,
                    "I'm a Developer",
                    1000,
                    "I'm a Programmer",
                    1000,
                    "Exploring IT, AI, Hardware, and Math",
                    1000,
                    "I'm a Problem Solver",
                    1000,
                    "Welcome to My Cyber World",
                    1000
                
                
              ]}
              wrapper="h1"
              speed={50}
              repeat={Infinity}
              className="hero-title"
              cursor={true}
            />
          </motion.div>
          
          <motion.p 
            className="subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <motion.span 
              className="highlight"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <BiCode className="icon-inline" /> Software Developer
            </motion.span>
            {' '}&{' '}
            <motion.span 
              className="highlight"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <GiLogicGateNxor className="icon-inline" /> CS Geek
            </motion.span>
          </motion.p>

          <motion.div 
            className="cta-buttons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <motion.a 
              href="https://yunusemrevurgun.com/projects" 
              className="cta-button primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="button-text">View My Work</span>
              <FiArrowRight className="button-icon" />
            </motion.a>
            <motion.a 
              href="https://yunusemrevurgun.com/contact" 
              className="cta-button secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="button-text">Get in Touch</span>
              <FiMail className="button-icon" />
            </motion.a>
          </motion.div>

          <motion.div 
            className="social-links-home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <motion.a 
              href="https://github.com/yunusemrejr" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -5, color: '#64ffda' }}
            >
              <FiGithub />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/yunus-emre-vurgun-49ba9a177/" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -5, color: '#64ffda' }}
            >
              <FiLinkedin />
            </motion.a>
            <motion.a 
              href="https://x.com/yunusemrevrgn" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -5, color: '#64ffda' }}
            >
              <FaXTwitter />
            </motion.a>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
