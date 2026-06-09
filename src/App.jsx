import React from 'react';
import Hero from './components/Hero';
import Section from './components/Section';
import { BookOpen, Target, Calendar, Server, Users, BarChart3, AlertTriangle, MessageSquare, Briefcase, FileCheck, CheckSquare, ListTodo, Activity, Repeat } from 'lucide-react';
import { motion } from 'framer-motion';

function App() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="app">
      <Hero />

      <Section 
        id="vision" 
        title="Vision, Goal & Collaborators" 
        subtitle="Aligning the learning outcomes with the Product Analytics pivot."
      >
        <div className="grid-2-cols">
          <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass-panel card">
            <h3><Briefcase size={24} /> 1. Project Charter</h3>
            <p><strong>Python Foundations — 14-Day Learning Max Sprint</strong></p>
            <p>Close the Python fluency gap required for the Product Analytics pivot. Python literacy is the single highest-leverage technical investment, unlocking analytics engineering, data pipelines, and AI tools.</p>
          </motion.div>
          <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass-panel card">
            <h3><Users size={24} /> 2. Stakeholder Register</h3>
            <p><strong>Project Manager:</strong> Nevin (solo execution).</p>
            <p>Authorization approved to proceed with a hard 14-day boundary.</p>
          </motion.div>
          <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass-panel card">
            <h3><AlertTriangle size={24} /> 4. Risk Register</h3>
            <p>Staying out of trouble: how to not fail.</p>
            <ul>
              <li>Passive consumption substituting for active application</li>
              <li>Session fragmentation (splitting 1.5 hrs lowers retention)</li>
              <li>Skipping the Feynman test because it feels uncomfortable</li>
            </ul>
          </motion.div>
          <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass-panel card">
            <h3><MessageSquare size={24} /> 5. Communication Plan</h3>
            <p>Daily tracking and utilizing Claude as a Feynman test partner and disconfirmation engine.</p>
          </motion.div>
        </div>
      </Section>

      <Section 
        id="planning" 
        title="Planning It Out" 
        subtitle="A structured roadmap setting the scope and quality for success."
        alternate={true}
      >
        <div className="grid-2-cols">
          <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass-panel card">
            <h3><Target size={24} /> 3. Scope Statement</h3>
            <p><strong>In-Scope:</strong></p>
            <ul>
              <li>Variables, data types, memory model</li>
              <li>Conditionals, for/while loops</li>
              <li>Functions (pure vs side effects, scope)</li>
              <li>Data structures (list, dict, tuple, set) & Error handling</li>
            </ul>
            <p className="mt-2"><strong>Out-of-Scope:</strong> OOP, advanced File I/O, Web frameworks, third-party packages (pandas/requests deferred).</p>
          </motion.div>
          <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass-panel card">
            <h3><FileCheck size={24} /> 6. Quality Criteria</h3>
            <p>Demonstrate Application-level competency (Bloom's Level 3).</p>
            <ul>
              <li>Write working code without a template</li>
              <li>Diagnose broken scripts</li>
              <li>Explain every concept clearly without reference materials</li>
            </ul>
          </motion.div>
          <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass-panel card">
            <h3><Server size={24} /> 12. Resource Plan</h3>
            <p>Required resources to guarantee execution:</p>
            <ul>
              <li>1.5 hours of uninterrupted daily focus</li>
              <li>Local Python install or online REPL</li>
              <li>Access to Fundamentals, Understanding, and Applying docs</li>
            </ul>
          </motion.div>
        </div>
      </Section>

      <Section 
        id="schedule" 
        title="Manage the Schedule" 
        subtitle="Logistics and timeline for the 14-day sprint."
      >
        <div className="grid-2-cols">
          <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass-panel card">
            <h3><ListTodo size={24} /> 7. Product Backlog</h3>
            <p>Detailed breakdown of daily topics spanning variables to imports, ensuring all 7 foundational concepts are mastered within the 14 days.</p>
          </motion.div>
          <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass-panel card">
            <h3><Calendar size={24} /> 8. Sprint Plan — Session Structure</h3>
            <p>Rigorous 1.5 hour sessions optimized for deep work. No days off built into the plan. Every session must include active coding and testing.</p>
          </motion.div>
          <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass-panel card">
            <h3><BarChart3 size={24} /> 13. Max Progress Projection</h3>
            <p>Tracking daily velocity and milestones to ensure the target role pivot remains on schedule without burning out.</p>
          </motion.div>
        </div>
      </Section>

      <Section 
        id="ops" 
        title="Manage the Ops" 
        subtitle="Operationalizing the learning process."
        alternate={true}
      >
        <div className="grid-2-cols">
          <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass-panel card">
            <h3><Activity size={24} /> 9. Sprint Burndown Tracker</h3>
            <p>Visualizing progress through the 14 days, tracking completed topics vs remaining requirements.</p>
          </motion.div>
          <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass-panel card">
            <h3><CheckSquare size={24} /> 10. Definition of Done</h3>
            <p>Sprint-Level DOD:</p>
            <ul>
              <li>Pass the Feynman test for each concept</li>
              <li>Answer all priority learning questions</li>
              <li>Connect concepts to tech/music production equivalents</li>
              <li>Write a script combining 3+ concepts from scratch</li>
            </ul>
          </motion.div>
          <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass-panel card">
            <h3><Repeat size={24} /> 11. Retrospective Templates</h3>
            <p>If a day is missed or comprehension is lacking, the retrospective protocol triggers to determine recovery steps instead of abandoning the sprint.</p>
          </motion.div>
        </div>
      </Section>

      <footer style={{ textAlign: 'center', padding: '3rem', borderTop: '1px solid var(--surface-border)', color: 'var(--text-secondary)' }}>
        <p>© {new Date().getFullYear()} Python Foundations Course. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
