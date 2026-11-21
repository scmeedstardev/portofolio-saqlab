import { useEffect, useState } from 'react';
import { CheckCircle2, Copy, ExternalLink, Send, X } from 'lucide-react';
import { COPY, LINKS, type Language } from '../data/portfolioData';

interface ContactModalProps {
  open: boolean;
  lang: Language;
  onClose: () => void;
  onCopyPhone: () => void;
  onSuccessToast: (message: string) => void;
}

export function ContactModal({
  open,
  lang,
  onClose,
  onCopyPhone,
  onSuccessToast,
}: ContactModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState(COPY.modal.topics[lang][0]);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setTopic(COPY.modal.topics[lang][0]);
  }, [lang]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError(
        lang === 'id'
          ? 'Harap lengkapi nama, email, dan detail pesan Anda.'
          : 'Please fill in your name, email address, and message.'
      );
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError(lang === 'id' ? 'Format email belum valid.' : 'Please enter a valid email address.');
      return;
    }

    setError('');
    setSubmitted(true);
    onSuccessToast(
      lang === 'id' ? 'Pesan siap dikirim ke Samid!' : 'Inquiry recorded for Samid!'
    );
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setMessage('');
    setSubmitted(false);
    setError('');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/50 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl rounded-xl bg-surface text-on-surface shadow-2xl border border-outline-variant/40 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Terminal Bar */}
        <div className="bg-surface-container-low px-6 py-3.5 border-b border-outline-variant/25 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-secondary" aria-hidden="true" />
            <span className="font-mono text-[11px] font-bold text-secondary uppercase tracking-widest">
              {COPY.modal.kicker}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close contact modal"
            className="w-8 h-8 rounded-full bg-surface-container hover:bg-surface-variant flex items-center justify-center text-primary transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="py-6 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-tertiary-fixed text-primary flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 id="contact-modal-title" className="font-display text-2xl font-bold text-primary">
                {COPY.modal.sentTitle[lang]}
              </h3>
              <p className="font-editorial text-[17px] text-on-surface-variant max-w-md mx-auto">
                {COPY.modal.sentDesc[lang]}
              </p>

              <div className="p-4 rounded-lg bg-surface-container-low border border-outline-variant/25 text-left font-mono text-xs space-y-1">
                <div className="text-on-surface-variant">From: {name} ({email})</div>
                <div className="text-secondary font-bold">Topic: {topic}</div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
                <a
                  href={`mailto:${LINKS.email}?subject=${encodeURIComponent(`[Portfolio] ${topic} — ${name}`)}&body=${encodeURIComponent(message)}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-on-primary font-mono text-[11px] font-semibold uppercase tracking-wider hover:bg-secondary transition-colors"
                >
                  <span>Open Email Client</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href={LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-tertiary-fixed text-primary font-mono text-[11px] font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
                >
                  <span>WhatsApp</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-4 py-2.5 rounded-full bg-surface-container text-primary font-mono text-[11px] font-semibold uppercase tracking-wider hover:bg-surface-variant transition-colors cursor-pointer"
                >
                  {COPY.modal.sendAnother[lang]}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <h3 id="contact-modal-title" className="font-display text-2xl font-bold text-primary">
                  {COPY.modal.title[lang]}
                </h3>
                <p className="font-editorial text-[16px] text-on-surface-variant mt-1">
                  {COPY.modal.subtitle[lang]}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-[10px] font-bold uppercase tracking-wider text-on-surface-variant mb-1.5">
                    {COPY.modal.nameLabel[lang]}
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={COPY.modal.namePlaceholder[lang]}
                    className="w-full px-3.5 py-2.5 rounded bg-surface-container-lowest border border-outline-variant/50 focus:border-primary focus:outline-none font-mono text-xs text-primary"
                  />
                </div>
                <div>
                  <label className="block font-mono text-[10px] font-bold uppercase tracking-wider text-on-surface-variant mb-1.5">
                    {COPY.modal.emailLabel[lang]}
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={COPY.modal.emailPlaceholder}
                    className="w-full px-3.5 py-2.5 rounded bg-surface-container-lowest border border-outline-variant/50 focus:border-primary focus:outline-none font-mono text-xs text-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-[10px] font-bold uppercase tracking-wider text-on-surface-variant mb-1.5">
                  {COPY.modal.topicLabel[lang]}
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {COPY.modal.topics[lang].map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setTopic(item)}
                      className={`px-3 py-1.5 rounded font-mono text-[11px] font-semibold transition-all cursor-pointer ${
                        topic === item
                          ? 'bg-primary text-on-primary'
                          : 'bg-surface-container-low text-on-surface-variant hover:text-primary border border-outline-variant/25'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block font-mono text-[10px] font-bold uppercase tracking-wider text-on-surface-variant mb-1.5">
                  {COPY.modal.messageLabel[lang]}
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={COPY.modal.messagePlaceholder[lang]}
                  className="w-full px-3.5 py-2.5 rounded bg-surface-container-lowest border border-outline-variant/50 focus:border-primary focus:outline-none font-mono text-xs text-primary resize-none"
                />
              </div>

              {error && (
                <p className="font-mono text-xs text-secondary font-semibold" role="alert">
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="w-full py-3 rounded-full bg-primary text-on-primary font-mono text-[11px] font-semibold uppercase tracking-wider hover:bg-secondary transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{COPY.modal.submitBtn[lang]}</span>
              </button>

              <div className="pt-3 border-t border-outline-variant/25 flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] text-on-surface-variant">
                <span>{COPY.modal.directAlt[lang]}</span>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={onCopyPhone}
                    className="inline-flex items-center gap-1 text-primary font-bold hover:text-secondary cursor-pointer"
                  >
                    <Copy className="w-3 h-3" />
                    <span>{LINKS.phoneFormatted}</span>
                  </button>
                  <a
                    href={LINKS.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary font-bold hover:underline"
                  >
                    WhatsApp ↗
                  </a>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
