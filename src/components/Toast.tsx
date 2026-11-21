import { CheckCircle2 } from 'lucide-react';

interface ToastProps {
  message: string | null;
}

export function Toast({ message }: ToastProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 pointer-events-none px-4 py-2.5 rounded bg-secondary text-on-secondary font-mono text-xs font-semibold shadow-xl flex items-center gap-2 ${
        message ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
      }`}
    >
      <CheckCircle2 className="w-4 h-4 shrink-0" />
      <span>{message || ''}</span>
    </div>
  );
}
