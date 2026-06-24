import { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaUniversity, FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Read user from localStorage to determine auth state
  let user = null;
  try { user = JSON.parse(localStorage.getItem('user') || 'null'); } catch (e) { user = null; }
  const navigate = useNavigate();
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    }
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const links = [
    { to: '/', label: 'HOME' },
    { to: '/how-to-use', label: 'HOW TO USE' },
  ];

  // If not logged in show register/login links
  if (!user) {
    links.push({ to: '/register', label: 'REGISTER' });
    links.push({ to: '/login', label: 'LOGIN' });
  }

  // Contact is always visible
  links.push({ to: '/contact', label: 'CONTACT' });

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, width: '100%', zIndex: 1000,
        background: 'rgba(10,10,26,0.95)', backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(79,70,229,0.3)',
        padding: '0 40px', display: 'flex',
        alignItems: 'center', justifyContent: 'space-between', height: '70px'
      }}>
        <Link to="/" style={{
          display: 'flex', alignItems: 'center', gap: 10,
          fontSize: '1.4rem', fontWeight: 700, color: '#4f46e5'
        }}>
          <FaUniversity /> YOUR GENIE
        </Link>

        {/* Desktop Links */}
        <div style={{ display: 'flex', gap: 32 }}>
          {links.map(l => (
            <Link key={l.to} to={l.to} style={{
              color: pathname === l.to ? '#4f46e5' : '#e2e8f0',
              fontWeight: 600, fontSize: '0.85rem', letterSpacing: 1,
              borderBottom: pathname === l.to ? '2px solid #4f46e5' : '2px solid transparent',
              paddingBottom: 4, transition: 'all 0.3s'
            }}
              onMouseEnter={e => e.target.style.color = '#4f46e5'}
              onMouseLeave={e => e.target.style.color = pathname === l.to ? '#4f46e5' : '#e2e8f0'}
            >{l.label}</Link>
          ))}
        </div>

        {/* Profile circle when logged in */}
        {user && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, position: 'relative' }} ref={profileRef}>
            <div title={user.name} onClick={() => setProfileOpen(!profileOpen)} style={{
              width: 38, height: 38, borderRadius: 9999, background: '#4f46e5',
              display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white',
              fontWeight: 700, cursor: 'pointer'
            }}>
              {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
            </div>

            {profileOpen && (
              <div style={{
                position: 'absolute', right: 0, top: 56, background: '#0b1220',
                border: '1px solid rgba(79,70,229,0.3)', borderRadius: 10, padding: 8,
                minWidth: 160, boxShadow: '0 8px 24px rgba(2,6,23,0.6)'
              }}>
                <div style={{ padding: '8px 12px', color: '#e6eef8', fontWeight: 700 }}>{user.name}</div>
                <button onClick={() => {
                  localStorage.removeItem('token');
                  localStorage.removeItem('user');
                  setProfileOpen(false);
                  navigate('/');
                }} style={{
                  display: 'block', width: '100%', textAlign: 'left', padding: '8px 12px',
                  background: 'none', border: 'none', color: '#fca5a5', cursor: 'pointer'
                }}>Logout</button>
              </div>
            )}
          </div>
        )}

        {/* Mobile Hamburger */}
        <div style={{ display: 'none' }} className="hamburger">
          <button onClick={() => setOpen(!open)} style={{
            background: 'none', border: 'none', color: 'white',
            fontSize: '1.5rem', cursor: 'pointer'
          }}>
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div style={{
          position: 'fixed', top: 70, left: 0, width: '100%', zIndex: 999,
          background: 'rgba(10,10,26,0.98)', padding: '20px 40px',
          borderBottom: '1px solid rgba(79,70,229,0.3)'
        }}>
          {links.map(l => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)} style={{
              display: 'block', padding: '12px 0',
              color: pathname === l.to ? '#4f46e5' : '#e2e8f0',
              fontWeight: 600, fontSize: '1rem', borderBottom: '1px solid rgba(255,255,255,0.05)'
            }}>{l.label}</Link>
          ))}
        </div>
      )}
    </>
  );
}