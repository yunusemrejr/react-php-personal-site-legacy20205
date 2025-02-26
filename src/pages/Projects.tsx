import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { BiCode, BiServer, BiLineChart } from 'react-icons/bi';
import { FaTools, FaQuora, FaBlog, FaHeadphones } from 'react-icons/fa';
import { BsPencilSquare } from 'react-icons/bs';
import '../styles/Projects.css';

const Projects: React.FC = () => {
  useEffect(() => {
    document.title = "Projects | Yunus Emre Vurgun";
  }, []);

  const professionalProjects = [
    {
      title: "Industrial-related API Clients & Internal Scripting",
      description: "Focusing on industrial connectivity via solutions such as KepserverEx, where users can manage different industrial data provided by the data collectors. I also worked on building web-based apps to assist management and data control, and did many scripting tasks to use with industrial apps like HighByte Intelligence Hub",
      icon: <BiCode className="project-icon" />,
    },
    {
      title: "API server for testing data flows (industrial settings)",
      description: "An application where users generate time-based sessions for testing data flows via connecting to a generated endpoint in the API server, and can configure different parameters of it.",
      icon: <BiServer className="project-icon" />,
    },
    {
      title: "License Management System & Sales Analysis with Visualisations",
      description: "Designed for internal use, tracking company sales and customer information, meanwhile generating visuals and analysis for the given system. Old versions and similar projects can be found on my GitHub.",
      icon: <BiLineChart className="project-icon" />,
    }
  ];

  const personalProjects = [
    {
      title: "My Github Open-Source Repositories",
      description: "I have lots of open-source small-scale projects on my GitHub. Some may have different licenses.",
      icon: <FiGithub className="project-icon" />,
      link: "https://github.com/yunusemrejr"
    },
    {
      title: "Edit Virtuoso - Text-Editing HTML5 Tools",
      description: "Consists of various web apps for better text-editing and manipulation right in the browser.",
      icon: <BsPencilSquare className="project-icon" />,
      link: "https://editvirtuoso.com/"
    },
    {
      title: "Quiz Boys - Online Quizzes",
      description: "Consists of various quizzes right in the browser.",
      icon: <FaQuora className="project-icon" />,
      link: "https://quizboys.com/"
    },
    {
      title: "Panoptic Pen - A Web Ecosystem",
      description: "Consists of various applications, content, and tools. For example you may use HTML5 generators for text writing analysis, web tools for pinging servers, downloadable code manager or URL analysis tools, read tons of generated topic oriented text content, search things, interact, and many more.",
      icon: <FaTools className="project-icon" />,
      link: "https://panopticpen.space/"
    },
    {
      title: "Rabbit hole 42 - An Early Web Lore / Topics Blog",
      description: "Consists of various content regarding early web days events and interesting stories (stories are Gen-AI assisted).",
      icon: <FaBlog className="project-icon" />,
      link: "https://rabbithole42.blog/"
    },
    {
      title: "Tapas.ink",
      description: "lots of stuff...",
      icon: <FiExternalLink className="project-icon" />,
      link: "https://tapas.ink/"
    },
    {
      title: "HeadsetHub.org",
      description: "Discover amazing headphones!",
      icon: <FaHeadphones className="project-icon" />,
      link: "https://headsethub.org/"
    }
  ];

  return (
    <div className="projects-container">
      <motion.div 
        className="projects-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Projects
        </motion.h1>

        <section className="projects-section">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Major Professional Solo Projects
          </motion.h2>
          <div className="projects-grid">
            {professionalProjects.map((project, index) => (
              <motion.div
                key={index}
                className="project-card professional"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                {project.icon}
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="projects-section">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Major Personal Solo Projects
          </motion.h2>
          <div className="projects-grid">
            {personalProjects.map((project, index) => (
              <motion.div
                key={index}
                className="project-card personal"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
              >
                {project.icon}
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    View Project <FiExternalLink />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default Projects;
