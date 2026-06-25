import { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import genieLogo from '../assets/Genie-logo.png';

const HOW_TO_USE_LINKS = [
  { to: '/how-to-use/download',    label: 'DOWNLOAD' },
  { to: '/how-to-use/dashboard',   label: 'DASHBOARD' },
  { to: '/how-to-use/cc-manager',  label: 'CC MANAGER' },
  { to: '/how-to-use/genie-points',label: 'GENIE POINTS' },
  { to: '/how-to-use/start',       label: 'START CARDING' },
  { to: '/how-to-use/mailbox',     label: 'INTEGRATED MAIL INBOX' },
  { to: '/how-to-use/orders',      label: 'ORDERS PAGE' },
  { to: '/how-to-use/otp',         label: 'OTP BOT: SMS/PHONE PANEL' },
  { to: '/how-to-use/verifier',    label: 'VERIFIER (VERIFICATION SPOOFER)' },
  { to: '/how-to-use/redeem',      label: 'REDEEM CODE' },
];

export default function Navbar() {
  const [open, setOpen]               = useState(false);
  const [scrolled, setScrolled]       = useState(false);
  const [dropOpen, setDropOpen]       = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate     = useNavigate();
  const profileRef   = useRef(null);
  const dropRef      = useRef(null);

  let user = null;
  try { user = JSON.parse(localStorage.getItem('user') || 'null'); } catch { user = null; }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    function outside(e) {
      if (profileRef.current && !profileRef.current.contains(e.target)) setProfileOpen(false);
      if (dropRef.current    && !dropRef.current.contains(e.target))    setDropOpen(false);
    }
    document.addEventListener('click', outside);
    return () => document.removeEventListener('click', outside);
  }, []);

  const navLinks = [{ to: '/', label: 'HOME' }];
  if (!user) {
    navLinks.push({ to: '/register', label: 'REGISTER' });
    navLinks.push({ to: '/login',    label: 'LOGIN' });
  }
  navLinks.push({ to: '/contact', label: 'CONTACT' });

  return (
    <>
      <style>{`
        .htu-dropdown {
          position: absolute;
          top: calc(100% + 14px);
          left: 50%;
          transform: translateX(-50%);
          background: rgba(8,7,22,0.98);
          backdrop-filter: blur(24px);
          border: 1px solid rgba(109,40,217,0.35);
          border-radius: 14px;
          padding: 8px 0;
          min-width: 260px;
          box-shadow: 0 16px 50px rgba(0,0,0,0.7), 0 0 0 1px rgba(109,40,217,0.1);
          animation: fadeInDown 0.2s ease;
          z-index: 2000;
        }
        .htu-dropdown a {
          display: block;
          padding: 10px 20px;
          color: #94a3b8 !important;
          font-size: 0.78rem !important;
          letter-spacing: 1.2px !important;
          font-weight: 600;
          transition: all 0.2s;
          border-bottom: none !important;
          white-space: nowrap;
        }
        .htu-dropdown a:hover {
          color: #a78bfa !important;
          background: rgba(109,40,217,0.1);
          padding-left: 26px !important;
        }
        .htu-dropdown a::after { display: none !important; }
        .htu-trigger {
          display: flex;
          align-items: center;
          gap: 5px;
          cursor: pointer;
          color: #94a3b8;
          font-weight: 600;
          font-size: 0.82rem;
          letter-spacing: 1.5px;
          padding-bottom: 4px;
          transition: color 0.3s;
          background: none;
          border: none;
          font-family: inherit;
          position: relative;
        }
        .htu-trigger::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 0;
          width: 0; height: 2px;
          background: linear-gradient(90deg, #7c3aed, #06b6d4);
          transition: width 0.3s ease;
        }
        .htu-trigger:hover { color: #fff; }
        .htu-trigger:hover::after,
        .htu-trigger.active::after { width: 100%; }
        .htu-trigger.active { color: #a78bfa; }
        .chevron-icon {
          transition: transform 0.3s;
          display: inline-block;
        }
        .chevron-icon.open { transform: rotate(180deg); }
      `}</style>

      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>

        {/* ── LOGO ── */}
        <Link to="/" style={{ display:'flex', alignItems:'center', textDecoration:'none' }}>
          <img
            src={genieLogo}
            alt="Your Genie"
            style={{ height:95, width:'auto', objectFit:'contain', filter:'drop-shadow(0 0 12px rgba(109,40,217,0.5))' }}
          />
        </Link>

        {/* ── DESKTOP LINKS ── */}
        <div className="navbar__desktop-links" style={{ alignItems:'center' }}>

          {/* HOME */}
          <Link to="/" className={pathname === '/' ? 'active' : ''}>HOME</Link>

          {/* HOW TO USE with dropdown */}
          <div ref={dropRef} style={{ position:'relative' }}>
            <button
              type="button"
              className={`htu-trigger ${pathname.startsWith('/how-to-use') ? 'active' : ''}`}
              onClick={() => setDropOpen(p => !p)}
            >
              HOW TO USE
              <FaChevronDown size={10} className={`chevron-icon ${dropOpen ? 'open' : ''}`} />
            </button>

            {dropOpen && (
              <div className="htu-dropdown">
                {HOW_TO_USE_LINKS.map(l => (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => setDropOpen(false)}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* remaining links */}
          {navLinks.filter(l => l.to !== '/').map(l => (
            <Link key={l.to} to={l.to} className={pathname === l.to ? 'active' : ''}>
              {l.label}
            </Link>
          ))}
        </div>

        {/* ── PROFILE ── */}
        {user && (
          <div className="navbar__profile" ref={profileRef}>
            <div
              title={user.name}
              onClick={() => setProfileOpen(p => !p)}
              style={{
                width:40, height:40, borderRadius:'50%',
                background:'linear-gradient(135deg,#7c3aed,#06b6d4)',
                display:'flex', alignItems:'center', justifyContent:'center',
                color:'white', fontWeight:700, cursor:'pointer', fontSize:'1rem',
                boxShadow:'0 0 20px rgba(109,40,217,0.5)',
                transition:'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform='scale(1.1)'; e.currentTarget.style.boxShadow='0 0 30px rgba(109,40,217,0.7)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform='scale(1)';   e.currentTarget.style.boxShadow='0 0 20px rgba(109,40,217,0.5)'; }}
            >
              {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
            </div>

            {profileOpen && (
              <div style={{
                position:'absolute', right:0, top:56,
                background:'rgba(10,10,26,0.98)', backdropFilter:'blur(20px)',
                border:'1px solid rgba(109,40,217,0.3)', borderRadius:14, padding:8,
                minWidth:180, boxShadow:'0 8px 40px rgba(0,0,0,0.6)',
                animation:'fadeInDown 0.2s ease', zIndex:2001,
              }}>
                <div style={{ padding:'10px 14px', color:'#e2e8f0', fontWeight:700, fontSize:'0.95rem', borderBottom:'1px solid rgba(109,40,217,0.2)', marginBottom:4 }}>
                  {user.name}
                </div>
                <button
                  type="button"
                  onClick={() => { localStorage.removeItem('token'); localStorage.removeItem('user'); setProfileOpen(false); navigate('/'); }}
                  style={{ display:'block', width:'100%', textAlign:'left', padding:'10px 14px', background:'none', border:'none', color:'#fca5a5', cursor:'pointer', borderRadius:8, fontSize:'0.9rem', transition:'background 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.background='rgba(239,68,68,0.1)'}
                  onMouseLeave={e => e.currentTarget.style.background='none'}
                >
                  🚪 Logout
                </button>
              </div>
            )}
          </div>
        )}

        {/* ── MOBILE TOGGLE ── */}
        <div className="navbar__mobile-toggle">
          <button
            type="button"
            onClick={() => setOpen(p => !p)}
            style={{ background:'none', border:'none', color:'white', fontSize:'1.5rem', cursor:'pointer', padding:4 }}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* ── MOBILE MENU ── */}
      <div className={`navbar__mobile-menu ${open ? 'is-open' : ''}`}>
        <Link to="/" onClick={() => setOpen(false)} style={{ display:'flex', alignItems:'center', padding:'14px 0', color: pathname==='/' ? '#a78bfa':'#94a3b8', fontWeight:600, fontSize:'0.9rem', letterSpacing:'1px', borderBottom:'1px solid rgba(109,40,217,0.1)' }}>
          HOME
        </Link>

        {/* Mobile HOW TO USE expanded */}
        <div style={{ borderBottom:'1px solid rgba(109,40,217,0.1)' }}>
          <div style={{ padding:'14px 0', color:'#a78bfa', fontWeight:700, fontSize:'0.9rem', letterSpacing:'1px' }}>HOW TO USE</div>
          {HOW_TO_USE_LINKS.map(l => (
            <Link
              key={l.to} to={l.to}
              onClick={() => setOpen(false)}
              style={{ display:'block', padding:'10px 0 10px 16px', color:'#64748b', fontWeight:600, fontSize:'0.8rem', letterSpacing:'1px' }}
            >
              → {l.label}
            </Link>
          ))}
        </div>

        {navLinks.filter(l => l.to !== '/').map(l => (
          <Link
            key={l.to} to={l.to}
            onClick={() => setOpen(false)}
            style={{ display:'flex', alignItems:'center', padding:'14px 0', color: pathname===l.to ? '#a78bfa':'#94a3b8', fontWeight:600, fontSize:'0.9rem', letterSpacing:'1px', borderBottom:'1px solid rgba(109,40,217,0.1)' }}
          >
            {l.label}
          </Link>
        ))}
      </div>
    </>
  );
}