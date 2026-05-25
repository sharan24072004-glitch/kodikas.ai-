import { useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Laptop, Settings, BarChart3, ArrowUpRight, Smartphone, Cloud, Cpu, Menu, X } from 'lucide-react';
import Privacy from './Privacy.tsx';
import ProjectDetail from './ProjectDetail.tsx';
import { projects, Project } from './data/projects.ts';


export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'privacy' | 'project'>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Navigate to sections smoothly
  const navigateToSection = (sectionId: string) => {
    setCurrentPage('home');
    setMobileMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  // Open project detail page
  const openProject = (project: Project) => {
    setSelectedProject(project);
    setCurrentPage('project');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Back from project page
  const handleProjectBack = () => {
    setCurrentPage('home');
    setTimeout(() => {
      const element = document.getElementById('works');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  // Dynamic card glow
  const handleMouseMoveCard = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  // Scroll progress
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const noop = () => {};

  return (
    <>
      {/* Background Glow Orbs */}
      <div className="background-glow-wrapper">
        <div className="glow-orb orb-1"></div>
        <div className="glow-orb orb-2"></div>
        <div className="glow-orb orb-3"></div>
      </div>

      {/* Scroll Progress Bar */}
      <motion.div style={{ scaleX, position: 'fixed', top: 0, left: 0, right: 0, height: '4px', background: '#4f46e5', zIndex: 1000, transformOrigin: '0%' }} />

      {/* Navbar */}
      <nav className="navbar">
        <div
          className="logo"
          onClick={() => navigateToSection('home')}
          style={{ cursor: 'pointer' }}
        >
          códigus<span>.ai</span>
        </div>

        {/* Desktop Nav Links */}
        <div className="nav-links">
          <a href="#home" onClick={(e) => { e.preventDefault(); navigateToSection('home'); }}>Home</a>
          <a href="#services" onClick={(e) => { e.preventDefault(); navigateToSection('services'); }}>Services</a>
          <a href="#works" onClick={(e) => { e.preventDefault(); navigateToSection('works'); }}>Works</a>
          <a href="#about" onClick={(e) => { e.preventDefault(); navigateToSection('about'); }}>About</a>
          <a href="#contact" className="btn-primary" onClick={(e) => { e.preventDefault(); navigateToSection('contact'); }}>Get in Touch</a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="hamburger-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          id="hamburger-toggle"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <motion.div
        className="mobile-menu"
        initial={false}
        animate={mobileMenuOpen ? { x: 0, opacity: 1 } : { x: '100%', opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <div className="mobile-menu-links">
          <a href="#home" onClick={(e) => { e.preventDefault(); navigateToSection('home'); }}>Home</a>
          <a href="#services" onClick={(e) => { e.preventDefault(); navigateToSection('services'); }}>Services</a>
          <a href="#works" onClick={(e) => { e.preventDefault(); navigateToSection('works'); }}>Works</a>
          <a href="#about" onClick={(e) => { e.preventDefault(); navigateToSection('about'); }}>About</a>
          <a href="#contact" className="btn-primary mobile-cta" onClick={(e) => { e.preventDefault(); navigateToSection('contact'); }}>Get in Touch</a>
        </div>
      </motion.div>

      {/* Mobile menu backdrop */}
      {mobileMenuOpen && (
        <div className="mobile-menu-backdrop" onClick={() => setMobileMenuOpen(false)} />
      )}

      {/* Pages */}
      {currentPage === 'home' ? (
        <main style={{ position: 'relative', zIndex: 10 }}>
          {/* ── Hero ── */}
          <section id="home" className="hero">
            <div className="hero-content">
              <h1 className="hero-title" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span className="line-wrapper">
                  <motion.span
                    display="inline-block"
                    initial={{ y: '100%' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    style={{ display: 'inline-block' }}
                  >
                    Shaping the
                  </motion.span>
                </span>
                <span className="line-wrapper">
                  <motion.span
                    className="gradient-text"
                    display="inline-block"
                    initial={{ y: '100%' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                    style={{ display: 'inline-block' }}
                  >
                    Digital Future
                  </motion.span>
                </span>
              </h1>
              <motion.p
                className="hero-subtitle"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
              >
                Premium software engineering and digital transformation services.
              </motion.p>
              <motion.div
                className="cta-group"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.55 }}
              >
                <motion.a
                  href="#services"
                  onClick={(e) => { e.preventDefault(); navigateToSection('services'); }}
                  className="btn-primary cta-btn"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Explore Services
                </motion.a>
                <motion.a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); navigateToSection('contact'); }}
                  className="btn-secondary cta-btn"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Contact Us
                </motion.a>
              </motion.div>
            </div>
          </section>

          {/* ── Marquee ── */}
          <div className="marquee-container">
            <motion.div
              className="marquee"
              animate={{ x: [0, -1000] }}
              transition={{ ease: 'linear', duration: 15, repeat: Infinity }}
            >
              <span>FRONTEND DESIGN • BACKEND ENGINEERING • DATA ANALYSIS • MOBILE APPS • CLOUD & DEVOPS • AI INTEGRATIONS • </span>
              <span>FRONTEND DESIGN • BACKEND ENGINEERING • DATA ANALYSIS • MOBILE APPS • CLOUD & DEVOPS • AI INTEGRATIONS • </span>
            </motion.div>
          </div>


          {/* ── Services Section ── */}
          <section id="services" className="services">
            <div className="section-header">
              <motion.h2
                className="section-title"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
              >
                Our Expertise
              </motion.h2>
              <motion.p
                className="section-desc"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                We build scalable, high-performance solutions tailored to your needs.
              </motion.p>
            </div>

            <div className="services-grid">
              {[
                { icon: <Laptop size={48} color="#4f46e5" />, title: 'Frontend Design', desc: 'Crafting pixel-perfect, responsive, and highly interactive user interfaces. We specialize in React, Next.js, and modern CSS to build web experiences that captivate users and drive engagement.' },
                { icon: <Settings size={48} color="#4f46e5" />, title: 'Backend Systems', desc: 'Engineering secure, scalable, and ultra-fast server architectures. From microservices and RESTful/GraphQL APIs to database management (SQL/NoSQL), we ensure your system is robust under heavy load.' },
                { icon: <BarChart3 size={48} color="#4f46e5" />, title: 'Data Analysis', desc: 'Transforming complex datasets into actionable business intelligence. We build custom data pipelines, interactive dashboards, and statistical models to guide your strategic decisions.' },
                { icon: <Smartphone size={48} color="#4f46e5" />, title: 'Mobile Apps', desc: 'Building native and cross-platform mobile solutions for iOS and Android. Using React Native and Flutter, we deliver sleek, high-performance apps directly to your users\' hands.' },
                { icon: <Cloud size={48} color="#4f46e5" />, title: 'Cloud & DevOps', desc: 'Automating deployment pipelines and optimizing infrastructure. We utilize AWS, Docker, and Kubernetes to build secure, auto-scaling environments with 99.9% uptime.' },
                { icon: <Cpu size={48} color="#4f46e5" />, title: 'AI & Machine Learning', desc: 'Integrating intelligent capabilities into your software. From natural language processing and computer vision to custom LLM deployments, we bring the power of AI to your business.' },
              ].map((svc, i) => (
                <motion.div
                  key={svc.title}
                  className="service-card"
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  whileHover={{ y: -6 }}
                  onMouseMove={handleMouseMoveCard}
                >
                  <div className="service-icon">{svc.icon}</div>
                  <h3>{svc.title}</h3>
                  <p>{svc.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ── Featured Works ── */}
          <section id="works" className="works">
            <div className="section-header">
              <motion.h2
                className="section-title"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
              >
                Selected Projects
              </motion.h2>
              <motion.p
                className="section-desc"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                A glimpse into the digital solutions we've designed and engineered.
              </motion.p>
            </div>

            <div className="project-list">
              {projects.map((project, index) => (
                <motion.button
                  key={project.id}
                  className="project-list-item"
                  onClick={() => openProject(project)}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover="hover"
                >
                  <span className="project-list-number">0{index + 1}</span>
                  <span className="project-list-name">{project.title}</span>
                  <div className="project-list-tags">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                  <motion.span
                    className="project-list-arrow"
                    variants={{ hover: { x: 6, rotate: -45 } }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  >
                    <ArrowUpRight size={22} />
                  </motion.span>
                </motion.button>
              ))}
            </div>
          </section>

          {/* ── About ── */}
          <section id="about" className="about">
            <div className="about-content">
              <motion.p
                className="about-text"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                Established in June 2022 and operating as a specialized technology division of <a href="https://sngroups.co.in" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)', textDecoration: 'underline', textUnderlineOffset: '8px', textDecorationColor: 'rgba(255,255,255,0.2)', transition: 'all 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent-color)'; e.currentTarget.style.textDecorationColor = 'var(--accent-color)'; }} onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-primary)'; e.currentTarget.style.textDecorationColor = 'rgba(255,255,255,0.2)'; }}>SN Groups</a>, <span className="highlight" style={{ color: '#fff' }}>códigus.ai</span> has been at the forefront of digital innovation, delivering premium, end-to-end IT solutions. We don't just write code; we architect seamless digital experiences. Driven by a relentless pursuit of engineering excellence and sophisticated design, our mission is to elevate your brand through state-of-the-art technology and unparalleled aesthetics.
              </motion.p>
            </div>
          </section>

          {/* ── Contact ── */}
          <section id="contact" className="contact">
            <motion.div
              className="contact-box"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 100, damping: 15 }}
            >
              <h2>Ready to Start?</h2>
              <p>Let's build something extraordinary together.</p>
              <motion.a
                href="mailto:hello@codigus.ai"
                className="btn-primary huge-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                hello@codigus.ai <ArrowUpRight />
              </motion.a>
            </motion.div>
          </section>
        </main>

      ) : currentPage === 'project' && selectedProject ? (
        <main style={{ position: 'relative', zIndex: 10 }}>
          <ProjectDetail project={selectedProject} onBack={handleProjectBack} />
        </main>

      ) : (
        <Privacy
          setCurrentPage={setCurrentPage}
          handleMouseEnter={noop}
          handleMouseLeave={noop}
        />
      )}

      <footer>
        <div className="footer-content">
          <div
            className="logo"
            onClick={() => navigateToSection('home')}
            style={{ cursor: 'pointer' }}
          >
            códigus<span>.ai</span>
          </div>
          <p>© 2022–2026 códigus.ai. All Rights Reserved.</p>
          <div className="footer-links">
            <a
              href="#privacy"
              onClick={(e) => { e.preventDefault(); setCurrentPage('privacy'); }}
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
