import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Profile(){
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(()=>{
    try{ const u = JSON.parse(localStorage.getItem('user') || 'null'); setUser(u); }
    catch(e){ setUser(null); }
  },[]);

  if(!user) {
    return (
      <div style={{ paddingTop: 120, minHeight: '60vh', display:'flex', alignItems:'center', justifyContent:'center' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ color:'#94a3b8' }}>No profile found — please login first.</p>
          <button className="btn-primary" onClick={()=>navigate('/login')}>Go to Login</button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: 120, minHeight: '60vh', display:'flex', alignItems:'center', justifyContent:'center' }}>
      <div style={{ background: '#071026', padding: 28, borderRadius: 12, width: '100%', maxWidth: 640 }}>
        <h2 style={{ color: '#e6eef8' }}>{user.name}</h2>
        <p style={{ color: '#9fb0c9', marginTop: 6 }}>{user.email}</p>
        <div style={{ marginTop: 18 }}>
          <p style={{ color: '#cbd5e1' }}>Phone: <strong style={{ color: '#e6eef8' }}>{user.phone || '—'}</strong></p>
        </div>
      </div>
    </div>
  );
}
