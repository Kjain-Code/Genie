import { Link } from 'react-router-dom';
import { FaUniversity, FaTwitter, FaLinkedin, FaInstagram, FaPhoneAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer style={{
      background: '#06060f',
      borderTop: '1px solid rgba(79,70,229,0.2)',
      padding: '70px 40px 30px'
    }}>
      <div style={{
        maxWidth: 1100, margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: 48, marginBottom: 48
      }}>
        <div>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 10,
            fontSize: '1.5rem', fontWeight: 700, color: '#4f46e5', marginBottom: 16
          }}>
            <FaUniversity /> Your Genie
          </div>
          <p style={{ color: '#64748b', lineHeight: 1.8, marginBottom: 20 }}>
            Next-generation support and contact platform built for fast communication and trusted service.
          </p>
          <div style={{ display: 'flex', gap: 16 }}>
            {[FaTwitter, FaLinkedin, FaInstagram].map((Icon, i) => (
              <div key={i} style={{
                width: 38, height: 38, borderRadius: '50%',
                background: 'rgba(79,70,229,0.15)', display: 'flex',
                alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
                transition: 'all 0.3s'
              }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(79,70,229,0.4)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(79,70,229,0.15)'}
              >
                <Icon size={16} color="#a5b4fc" />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 style={{ marginBottom: 20, color: '#a5b4fc', fontWeight: 700 }}>Quick Links</h4>
          {[['/', 'Home'], ['/how-to-use', 'How To Use'], ['/register', 'Register'], ['/login', 'Login'], ['/contact', 'Contact']].map(([path, label]) => (
            <div key={path} style={{ marginBottom: 12 }}>
              <Link to={path} style={{ color: '#64748b', transition: 'color 0.3s', fontSize: '0.95rem' }}
                onMouseEnter={e => e.target.style.color = '#a5b4fc'}
                onMouseLeave={e => e.target.style.color = '#64748b'}
              >→ {label}</Link>
            </div>
          ))}
        </div>

        <div>
          <h4 style={{ marginBottom: 20, color: '#a5b4fc', fontWeight: 700 }}>Get In Touch</h4>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 14 }}>
            <FaEnvelope color="#4f46e5" />
            <span style={{ color: '#64748b', fontSize: '0.95rem' }}>info@genie.in</span>
          </div>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 24 }}>
            <FaPhoneAlt color="#4f46e5" />
            <span style={{ color: '#64748b', fontSize: '0.95rem' }}>9956604133</span>
          </div>
          <div style={{
            background: 'rgba(79,70,229,0.1)', border: '1px solid rgba(79,70,229,0.2)',
            borderRadius: 10, padding: '14px 18px', fontSize: '0.85rem', color: '#a5b4fc'
          }}>
            🔒 Trusted Support | Fast Response<br />
            <span style={{ color: '#64748b' }}>B103 Attari Punjab</span>
          </div>
        </div>
      </div>

      <div style={{
        maxWidth: 1100, margin: '0 auto', paddingTop: 24,
        borderTop: '1px solid rgba(255,255,255,0.05)',
        display: 'flex', justifyContent: 'space-between',
        flexWrap: 'wrap', gap: 12,
        color: '#374151', fontSize: '0.85rem'
      }}>
        <span>© 2026 genie. All rights reserved.</span>
        <span>Privacy Policy | Terms of Service | Grievance Redressal</span>
      </div>

      <a
        href="https://wa.me/919956604133"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        style={{
          position: 'fixed',
          right: 24,
          bottom: 24,
          width: 58,
          height: 58,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #25D366, #128C7E)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          boxShadow: '0 12px 30px rgba(37, 211, 102, 0.35)',
          zIndex: 1000,
          textDecoration: 'none'
        }}
      >
        <FaWhatsapp size={26} />
      </a>
    </footer>
  );
}