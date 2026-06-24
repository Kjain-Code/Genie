import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import qrImage from '../assets/qr.png';

const planMeta = {
  basic: { title: 'Basic Plan', amount: 18000 },
  pro: { title: 'Pro Plan', amount: 35000 },
  enterprise: { title: 'Enterprise Plan', amount: 50000 },
};

export default function Payment() {
  const [paymentDone, setPaymentDone] = useState(false);
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const planKey = params.get('plan') || 'basic';
  const selectedPlan = planMeta[planKey] || planMeta.basic;
  const amount = Number(params.get('amount') || selectedPlan.amount);
  const paymentMessage = `Hello Genie, I want to pay ₹${amount} for ${selectedPlan.title}.`;
  const confirmationMessage = `Hello Genie, I have done the payment for ${selectedPlan.title} of ₹${amount}. Please verify and provide the service.`;
  const whatsappUrl = `https://wa.me/919956604133?text=${encodeURIComponent(paymentMessage)}`;
  const confirmationUrl = `https://wa.me/919956604133?text=${encodeURIComponent(confirmationMessage)}`;

  return (
    <div style={{ minHeight: '100vh', padding: '110px 24px 80px', background: 'linear-gradient(135deg, #0f0e17 0%, #1a1635 100%)' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(99,102,241,0.25)', borderRadius: 24, padding: '36px', boxShadow: '0 20px 50px rgba(0,0,0,0.25)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12, marginBottom: 24 }}>
          <div>
            <p style={{ color: '#a5b4fc', marginBottom: 8, letterSpacing: 2, textTransform: 'uppercase', fontSize: '0.85rem' }}>Secure Payment</p>
            <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'white', margin: 0 }}>{selectedPlan.title}</h1>
          </div>
          <Link to="/" style={{ color: '#22d3ee', textDecoration: 'none', fontWeight: 700 }}>← Back Home</Link>
        </div>

        {paymentDone ? (
          <div style={{ marginTop: 24, padding: '20px 24px', borderRadius: 16, background: 'rgba(34,211,238,0.12)', border: '1px solid rgba(34,211,238,0.25)', color: '#d1fae5' }}>
            <h3 style={{ marginBottom: 8, color: '#22d3ee' }}>Please wait, we are verifying your payment</h3>
            <p style={{ margin: 0, color: '#c7d2fe', lineHeight: 1.7 }}>We will confirm your payment for this plan shortly. Thank you for your patience.</p>
          </div>
        ) : null}

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 28, alignItems: 'center' }}>
          <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: 20, padding: 24 }}>
            <p style={{ color: '#a0a0c0', marginBottom: 12 }}>Amount to pay</p>
            <div style={{ fontSize: '3rem', fontWeight: 900, color: '#22d3ee', marginBottom: 8 }}>₹{amount.toLocaleString()}</div>
            <p style={{ color: '#c7d2fe', lineHeight: 1.7 }}>
              Scan the QR code to complete your payment for this plan. The amount is already selected for you.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 16 }}>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-block', padding: '12px 18px', borderRadius: 999, background: 'linear-gradient(135deg, #25D366, #128C7E)', color: 'white', textDecoration: 'none', fontWeight: 700 }}
              >
                Chat on WhatsApp
              </a>
              <a
                href={confirmationUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setPaymentDone(true)}
                style={{ display: 'inline-block', padding: '12px 18px', borderRadius: 999, border: '1px solid rgba(34,211,238,0.35)', background: 'rgba(34,211,238,0.12)', color: '#22d3ee', textDecoration: 'none', fontWeight: 700 }}
              >
                Done
              </a>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <img src={qrImage} alt={`Payment QR for ${selectedPlan.title}`} style={{ width: 240, height: 240, display: 'block', margin: '0 auto' }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
