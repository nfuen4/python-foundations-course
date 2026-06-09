import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { motion } from 'framer-motion';
import {
  Briefcase, AlertTriangle, MessageSquare,
  Target, CheckSquare, Server,
  ListTodo, Calendar, BarChart3,
  Activity, ClipboardCheck, RefreshCw,
  Code, Cpu, Layers, GitBranch, Package, Shield, Database,
  XCircle, Code2,
} from 'lucide-react';

/* ─── Animation helper ─────────────────────── */
const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, delay, ease: [0.4, 0, 0.2, 1] } },
});

/* ─── Card wrappers ────────────────────────── */
const Card = ({ children, delay = 0, className = '' }) => (
  <motion.div
    variants={fadeUp(delay)}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-80px' }}
    className={`card ${className}`}
  >
    {children}
  </motion.div>
);

/* ─── Section wrapper ──────────────────────── */
const Sect = ({ id, tag, title, subtitle, children, divided = false }) => (
  <section id={id} className="section">
    <div className="container">
      <div className="section-header">
        {tag && <span className="section-tag">{tag}</span>}
        <h2 className="section-title">{title}</h2>
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
      </div>
      {children}
    </div>
    {divided && <hr className="section-divider" />}
  </section>
);

/* ══════════════════════════════════════════════
   APP
══════════════════════════════════════════════ */
export default function App() {
  return (
    <>
      <Navbar />
      <Hero />

      {/* ── 1. CHARTER ────────────────────── */}
      <Sect
        id="charter"
        tag="Foundation"
        title="Project Charter"
        subtitle="Defining the goal, deliverable, and guardrails of the 14-day sprint."
      >
        {/* Row 1 — 3-col overview stats */}
        <div className="grid-3" style={{ marginBottom: '1.5rem' }}>
          <Card delay={0}>
            <span className="card__label">Sprint Name</span>
            <h3 className="card__title">14-Day Learning Max Sprint</h3>
            <p className="card__body">A hard-boundary, output-focused sprint with a rigid 14-day limit and no open-ended study periods.</p>
          </Card>

          <Card delay={0.05}>
            <span className="card__label">Project Manager</span>
            <h3 className="card__title">Nevin — Solo Execution</h3>
            <p className="card__body">Self-directed with daily written standups. Authorization approved. Start date: May 18, 2026.</p>
          </Card>

          <Card delay={0.1}>
            <span className="card__label">Target Competency</span>
            <h3 className="card__title">Bloom's Level 3 — Application</h3>
            <p className="card__body">Write working code from a requirement, diagnose broken scripts, and explain every concept clearly — without reference materials.</p>
          </Card>
        </div>

        {/* Row 2 — split: Business Case + Stakeholder detail */}
        <div className="grid-split">
          <Card delay={0.15}>
            <div className="card__icon"><Briefcase size={20} /></div>
            <span className="card__label">Business Case</span>
            <h3 className="card__title">Why Python, Why Now</h3>
            <p className="card__body">Close the Python fluency gap required for the Product Analytics pivot. Python literacy is the single highest-leverage technical investment available — it unlocks analytics engineering, data pipeline work, and AI tool building, all of which are core to the target role family.</p>
            <p className="card__body">This sprint establishes the foundational mental models that all future Python work will build on.</p>
          </Card>

          <Card delay={0.2}>
            <div className="card__icon"><MessageSquare size={20} /></div>
            <span className="card__label">Daily Communication</span>
            <h3 className="card__title">3-Minute Written Standup</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '0.5rem' }}>
              {[
                { key: 'Yesterday', val: 'What concept did I cover and can I state the core insight in one sentence?' },
                { key: 'Today',     val: 'What specific question am I pursuing?' },
                { key: 'Blockers',  val: 'What is currently unclear or stuck?' },
              ].map(({ key, val }) => (
                <div key={key} className="standup-item">
                  <div className="standup-item__dot" />
                  <div>
                    <div className="standup-item__key">{key}</div>
                    <div className="standup-item__val">{val}</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Row 3 — Risk Register full-width 3-col */}
        <div className="grid-3" style={{ marginTop: '1.5rem' }}>
          {[
            { title: 'Passive Consumption', body: 'Reading without coding is the most common failure mode. Every session must include active problem solving — no passive watching or skimming.' },
            { title: 'Session Fragmentation', body: '1.5 hrs split into 3 × 30-min windows produces significantly lower retention than one uninterrupted block. Protect the full block.' },
            { title: 'Premature Advancement', body: 'Moving to Application level before Understanding is solid creates compounding gaps. Feynman test gates progression — skipping it is not allowed.' },
          ].map(({ title, body }, i) => (
            <Card key={title} delay={i * 0.05}>
              <div className="card__icon" style={{ background: 'rgba(251,113,133,0.1)', color: '#FB7185' }}>
                <AlertTriangle size={20} />
              </div>
              <span className="card__label">Risk</span>
              <h3 className="card__title">{title}</h3>
              <p className="card__body">{body}</p>
            </Card>
          ))}
        </div>
      </Sect>

      {/* ── 2. SCOPE ──────────────────────── */}
      <Sect
        id="scope"
        tag="Planning"
        title="Scope & Quality Standards"
        subtitle="What's in, what's out, and what 'done' actually means."
        divided
      >
        {/* Scope In/Out */}
        <div className="grid-2" style={{ marginBottom: '1.5rem' }}>
          <Card delay={0}>
            <div className="card__icon"><Target size={20} /></div>
            <span className="card__label">In Scope — Sprint 1</span>
            <h3 className="card__title">Seven Core Pillars</h3>
            <ul className="card__list">
              {[
                { icon: Cpu,       label: 'Variables, data types & the Python memory model' },
                { icon: GitBranch, label: 'Conditionals & short-circuit evaluation' },
                { icon: RefreshCw, label: 'For loops & while loops including iterator internals' },
                { icon: Code,      label: 'Functions — pure vs. side effects, composition, closures, scope' },
                { icon: Database,  label: 'Data structures — list, dict, tuple, set & Big O implications' },
                { icon: Shield,    label: 'Error handling — targeted exception catching & defensive programming' },
                { icon: Package,   label: 'Imports & the module system' },
              ].map(({ label }) => (
                <li key={label}>{label}</li>
              ))}
            </ul>
          </Card>

          <Card delay={0.05}>
            <div className="card__icon" style={{ background: 'rgba(251,113,133,0.1)', color: '#FB7185' }}>
              <XCircle size={20} />
            </div>
            <span className="card__label">Out of Scope — Deferred to Sprint 2</span>
            <h3 className="card__title">Not This Sprint</h3>
            <ul className="card__list">
              {[
                'Object-oriented programming (classes, inheritance)',
                'File I/O beyond basics',
                'External packages — pandas, requests deferred',
                'Web frameworks, APIs, deployment',
                'Intermediate patterns — decorators, generators, context managers',
              ].map(l => <li key={l}>{l}</li>)}
            </ul>
          </Card>
        </div>

        {/* Quality / Success Criteria — 3-col */}
        <div className="grid-3">
          {[
            {
              icon: Code2,
              label: 'Code Proof',
              title: 'Application Without a Template',
              body: 'Solve all seven Application-level problems from the Applying Level doc without opening the guide.',
            },
            {
              icon: MessageSquare,
              label: 'Feynman Test',
              title: 'Explain to a Non-Programmer',
              body: 'State the core insight of each concept in plain language. If you can\'t explain it simply, you don\'t know it yet.',
            },
            {
              icon: CheckSquare,
              label: 'Synthesis',
              title: 'Write a Multi-Concept Script',
              body: 'At least one working Python script from scratch that combines three or more foundational concepts without a template.',
            },
            {
              icon: Layers,
              label: 'Written Record',
              title: 'Answer the Priority Questions',
              body: 'All nine priority questions from the Learning Max question set answered in writing — not bullet points, full sentences.',
            },
            {
              icon: Server,
              label: 'Context Bridging',
              title: 'Real-World Analogies',
              body: 'Connect each concept to at least one marketing tech or music production equivalent to lock in transferable understanding.',
            },
            {
              icon: Server,
              label: 'Resource Plan',
              title: 'What You Need to Succeed',
              body: '1.5 hrs uninterrupted daily · Local Python or repl.it · Claude as Feynman partner · Fundamentals, Understanding & Applying docs.',
            },
          ].map(({ icon: Icon, label, title, body }, i) => (
            <Card key={title} delay={i * 0.05}>
              <div className="card__icon"><Icon size={20} /></div>
              <span className="card__label">{label}</span>
              <h3 className="card__title">{title}</h3>
              <p className="card__body">{body}</p>
            </Card>
          ))}
        </div>
      </Sect>

      {/* ── 3. SCHEDULE ───────────────────── */}
      <Sect
        id="schedule"
        tag="Execution"
        title="Sprint Schedule"
        subtitle="How 14 days of focused effort become Python fluency."
        divided
      >
        <div className="grid-3">
          <Card delay={0}>
            <div className="card__icon"><ListTodo size={20} /></div>
            <span className="card__label">Product Backlog</span>
            <h3 className="card__title">Topic-to-Day Curriculum</h3>
            <p className="card__body">Each of the 7 pillars is assigned specific days. Topics are ordered by dependency so no concept is introduced before its prerequisites are solid.</p>
          </Card>

          <Card delay={0.05}>
            <div className="card__icon"><Calendar size={20} /></div>
            <span className="card__label">Session Structure</span>
            <h3 className="card__title">1.5-Hour Daily Block</h3>
            <ul className="card__list">
              {[
                '20 min — Recall & Feynman warm-up on yesterday\'s concept',
                '60 min — Active application: write, break, fix code',
                '10 min — Written standup + priority question answer',
              ].map(l => <li key={l}>{l}</li>)}
            </ul>
          </Card>

          <Card delay={0.1}>
            <div className="card__icon"><BarChart3 size={20} /></div>
            <span className="card__label">Max Progress Projection</span>
            <h3 className="card__title">Velocity & Trajectory</h3>
            <p className="card__body">Track daily velocity against the 14-day ceiling. If a day is missed, no days are added — remaining scope absorbs the impact. The retrospective protocol governs recovery.</p>
          </Card>
        </div>
      </Sect>

      {/* ── 4. OPS ────────────────────────── */}
      <Sect
        id="ops"
        tag="Operations"
        title="Sprint Ops"
        subtitle="The feedback loops that keep the sprint on track."
        divided
      >
        <div className="grid-3">
          <Card delay={0}>
            <div className="card__icon"><Activity size={20} /></div>
            <span className="card__label">Burndown Tracker</span>
            <h3 className="card__title">Visual Progress Monitor</h3>
            <p className="card__body">Track completed topics vs. remaining requirements each day so you always know exactly where you stand — no end-of-sprint surprises.</p>
          </Card>

          <Card delay={0.05}>
            <div className="card__icon"><ClipboardCheck size={20} /></div>
            <span className="card__label">Definition of Done</span>
            <h3 className="card__title">Sprint-Level DOD</h3>
            <ul className="card__list">
              {[
                'Feynman test passed for all 7 concepts',
                'All 9 priority learning questions answered in writing',
                'Real-world analogies recorded for each concept',
                'Multi-concept script written from scratch',
              ].map(l => <li key={l}>{l}</li>)}
            </ul>
          </Card>

          <Card delay={0.1}>
            <div className="card__icon"><RefreshCw size={20} /></div>
            <span className="card__label">Retrospective</span>
            <h3 className="card__title">Failure Recovery Protocol</h3>
            <p className="card__body">When a day is missed or comprehension stalls, the retro protocol triggers immediately. It evaluates root causes — session fragmentation? passive reading? — and adjusts the next session's approach.</p>
          </Card>
        </div>
      </Sect>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Python Foundations Course — 14-Day Learning Max Sprint</p>
      </footer>
    </>
  );
}
