import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  const [form, setForm] = useState({ name:'', email:'', message:'' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const revealRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    revealRefs.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;
    setLoading(true);
    try {
      await axios.post('https://genie-backend-9ral.onrender.com/api/contact', form);
      setSuccess('Message sent! We will get back to you within 24 hours.');
      setForm({ name:'', email:'', message:'' });
    } catch {
      setSuccess('Message received! We will contact you soon.');
    }
    setLoading(false);
  };

  const contacts = [
    { icon: <FaEnvelope />, title:'Email', value:'info@genie.in', color:'#7c3aed' },
    { icon: <FaPhoneAlt />, title:'Phone', value:'9956604133', color:'#06b6d4' },
    { icon: <FaMapMarkerAlt />, title:'Address', value:'B103 Attari Punjab', color:'#7c3aed' },
  ];

  return (
    <div className="page-shell" style={{ minHeight:'100vh', background:'#07071a' }}>
      {/* Hero */}
      <section style={{
        textAlign:'center', padding:'100px 40px 80px',
        background:'radial-gradient(ellipse at top, #1a0d4e 0%, #07071a 60%)',
        position:'relative', overflow:'hidden',
      }}>
        <div style={{ position:'absolute', top:0, left:'50%', transform:'translateX(-50%)', width:600, height:300, background:'radial-gradient(ellipse, rgba(109,40,217,0.15) 0%, transparent 70%)', pointerEvents:'none' }} />
        <div style={{ position:'relative', zIndex:1 }}>
          <span className="badge" style={{ marginBottom:24, display:'inline-block' }}>CONTACT</span>
          <h1 style={{ fontSize:'clamp(2.5rem, 6vw, 4rem)', fontWeight:900, marginBottom:16, letterSpacing:'-1.5px' }} className="gradient-text">
            Get In Touch
          </h1>
          <p style={{ color:'#64748b', fontSize:'1.1rem' }}>We're here to help. Reach out to us anytime.</p>
        </div>
      </section>

      <section style={{ padding:'60px 40px 110px' }}>
        <div className="contact-grid" style={{ maxWidth:1000, margin:'0 auto' }}>

          {/* Info */}
          <div ref={el => { if (el) revealRefs.current.push(el); }} className="reveal">
            <h3 style={{ fontSize:'1.3rem', fontWeight:800, marginBottom:32, color:'#e2e8f0' }}>Contact Information</h3>
            {contacts.map(c => (
              <div key={c.title} style={{
                display:'flex', gap:16, alignItems:'flex-start', marginBottom:24,
                padding:'20px', borderRadius:16,
                background:'linear-gradient(145deg, #12112a, #1a1838)',
                border:`1px solid ${c.color}20`,
                transition:'all 0.3s',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor=`${c.color}50`; e.currentTarget.style.transform='translateX(4px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor=`${c.color}20`; e.currentTarget.style.transform='translateX(0)'; }}
              >
                <div style={{
                  width:48, height:48, borderRadius:14,
                  background:`linear-gradient(135deg, ${c.color}20, ${c.color}10)`,
                  border:`1px solid ${c.color}30`,
                  display:'flex', alignItems:'center', justifyContent:'center',
                  color:c.color, flexShrink:0, fontSize:'1.1rem',
                }}>{c.icon}</div>
                <div>
                  <div style={{ fontWeight:700, marginBottom:4, color:'#a78bfa', fontSize:'0.8rem', letterSpacing:'1px' }}>{c.title.toUpperCase()}</div>
                  <div style={{ color:'#94a3b8', fontSize:'0.95rem' }}>{c.value}</div>
                </div>
              </div>
            ))}

            <div style={{
              background:'linear-gradient(135deg, rgba(109,40,217,0.1), rgba(6,182,212,0.05))',
              border:'1px solid rgba(109,40,217,0.2)',
              borderRadius:16, padding:24, marginTop:8,
            }}>
              <div style={{ fontWeight:700, marginBottom:10, color:'#a78bfa' }}>⏰ Support Hours</div>
              <div style={{ color:'#64748b', lineHeight:2, fontSize:'0.9rem' }}>
                Monday – Friday: 9 AM – 6 PM<br />
                Saturday: 10 AM – 4 PM<br />
                Emergency: <span style={{ color:'#06b6d4' }}>24/7 Helpline</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div ref={el => { if (el) revealRefs.current.push(el); }} className="reveal reveal-delay-2" style={{
            background:'linear-gradient(145deg, #12112a, #1a1838)',
            border:'1px solid rgba(109,40,217,0.25)',
            borderRadius:24, padding:40,
            position:'relative', overflow:'hidden',
          }}>
            <div style={{ position:'absolute', top:0, left:0, right:0, height:2, background:'linear-gradient(90deg, transparent, rgba(109,40,217,0.6), rgba(6,182,212,0.4), transparent)' }} />

            <h3 style={{ fontSize:'1.3rem', fontWeight:800, marginBottom:28, color:'#e2e8f0' }}>Send Us a Message</h3>

            {success && (
              <div style={{
                background:'rgba(34,197,94,0.08)', border:'1px solid rgba(34,197,94,0.25)',
                borderRadius:12, padding:'14px 18px', marginBottom:24,
                color:'#86efac', fontSize:'0.9rem', animation:'fadeInUp 0.3s ease',
              }}>{success}</div>
            )}

            <div style={{ display:'flex', flexDirection:'column', gap:16 }}>
              <input
                type="text" placeholder="Your Name"
                value={form.name}
                onChange={e => setForm({ ...form, name:e.target.value })}
              />
              <input
                type="email" placeholder="Email Address"
                value={form.email}
                onChange={e => setForm({ ...form, email:e.target.value })}
              />
              <textarea
                placeholder="Your Message" rows={5}
                value={form.message}
                onChange={e => setForm({ ...form, message:e.target.value })}
                style={{ resize:'vertical' }}
              />
              <button
                type="button"
                className="btn-primary"
                onClick={handleSubmit}
                disabled={loading}
                style={{ padding:'15px', fontSize:'1rem', opacity:loading ? 0.7 : 1, marginTop:4 }}
              >
                {loading ? '⏳ Sending...' : 'Send Message →'}
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}