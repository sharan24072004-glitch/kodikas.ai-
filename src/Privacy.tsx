import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

interface PrivacyProps {
  setCurrentPage: (page: 'home' | 'privacy') => void;
  handleMouseEnter: (text: string) => void;
  handleMouseLeave: () => void;
}

export default function Privacy({ setCurrentPage, handleMouseEnter, handleMouseLeave }: PrivacyProps) {
  // Scroll to top on mount
  window.scrollTo(0, 0);

  return (
    <div className="privacy-page" style={{ padding: '8rem 5% 4rem', minHeight: '90vh' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <motion.button
          onClick={() => setCurrentPage('home')}
          className="btn-secondary"
          style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.5rem', 
            marginBottom: '3rem',
            background: 'transparent',
            border: '1px solid rgba(255,255,255,0.1)',
            padding: '0.6rem 1.2rem',
            borderRadius: '50px',
            color: '#fff',
            cursor: 'pointer'
          }}
          onMouseEnter={() => handleMouseEnter("back")}
          onMouseLeave={handleMouseLeave}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ArrowLeft size={16} /> Back to Home
        </motion.button>

        <motion.h1 
          className="section-title"
          style={{ textAlign: 'left', marginBottom: '1rem', fontSize: '3rem' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Privacy Policy
        </motion.h1>
        
        <motion.p 
          style={{ color: 'var(--text-secondary)', marginBottom: '3rem' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Effective Date: May 23, 2026
        </motion.p>

        <motion.div 
          className="privacy-content"
          style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '2rem', 
            color: 'var(--text-secondary)',
            lineHeight: '1.7',
            fontSize: '1.05rem'
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <section>
            <h2 style={{ color: '#fff', marginBottom: '1rem', fontFamily: 'Space Grotesk' }}>1. Information We Collect</h2>
            <p>At códigus.ai, we value your privacy. We collect minimal information required to contact you or improve our web experience. This may include personal data such as your name and email address when you voluntarily submit them through our contact links, as well as anonymous usage metrics collected via browser cookies.</p>
          </section>

          <section>
            <h2 style={{ color: '#fff', marginBottom: '1rem', fontFamily: 'Space Grotesk' }}>2. How We Use Your Information</h2>
            <p>Any information we collect is strictly used to reply to your inquiries, deliver our digital products and services, and optimize the technical performance of our website. We do not sell, distribute, or lease your personal information to third parties.</p>
          </section>

          <section>
            <h2 style={{ color: '#fff', marginBottom: '1rem', fontFamily: 'Space Grotesk' }}>3. Data Security</h2>
            <p>We deploy robust electronic, physical, and managerial protocols to safeguard and secure the information we collect online. However, please be aware that no transmission of data over the internet can be guaranteed as 100% secure.</p>
          </section>

          <section>
            <h2 style={{ color: '#fff', marginBottom: '1rem', fontFamily: 'Space Grotesk' }}>4. Cookies</h2>
            <p>Our website utilizes cookies to understand how you interact with our pages. You can choose to accept or decline cookies through your web browser settings. Declining cookies will not prevent you from using the core features of our website.</p>
          </section>

          <section>
            <h2 style={{ color: '#fff', marginBottom: '1rem', fontFamily: 'Space Grotesk' }}>5. Contact Us</h2>
            <p>If you have any questions regarding this Privacy Policy or our data practices, feel free to reach out to us at <a href="mailto:codigus-ai@sngroups.co.in" style={{ color: 'var(--accent-color)', textDecoration: 'none' }}>codigus-ai@sngroups.co.in</a>.</p>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
