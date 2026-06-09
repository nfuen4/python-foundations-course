import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code, ArrowDown } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-container section">
      <div className="container">
        <div className="hero-content">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="hero-badge"
          >
            <Terminal size={16} />
            <span>Foundations Series</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="hero-title"
          >
            Python Foundations <br />
            <span className="text-gradient">Course Plan</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="hero-subtitle subtitle"
          >
            A comprehensive, adaptive methodology for mastering Python from the ground up.
            Built for modern engineering teams.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="hero-actions"
          >
            <a href="#methodology" className="btn btn-primary">
              <Code size={18} />
              Explore Syllabus
            </a>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="scroll-indicator"
        >
          <a href="#methodology">
            <ArrowDown size={24} className="bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
