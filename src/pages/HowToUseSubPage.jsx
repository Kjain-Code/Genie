import { useParams } from 'react-router-dom';

import dashboardImg    from '../assets/How-to-use/dashboard.png';
import ccManagerImg    from '../assets/How-to-use/cc-manager.png';
import geniePointImg   from '../assets/How-to-use/genie-point.png';
import mailInboxImg    from '../assets/How-to-use/mail-inbox.png';
import otpBotImg       from '../assets/How-to-use/otp-bot.png';
import redeemImg       from '../assets/How-to-use/redeem.png';
import startCardingImg from '../assets/How-to-use/start-carding.png';
import verifierImg     from '../assets/How-to-use/verifier.png';

const PAGE_CONFIG = {
  download:       { title: 'Download',                        image: null },
  dashboard:      { title: 'Dashboard',                       image: dashboardImg },
  'cc-manager':   { title: 'CC Manager',                      image: ccManagerImg },
  'genie-points': { title: 'Genie Points',                    image: geniePointImg },
  start:          { title: 'Start Carding',                   image: startCardingImg },
  mailbox:        { title: 'Integrated Mail Inbox',           image: mailInboxImg },
  orders:         { title: 'Orders Page',                     image: null },
  otp:            { title: 'OTP Bot: SMS/Phone Panel',        image: otpBotImg },
  verifier:       { title: 'Verifier (Verification Spoofer)', image: verifierImg },
  redeem:         { title: 'Redeem Code',                     image: redeemImg },
};

export default function HowToUseSubPage() {
  const { slug } = useParams();
  const config = PAGE_CONFIG[slug] || { title: 'Page Not Found', image: null };

  return (
    <div style={{ minHeight: '100vh', background: '#07071a' }}>

      {/* Hero Header */}
      <section style={{
        textAlign: 'center',
        padding: '100px 40px 60px',
        background: 'radial-gradient(ellipse at top, #1a0d4e 0%, #07071a 60%)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: 0, left: '50%',
          transform: 'translateX(-50%)',
          width: 600, height: 300,
          background: 'radial-gradient(ellipse, rgba(109,40,217,0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <span style={{
            display: 'inline-block', marginBottom: 20,
            padding: '6px 18px', borderRadius: 999,
            background: 'rgba(109,40,217,0.15)',
            border: '1px solid rgba(109,40,217,0.4)',
            color: '#a78bfa', fontSize: '0.75rem',
            fontWeight: 700, letterSpacing: '2px',
          }}>HOW TO USE</span>
          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 900, letterSpacing: '-1px',
            background: 'linear-gradient(135deg, #a78bfa, #06b6d4)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            backgroundClip: 'text', marginBottom: 0,
          }}>
            {config.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: '60px 40px 100px', maxWidth: 1100, margin: '0 auto' }}>
        {config.image ? (
          <div style={{
            borderRadius: 20,
            overflow: 'hidden',
            border: '1px solid rgba(109,40,217,0.25)',
            boxShadow: '0 0 60px rgba(109,40,217,0.1)',
          }}>
            <img
              src={config.image}
              alt={config.title}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        ) : (
          <div style={{
            textAlign: 'center',
            padding: '80px 40px',
            background: 'linear-gradient(145deg, #12112a, #1a1838)',
            border: '1px solid rgba(109,40,217,0.2)',
            borderRadius: 24,
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: 2,
              background: 'linear-gradient(90deg, transparent, #7c3aed, #06b6d4, transparent)',
            }} />

            <div style={{ fontSize: '5rem', marginBottom: 24 }}>⚙️</div>

            <h2 style={{
              fontSize: '2rem', fontWeight: 800, marginBottom: 16,
              background: 'linear-gradient(135deg, #a78bfa, #06b6d4)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Coming Soon
            </h2>
            <p style={{ color: '#64748b', fontSize: '1rem', lineHeight: 1.8, maxWidth: 440, margin: '0 auto 32px' }}>
              This section is currently under development.<br />
              We're working hard to bring you a detailed guide soon.
            </p>

            <div style={{
              maxWidth: 320, margin: '0 auto',
              height: 6, background: 'rgba(109,40,217,0.15)',
              borderRadius: 999, overflow: 'hidden',
            }}>
              <div style={{
                height: '100%', width: '65%',
                background: 'linear-gradient(90deg, #7c3aed, #06b6d4)',
                borderRadius: 999,
              }} />
            </div>
            <p style={{ color: '#374151', fontSize: '0.8rem', marginTop: 12 }}>65% complete</p>
          </div>
        )}
      </section>
    </div>
  );
}