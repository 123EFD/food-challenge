'use client';
import { useState, FormEvent } from 'react';

interface SubscribeModalProps {
  buttonClassName?: string;
  buttonLabel?: string;
}

export default function SubscribeModal({ 
  buttonClassName = "subscribe-btn", 
  buttonLabel = "🔔 Subscribe" 
}: SubscribeModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setIsSubmitted(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail('');
    }, 300);
  };

  return (
    <>
      <button 
        type="button"
        className={buttonClassName}
        onClick={() => setIsOpen(true)}
        aria-label="Subscribe for updates"
      >
        {buttonLabel}
      </button>

      {isOpen && (
        <div className="modal-backdrop" onClick={handleClose}>
          <div 
            className="modal-content glass-container" 
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button 
              type="button" 
              className="modal-close-btn" 
              onClick={handleClose}
              aria-label="Close modal"
            >
              ✕
            </button>

            {!isSubmitted ? (
              <>
                <div className="modal-header">
                  <span className="modal-icon">🍜</span>
                  <h3 style={{ fontFamily: 'var(--font-heading)' }}>Stay in the Loop!</h3>
                  <p>Never miss a hidden food spot. Get instant alerts when new affordable food stalls near LRT & MRT stations are added.</p>
                </div>

                <form onSubmit={handleSubmit} className="subscribe-form">
                  <input 
                    type="email" 
                    placeholder="Enter your email address..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="subscribe-input"
                    required
                    autoFocus
                  />
                  <button type="submit" className="btn subscribe-submit-btn">
                    Subscribe for Updates
                  </button>
                </form>
                <p className="modal-privacy">No spam ever. Unsubscribe anytime.</p>
              </>
            ) : (
              <div className="modal-success">
                <span className="modal-success-icon">🎉</span>
                <h3 style={{ fontFamily: 'var(--font-heading)' }}>Terima Kasih!</h3>
                <p>You&apos;re officially on the list! We&apos;ll send you fresh Malaysian food recommendations and transit guides straight to <strong>{email}</strong>.</p>
                <button type="button" className="btn" onClick={handleClose} style={{ marginTop: '20px' }}>
                  Back to Discovering
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
