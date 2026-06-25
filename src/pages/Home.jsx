import { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaShieldAlt, FaIdCard, FaHandHoldingUsd, FaChartLine, FaLock, FaUsers, FaCheckCircle, FaArrowRight } from 'react-icons/fa';

const testimonials = [
  { name:'Rahul Sharma', role:'Business Owner, Delhi', initials:'RS', color:'#7c3aed', rating:5, text:'Absolutely seamless. Dashboard is clean and everything works perfectly. Best banking service.' },
  { name:'Priya Mehta', role:'Freelancer, Mumbai', initials:'PM', color:'#06b6d4', rating:5, text:'Transfers in seconds, support replies in minutes. Impressed with the speed and reliability.' },
  { name:'Arjun Nair', role:'Startup Founder', initials:'AN', color:'#a78bfa', rating:5, text:'Our whole team uses this for payroll. Zero downtime, zero complaints. Analytics are superb.' },
  { name:'Sneha Patel', role:'Doctor, Ahmedabad', initials:'SP', color:'#06b6d4', rating:5, text:'Security features won me over. Two-factor auth and instant alerts give real peace of mind.' },
  { name:'Vikram Singh', role:'Merchant, Jaipur', initials:'VS', color:'#7c3aed', rating:5, text:'Handles hundreds of transactions daily without a single hiccup. UPI integration is top notch.' },
  { name:'Divya Rao', role:'Student, Hyderabad', initials:'DR', color:'#a78bfa', rating:5, text:'Zero-fee transfers and instant notifications. Perfect for managing my budget!' },
];

const features = [
  { icon: <FaIdCard size={32} />, title: 'CC Manager', desc: 'Manage balances, limits, and activity with a streamlined dashboard built for fast card monitoring.', color: '#7c3aed' },
  { icon: <FaHandHoldingUsd size={32} />, title: 'Verification Bypass', desc: 'Bypass locked checks with smart handling for billing statements, ID verification, and liveness screens.', color: '#06b6d4' },
  { icon: <FaShieldAlt size={32} />, title: 'SMS/OTP Spoofing', desc: 'Access OTP inboxes and track delivery flow to speed up account recovery and confirmation steps.', color: '#7c3aed' },
  { icon: <FaChartLine size={32} />, title: 'Integrated Mailbox', desc: 'Use a connected mailbox to receive order confirmations, shipment updates, and delivery alerts.', color: '#06b6d4' },
  { icon: <FaLock size={32} />, title: 'Secure Location Spoofing', desc: 'Mask your presence with VPN, SOCKS, and RDP tools to keep sessions private and stable.', color: '#7c3aed' },
  { icon: <FaUsers size={32} />, title: '1200+ Automated Methods', desc: 'Run over 1200 automated methods across platforms like Amazon, Apple, Western Union, and Coinbase.', color: '#06b6d4' },
];

const stats = [
  { value: '12+', label: 'Active Developers' },
  { value: '32+', label: 'Months Beta Testing' },
  { value: '2000+', label: 'Satisfied Clients' },
  { value: '15000+', label: 'Carded Orders' },
];

