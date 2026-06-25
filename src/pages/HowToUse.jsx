import { useEffect, useRef } from 'react';
import { FaUserCheck, FaIdCard, FaFileAlt, FaMoneyBillWave } from 'react-icons/fa';

const steps = [
  { icon: <FaUserCheck size={36} />, step: '01', title: 'Create Your Account', desc: 'Register your account and log in to access the service flow securely and instantly.', color: '#7c3aed' },
  { icon: <FaIdCard size={36} />, step: '02', title: 'Choose a Plan', desc: 'Select any one of the available plans based on your requirements and budget.', color: '#06b6d4' },
  { icon: <FaFileAlt size={36} />, step: '03', title: 'Make Payment', desc: 'Proceed to the payment page, scan the QR code, and complete payment for your selected plan.', color: '#7c3aed' },
  { icon: <FaMoneyBillWave size={36} />, step: '04', title: 'Verification & Service', desc: 'After payment is verified, the requested service will be provided to you instantly.', color: '#06b6d4' },
];

export default function HowToUse() {
  const revealRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.15 }
    );
    revealRefs.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

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
          <span className="badge" style={{ marginBottom:24, display:'inline-block' }}>GUIDE</span>
          <h1 style={{ fontSize:'clamp(2.5rem, 6vw, 4rem)', fontWeight:900, marginBottom:16, letterSpacing:'-1.5px' }} className="gradient-text">
            How To Use Genie
          </h1>
          <p style={{ color:'#64748b', fontSize:'1.1rem', maxWidth:500, margin:'0 auto', lineHeight:1.8 }}>
            Follow these 4 simple steps to get started with your selected plan and service
          </p>
        </div>
      </section>

      {/* Steps */}
      <section style={{ padding:'80px 40px 110px', maxWidth:1000, margin:'0 auto' }}>
        {steps.map((s, i) => (
          <div
            key={s.step}
            className="reveal"
            ref={el => { if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el); }}
            style={{
              display:'flex', gap:48, alignItems:'center',
              marginBottom:64, flexWrap:'wrap',
              flexDirection: i % 2 === 0 ? 'row' : 'row-reverse',
            }}
          >
            {/* Card */}
            <div style={{
              flex:1, minWidth:280,
              background:'linear-gradient(145deg, #12112a, #1a1838)',
              border:`1px solid ${s.color}30`,
              borderRadius:24, padding:'40px',
              transition:'all 0.3s',
              position:'relative', overflow:'hidden',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = `${s.color}60`;
                e.currentTarget.style.boxShadow = `0 20px 50px ${s.color}15`;
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = `${s.color}30`;
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Top accent line */}
              <div style={{ position:'absolute', top:0, left:0, right:0, height:2, background:`linear-gradient(90deg, transparent, ${s.color}, transparent)`, opacity:0.6 }} />

              <div style={{
                width:64, height:64, borderRadius:18, marginBottom:20,
                background:`linear-gradient(135deg, ${s.color}20, ${s.color}10)`,
                border:`1px solid ${s.color}30`,
                display:'flex', alignItems:'center', justifyContent:'center',
                color:s.color,
              }}>{s.icon}</div>

              <div style={{ fontSize:'0.75rem', fontWeight:700, color:s.color, letterSpacing:'2px', marginBottom:8 }}>STEP {s.step}</div>
              <h3 style={{ fontSize:'1.4rem', fontWeight:800, marginBottom:12, color:'#e2e8f0' }}>{s.title}</h3>
              <p style={{ color:'#64748b', lineHeight:1.9, fontSize:'0.95rem' }}>{s.desc}</p>
            </div>

            {/* Circle */}
            <div style={{ flex:1, minWidth:200, display:'flex', alignItems:'center', justifyContent:'center' }}>
              <div style={{
                width:160, height:160, borderRadius:'50%',
                background:`linear-gradient(135deg, ${s.color}15, ${s.color}05)`,
                border:`2px solid ${s.color}30`,
                display:'flex', alignItems:'center', justifyContent:'center',
                fontSize:'4.5rem', fontWeight:900, color:s.color,
                boxShadow:`0 0 60px ${s.color}20, inset 0 0 40px ${s.color}05`,
                fontFamily:'monospace',
                transition:'all 0.3s',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'scale(1.08) rotate(5deg)';
                  e.currentTarget.style.boxShadow = `0 0 80px ${s.color}35, inset 0 0 40px ${s.color}10`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                  e.currentTarget.style.boxShadow = `0 0 60px ${s.color}20, inset 0 0 40px ${s.color}05`;
                }}
              >
                {s.step}
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}