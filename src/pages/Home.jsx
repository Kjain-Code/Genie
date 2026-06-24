import { Link } from 'react-router-dom';
import { FaShieldAlt, FaIdCard, FaHandHoldingUsd, FaChartLine, FaLock, FaUsers, FaCheckCircle } from 'react-icons/fa';

const features = [
  { icon: <FaIdCard size={40} color="#6366f1" />, title: 'CC Manager', desc: 'Manage balances, limits, and activity with a streamlined dashboard built for fast card monitoring.' },
  { icon: <FaHandHoldingUsd size={40} color="#22d3ee" />, title: 'Verification Bypass', desc: 'Bypass locked checks with smart handling for billing statements, ID verification, and liveness screens.' },
  { icon: <FaShieldAlt size={40} color="#6366f1" />, title: 'SMS/OTP Spoofing', desc: 'Access OTP inboxes and track delivery flow to speed up account recovery and confirmation steps.' },
  { icon: <FaChartLine size={40} color="#22d3ee" />, title: 'Integrated Mailbox', desc: 'Use a connected mailbox to receive order confirmations, shipment updates, and delivery alerts under the cardholder name.' },
  { icon: <FaLock size={40} color="#6366f1" />, title: 'Secure Location Spoofing', desc: 'Mask your presence with VPN, SOCKS, and RDP tools to keep sessions private and stable.' },
  { icon: <FaUsers size={40} color="#22d3ee" />, title: '1200+ Automated Methods', desc: 'Run over 1200 automated carding methods across platforms like Amazon, Apple, Western Union, Cash App, and Coinbase.' },
];

const stats = [
  { value: '2M+', label: 'Happy Customers' },
  { value: '99.9%', label: 'Uptime Guaranteed' },
  { value: '₹500Cr+', label: 'Loans Disbursed' },
  { value: '4.9★', label: 'App Rating' },
];



