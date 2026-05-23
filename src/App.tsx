import { useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Laptop, Settings, BarChart3, ArrowUpRight, Smartphone, Cloud, Cpu } from 'lucide-react';
import Privacy from './Privacy.tsx';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'privacy'>('home');

  // Navigate to sections smoothly, rendering home page first if needed
  const navigateToSection = (sectionId: string) => {
    setCurrentPage('home');
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  // Dynamic card glow coordinate tracker
  const handleMouseMoveCard = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  // Scroll animations
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const noop = () => {};

  return (
    <>
      {/* Moving Background Glow Orbs (Floats globally behind everything) */}
      <div className="background-glow-wrapper">
        <div className="glow-orb orb-1"></div>
        <div className="glow-orb orb-2"></div>
        <div className="glow-orb orb-3"></div>
      </div>

      {/* Progress Bar */}
      <motion.div style={{ scaleX, position: 'fixed', top: 0, left: 0, right: 0, height: '4px', background: '#4f46e5', zIndex: 1000, transformOrigin: '0%' }} />

      {/* Navbar (Smaller & Refined) */}
      <nav className="navbar">
        <div 
          className="logo" 
          onClick={() => navigateToSection('home')}
          style={{ cursor: 'pointer' }}
        >
          kódikas<span>.ai</span>
        </div>
        <div className="nav-links">
          <a href="#home" onClick={(e) => { e.preventDefault(); navigateToSection('home'); }}>Home</a>
          <a href="#services" onClick={(e) => { e.preventDefault(); navigateToSection('services'); }}>Services</a>
          <a href="#works" onClick={(e) => { e.preventDefault(); navigateToSection('works'); }}>Works</a>
          <a href="#about" onClick={(e) => { e.preventDefault(); navigateToSection('about'); }}>About</a>
          <a href="#contact" className="btn-primary" onClick={(e) => { e.preventDefault(); navigateToSection('contact'); }}>Get in Touch</a>
        </div>
      </nav>

      {currentPage === 'home' ? (
        <main style={{ position: 'relative', zIndex: 10 }}>
          {/* Hero Section */}
          <section id="home" className="hero">
            <div className="hero-content">
              <h1 className="hero-title" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span className="line-wrapper">
                  <motion.span 
                    display="inline-block"
                    initial={{ y: "100%" }}
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
                    initial={{ y: "100%" }}
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

          {/* Infinite Marquee */}
          <div className="marquee-container">
            <motion.div
              className="marquee"
              animate={{ x: [0, -1000] }}
              transition={{ ease: "linear", duration: 15, repeat: Infinity }}
            >
              <span>FRONTEND DESIGN • BACKEND ENGINEERING • DATA ANALYSIS • MOBILE APPS • CLOUD & DEVOPS • AI INTEGRATIONS • </span>
              <span>FRONTEND DESIGN • BACKEND ENGINEERING • DATA ANALYSIS • MOBILE APPS • CLOUD & DEVOPS • AI INTEGRATIONS • </span>
            </motion.div>
          </div>

          {/* Services Section with Mouse-tracking Glows */}
          <section id="services" className="services">
            <div className="section-header">
              <motion.h2
                className="section-title"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                Our Expertise
              </motion.h2>
              <motion.p
                className="section-desc"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                We build scalable, high-performance solutions tailored to your needs.
              </motion.p>
            </div>

            <div className="services-grid">
              {/* Card 1: Frontend */}
              <motion.div
                className="service-card"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -6 }}
                onMouseMove={handleMouseMoveCard}
              >
                <div className="service-icon"><Laptop size={48} color="#4f46e5" /></div>
                <h3>Frontend Design</h3>
                <p>Crafting pixel-perfect, responsive, and highly interactive user interfaces. We specialize in React, Next.js, and modern CSS to build web experiences that captivate users and drive engagement.</p>
              </motion.div>

              {/* Card 2: Backend */}
              <motion.div
                className="service-card"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.05 }}
                whileHover={{ y: -6 }}
                onMouseMove={handleMouseMoveCard}
              >
                <div className="service-icon"><Settings size={48} color="#4f46e5" /></div>
                <h3>Backend Systems</h3>
                <p>Engineering secure, scalable, and ultra-fast server architectures. From microservices and RESTful/GraphQL APIs to database management (SQL/NoSQL), we ensure your system is robust under heavy load.</p>
              </motion.div>

              {/* Card 3: Data Analysis */}
              <motion.div
                className="service-card"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ y: -6 }}
                onMouseMove={handleMouseMoveCard}
              >
                <div className="service-icon"><BarChart3 size={48} color="#4f46e5" /></div>
                <h3>Data Analysis</h3>
                <p>Transforming complex datasets into actionable business intelligence. We build custom data pipelines, interactive dashboards, and statistical models to guide your strategic decisions.</p>
              </motion.div>

              {/* Card 4: Mobile Apps */}
              <motion.div
                className="service-card"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.15 }}
                whileHover={{ y: -6 }}
                onMouseMove={handleMouseMoveCard}
              >
                <div className="service-icon"><Smartphone size={48} color="#4f46e5" /></div>
                <h3>Mobile Apps</h3>
                <p>Building native and cross-platform mobile solutions for iOS and Android. Using React Native and Flutter, we deliver sleek, high-performance apps directly to your users' hands.</p>
              </motion.div>

              {/* Card 5: Cloud & DevOps */}
              <motion.div
                className="service-card"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -6 }}
                onMouseMove={handleMouseMoveCard}
              >
                <div className="service-icon"><Cloud size={48} color="#4f46e5" /></div>
                <h3>Cloud & DevOps</h3>
                <p>Automating deployment pipelines and optimizing infrastructure. We utilize AWS, Docker, and Kubernetes to build secure, auto-scaling environments with 99.9% uptime.</p>
              </motion.div>

              {/* Card 6: AI & ML */}
              <motion.div
                className="service-card"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.25 }}
                whileHover={{ y: -6 }}
                onMouseMove={handleMouseMoveCard}
              >
                <div className="service-icon"><Cpu size={48} color="#4f46e5" /></div>
                <h3>AI & Machine Learning</h3>
                <p>Integrating intelligent capabilities into your software. From natural language processing and computer vision to custom LLM deployments, we bring the power of AI to your business.</p>
              </motion.div>
            </div>
          </section>

          {/* Featured Works Section */}
          <section id="works" className="works">
            <div className="section-header">
              <motion.h2
                className="section-title"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                Selected Projects
              </motion.h2>
              <motion.p
                className="section-desc"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                A glimpse into the digital solutions we've designed and engineered.
              </motion.p>
            </div>

            <div className="works-grid">
              {/* Project 1 */}
              <div className="work-item">
                <motion.div
                  className="work-image-container"
                  initial={{ x: -60, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div 
                    className="work-image-placeholder"
                    whileHover={{ scale: 1.2, rotate: 6 }}
                    transition={{ type: "spring", stiffness: 350, damping: 15 }}
                  >
                    🌌
                  </motion.div>
                </motion.div>
                <motion.div
                  className="work-info"
                  initial={{ x: 60, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                >
                  <div className="work-tags">
                    <span className="tag">Next.js</span>
                    <span className="tag">Web3</span>
                    <span className="tag">UI/UX</span>
                  </div>
                  <h3>Aether Dashboard</h3>
                  <p>A next-generation SaaS interface designed for data indexing protocols. Built with sub-second latency visualization, real-time WebSockets feeds, and a futuristic dark aesthetic.</p>
                  <a
                    href="#contact"
                    className="btn-text"
                    onClick={(e) => { e.preventDefault(); navigateToSection('contact'); }}
                  >
                    View Case Study <ArrowUpRight size={16} />
                  </a>
                </motion.div>
              </div>

              {/* Project 2 */}
              <div className="work-item reverse">
                <motion.div
                  className="work-info"
                  initial={{ x: -60, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                >
                  <div className="work-tags">
                    <span className="tag">React Native</span>
                    <span className="tag">iOS & Android</span>
                    <span className="tag">AI</span>
                  </div>
                  <h3>Helius AI Core</h3>
                  <p>A mobile companion app managing smart home automation with local AI. We developed custom Bluetooth mesh integration, localized NLP command parsing, and widget actions.</p>
                  <a
                    href="#contact"
                    className="btn-text"
                    onClick={(e) => { e.preventDefault(); navigateToSection('contact'); }}
                  >
                    View Case Study <ArrowUpRight size={16} />
                  </a>
                </motion.div>
                <motion.div
                  className="work-image-container"
                  initial={{ x: 60, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div 
                    className="work-image-placeholder"
                    whileHover={{ scale: 1.2, rotate: -6 }}
                    transition={{ type: "spring", stiffness: 350, damping: 15 }}
                  >
                    🌀
                  </motion.div>
                </motion.div>
              </div>

              {/* Project 3 */}
              <div className="work-item">
                <motion.div
                  className="work-image-container"
                  initial={{ x: -60, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div 
                    className="work-image-placeholder"
                    whileHover={{ scale: 1.2, rotate: 6 }}
                    transition={{ type: "spring", stiffness: 350, damping: 15 }}
                  >
                    ✨
                  </motion.div>
                </motion.div>
                <motion.div
                  className="work-info"
                  initial={{ x: 60, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                >
                  <div className="work-tags">
                    <span className="tag">Python</span>
                    <span className="tag">Kubernetes</span>
                    <span className="tag">LLM</span>
                  </div>
                  <h3>Synthetix Compiler</h3>
                  <p>An intelligent agentic compiler converting natural language instructions to production-ready microservices. Engineered complex orchestration architectures using Kubernetes.</p>
                  <a
                    href="#contact"
                    className="btn-text"
                    onClick={(e) => { e.preventDefault(); navigateToSection('contact'); }}
                  >
                    View Case Study <ArrowUpRight size={16} />
                  </a>
                </motion.div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="about">
            <div className="about-content">
              <motion.p
                className="about-text"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                At <span className="highlight" style={{ color: '#fff' }}>kódikas.ai</span>, we don't just write code; we architect digital experiences. Inspired by the best in the industry, our mission is to elevate your brand through cutting-edge technology and unparalleled design aesthetics.
              </motion.p>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="contact">
            <motion.div
              className="contact-box"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
            >
              <h2>Ready to Start?</h2>
              <p>Let's build something extraordinary together.</p>
              <motion.a
                href="mailto:hello@kodikas.ai"
                className="btn-primary huge-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                hello@kodikas.ai <ArrowUpRight />
              </motion.a>
            </motion.div>
          </section>
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
            kódikas<span>.ai</span>
          </div>
          <p>&copy; 2026 kódikas.ai. All Rights Reserved.</p>
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
