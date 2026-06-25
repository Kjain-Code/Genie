import { Link } from 'react-router-dom';
import { FaUniversity, FaTwitter, FaLinkedin, FaInstagram, FaPhoneAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import genieLogo from '../assets/Genie-logo.png';

export default function Footer() {
  return (
    <footer className="footer-shell" style={{
      background: 'linear-gradient(180deg, #07071a 0%, #05050f 100%)',
      borderTop: '1px solid rgba(109,40,217,0.2)',
      padding: '70px 40px 30px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute', top: 0, left: '50%',
        transform: 'translateX(-50%)',
        width: 600, height: 200,
        background: 'radial-gradient(ellipse, rgba(109,40,217,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: 1100, margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: 48, marginBottom: 48, position: 'relative',
      }}>
        {/* Brand */}
        <div>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 10,
            fontSize: '1.5rem', fontWeight: 800, marginBottom: 16,
            background: 'linear-gradient(135deg, #a78bfa, #06b6d4)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            <Link to="/" style={{ display:'flex', alignItems:'center', textDecoration:'none' }}>
                      <img
                        src={genieLogo}
                        alt="Your Genie"
                        style={{ height:120, width:'auto', objectFit:'contain', filter:'drop-shadow(0 0 12px rgba(109,40,217,0.5))' }}
                      />
                    </Link>
          </div>
          <p style={{ color: '#64748b', lineHeight: 1.9, marginBottom: 24, fontSize: '0.9rem' }}>
            Next-generation support platform built for fast communication and trusted service.
          </p>
          <div style={{ display: 'flex', gap: 12 }}>
            {[FaTwitter, FaLinkedin, FaInstagram].map((Icon, i) => (
              <div
                key={i}
                style={{
                  width: 40, height: 40, borderRadius: '50%',
                  background: 'rgba(109,40,217,0.1)',
                  border: '1px solid rgba(109,40,217,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', transition: 'all 0.3s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(109,40,217,0.3)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(109,40,217,0.3)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(109,40,217,0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <Icon size={15} color="#a78bfa" />
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ marginBottom: 24, color: '#a78bfa', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '2px' }}>
            QUICK LINKS
          </h4>
          {[['/', 'Home'], ['/how-to-use', 'How To Use'], ['/register', 'Register'], ['/login', 'Login'], ['/contact', 'Contact']].map(([path, label]) => (
            <div key={path} style={{ marginBottom: 14 }}>
              <Link
                to={path}
                style={{ color: '#64748b', fontSize: '0.9rem', transition: 'all 0.2s', display: 'inline-flex', alignItems: 'center', gap: 6 }}
                onMouseEnter={e => {
                  e.target.style.color = '#a78bfa';
                  e.target.style.paddingLeft = '6px';
                }}
                onMouseLeave={e => {
                  e.target.style.color = '#64748b';
                  e.target.style.paddingLeft = '0';
                }}
              >
                → {label}
              </Link>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div>
          <h4 style={{ marginBottom: 24, color: '#a78bfa', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '2px' }}>
            GET IN TOUCH
          </h4>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 16 }}>
            <div style={{
              width: 36, height: 36, borderRadius: 10,
              background: 'rgba(109,40,217,0.1)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <FaEnvelope color="#7c3aed" size={14} />
            </div>
            <span style={{ color: '#94a3b8', fontSize: '0.9rem' }}>info@genie.in</span>
          </div>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 24 }}>
            <div style={{
              width: 36, height: 36, borderRadius: 10,
              background: 'rgba(109,40,217,0.1)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <FaPhoneAlt color="#7c3aed" size={14} />
            </div>
            <span style={{ color: '#94a3b8', fontSize: '0.9rem' }}>9956604133</span>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, rgba(109,40,217,0.08), rgba(6,182,212,0.05))',
            border: '1px solid rgba(109,40,217,0.2)',
            borderRadius: 12, padding: '14px 18px',
            fontSize: '0.82rem', color: '#a78bfa', lineHeight: 1.8,
          }}>
            🔒 Trusted Support | Fast Response<br />
            <span style={{ color: '#64748b' }}>B103 Attari Punjab</span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        maxWidth: 1100, margin: '0 auto',
        paddingTop: 24,
        borderTop: '1px solid rgba(255,255,255,0.04)',
        display: 'flex', justifyContent: 'space-between',
        flexWrap: 'wrap', gap: 12,
        color: '#374151', fontSize: '0.82rem',
      }}>
        <span>© 2026 Your Genie. All rights reserved.</span>
        <span style={{ color: '#374151' }}>Privacy Policy | Terms of Service | Grievance Redressal</span>
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919956604133"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        style={{
          position: 'fixed', right: 24, bottom: 24,
          width: 58, height: 58, borderRadius: '50%',
          background: 'linear-gradient(135deg, #25D366, #128C7E)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff',
          boxShadow: '0 8px 30px rgba(37,211,102,0.4), 0 0 0 0 rgba(37,211,102,0.4)',
          zIndex: 1000, textDecoration: 'none',
          transition: 'transform 0.3s, box-shadow 0.3s',
          animation: 'whatsappPulse 2s ease-in-out infinite',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'scale(1.15)';
          e.currentTarget.style.boxShadow = '0 12px 40px rgba(37,211,102,0.6)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 8px 30px rgba(37,211,102,0.4)';
        }}
      >
        <FaWhatsapp size={26} />
      </a>

      <style>{`
        @keyframes whatsappPulse {
          0%, 100% { box-shadow: 0 8px 30px rgba(37,211,102,0.4), 0 0 0 0 rgba(37,211,102,0.3); }
          50% { box-shadow: 0 8px 30px rgba(37,211,102,0.4), 0 0 0 12px rgba(37,211,102,0); }
        }
      `}</style>
    </footer>
  );
}