export default function Home() {
  const navigate = useNavigate();
  const revealRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    revealRefs.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const addReveal = (el, delay = '') => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
      if (delay) el.classList.add(`reveal-delay-${delay}`);
    }
    return el;
  };

  const handleGetStarted = (plan, amount) => {
    const token = localStorage.getItem('token');
    const next = `/payment?plan=${plan}&amount=${amount}`;
    if (token) { navigate(next); return; }
    navigate(`/register?next=${encodeURIComponent(next)}`);
  };

  return (
    <div className="page-shell">

      {/* ── HERO ── */}
      <section style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        justifyContent: 'center', textAlign: 'center', padding: '80px 20px',
        background: 'radial-gradient(ellipse at 20% 50%, #2d1069 0%, #0a0a1a 50%, #0d1030 100%)',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Animated orbs */}
        <div style={{ position:'absolute', width:700, height:700, borderRadius:'50%', background:'rgba(109,40,217,0.1)', top:-200, left:-150, filter:'blur(80px)', animation:'floatOrb 10s ease-in-out infinite' }} />
        <div style={{ position:'absolute', width:500, height:500, borderRadius:'50%', background:'rgba(6,182,212,0.08)', bottom:-100, right:-100, filter:'blur(80px)', animation:'floatOrb 14s ease-in-out infinite reverse' }} />
        <div style={{ position:'absolute', width:300, height:300, borderRadius:'50%', background:'rgba(109,40,217,0.07)', top:'40%', right:'15%', filter:'blur(60px)', animation:'floatOrb 8s ease-in-out infinite 2s' }} />

        {/* Grid pattern */}
        <div style={{
          position:'absolute', inset:0, opacity:0.03,
          backgroundImage:'linear-gradient(rgba(109,40,217,1) 1px, transparent 1px), linear-gradient(90deg, rgba(109,40,217,1) 1px, transparent 1px)',
          backgroundSize:'60px 60px',
        }} />

        <div style={{ position:'relative', zIndex:1, maxWidth:900, animation:'fadeInUp 0.9s ease' }}>
          <div className="badge" style={{ marginBottom: 32 }}>
            ✨ Your wish is my command
          </div>

          <h1 style={{
            fontSize: 'clamp(2.8rem, 7vw, 6rem)', fontWeight: 900,
            lineHeight: 1.0, marginBottom: 28, letterSpacing: '-2px',
          }}>
            <span className="gradient-text">Your Own Website</span>
            <br />
            <span style={{
              background: 'linear-gradient(135deg, #a78bfa 0%, #06b6d4 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>Carding Genie</span>
          </h1>

          <p style={{
            fontSize: '1.15rem', color: '#94a3b8', marginBottom: 52,
            lineHeight: 1.9, maxWidth: 560, margin: '0 auto 52px',
          }}>
            Carding Genie is a software designed to make carding automated through Artificial Intelligence.
          </p>

          <div style={{ display:'flex', gap:16, justifyContent:'center', flexWrap:'wrap' }}>
            <button
              type="button"
              className="btn-primary"
              onClick={() => handleGetStarted('basic', 18000)}
              style={{ fontSize:'1.05rem', padding:'16px 44px', display:'flex', alignItems:'center', gap:8 }}
            >
              Get Started Free <FaArrowRight size={14} />
            </button>
            <Link to="/how-to-use">
              <button type="button" className="btn-outline" style={{ fontSize:'1.05rem', padding:'16px 44px' }}>
                How It Works
              </button>
            </Link>
          </div>

          <div style={{ display:'flex', gap:32, justifyContent:'center', marginTop:56, flexWrap:'wrap' }}>
            {['No Hidden Charges', 'Instant Approval', '100% Secure'].map(t => (
              <div key={t} style={{ display:'flex', alignItems:'center', gap:8, color:'#94a3b8', fontSize:'0.88rem' }}>
                <FaCheckCircle color="#7c3aed" size={14} /> {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ background:'linear-gradient(135deg, #4c1d95 0%, #0e7490 100%)', padding:'80px 40px', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', inset:0, background:'rgba(0,0,0,0.3)' }} />
        <div style={{
          maxWidth:1100, margin:'0 auto', position:'relative',
          display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(200px, 1fr))',
          gap:40, textAlign:'center',
        }}>
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="reveal"
              ref={el => addReveal(el, i + 1)}
            >
              <div style={{ fontSize:'3.5rem', fontWeight:900, color:'white', letterSpacing:'-2px', lineHeight:1 }}>{s.value}</div>
              <div style={{ color:'rgba(255,255,255,0.75)', marginTop:10, fontSize:'0.95rem', fontWeight:500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section style={{ background:'#0d0c20', padding:'110px 40px' }}>
        <div style={{ maxWidth:1100, margin:'0 auto' }}>
          <div className="reveal" ref={el => addReveal(el)} style={{ textAlign:'center', marginBottom:70 }}>
            <span className="badge" style={{ marginBottom:16 }}>FEATURES</span>
            <h2 style={{ fontSize:'2.8rem', fontWeight:900, marginBottom:16, letterSpacing:'-1px' }} className="gradient-text">
              Everything You Need
            </h2>
            <p style={{ color:'#64748b', fontSize:'1.1rem', maxWidth:500, margin:'0 auto' }}>
              Powerful tools designed for fast, secure, and efficient workflows
            </p>
          </div>

          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))', gap:24 }}>
            {features.map((f, i) => (
              <div
                key={f.title}
                className="card reveal"
                ref={el => addReveal(el, (i % 3) + 1)}
                style={{ cursor:'default' }}
              >
                <div style={{
                  width:60, height:60, borderRadius:16, marginBottom:20,
                  background:`linear-gradient(135deg, ${f.color}20, ${f.color}10)`,
                  border:`1px solid ${f.color}30`,
                  display:'flex', alignItems:'center', justifyContent:'center',
                  color:f.color, transition:'all 0.3s',
                }}>{f.icon}</div>
                <h3 style={{ fontSize:'1.15rem', fontWeight:700, marginBottom:10, color:'#e2e8f0' }}>{f.title}</h3>
                <p style={{ color:'#64748b', lineHeight:1.8, fontSize:'0.9rem' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section style={{ padding:'110px 40px', background:'#09091a', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)', width:800, height:400, background:'radial-gradient(ellipse, rgba(109,40,217,0.06) 0%, transparent 70%)', pointerEvents:'none' }} />

        <div style={{ maxWidth:1100, margin:'0 auto', position:'relative' }}>
          <div className="reveal" ref={el => addReveal(el)} style={{ textAlign:'center', marginBottom:70 }}>
            <span className="badge" style={{ marginBottom:16 }}>PRICING</span>
            <h2 style={{ fontSize:'2.8rem', fontWeight:900, marginBottom:16, letterSpacing:'-1px' }} className="gradient-text">
              Choose Your Plan
            </h2>
            <p style={{ color:'#64748b', fontSize:'1.1rem' }}>Simple, transparent pricing for everyone</p>
          </div>

          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))', gap:24, alignItems:'center' }}>

            {/* BASIC */}
            <div className="reveal" ref={el => addReveal(el, 1)} style={{
              background:'linear-gradient(145deg, #12112a, #1a1838)',
              border:'1px solid rgba(109,40,217,0.2)',
              borderRadius:24, padding:'40px 32px', textAlign:'center',
              transition:'all 0.3s',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform='translateY(-8px)'; e.currentTarget.style.borderColor='rgba(109,40,217,0.5)'; e.currentTarget.style.boxShadow='0 20px 50px rgba(109,40,217,0.15)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.borderColor='rgba(109,40,217,0.2)'; e.currentTarget.style.boxShadow='none'; }}
            >
              <div style={{ fontSize:'0.75rem', fontWeight:700, color:'#a78bfa', letterSpacing:'3px', marginBottom:6 }}>BASIC</div>
              <div style={{ fontSize:'0.8rem', color:'#64748b', marginBottom:24 }}>PLAN</div>
              <div style={{ marginBottom:32 }}>
                <span style={{ fontSize:'1.1rem', color:'#7c3aed', verticalAlign:'top', marginTop:12, display:'inline-block' }}>₹</span>
                <span style={{ fontSize:'4rem', fontWeight:900, color:'#7c3aed', lineHeight:1 }}>5k</span>
                <span style={{ color:'#64748b', fontSize:'0.85rem' }}>/month</span>
              </div>
              <div style={{ borderTop:'1px solid rgba(109,40,217,0.1)', paddingTop:24, marginBottom:28 }}>
                {['CC MANAGER & INTEGRATED MAILBOX','AVS/API/VELOCITY CHECK BYPASS','PC & IOS/ANDROID SETUP FILE','7 GOLD NON VBV FULLZ CARDS','6 MONTHS LICENSE','23K Genie Points'].map(f => (
                  <div key={f} style={{ display:'flex', alignItems:'flex-start', gap:10, marginBottom:12, textAlign:'left' }}>
                    <span style={{ color:'#7c3aed', marginTop:2 }}>✓</span>
                    <span style={{ color:'#64748b', fontSize:'0.85rem', lineHeight:1.5 }}>{f}</span>
                  </div>
                ))}
              </div>
              <button type="button" className="btn-outline" onClick={() => handleGetStarted('basic', 18000)} style={{ width:'100%', padding:'14px' }}>
                Get Started
              </button>
            </div>

            {/* PRO */}
            <div className="reveal" ref={el => addReveal(el, 2)} style={{
              background:'linear-gradient(145deg, #1e0d4e, #0f1a40)',
              border:'2px solid #7c3aed',
              borderRadius:24, padding:'48px 32px', textAlign:'center',
              position:'relative',
              boxShadow:'0 0 60px rgba(109,40,217,0.3), 0 20px 60px rgba(0,0,0,0.4)',
              transition:'all 0.3s',
              animation:'borderGlow 3s ease-in-out infinite',
            }}>
              <div style={{
                position:'absolute', top:-16, left:'50%', transform:'translateX(-50%)',
                background:'linear-gradient(135deg, #7c3aed, #06b6d4)',
                color:'white', padding:'6px 24px', borderRadius:50,
                fontSize:'0.75rem', fontWeight:700, letterSpacing:'2px',
                boxShadow:'0 4px 20px rgba(109,40,217,0.5)',
              }}>⭐ MOST POPULAR</div>
              <div style={{ fontSize:'0.75rem', fontWeight:700, color:'#c4b5fd', letterSpacing:'3px', marginBottom:6 }}>PRO</div>
              <div style={{ fontSize:'0.8rem', color:'#94a3b8', marginBottom:24 }}>PLAN</div>
              <div style={{ marginBottom:32 }}>
                <span style={{ fontSize:'1.1rem', color:'#06b6d4', verticalAlign:'top', marginTop:12, display:'inline-block' }}>₹</span>
                <span style={{ fontSize:'4rem', fontWeight:900, color:'#06b6d4', lineHeight:1 }}>15k</span>
                <span style={{ color:'#94a3b8', fontSize:'0.85rem' }}>/month</span>
              </div>
              <div style={{ borderTop:'1px solid rgba(109,40,217,0.3)', paddingTop:24, marginBottom:28 }}>
                {['CC MANAGER & INTEGRATED MAILBOX','AVS/API/VELOCITY CHECK BYPASS','ALL METHODS UNLOCKED','7 PLATINUM NON VBV FULLZ CARDS','12 MONTHS LICENSE','60K Genie Points'].map(f => (
                  <div key={f} style={{ display:'flex', alignItems:'flex-start', gap:10, marginBottom:12, textAlign:'left' }}>
                    <span style={{ color:'#06b6d4', marginTop:2 }}>✓</span>
                    <span style={{ color:'#c4b5fd', fontSize:'0.85rem', lineHeight:1.5 }}>{f}</span>
                  </div>
                ))}
              </div>
              <button type="button" className="btn-primary" onClick={() => handleGetStarted('pro', 35000)} style={{ width:'100%', padding:'14px' }}>
                Get Started →
              </button>
            </div>

            {/* ENTERPRISE */}
            <div className="reveal" ref={el => addReveal(el, 3)} style={{
              background:'linear-gradient(145deg, #12112a, #1a1838)',
              border:'1px solid rgba(109,40,217,0.2)',
              borderRadius:24, padding:'40px 32px', textAlign:'center',
              transition:'all 0.3s',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform='translateY(-8px)'; e.currentTarget.style.borderColor='rgba(109,40,217,0.5)'; e.currentTarget.style.boxShadow='0 20px 50px rgba(109,40,217,0.15)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.borderColor='rgba(109,40,217,0.2)'; e.currentTarget.style.boxShadow='none'; }}
            >
              <div style={{ fontSize:'0.75rem', fontWeight:700, color:'#a78bfa', letterSpacing:'3px', marginBottom:6 }}>ENTERPRISE</div>
              <div style={{ fontSize:'0.8rem', color:'#64748b', marginBottom:24 }}>PLAN</div>
              <div style={{ marginBottom:32 }}>
                <span style={{ fontSize:'1.1rem', color:'#7c3aed', verticalAlign:'top', marginTop:12, display:'inline-block' }}>₹</span>
                <span style={{ fontSize:'4rem', fontWeight:900, color:'#7c3aed', lineHeight:1 }}>25k</span>
                <span style={{ color:'#64748b', fontSize:'0.85rem' }}>/month</span>
              </div>
              <div style={{ borderTop:'1px solid rgba(109,40,217,0.1)', paddingTop:24, marginBottom:28 }}>
                {['CC MANAGER & INTEGRATED MAILBOX','AVS/API/VELOCITY CHECK BYPASS','ALL METHODS UNLOCKED','17 BUSINESS NON VBV FULLZ CARDS','LIFETIME LICENSE','180K Genie Points'].map(f => (
                  <div key={f} style={{ display:'flex', alignItems:'flex-start', gap:10, marginBottom:12, textAlign:'left' }}>
                    <span style={{ color:'#7c3aed', marginTop:2 }}>✓</span>
                    <span style={{ color:'#64748b', fontSize:'0.85rem', lineHeight:1.5 }}>{f}</span>
                  </div>
                ))}
              </div>
              <button type="button" className="btn-outline" onClick={() => handleGetStarted('enterprise', 50000)} style={{ width:'100%', padding:'14px' }}>
                Contact Sales
              </button>
            </div>

          </div>
        </div>
      </section>
{/* TestimonialSection  */}

{/* ── TESTIMONIALS ── */}
<section style={{ background:'linear-gradient(180deg,#09091a 0%,#0d0c20 100%)', padding:'110px 0', overflow:'hidden' }}>
  <div style={{ textAlign:'center', maxWidth:600, margin:'0 auto', padding:'0 20px 50px' }}>
    <span className="badge" style={{ marginBottom:16 }}>TESTIMONIALS</span>
    <h2 style={{ fontSize:'2.8rem', fontWeight:900, marginBottom:12, letterSpacing:'-1px' }} className="gradient-text">
      Trusted by Thousands
    </h2>
    <p style={{ color:'#64748b', fontSize:'1.05rem' }}>See what our customers say about us</p>
  </div>

  <div style={{ position:'relative', overflow:'hidden' }}>
    {/* Fade edges */}
    <div style={{ position:'absolute', left:0, top:0, bottom:0, width:100, background:'linear-gradient(to right,#09091a,transparent)', zIndex:2, pointerEvents:'none' }} />
    <div style={{ position:'absolute', right:0, top:0, bottom:0, width:100, background:'linear-gradient(to left,#09091a,transparent)', zIndex:2, pointerEvents:'none' }} />

    <div style={{ display:'flex', gap:24, animation:'testimonialSlide 32s linear infinite', width:'max-content' }}
      onMouseEnter={e => e.currentTarget.style.animationPlayState='paused'}
      onMouseLeave={e => e.currentTarget.style.animationPlayState='running'}
    >
      {[...testimonials, ...testimonials].map((t, i) => (
        <div key={i} style={{
          flexShrink:0, width:300,
          background:'linear-gradient(145deg,#12112a,#1a1838)',
          border:'1px solid rgba(109,40,217,0.22)',
          borderRadius:20, padding:'28px 26px',
          position:'relative',
        }}>
          <div style={{ position:'absolute', top:0, left:0, right:0, height:1, background:'linear-gradient(90deg,transparent,rgba(109,40,217,0.5),transparent)' }} />
          <div style={{ color:'#f59e0b', fontSize:14, letterSpacing:2, marginBottom:14 }}>{'★'.repeat(t.rating)}</div>
          <p style={{ color:'#94a3b8', fontSize:'0.88rem', lineHeight:1.8, marginBottom:20 }}>"{t.text}"</p>
          <div style={{ display:'flex', alignItems:'center', gap:12 }}>
            <div style={{ width:42, height:42, borderRadius:'50%', background:`${t.color}22`, border:`1.5px solid ${t.color}55`, display:'flex', alignItems:'center', justifyContent:'center', color:t.color, fontWeight:700, fontSize:'0.88rem' }}>{t.initials}</div>
            <div>
              <div style={{ color:'#e2e8f0', fontWeight:600, fontSize:'0.9rem' }}>{t.name}</div>
              <div style={{ color:'#64748b', fontSize:'0.78rem', marginTop:2 }}>{t.role}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* ── CTA ── */}
      <section style={{
        textAlign:'center', padding:'110px 40px',
        background:'radial-gradient(ellipse at center, #1e0d5e 0%, #05050f 65%)',
        position:'relative', overflow:'hidden',
      }}>
        <div style={{ position:'absolute', inset:0, opacity:0.03, backgroundImage:'linear-gradient(rgba(109,40,217,1) 1px, transparent 1px), linear-gradient(90deg, rgba(109,40,217,1) 1px, transparent 1px)', backgroundSize:'60px 60px' }} />
        <div className="reveal" ref={el => addReveal(el)} style={{ position:'relative', zIndex:1, maxWidth:600, margin:'0 auto' }}>
          <h2 style={{ fontSize:'clamp(2rem, 5vw, 3.5rem)', fontWeight:900, marginBottom:16, letterSpacing:'-1px' }} className="gradient-text">
            Ready to Get Started?
          </h2>
          <p style={{ color:'#64748b', marginBottom:48, fontSize:'1.1rem', lineHeight:1.8 }}>
            Join 2 million+ customers who trust our services every day.
          </p>
          <Link to="/register">
            <button type="button" className="btn-primary" style={{ fontSize:'1.1rem', padding:'18px 56px' }}>
              Open Free Account →
            </button>
          </Link>
        </div>
      </section>

    </div>
  );
}