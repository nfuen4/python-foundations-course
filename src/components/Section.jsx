import React from 'react';
import { motion } from 'framer-motion';
import './Section.css';

const Section = ({ id, title, subtitle, children, alternate }) => {
  return (
    <section id={id} className={`section ${alternate ? 'alternate-bg' : ''}`}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">{title}</h2>
          {subtitle && <p className="subtitle section-subtitle">{subtitle}</p>}
        </motion.div>
        
        <div className="section-content">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;
