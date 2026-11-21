/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useCallback, useEffect, useRef, useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { ContactFooter } from './components/ContactFooter';
import { ContactModal } from './components/ContactModal';
import { ExperienceSection } from './components/ExperienceSection';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { Toast } from './components/Toast';
import { LINKS, type Language } from './data/portfolioData';

export default function App() {
  const [lang, setLang] = useState<Language>('id');
  const [contactOpen, setContactOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const toastTimerRef = useRef<number | null>(null);

  const showToast = useCallback((msg: string) => {
    setToastMessage(msg);
    if (toastTimerRef.current) {
      window.clearTimeout(toastTimerRef.current);
    }
    toastTimerRef.current = window.setTimeout(() => {
      setToastMessage(null);
    }, 2600);
  }, []);

  useEffect(() => {
    return () => {
      if (toastTimerRef.current) {
        window.clearTimeout(toastTimerRef.current);
      }
    };
  }, []);

  const handleCopyPhone = useCallback(async () => {
    const successText =
      lang === 'id'
        ? `Nomor disalin: ${LINKS.phoneFormatted}`
        : `Phone copied: ${LINKS.phoneFormatted}`;

    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(LINKS.phoneRaw);
      } else {
        const tempInput = document.createElement('textarea');
        tempInput.value = LINKS.phoneRaw;
        tempInput.setAttribute('readonly', '');
        tempInput.style.position = 'fixed';
        tempInput.style.opacity = '0';
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
      }
      showToast(successText);
    } catch {
      showToast(`${LINKS.phoneFormatted}`);
    }
  }, [lang, showToast]);

  return (
    <div className="min-h-screen relative">
      {/* Top-right technical radial hairline grid */}
      <div
        className="pointer-events-none fixed top-0 right-0 w-[42vw] h-[36vh] hairline-grid [mask-image:radial-gradient(ellipse_at_top_right,black_20%,transparent_75%)] opacity-70 z-0"
        aria-hidden="true"
      />

      <Navbar lang={lang} onOpenContact={() => setContactOpen(true)} />

      <main className="w-full pt-14 relative z-10 overflow-x-hidden">
        <HeroSection lang={lang} onChangeLang={setLang} />
        <AboutSection lang={lang} />
        <SkillsSection lang={lang} />
        <ExperienceSection lang={lang} />
        <ProjectsSection lang={lang} />
        <ContactFooter
          lang={lang}
          onOpenContact={() => setContactOpen(true)}
        />
      </main>

      <ContactModal
        open={contactOpen}
        lang={lang}
        onClose={() => setContactOpen(false)}
        onCopyPhone={handleCopyPhone}
        onSuccessToast={showToast}
      />

      <Toast message={toastMessage} />
    </div>
  );
}
