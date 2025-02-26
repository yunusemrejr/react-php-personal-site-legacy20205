import React from 'react';
import { FiGithub, FiLinkedin, FiTwitter, FiHeart } from 'react-icons/fi';
import '../styles/Footer.css';
import { FaXTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Connect</h3>
          <div className="social-links">
            <a href="https://github.com/yunusemrejr" target="_blank" rel="noopener noreferrer">
              <FiGithub className="icon" /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/yunus-emre-vurgun-49ba9a177/" target="_blank" rel="noopener noreferrer">
              <FiLinkedin className="icon" /> LinkedIn
            </a>
            <a href="https://x.com/yunusemrevrgn" target="_blank" rel="noopener noreferrer">
              <FaXTwitter className="icon" /> X/Twitter
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Made with <FiHeart className="heart-icon" /> by Yunus Emre Vurgun &copy; 2022 - {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
