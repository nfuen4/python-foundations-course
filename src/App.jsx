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
          <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass-panel card" style={{ gridColumn: '1 / -1' }}>
            <h3><Briefcase size={24} /> 1. Project Charter: 14-Day Learning Max Sprint</h3>
            <p><strong>Purpose / Business Case:</strong></p>
            <p>Close the Python fluency gap required for the Product Analytics pivot. Python literacy is the single highest-leverage technical investment available given the current career trajectory — it unlocks analytics engineering, data pipeline work, and AI tool building, all of which are core to the target role family. This sprint establishes the foundational mental models that all future Python work will build on.</p>
            
            <p className="mt-2"><strong>Primary Deliverable:</strong></p>
            <p>Demonstrated Bloom's Level 3 (Application) competency across all seven Python foundation topics — meaning the ability to write working code from a requirement without a template, diagnose broken scripts, and explain every concept clearly without reference materials.</p>
          </motion.div>

          <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass-panel card">
            <h3><Users size={24} /> 2. Stakeholder Register</h3>
            <p><strong>Project Manager:</strong> Nevin (solo execution).</p>
            <p><strong>Authorization:</strong> Approved to proceed with a hard 14-day boundary. No open-ended study periods.</p>
          </motion.div>

          <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass-panel card">
            <h3><AlertTriangle size={24} /> 4. Risk Register (Staying out of trouble)</h3>
            <ul>
              <li><strong>Risk:</strong> Passive consumption substituting for active application (most common learning failure mode).</li>
              <li><strong>Risk:</strong> Session fragmentation — 1.5 hours split into 3 × 30-minute windows produces significantly lower retention than one uninterrupted block.</li>
              <li><strong>Risk:</strong> Skipping the Feynman test because it feels uncomfortable.</li>
              <li><strong>Risk:</strong> Overconfidence at Understanding level — moving to application before comprehension is solid.</li>
            </ul>
          </motion.div>

          <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass-panel card" style={{ gridColumn: '1 / -1' }}>
            <h3><MessageSquare size={24} /> 5. Communication Plan</h3>
            <p><strong>Daily Standup Format (3 minutes, written):</strong></p>
            <ul>
              <li><strong>Yesterday:</strong> What concept did I cover and can I state the core insight in one sentence?</li>
              <li><strong>Today:</strong> What specific question am I pursuing?</li>
              <li><strong>Blockers:</strong> What is currently unclear or stuck?</li>
            </ul>
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
          <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass-panel card" style={{ gridColumn: '1 / -1' }}>
            <h3><Target size={24} /> 3. Scope Statement</h3>
            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
              <div style={{ flex: 1, minWidth: '300px' }}>
                <p><strong>Scope — In:</strong></p>
                <ul>
                  <li>Variables, data types, and the Python memory model</li>
                  <li>Conditionals and short-circuit evaluation</li>
                  <li>For loops and while loops including iterator internals</li>
                  <li>Functions — pure vs. side effects, composition, closures, scope</li>
                  <li>Data structures — list, dict, tuple, set including Big O implications</li>
                  <li>Error handling — targeted exception catching and defensive programming</li>
                  <li>Imports and the module system</li>
                </ul>
              </div>
              <div style={{ flex: 1, minWidth: '300px' }}>
                <p><strong>Scope — Out:</strong></p>
                <ul>
                  <li>Object-oriented programming (classes, inheritance)</li>
                  <li>File I/O beyond basics</li>
                  <li>External packages beyond standard library (pandas, requests deferred to Sprint 2)</li>
                  <li>Web frameworks, APIs, deployment</li>
                  <li>Intermediate Python patterns (decorators, generators, context managers)</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass-panel card">
            <h3><FileCheck size={24} /> 6. Quality Criteria</h3>
            <p><strong>Success Criteria (measurable):</strong></p>
            <ul>
              <li>Can solve all seven Application-level problems from the Applying Level doc without opening the guide.</li>
              <li>Can explain each concept in plain language to a non-programmer (Feynman test passed).</li>
              <li>Has answered all nine priority questions from the Learning Max question set in writing.</li>
              <li>Has connected each concept to at least one marketing tech or music production equivalent.</li>
              <li>Has written at least one working Python script from scratch that combines three or more concepts.</li>
            </ul>
          </motion.div>

          <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass-panel card">
            <h3><Server size={24} /> 12. Resource Plan</h3>
            <p><strong>Assumptions:</strong></p>
            <ul>
              <li>1.5 hours of uninterrupted daily focus is achievable.</li>
              <li>Access to Python environment (local install or online REPL such as repl.it).</li>
              <li>Claude available as Feynman test partner and disconfirmation engine.</li>
              <li>Reference materials (Fundamentals doc, Understanding doc, Applying doc) accessible.</li>
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
            <p>Detailed daily curriculum designed to systematically build from basic syntax to memory models, covering the 7 core pillars over 14 days without skipping dependencies.</p>
          </motion.div>
          <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass-panel card">
            <h3><Calendar size={24} /> 8. Sprint Plan — Session Structure</h3>
            <p>Each session is strictly 1.5 hours. Designed to prevent cognitive fatigue while maximizing the 'Application' phase of learning instead of passive reading.</p>
          </motion.div>
          <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass-panel card" style={{ gridColumn: '1 / -1' }}>
            <h3><BarChart3 size={24} /> 13. Max Progress Projection</h3>
            <p>Tracking the trajectory toward full foundational competence within the rigid 14-day constraint. If a day is missed, no days are added; the scope of the remaining days must absorb the impact.</p>
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
            <p>Visualizing progress through the 14 days, tracking completed topics vs remaining requirements to ensure no scrambling at the end.</p>
          </motion.div>
          <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass-panel card">
            <h3><CheckSquare size={24} /> 10. Definition of Done</h3>
            <p><strong>Sprint-Level DOD:</strong></p>
            <ul>
              <li>Pass the Feynman test for each concept</li>
              <li>Answer all priority learning questions</li>
              <li>Connect concepts to tech/music production equivalents</li>
              <li>Write a script combining 3+ concepts from scratch</li>
            </ul>
          </motion.div>
          <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass-panel card" style={{ gridColumn: '1 / -1' }}>
            <h3><Repeat size={24} /> 11. Retrospective Templates</h3>
            <p>If a day is missed or comprehension is lacking, the retrospective protocol triggers to determine recovery steps instead of abandoning the sprint. Evaluates root causes like 'Was the session fragmented?' or 'Did I stay too long in passive reading?'</p>
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
