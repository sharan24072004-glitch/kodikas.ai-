import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, ExternalLink } from 'lucide-react';
import { Project } from './data/projects';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

export default function ProjectDetail({ project, onBack }: ProjectDetailProps) {
  const categoryColors: Record<string, string> = {
    Frontend: '#4f46e5',
    Framework: '#4f46e5',
    Language: '#6366f1',
    'Real-time': '#0d9488',
    Visualization: '#7c3aed',
    Database: '#0891b2',
    'Local DB': '#0891b2',
    Caching: '#0891b2',
    'AI / ML': '#f59e0b',
    'AI Model': '#f59e0b',
    Connectivity: '#10b981',
    State: '#8b5cf6',
    Backend: '#4f46e5',
    Orchestration: '#06b6d4',
    Containerisation: '#2563eb',
    'API Layer': '#0d9488',
    Agentic: '#f59e0b',
  };

  return (
    <motion.div
      className="project-detail-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Back Button */}
      <motion.button
        className="back-btn"
        onClick={onBack}
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        whileHover={{ x: -4 }}
      >
        <ArrowLeft size={20} />
        Back to Works
      </motion.button>

      {/* Hero Banner */}
      <motion.div
        className="detail-hero"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="detail-hero-content">
          <div className="detail-tags">
            {project.tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
          <h1 className="detail-title">{project.title}</h1>
          <p className="detail-tagline">{project.tagline}</p>
        </div>

        {/* Project Image */}
        <motion.div
          className="detail-hero-image"
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        >
          <img src={project.image} alt={project.title} />
          <div
            className="detail-image-glow"
            style={{ background: `radial-gradient(ellipse at center, ${project.color}44 0%, transparent 70%)` }}
          />
        </motion.div>
      </motion.div>

      {/* Content Sections */}
      <div className="detail-content">
        {/* Overview */}
        <motion.section
          className="detail-section"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="detail-section-label">Overview</span>
          <p className="detail-overview">{project.overview}</p>
        </motion.section>

        <div className="detail-two-col">
          {/* Problem */}
          <motion.section
            className="detail-section detail-card"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="detail-section-label problem-label">The Problem</span>
            <p>{project.problem}</p>
          </motion.section>

          {/* Solution */}
          <motion.section
            className="detail-section detail-card"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="detail-section-label solution-label">Our Solution</span>
            <p>{project.solution}</p>
          </motion.section>
        </div>

        {/* Key Features */}
        <motion.section
          className="detail-section"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="detail-section-label">Key Features</span>
          <div className="features-grid">
            {project.features.map((feature, i) => (
              <motion.div
                key={i}
                className="feature-item"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
              >
                <CheckCircle2 size={20} color={project.color} style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Tech Stack */}
        <motion.section
          className="detail-section"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="detail-section-label">Tech Stack</span>
          <div className="stack-grid">
            {project.stack.map((tech, i) => (
              <motion.div
                key={i}
                className="stack-item"
                initial={{ scale: 0.85, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                whileHover={{ y: -3 }}
              >
                <span
                  className="stack-category"
                  style={{ color: categoryColors[tech.category] || '#888' }}
                >
                  {tech.category}
                </span>
                <span className="stack-name">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Result */}
        <motion.section
          className="detail-result-banner"
          initial={{ scale: 0.97, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, type: 'spring', stiffness: 100 }}
          style={{ borderColor: `${project.color}55` }}
        >
          <span className="detail-section-label result-label">Result & Impact</span>
          <p className="detail-result-text">{project.result}</p>
        </motion.section>

        {/* CTA */}
        <motion.div
          className="detail-cta"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p>Interested in a similar solution?</p>
          <motion.a
            href="mailto:hello@kodikas.ai"
            className="btn-primary"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '1.05rem', padding: '0.9rem 2rem' }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Let's Talk <ExternalLink size={16} />
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
}
