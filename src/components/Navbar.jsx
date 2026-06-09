import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

const navLinks = [
  { href: '#charter',  label: 'Charter'   },
  { href: '#scope',    label: 'Scope'     },
  { href: '#schedule', label: 'Schedule'  },
  { href: '#ops',      label: 'Ops'       },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <a href="#" className="navbar__brand">🐍 Python Foundations</a>
        <ul className="navbar__links">
          {navLinks.map(l => (
            <li key={l.href}>
              <a href={l.href} className="navbar__link">{l.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
