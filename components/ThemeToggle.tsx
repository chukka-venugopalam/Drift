'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useThemeContext } from '@/app/providers';
import { themes } from '@/lib/themes';

export default function ThemeToggle() {
  const { theme, setTheme } = useThemeContext();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkRes = () => setIsMobile(window.innerWidth < 768);
    checkRes();
    window.addEventListener('resize', checkRes);
    return () => window.removeEventListener('resize', checkRes);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: isMobile ? '1rem' : '1.5rem',
        right: isMobile ? '1rem' : '1.5rem',
        zIndex: 100,
        display: 'flex',
        gap: isMobile ? '0.4rem' : '0.25rem',
        padding: '4px',
        borderRadius: 9999,
        border: '1px solid var(--card-border)',
        background: 'var(--bg-elevated)',
        backdropFilter: 'blur(12px)',
      }}
    >
      {themes.map((t) => (
        <motion.button
          key={t.id}
          onClick={() => setTheme(t.id)}
          aria-label={`Switch to ${t.label} theme`}
          title={t.label}
          type="button"
          whileHover={{ scale: 1.15, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
          whileTap={{ scale: 0.92 }}
          style={{
            border: 'none',
            background: theme === t.id ? 'var(--accent-glow)' : 'transparent',
            color: theme === t.id ? 'var(--accent)' : 'var(--text-dim)',
            width: isMobile ? 36 : 28,
            height: isMobile ? 36 : 28,
            borderRadius: '50%',
            cursor: 'pointer',
            fontFamily: 'var(--font-mono)',
            fontSize: isMobile ? '0.75rem' : '0.65rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background 0.3s ease, color 0.3s ease',
          }}
        >
          {t.icon}
        </motion.button>
      ))}
    </motion.div>
  );
}
