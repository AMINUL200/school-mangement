/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // --- Brand ---
        primary: {
          DEFAULT: 'var(--primary)',
          dark: 'var(--primary-dark)',
          light: 'var(--primary-light)',
          50: 'var(--primary-50)',
          100: 'var(--primary-100)',
          200: 'var(--primary-200)',
          300: 'var(--primary-300)',
          400: 'var(--primary-400)',
          500: 'var(--primary-500)',
          600: 'var(--primary-600)',
          700: 'var(--primary-700)',
          800: 'var(--primary-800)',
          900: 'var(--primary-900)',
        },
        secondary: 'var(--secondary)',

        // --- Surfaces ---
        surface: {
          DEFAULT: 'var(--surface)',
          hover: 'var(--surface-hover)',
          muted: 'var(--surface-muted)',
        },
        background: 'var(--background)',

        // --- Borders ---
        border: {
          DEFAULT: 'var(--border)',
          strong: 'var(--border-strong)',
          focus: 'var(--border-focus)',
        },

        // --- Text ---
        text: {
          DEFAULT: 'var(--text)',
          soft: 'var(--text-soft)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          light: 'var(--muted-light)',
        },

        // --- Semantic ---
        success: {
          DEFAULT: 'var(--success)',
          light: 'var(--success-light)',
          dark: 'var(--success-dark)',
        },
        warning: {
          DEFAULT: 'var(--warning)',
          light: 'var(--warning-light)',
          dark: 'var(--warning-dark)',
        },
        danger: {
          DEFAULT: 'var(--danger)',
          light: 'var(--danger-light)',
          dark: 'var(--danger-dark)',
        },
        info: {
          DEFAULT: 'var(--info)',
          light: 'var(--info-light)',
          dark: 'var(--info-dark)',
        },

        // --- Sidebar ---
        sidebar: {
          DEFAULT: 'var(--sidebar)',
          hover: 'var(--sidebar-hover)',
          text: 'var(--sidebar-text)',
          'text-muted': 'var(--sidebar-text-muted)',
          active: 'var(--sidebar-active)',
          'active-bg': 'var(--sidebar-active-bg)',
          border: 'var(--sidebar-border)',
        },
      },

      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },

      borderRadius: {
        sm: 'var(--radius-sm)',
        DEFAULT: 'var(--radius)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        full: 'var(--radius-full)',
      },

      boxShadow: {
        xs: 'var(--shadow-xs)',
        sm: 'var(--shadow-sm)',
        card: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        xl: 'var(--shadow-xl)',
        primary: 'var(--shadow-primary)',
      },

      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
        bounce: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },

      transitionDuration: {
        fast: '150ms',
        DEFAULT: '250ms',
        slow: '350ms',
      },

      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(16px) scale(0.98)' },
          to: { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        skeleton: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
      },

      animation: {
        'fade-in': 'fadeIn 250ms ease',
        'slide-up': 'slideUp 300ms cubic-bezier(0.16, 1, 0.3, 1)',
        skeleton: 'skeleton 1.5s ease-in-out infinite',
      },

      zIndex: {
        dropdown: '40',
        modal: '50',
        toast: '60',
      },

      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [],
};