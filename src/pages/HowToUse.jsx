import { FaIdCard, FaUserCheck, FaFileAlt, FaMoneyBillWave } from 'react-icons/fa';

const steps = [
  { icon: <FaUserCheck size={40} color="#4f46e5" />, step: '01', title: 'Create Your Account', desc: 'First, register your account and log in so you can access the service flow securely.' },
  { icon: <FaIdCard size={40} color="#06b6d4" />, step: '02', title: 'Choose a Plan', desc: 'Select any one of the available plans based on your requirements and budget.' },
  { icon: <FaFileAlt size={40} color="#4f46e5" />, step: '03', title: 'Make Payment', desc: 'Proceed to the payment page, scan the QR code, and complete the payment for your selected plan.' },
  { icon: <FaMoneyBillWave size={40} color="#06b6d4" />, step: '04', title: 'Verification & Service', desc: 'After payment is verified, the requested service will be provided to you.' },
];

export default function HowToUse() {
  return (
    <div className="page-shell" style={{ minHeight: '100vh', background: '#0a0a1a' }}>
      <section className="page-hero page-section" style={{
        textAlign: 'center',
        background: 'radial-gradient(ellipse at top, #1a1a4e 0%, #0a0a1a 60%)'
      }}>
        <h1 style={{
          fontSize: '3rem', fontWeight: 800, marginBottom: 16,
          background: 'linear-gradient(135deg, #ffffff, #a5b4fc)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
        }}>How To Use Genie</h1>
        <p style={{ color: '#94a3b8', fontSize: '1.1rem', maxWidth: 600, margin: '0 auto' }}>
          Follow these 4 simple steps to get started with your selected plan and service
        </p>
      </section>

      <section className="content-section page-section" style={{ padding: '80px 40px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          {steps.map((s, i) => (
            <div key={s.step} className={`step-card ${i % 2 === 1 ? 'step-card--reverse' : ''}`} style={{
              marginBottom: 60, flexDirection: i % 2 === 0 ? 'row' : 'row-reverse'
            }}>
              <div style={{
                background: '#1a1a3e', border: '1px solid rgba(79,70,229,0.3)',
                borderRadius: 20, padding: 40, flex: 1, minWidth: 280
              }}>
                <div style={{ marginBottom: 16 }}>{s.icon}</div>
                <div style={{ fontSize: '3rem', fontWeight: 800, color: 'rgba(79,70,229,0.3)', marginBottom: 8 }}>{s.step}</div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: 12 }}>{s.title}</h3>
                <p style={{ color: '#94a3b8', lineHeight: 1.8 }}>{s.desc}</p>
              </div>
              <div style={{
                flex: 1, minWidth: 280, display: 'flex',
                alignItems: 'center', justifyContent: 'center'
              }}>
                <div style={{
                  width: 150, height: 150, borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(79,70,229,0.2), rgba(6,182,212,0.2))',
                  border: '2px solid rgba(79,70,229,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '4rem', fontWeight: 800, color: '#4f46e5'
                }}>{s.step}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}