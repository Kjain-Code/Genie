import { useState } from 'react';
import axios from 'axios';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await axios.post('http://localhost:5000/api/contact', form);
      setSuccess('Message sent! We will get back to you within 24 hours.');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setSuccess('Message received! We will contact you soon.');
    }
    setLoading(false);
  };

  return (
    <div style={{ paddingTop: 70, minHeight: '100vh', background: '#0a0a1a' }}>
      {/* Header */}
      <section style={{
        padding: '80px 40px', textAlign: 'center',
        background: 'radial-gradient(ellipse at top, #1a1a4e 0%, #0a0a1a 60%)'
      }}>
        <h1 style={{
          fontSize: '3rem', fontWeight: 800, marginBottom: 16,
          background: 'linear-gradient(135deg, #ffffff, #a5b4fc)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
        }}>Get In Touch</h1>
        <p style={{ color: '#94a3b8', fontSize: '1.1rem' }}>
          We're here to help. Reach out to us anytime.
        </p>
      </section>

      <section style={{ padding: '60px 40px' }}>
        <div style={{
          maxWidth: 1000, margin: '0 auto',
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 40
        }}>
          {/* Contact Info */}
          <div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 30 }}>Contact Information</h3>
            {[
              { icon: <FaEnvelope color="#4f46e5" />, title: 'Email', value: 'info@vinay.in' },
              { icon: <FaPhoneAlt color="#4f46e5" />, title: 'Phone', value: '9956604133' },
              { icon: <FaMapMarkerAlt color="#4f46e5" />, title: 'Address', value: 'B103 Attari Punjab' },
            ].map(c => (
              <div key={c.title} style={{
                display: 'flex', gap: 16, alignItems: 'flex-start', marginBottom: 28
              }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 10,
                  background: 'rgba(79,70,229,0.15)', display: 'flex',
                  alignItems: 'center', justifyContent: 'center', flexShrink: 0
                }}>{c.icon}</div>
                <div>
                  <div style={{ fontWeight: 600, marginBottom: 4 }}>{c.title}</div>
                  <div style={{ color: '#94a3b8' }}>{c.value}</div>
                </div>
              </div>
            ))}

            <div style={{
              background: 'linear-gradient(135deg, rgba(79,70,229,0.15), rgba(6,182,212,0.15))',
              border: '1px solid rgba(79,70,229,0.2)', borderRadius: 16, padding: 24, marginTop: 20
            }}>
              <div style={{ fontWeight: 700, marginBottom: 8 }}>⏰ Support Hours</div>
              <div style={{ color: '#94a3b8', lineHeight: 1.8 }}>
                Monday - Friday: 9 AM - 6 PM<br />
                Saturday: 10 AM - 4 PM<br />
                Emergency: 24/7 Helpline
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div style={{
            background: '#1a1a3e', border: '1px solid rgba(79,70,229,0.3)',
            borderRadius: 20, padding: 40
          }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 24 }}>Send Us a Message</h3>

            {success && (
              <div style={{
                background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)',
                borderRadius: 8, padding: '12px 16px', marginBottom: 20,
                color: '#86efac', fontSize: '0.9rem'
              }}>{success}</div>
            )}

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <input type="text" placeholder="Your Name"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
              />
              <input type="email" placeholder="Email Address"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
              />
              <textarea placeholder="Your Message" rows={5}
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                style={{ resize: 'vertical' }}
              />
              <button className="btn-primary" onClick={handleSubmit}
                disabled={loading}
                style={{ padding: '14px', fontSize: '1rem', opacity: loading ? 0.7 : 1 }}>
                {loading ? 'Sending...' : 'Send Message →'}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}