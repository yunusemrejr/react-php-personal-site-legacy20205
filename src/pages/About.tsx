import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import { FaXTwitter, FaMastodon, FaPodcast, FaYoutube,FaMusic } from 'react-icons/fa6';
import { FaArchive } from "react-icons/fa";

import { SiRumble } from 'react-icons/si';
import '../styles/About.css';

const About: React.FC = () => {
  useEffect(() => {
    document.title = "About | Yunus Emre Vurgun";
  }, []);

  const education = {
    university: [
      {
        degree: "Information Technology (IT) Bachelor's Degree",
        school: "Illinois Institute of Technology",
        location: "Online",
        period: "2023-present"
      },
      {
        degree: "Computer Programming A.S. Degree",
        school: "Beykoz University",
        location: "Istanbul",
        period: "2020-2023"
      },
      {
        degree: "Management Information Systems Bachelor's Degree",
        school: "Anadolu University",
        location: "Online",
        period: "2024-present"
      },
      {
        degree: "Bachelor of Arts - BA English Language Teaching",
        school: "Bahcesehir University",
        period: "2018-2020"
      },
      {
        degree: "Business Administration Program (English) Bachelor's Degree",
        school: "Anadolu University",
        location: "Online",
        period: "2019-2020"
      }
    ],
    courses: [
      "Algebra: Elementary to Advanced - Equations & Inequalities (Coursera) by John Hopkins University",
      "Technologies and Platforms for Artificial Intelligence (Politecnico di Milano)",
      "Introduction to Hardware and Operating Systems (Coursera) by IBM Skills Network",
      "Software Design as an Element of the Software Development Lifecycle (Coursera)",
      "Spanish A1.1 (Instituto Cervantes)",
      "Java Programming: Solving Problems with Software (Duke University)",
      "Programming Foundations With JavaScript CSS & HTML (Duke University)",
      "Data Science Math Skills (Duke University)",
      "IELTS Academic (Score: 7.5) (British Council)",
      "Mobile Computing and Cloud (Illinois Institute of Tech.)",
      "Computer Networking (Illinois Institute of Tech.)",
      "Computer and Peripheral Hardware (Illinois Institute of Tech.)",
      "Introduction to Generative AI (Google Cloud)",
      "AI Essentials (Intel)",
      "Computational Vision (University of Colorado Boulder)",
      "Network Support and Security (Cisco Networking Academy)"
    ]
  };

  return (
    <div className="about-container">
      <motion.div 
        className="about-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="about-header">
          <motion.img 
            src="/selfie.jpg"
            alt="Yunus Emre Vurgun"
            className="about-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            About Me
          </motion.h1>
        </div>

        <motion.div 
          className="about-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p>
            I am Yunus Emre Vurgun, a software developer building various applications in various technologies. 
            I create innovative solutions and explore new and old technologies. Has an interest in computer science, 
            hardware, and artificial intelligence.
          </p>
        </motion.div>

        <motion.div 
          className="education-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <h2>University Education</h2>
          <div className="education-list">
            {education.university.map((edu, index) => (
              <motion.div 
                key={index}
                className="education-item"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <h3>{edu.degree}</h3>
                <p>{edu.school}</p>
                {edu.location && <p className="location">{edu.location}</p>}
                <p className="period">{edu.period}</p>
              </motion.div>
            ))}
          </div>

          <h2>Course-based Education</h2>
          <div className="courses-list">
            {education.courses.map((course, index) => (
              <motion.div 
                key={index}
                className="course-item"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.3 + index * 0.05 }}
              >
                {course}
              </motion.div>
            ))}
          </div>

          <div className="additional-note">
            <p>* During the beginning of my journey (pre-university mostly), I have taken other courses and certificates 
            on various subjects, mostly software-related, consisting mostly of small Udemy courses, and similar quizzes. 
            They are plently in number, but not as much relevant for a professional setting.</p>
          </div>
        </motion.div>

        <motion.div 
          className="contact-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <h2>Contact & Social</h2>
          <p className="email">Email: yunus@yunusemrevurgun.com</p>
          
          <div className="social-links">
            <a href="https://linkedin.com/in/yunus-emre-vurgun-49ba9a177" target="_blank" rel="noopener noreferrer">
              <FiLinkedin /> LinkedIn
            </a>
            <a href="https://github.com/yunusemrejr" target="_blank" rel="noopener noreferrer">
              <FiGithub /> GitHub
            </a>
            <a href="https://x.com/yunusemrevrgn" target="_blank" rel="noopener noreferrer">
              <FaXTwitter /> X/Twitter
            </a>
            <a href="https://www.instagram.com/yunus_emrevurgun/" target="_blank" rel="noopener noreferrer">
              <FiInstagram /> Instagram
            </a>
            <a href="https://www.youtube.com/channel/UC1lBm9ipV1au7VIcbALV2HA" target="_blank" rel="noopener noreferrer">
              <FaYoutube /> YouTube
            </a>
            <a href="https://mastodon.social/@yunusemrevurgn" target="_blank" rel="noopener noreferrer">
              <FaMastodon /> Mastodon
            </a>
            <a href="https://rumble.com/user/yunusemrejr" target="_blank" rel="noopener noreferrer">
              <SiRumble /> Rumble
            </a>
            <a href="https://elroystultus.podbean.com/" target="_blank" rel="noopener noreferrer">
              <FaPodcast /> Podcast
            </a>
            <a href="https://yunusemrevurgun.com/social-other" target="_blank" rel="noopener noreferrer">
              <FaArchive /> Other
            </a>
            <a href="https://yunusemrevurgun.com/music" target="_blank" rel="noopener noreferrer">
              <FaMusic /> Music
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
