import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaUniversity, FaEye, FaEyeSlash } from 'react-icons/fa';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    setLoading(true); setError('');
    try {
      const res = await axios.post('https://genie-backend-9ral.onrender.com/api/auth/login', form);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.msg || 'Something went wrong');
    }
    setLoading(false);
  };

  return (
    <div style={{
      paddingTop: 70, minHeight: '100vh', display: 'flex',
      alignItems: 'center', justifyContent: 'center', padding: '100px 20px',
      background: 'radial-gradient(ellipse at top, #1a1a4e 0%, #0a0a1a 60%)'
    }}>
      <div style={{
        background: '#1a1a3e', border: '1px solid rgba(79,70,229,0.3)',
        borderRadius: 20, padding: '50px 40px', width: '100%', maxWidth: 440
      }}>
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <FaUniversity size={40} color="#4f46e5" />
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginTop: 12 }}>Welcome Back</h2>
          <p style={{ color: '#94a3b8', marginTop: 8 }}>Login to your FinServe account</p>
        </div>

        {error && (
          <div style={{
            background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)',
            borderRadius: 8, padding: '12px 16px', marginBottom: 20, color: '#fca5a5', fontSize: '0.9rem'
          }}>{error}</div>
        )}

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <input type="email" placeholder="Email Address"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
          />

          <div style={{ position: 'relative' }}>
            <input
              type={showPass ? 'text' : 'password'}
              placeholder="Password"
              value={form.password}
              onChange={e => setForm({ ...form, password: e.target.value })}
              style={{ paddingRight: 48 }}
            />
            <button onClick={() => setShowPass(!showPass)} style={{
              position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)',
              background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer'
            }}>
              {showPass ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <button className="btn-primary" onClick={handleSubmit}
            disabled={loading}
            style={{ marginTop: 8, padding: '14px', fontSize: '1rem', opacity: loading ? 0.7 : 1 }}>
            {loading ? 'Logging in...' : 'Login →'}
          </button>
        </div>

        <p style={{ textAlign: 'center', marginTop: 24, color: '#94a3b8' }}>
          Don't have an account?{' '}
          <Link to="/register" style={{ color: '#4f46e5', fontWeight: 600 }}>Register here</Link>
        </p>
      </div>
    </div>
  );
}