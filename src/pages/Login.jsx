import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaUniversity, FaEye, FaEyeSlash } from 'react-icons/fa';

export default function Login() {
  const [form, setForm] = useState({ email:'', password:'' });
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async () => {
    if (!form.email || !form.password) { setError('Please fill in all fields'); return; }
    setLoading(true); setError('');
    try {
      const res = await axios.post('https://genie-backend-9ral.onrender.com/api/auth/login', form);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      const params = new URLSearchParams(location.search);
      const next = params.get('next');
      navigate(next || '/');
    } catch (err) {
      setError(err.response?.data?.msg || 'Something went wrong');
    }
    setLoading(false);
  };

  return (
    <div style={{
      minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center',
      padding:'100px 20px',
      background:'radial-gradient(ellipse at top, #1a0d4e 0%, #07071a 60%)',
      position:'relative', overflow:'hidden',
    }}>
      <div style={{ position:'absolute', top:0, left:'50%', transform:'translateX(-50%)', width:600, height:400, background:'radial-gradient(ellipse, rgba(109,40,217,0.12) 0%, transparent 70%)', pointerEvents:'none' }} />

      <div style={{
        width:'100%', maxWidth:440, position:'relative', zIndex:1,
        background:'linear-gradient(145deg, #12112a, #1a1838)',
        border:'1px solid rgba(109,40,217,0.25)',
        borderRadius:24, padding:'48px 40px',
        boxShadow:'0 30px 80px rgba(0,0,0,0.5)',
        animation:'fadeInUp 0.6s ease',
      }}>
        {/* Top accent */}
        <div style={{ position:'absolute', top:0, left:0, right:0, height:2, background:'linear-gradient(90deg, transparent, #7c3aed, #06b6d4, transparent)', borderRadius:'24px 24px 0 0' }} />

        <div style={{ textAlign:'center', marginBottom:36 }}>
          <div style={{
            width:72, height:72, borderRadius:20, margin:'0 auto 20px',
            background:'linear-gradient(135deg, rgba(109,40,217,0.2), rgba(6,182,212,0.1))',
            border:'1px solid rgba(109,40,217,0.3)',
            display:'flex', alignItems:'center', justifyContent:'center',
          }}>
            <FaUniversity size={32} color="#7c3aed" />
          </div>
          <h2 style={{ fontSize:'2rem', fontWeight:900, letterSpacing:'-1px', color:'#e2e8f0' }}>Welcome Back</h2>
          <p style={{ color:'#64748b', marginTop:8, fontSize:'0.95rem' }}>Login to your Genie account</p>
        </div>

        {error && (
          <div style={{
            background:'rgba(239,68,68,0.08)', border:'1px solid rgba(239,68,68,0.25)',
            borderRadius:12, padding:'12px 16px', marginBottom:20,
            color:'#fca5a5', fontSize:'0.88rem', animation:'fadeInUp 0.3s ease',
          }}>{error}</div>
        )}

        <div style={{ display:'flex', flexDirection:'column', gap:16 }}>
          <input
            type="email" placeholder="Email Address"
            value={form.email}
            onChange={e => setForm({ ...form, email:e.target.value })}
            onKeyDown={e => e.key === 'Enter' && handleSubmit()}
          />
          <div style={{ position:'relative' }}>
            <input
              type={showPass ? 'text' : 'password'}
              placeholder="Password"
              value={form.password}
              onChange={e => setForm({ ...form, password:e.target.value })}
              onKeyDown={e => e.key === 'Enter' && handleSubmit()}
              style={{ paddingRight:48 }}
            />
            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              style={{
                position:'absolute', right:14, top:'50%', transform:'translateY(-50%)',
                background:'none', border:'none', color:'#64748b', cursor:'pointer',
                transition:'color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#a78bfa'}
              onMouseLeave={e => e.currentTarget.style.color = '#64748b'}
            >
              {showPass ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <button
            type="button"
            className="btn-primary"
            onClick={handleSubmit}
            disabled={loading}
            style={{ marginTop:8, padding:'15px', fontSize:'1rem', opacity:loading ? 0.7 : 1 }}
          >
            {loading ? '⏳ Logging in...' : 'Login →'}
          </button>
        </div>

        <p style={{ textAlign:'center', marginTop:28, color:'#64748b', fontSize:'0.9rem' }}>
          Don't have an account?{' '}
          <Link to="/register" style={{ color:'#a78bfa', fontWeight:700, transition:'color 0.2s' }}
            onMouseEnter={e => e.target.style.color='#06b6d4'}
            onMouseLeave={e => e.target.style.color='#a78bfa'}
          >Register here</Link>
        </p>
      </div>
    </div>
  );
}