export default function Home() {
  return (
    <div style={{ paddingTop: 70 }}>

      {/* HERO */}
      <section style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        justifyContent: 'center', textAlign: 'center', padding: '80px 20px',
        background: 'radial-gradient(ellipse at 20% 50%, #2d1b69 0%, #0f0e17 50%, #0d1f3c 100%)',
        position: 'relative', overflow: 'hidden'
      }}>
        {/* Glow blobs */}
        <div style={{
          position: 'absolute', width: 600, height: 600, borderRadius: '50%',
          background: 'rgba(99,102,241,0.12)', top: -150, left: -100,
          filter: 'blur(80px)', animation: 'pulse 4s infinite'
        }} />
        <div style={{
          position: 'absolute', width: 400, height: 400, borderRadius: '50%',
          background: 'rgba(34,211,238,0.10)', bottom: 0, right: -100,
          filter: 'blur(80px)', animation: 'pulse 5s infinite'
        }} />
        <div style={{
          position: 'absolute', width: 300, height: 300, borderRadius: '50%',
          background: 'rgba(99,102,241,0.08)', top: '40%', right: '20%',
          filter: 'blur(60px)', animation: 'pulse 6s infinite'
        }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: 850, animation: 'fadeInUp 0.8s ease' }}>
          <div style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, rgba(99,102,241,0.2), rgba(34,211,238,0.1))',
            border: '1px solid rgba(99,102,241,0.4)', borderRadius: 50,
            padding: '8px 24px', marginBottom: 32, fontSize: '0.9rem', color: '#c7d2fe',
            backdropFilter: 'blur(10px)'
          }}>
            Your wish is my command
          </div>

          <h1 style={{
            fontSize: 'clamp(2.8rem, 6vw, 5.5rem)', fontWeight: 900,
            lineHeight: 1.05, marginBottom: 28,
            background: 'linear-gradient(135deg, #ffffff 0%, #c7d2fe 40%, #22d3ee 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
          }}>
            Your Own Website <br />Carding Genie
          </h1>

          <p style={{
            fontSize: '1.2rem', color: '#a0a0c0', marginBottom: 48,
            lineHeight: 1.8, maxWidth: 580, margin: '0 auto 48px'
          }}>
            Carding Genie is a software designed to make carding automated through Artificial Intelligence.
          </p>

          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/register">
              <button className="btn-primary" style={{ fontSize: '1.05rem', padding: '16px 44px' }}>
                Get Started Free →
              </button>
            </Link>
            <Link to="/how-to-use">
              <button className="btn-outline" style={{ fontSize: '1.05rem', padding: '16px 44px' }}>
                How It Works
              </button>
            </Link>
          </div>

          <div style={{ display: 'flex', gap: 32, justifyContent: 'center', marginTop: 52, flexWrap: 'wrap' }}>
            {['No Hidden Charges', 'Instant Approval', '100% Secure'].map(t => (
              <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#a0a0c0', fontSize: '0.9rem' }}>
                <FaCheckCircle color="#6366f1" /> {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{
        background: 'linear-gradient(135deg, #6366f1 0%, #22d3ee 100%)',
        padding: '70px 40px'
      }}>
        <div style={{
          maxWidth: 1100, margin: '0 auto',
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 40, textAlign: 'center'
        }}>
          {stats.map(s => (
            <div key={s.label}>
              <div style={{ fontSize: '3.2rem', fontWeight: 900, color: 'white', letterSpacing: '-1px' }}>{s.value}</div>
              <div style={{ color: 'rgba(255,255,255,0.85)', marginTop: 8, fontSize: '1rem', fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section style={{ padding: '110px 40px', background: '#13122a' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 70 }}>
            <span style={{
              background: 'rgba(99,102,241,0.15)', color: '#a5b4fc',
              padding: '6px 18px', borderRadius: 50, fontSize: '0.85rem',
              border: '1px solid rgba(99,102,241,0.3)', display: 'inline-block', marginBottom: 16
            }}>FEATURES</span>
            <h2 style={{ fontSize: '2.6rem', fontWeight: 800, marginBottom: 16 }}>
              Everything You Need
            </h2>
            <p style={{ color: '#a0a0c0', fontSize: '1.1rem', maxWidth: 500, margin: '0 auto' }}>
              Powerful tools designed for fast, secure, and efficient carding workflows
            </p>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 28
          }}>
            {features.map(f => (
              <div key={f.title} className="card">
                <div style={{
                  width: 64, height: 64, borderRadius: 16, marginBottom: 20,
                  background: 'rgba(99,102,241,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>{f.icon}</div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: 12 }}>{f.title}</h3>
                <p style={{ color: '#a0a0c0', lineHeight: 1.8 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

        {/* PRICING */}
<section style={{ padding: '110px 40px', background: '#13122a' }}>
  <div style={{ maxWidth: 1100, margin: '0 auto' }}>
    <div style={{ textAlign: 'center', marginBottom: 70 }}>
      <span style={{
        background: 'rgba(99,102,241,0.15)', color: '#a5b4fc',
        padding: '6px 18px', borderRadius: 50, fontSize: '0.85rem',
        border: '1px solid rgba(99,102,241,0.3)', display: 'inline-block', marginBottom: 16
      }}>PRICING</span>
      <h2 style={{ fontSize: '2.6rem', fontWeight: 800, marginBottom: 16 }}>Choose Your Plan</h2>
      <p style={{ color: '#a0a0c0', fontSize: '1.1rem' }}>Simple, transparent pricing for everyone</p>
    </div>

    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: 28
    }}>

      {/* BASIC */}
      <div style={{
        background: 'linear-gradient(145deg, #1e1d35, #252445)',
        border: '1px solid rgba(99,102,241,0.25)',
        borderRadius: 20, padding: '40px 32px', textAlign: 'center',
        transition: 'all 0.3s'
      }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'translateY(-8px)';
          e.currentTarget.style.borderColor = 'rgba(99,102,241,0.6)';
          e.currentTarget.style.boxShadow = '0 20px 40px rgba(99,102,241,0.2)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.borderColor = 'rgba(99,102,241,0.25)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        <div style={{ fontSize: '1rem', fontWeight: 700, color: '#a5b4fc', letterSpacing: 2, marginBottom: 8 }}>BASIC</div>
        <div style={{ fontSize: '0.85rem', color: '#a0a0c0', marginBottom: 24 }}>PLAN</div>
        <div style={{ marginBottom: 32 }}>
          <span style={{ fontSize: '1.2rem', color: '#6366f1', verticalAlign: 'top', marginTop: 12, display: 'inline-block' }}>₹</span>
          <span style={{ fontSize: '4rem', fontWeight: 900, color: '#6366f1', lineHeight: 1 }}>18k</span>
          <span style={{ color: '#a0a0c0', fontSize: '0.9rem' }}>/month</span>
        </div>
        <div style={{ borderTop: '1px solid rgba(99,102,241,0.15)', paddingTop: 28, marginBottom: 32 }}>
          {['CC MANAGER/BALANCE CHECKER AND INTEGRATED MAILBOX','AVS/API/VELOCITY CHECK BYPASS', 'PC & IOS/ANDROID SETUP FILE', '7 GOLD NON VBV FULLZ CARDS', '6 MONTHS LICENSE', '23K Genie Points'].map(f => (
            <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14, textAlign: 'left' }}>
              <span style={{ color: '#6366f1', fontSize: '1rem' }}>✓</span>
              <span style={{ color: '#a0a0c0', fontSize: '0.95rem' }}>{f}</span>
            </div>
          ))}
        </div>
        <Link to="/register">
          <button className="btn-outline" style={{ width: '100%', padding: '14px' }}>Get Started</button>
        </Link>
      </div>

      {/* PRO - POPULAR */}
      <div style={{
        background: 'linear-gradient(145deg, #2d1b69, #1e1d55)',
        border: '2px solid #6366f1',
        borderRadius: 20, padding: '40px 32px', textAlign: 'center',
        position: 'relative', transform: 'scale(1.05)',
        boxShadow: '0 20px 60px rgba(99,102,241,0.35)',
        transition: 'all 0.3s'
      }}>
        <div style={{
          position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)',
          background: 'linear-gradient(135deg, #6366f1, #22d3ee)',
          color: 'white', padding: '4px 20px', borderRadius: 50,
          fontSize: '0.8rem', fontWeight: 700, letterSpacing: 1
        }}>⭐ MOST POPULAR</div>
        <div style={{ fontSize: '1rem', fontWeight: 700, color: '#c7d2fe', letterSpacing: 2, marginBottom: 8 }}>PRO</div>
        <div style={{ fontSize: '0.85rem', color: '#a0a0c0', marginBottom: 24 }}>PLAN</div>
        <div style={{ marginBottom: 32 }}>
          <span style={{ fontSize: '1.2rem', color: '#22d3ee', verticalAlign: 'top', marginTop: 12, display: 'inline-block' }}>₹</span>
          <span style={{ fontSize: '4rem', fontWeight: 900, color: '#22d3ee', lineHeight: 1 }}>35k</span>
          <span style={{ color: '#a0a0c0', fontSize: '0.9rem' }}>/month</span>
        </div>
        <div style={{ borderTop: '1px solid rgba(99,102,241,0.3)', paddingTop: 28, marginBottom: 32 }}>
          {['CC MANAGER/BALANCE CHECKER AND INTEGRATED MAILBOX', 'AVS/API/VELOCITY CHECK BYPASS', 'ALL METHODS UNLOCKED', '7 PLATINUM NON VBV FULLZ CARDS', '12 MONTHS LICENSE', '60K Genie Points'].map(f => (
            <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14, textAlign: 'left' }}>
              <span style={{ color: '#22d3ee', fontSize: '1rem' }}>✓</span>
              <span style={{ color: '#c7d2fe', fontSize: '0.95rem' }}>{f}</span>
            </div>
          ))}
        </div>
        <Link to="/register">
          <button className="btn-primary" style={{ width: '100%', padding: '14px' }}>Get Started →</button>
        </Link>
      </div>

      {/* ENTERPRISE */}
      <div style={{
        background: 'linear-gradient(145deg, #1e1d35, #252445)',
        border: '1px solid rgba(99,102,241,0.25)',
        borderRadius: 20, padding: '40px 32px', textAlign: 'center',
        transition: 'all 0.3s'
      }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'translateY(-8px)';
          e.currentTarget.style.borderColor = 'rgba(99,102,241,0.6)';
          e.currentTarget.style.boxShadow = '0 20px 40px rgba(99,102,241,0.2)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.borderColor = 'rgba(99,102,241,0.25)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        <div style={{ fontSize: '1rem', fontWeight: 700, color: '#a5b4fc', letterSpacing: 2, marginBottom: 8 }}>ENTERPRISE</div>
        <div style={{ fontSize: '0.85rem', color: '#a0a0c0', marginBottom: 24 }}>PLAN</div>
        <div style={{ marginBottom: 32 }}>
          <span style={{ fontSize: '1.2rem', color: '#6366f1', verticalAlign: 'top', marginTop: 12, display: 'inline-block' }}>₹</span>
          <span style={{ fontSize: '4rem', fontWeight: 900, color: '#6366f1', lineHeight: 1 }}>50k</span>
          <span style={{ color: '#a0a0c0', fontSize: '0.9rem' }}>/month</span>
        </div>
        <div style={{ borderTop: '1px solid rgba(99,102,241,0.15)', paddingTop: 28, marginBottom: 32 }}>
          {['CC MANAGER/BALANCE CHECKER AND INTEGRATED MAILBOX', 'AVS/API/VELOCITY CHECK BYPASS', 'ALL METHODS UNLOCKED', '17 BUSINESS NON VBV FULLZ CARDS', 'LIFETIME LICENSE', '180K Genie Points'].map(f => (
            <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14, textAlign: 'left' }}>
              <span style={{ color: '#6366f1', fontSize: '1rem' }}>✓</span>
              <span style={{ color: '#a0a0c0', fontSize: '0.95rem' }}>{f}</span>
            </div>
          ))}
        </div>
        <Link to="/register">
          <button className="btn-outline" style={{ width: '100%', padding: '14px' }}>Contact Sales</button>
        </Link>
      </div>

    </div>
  </div>
</section>


      {/* CTA */}
      <section style={{
        padding: '110px 40px', textAlign: 'center',
        background: 'radial-gradient(ellipse at center, #2d1b69 0%, #0f0e17 65%)',
        position: 'relative', overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute', width: 500, height: 500, borderRadius: '50%',
          background: 'rgba(34,211,238,0.05)', top: -100, right: -100,
          filter: 'blur(60px)'
        }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{
            fontSize: '3rem', fontWeight: 900, marginBottom: 16,
            background: 'linear-gradient(135deg, #ffffff, #c7d2fe)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
          }}>
            Ready to Get Started?
          </h2>
          <p style={{ color: '#a0a0c0', marginBottom: 48, fontSize: '1.15rem', maxWidth: 500, margin: '0 auto 48px' }}>
            Join 2 million+ customers who visited us and using our services.
          </p>
          <Link to="/register">
            <button className="btn-primary" style={{ fontSize: '1.1rem', padding: '18px 56px' }}>
              Open Free Account →
            </button>
          </Link>
        </div>
      </section>

    </div>
  );
}