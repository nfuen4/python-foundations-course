import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import './Hero.css';

const Hero = () => (
  <section className="hero">
    {/* Background python image with gradient overlay */}
    <div className="hero__bg-image">
      <img
        src="./python_bg.png"
        alt=""
        aria-hidden="true"
        loading="eager"
      />
    </div>

    <div className="container hero__inner" style={{ position: 'relative', zIndex: 2 }}>
      <motion.span
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="hero__eyebrow"
      >
        🐍 Python Foundations
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="hero__headline"
      >
        14-Day Learning<br />
        <span className="text-gradient">Max Sprint</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="hero__sub"
      >
        A structured, project-managed approach to mastering Python Foundations —
        built for the Product Analytics pivot.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="hero__cta-row"
      >
        <a href="#charter" className="hero__btn hero__btn--primary">
          View the Charter
        </a>
        <a href="#scope" className="hero__btn hero__btn--ghost">
          Explore Scope
        </a>
      </motion.div>

      {/* Stats strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="hero__stats"
      >
        {[
          { value: '14',  label: 'Day Sprint'         },
          { value: '7',   label: 'Core Concepts'      },
          { value: '1.5h', label: 'Daily Focus Block' },
          { value: 'L3',  label: "Bloom's Application" },
        ].map(({ value, label }) => (
          <div key={label} className="hero__stat">
            <span className="hero__stat-value">{value}</span>
            <span className="hero__stat-label">{label}</span>
          </div>
        ))}
      </motion.div>
    </div>

    <motion.a
      href="#charter"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2 }}
      className="hero__scroll-cue"
      style={{ position: 'relative', zIndex: 2 }}
    >
      <ArrowDown size={20} className="bounce" />
    </motion.a>
  </section>
);

export default Hero;
