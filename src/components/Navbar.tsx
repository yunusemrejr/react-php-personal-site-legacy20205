import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Navbar.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <motion.span
            whileHover={{ color: '#64ffda' }}
            transition={{ duration: 0.3 }}
          >
            Yunus Emre Vurgun
          </motion.span>
        </Link>

        {/* Hamburger Menu */}
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`hamburger ${isOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="nav-links-desktop">
          {['Home', 'About', 'Blog', 'Updates', 'Gallery', 'Projects'].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link 
                to={`https://yunusemrevurgun.com/${item.toLowerCase()}`} 
                className="nav-link"
              >
                <motion.span
                  whileHover={{ color: '#64ffda' }}
                  transition={{ duration: 0.3 }}
                >
                  {item}
                </motion.span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="nav-links-mobile"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.3 }}
            >
              {['Home', 'About', 'Blog', 'Updates', 'Gallery', 'Projects'].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="nav-link"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
