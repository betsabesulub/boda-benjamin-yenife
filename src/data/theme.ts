export const theme = {
  colors: {
    bg: '#f8efe6',
    bgSoft: '#fff3e8',
    surface: '#fff8f0',
    surfaceSoft: 'rgba(255, 248, 240, 0.78)',
    surfaceMuted: '#f1dfcf',
    border: '#e8d2bf',
    text: '#2f2926',
    muted: '#6f5c52',
    primary: '#8f0f16',
    primaryDark: '#6f0b10',
    primarySoft: '#b43a3f',
    accent: '#c7a37a',
    accentSoft: '#e8d2bf',
  },
  fonts: {
    script: '"Allura", "Segoe Script", "Monotype Corsiva", cursive',
    serif: '"Georgia", "Times New Roman", serif',
    body: '"Segoe UI", Arial, sans-serif',
  },
  layout: {
    sectionPadding: '4.5rem 1.25rem',
    borderRadius: '1rem',
    radiusCard: '24px',
    shadowSoft: '0 16px 40px rgba(92, 38, 28, 0.12)',
  },
  decor: {
    patternBg: 'none',
    primary: '#8f0f16',
    secondary: '#c7a37a',
  },
};

export function applyTheme() {
  const root = document.documentElement;

  root.style.setProperty('--color-bg', theme.colors.bg);
  root.style.setProperty('--color-bg-soft', theme.colors.bgSoft);
  root.style.setProperty('--color-surface', theme.colors.surface);
  root.style.setProperty('--color-surface-soft', theme.colors.surfaceSoft);
  root.style.setProperty('--color-surface-muted', theme.colors.surfaceMuted);
  root.style.setProperty('--color-border', theme.colors.border);
  root.style.setProperty('--color-text', theme.colors.text);
  root.style.setProperty('--color-muted', theme.colors.muted);
  root.style.setProperty('--color-primary', theme.colors.primary);
  root.style.setProperty('--color-primary-dark', theme.colors.primaryDark);
  root.style.setProperty('--color-primary-soft', theme.colors.primarySoft);
  root.style.setProperty('--color-accent', theme.colors.accent);
  root.style.setProperty('--color-accent-soft', theme.colors.accentSoft);
  root.style.setProperty('--font-script', theme.fonts.script);
  root.style.setProperty('--font-serif', theme.fonts.serif);
  root.style.setProperty('--font-body', theme.fonts.body);
  root.style.setProperty('--font-title', 'var(--font-serif)');
  root.style.setProperty('--font-hero-title', 'var(--font-script)');
  root.style.setProperty('--font-names', 'var(--font-script)');
  root.style.setProperty('--label-font-family', 'var(--font-serif)');
  root.style.setProperty('--section-padding', theme.layout.sectionPadding);
  root.style.setProperty('--border-radius', theme.layout.borderRadius);
  root.style.setProperty('--radius-card', theme.layout.radiusCard);
  root.style.setProperty('--shadow-soft', theme.layout.shadowSoft);
  root.style.setProperty('--pattern-bg', theme.decor.patternBg);
  root.style.setProperty('--decor-primary', theme.decor.primary);
  root.style.setProperty('--decor-secondary', theme.decor.secondary);
}
