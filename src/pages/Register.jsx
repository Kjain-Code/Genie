import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaUniversity, FaEye, FaEyeSlash } from 'react-icons/fa';

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', password: '' });
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async () => {
    setLoading(true); setError('');
    try {
      const res = await axios.post('https://genie-backend-9ral.onrender.com/api/auth/register', form);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));

      const params = new URLSearchParams(location.search);
      const next = params.get('next');
      const redirectPath = next ? `/login?next=${encodeURIComponent(next)}` : '/login';
      navigate(redirectPath);
    } catch (err) {
      setError(err.response?.data?.msg || 'Something went wrong');
    }
    setLoading(false);
  };

  return (
    <div className="page-shell page-shell--auth" style={{
      minHeight: '100vh', display: 'flex',
      alignItems: 'center', justifyContent: 'center', padding: '100px 20px',
      background: 'radial-gradient(ellipse at top, #1a1a4e 0%, #0a0a1a 60%)'
    }}>
      <div className="auth-card" style={{
        background: '#1a1a3e', border: '1px solid rgba(79,70,229,0.3)',
        borderRadius: 20, width: '100%', maxWidth: 480
      }}>
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <FaUniversity size={40} color="#4f46e5" />
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginTop: 12 }}>Create Account</h2>
          <p style={{ color: '#94a3b8', marginTop: 8 }}>Join 2M+ customers on FinServe</p>
        </div>

        {error && (
          <div style={{
            background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)',
            borderRadius: 8, padding: '12px 16px', marginBottom: 20, color: '#fca5a5', fontSize: '0.9rem'
          }}>{error}</div>
        )}

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {[
            { key: 'name', placeholder: 'Full Name', type: 'text' },
            { key: 'email', placeholder: 'Email Address', type: 'email' },
            { key: 'phone', placeholder: 'Phone Number', type: 'tel' },
          ].map(f => (
            <input key={f.key} type={f.type} placeholder={f.placeholder}
              value={form[f.key]}
              onChange={e => setForm({ ...form, [f.key]: e.target.value })}
            />
          ))}

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
            {loading ? 'Creating Account...' : 'Create Account →'}
          </button>
        </div>

        <p style={{ textAlign: 'center', marginTop: 24, color: '#94a3b8' }}>
          Already have an account?{' '}
          <Link to="/login" style={{ color: '#4f46e5', fontWeight: 600 }}>Login here</Link>
        </p>
      </div>
    </div>
  );
}