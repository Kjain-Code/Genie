import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUniversity, FaEnvelope, FaPhone, FaUser } from 'react-icons/fa';

export default function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    try { const u = JSON.parse(localStorage.getItem('user') || 'null'); setUser(u); }
    catch (e) { setUser(null); }
  }, []);

  if (!user) {
    return (
      <div style={{
        paddingTop:120, minHeight:'60vh', display:'flex',
        alignItems:'center', justifyContent:'center',
        background:'#07071a',
      }}>
        <div style={{ textAlign:'center', animation:'fadeInUp 0.6s ease' }}>
          <div style={{ fontSize:'4rem', marginBottom:16 }}>🔒</div>
          <p style={{ color:'#64748b', marginBottom:24, fontSize:'1.1rem' }}>No profile found — please login first.</p>
          <button type="button" className="btn-primary" onClick={() => navigate('/login')}>Go to Login</button>
        </div>
      </div>
    );
  }

  const initial = user.name ? user.name.charAt(0).toUpperCase() : 'U';

  return (
    <div style={{
      paddingTop:120, minHeight:'80vh', display:'flex',
      alignItems:'center', justifyContent:'center',
      padding:'120px 20px 60px',
      background:'radial-gradient(ellipse at top, #1a0d4e 0%, #07071a 60%)',
    }}>
      <div style={{
        width:'100%', maxWidth:560,
        background:'linear-gradient(145deg, #12112a, #1a1838)',
        border:'1px solid rgba(109,40,217,0.25)',
        borderRadius:24, overflow:'hidden',
        boxShadow:'0 30px 80px rgba(0,0,0,0.5)',
        animation:'fadeInUp 0.6s ease',
      }}>
        {/* Top accent */}
        <div style={{ height:3, background:'linear-gradient(90deg, #7c3aed, #06b6d4)' }} />

        {/* Header */}
        <div style={{
          padding:'40px 40px 30px', textAlign:'center',
          borderBottom:'1px solid rgba(109,40,217,0.15)',
          background:'linear-gradient(135deg, rgba(109,40,217,0.05), transparent)',
        }}>
          <div style={{
            width:90, height:90, borderRadius:'50%',
            background:'linear-gradient(135deg, #7c3aed, #06b6d4)',
            display:'flex', alignItems:'center', justifyContent:'center',
            color:'white', fontWeight:900, fontSize:'2.2rem',
            margin:'0 auto 20px',
            boxShadow:'0 0 40px rgba(109,40,217,0.5)',
          }}>{initial}</div>
          <h2 style={{ fontSize:'1.8rem', fontWeight:900, color:'#e2e8f0', letterSpacing:'-0.5px' }}>{user.name}</h2>
          <p style={{ color:'#64748b', marginTop:6, fontSize:'0.9rem' }}>Genie Member</p>
        </div>

        {/* Details */}
        <div style={{ padding:'30px 40px 40px' }}>
          {[
            { icon:<FaUser />, label:'Full Name', value:user.name },
            { icon:<FaEnvelope />, label:'Email', value:user.email },
            { icon:<FaPhone />, label:'Phone', value:user.phone || '—' },
          ].map(item => (
            <div key={item.label} style={{
              display:'flex', gap:16, alignItems:'center',
              padding:'16px 0', borderBottom:'1px solid rgba(109,40,217,0.08)',
            }}>
              <div style={{
                width:40, height:40, borderRadius:12,
                background:'rgba(109,40,217,0.1)',
                border:'1px solid rgba(109,40,217,0.2)',
                display:'flex', alignItems:'center', justifyContent:'center',
                color:'#7c3aed', fontSize:'0.9rem', flexShrink:0,
              }}>{item.icon}</div>
              <div>
                <div style={{ fontSize:'0.75rem', color:'#64748b', fontWeight:600, letterSpacing:'1px', marginBottom:2 }}>{item.label.toUpperCase()}</div>
                <div style={{ color:'#e2e8f0', fontWeight:600, fontSize:'0.95rem' }}>{item.value}</div>
              </div>
            </div>
          ))}

          <button
            type="button"
            className="btn-primary"
            onClick={() => {
              localStorage.removeItem('token');
              localStorage.removeItem('user');
              navigate('/');
            }}
            style={{ width:'100%', padding:'14px', marginTop:28, fontSize:'1rem' }}
          >
            🚪 Logout
          </button>
        </div>
      </div>
    </div>
  );
}