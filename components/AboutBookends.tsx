'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AboutBookendsProps {
  scrollProgress: number;
}

export default function AboutBookends({ scrollProgress }: AboutBookendsProps) {
  const [isMobile, setIsMobile] = useState(false);
  const showIntro = scrollProgress < 0.06;
  const showOutro = scrollProgress > 0.94;

  useEffect(() => {
    const checkRes = () => setIsMobile(window.innerWidth < 768);
    checkRes();
    window.addEventListener('resize', checkRes);
    return () => window.removeEventListener('resize', checkRes);
  }, []);

  return (
    <>
      <AnimatePresence>
        {showIntro && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 7,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              pointerEvents: 'none',
              background: 'radial-gradient(circle, rgba(251, 191, 36, 0.025) 0%, transparent 80%)',
            }}
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              style={{
                textAlign: 'center',
                maxWidth: 680,
                width: isMobile ? 'calc(100% - 2rem)' : '100%',
                margin: isMobile ? '1rem' : '0',
                padding: isMobile ? '1.8rem 1.25rem' : '2.5rem',
                background: 'rgba(5, 12, 8, 0.82)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                borderRadius: '16px',
                backdropFilter: 'blur(12px)',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.4)',
                pointerEvents: 'auto',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: isMobile ? '0.62rem' : '0.7rem',
                  color: 'var(--accent)',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                }}
              >
                Welcome to the Grove
              </span>
              <h1
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.8rem, 5vw, 3.8rem)',
                  fontWeight: 400,
                  color: '#ffffff',
                  margin: '0.8rem 0 1.2rem 0',
                  lineHeight: 1.1,
                  letterSpacing: '-0.03em',
                }}
              >
                VENUGOPALAM CHUKKA
              </h1>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: isMobile ? '0.8rem' : '0.9rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                  margin: '0 0 2rem 0',
                  fontWeight: 300,
                }}
              >
                Creative Frontend Engineering &amp; Interactive Systems.
                <br />
                <span style={{ color: '#f4f6f4', fontWeight: 400 }}>
                  Sculpting silent motion, organic web physics, and breathing digital landscapes.
                </span>
              </p>
              
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.58rem',
                  color: 'var(--text-dim)',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                }}
              >
                <span>Scroll down to enter</span>
                <motion.span
                  animate={{ y: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                >
                  ↓
                </motion.span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showOutro && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 7,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              pointerEvents: 'none',
              background: 'radial-gradient(circle, rgba(251, 191, 36, 0.025) 0%, transparent 80%)',
            }}
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              style={{
                textAlign: 'center',
                maxWidth: 620,
                width: isMobile ? 'calc(100% - 2rem)' : '100%',
                margin: isMobile ? '1rem' : '0',
                padding: isMobile ? '1.8rem 1.25rem' : '2.5rem',
                background: 'rgba(5, 12, 8, 0.85)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                borderRadius: '16px',
                backdropFilter: 'blur(12px)',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.4)',
                pointerEvents: 'auto',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: isMobile ? '0.62rem' : '0.68rem',
                  color: 'var(--accent)',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                }}
              >
                Reaching the Clearing
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: isMobile ? '1.5rem' : '2.2rem',
                  fontWeight: 400,
                  color: '#ffffff',
                  margin: '0.8rem 0 1rem 0',
                  lineHeight: 1.15,
                  letterSpacing: '-0.02em',
                }}
              >
                Let&apos;s grow something beautiful together.
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: isMobile ? '0.78rem' : '0.88rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                  margin: '0 0 2.2rem 0',
                }}
              >
                I design and build interactive web experiences that balance aesthetic calm with high-performance code. If you would like to collaborate, discuss a project, or just say hello, get in touch.
              </p>
              
              <div
                style={{
                  display: 'flex',
                  flexDirection: isMobile ? 'column' : 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: isMobile ? '0.6rem' : '1.2rem',
                  marginBottom: '2.5rem',
                  width: '100%',
                }}
              >
                <motion.a
                  href="mailto:chukkavenugopalam@gmail.com"
                  className="contact-link"
                  whileHover={{ scale: 1.06, borderColor: 'var(--accent)', color: 'var(--accent)' }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: isMobile ? '0.72rem' : '0.8rem',
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    padding: isMobile ? '0.5rem 1.1rem' : '0.6rem 1.3rem',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '9999px',
                    background: 'var(--bg-subtle)',
                    transition: 'border-color 0.3s ease, color 0.3s ease',
                    width: isMobile ? '100%' : 'auto',
                    maxWidth: isMobile ? 260 : 'none',
                    textAlign: 'center',
                  }}
                >
                  ✦ Email
                </motion.a>
                <motion.a
                  href="https://github.com/chukka-venugopalam/Grove"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                  whileHover={{ scale: 1.06, borderColor: 'var(--accent)', color: 'var(--accent)' }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: isMobile ? '0.72rem' : '0.8rem',
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    padding: isMobile ? '0.5rem 1.1rem' : '0.6rem 1.3rem',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '9999px',
                    background: 'var(--bg-subtle)',
                    transition: 'border-color 0.3s ease, color 0.3s ease',
                    width: isMobile ? '100%' : 'auto',
                    maxWidth: isMobile ? 260 : 'none',
                    textAlign: 'center',
                  }}
                >
                  ✦ GitHub
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/venugopalam-chukka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                  whileHover={{ scale: 1.06, borderColor: 'var(--accent)', color: 'var(--accent)' }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: isMobile ? '0.72rem' : '0.8rem',
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    padding: isMobile ? '0.5rem 1.1rem' : '0.6rem 1.3rem',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '9999px',
                    background: 'var(--bg-subtle)',
                    transition: 'border-color 0.3s ease, color 0.3s ease',
                    width: isMobile ? '100%' : 'auto',
                    maxWidth: isMobile ? 260 : 'none',
                    textAlign: 'center',
                  }}
                >
                  ✦ LinkedIn
                </motion.a>
              </div>

              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6rem',
                  color: 'var(--text-dim)',
                  letterSpacing: '0.15em',
                  margin: 0,
                }}
              >
                DRIFT PORTFOLIO • {new Date().getFullYear()}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
