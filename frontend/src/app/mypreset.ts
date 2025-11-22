// mypreset.ts
import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

const generateShades = (color: string) => ({
  50: `{${color}.50}`,
  100: `{${color}.100}`,
  200: `{${color}.200}`,
  300: `{${color}.300}`,
  400: `{${color}.400}`,
  500: `{${color}.500}`,
  600: `{${color}.600}`,
  700: `{${color}.700}`,
  800: `{${color}.800}`,
  900: `{${color}.900}`,
  950: `{${color}.950}`
});

const MyPreset = definePreset(Aura, {
  semantic: {
    colorScheme: {
      light: {
        // Cor principal: azul-água para destaque
        primary: generateShades('orange'),
        // Superfícies
        surface: {
          0: '#ffffff',       // fundo principal
          50: '#f9fafb',      // fundo de cards
          100: '#f3f4f6',     // seções
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',     // textos secundários
          600: '#ffffff',
          700: '#374151',
          800: '#1f2937',     // textos principais
          900: '#111827',
          950: '#0a0e16'
        }
      },
      dark: {
        // Cor principal: azul-ciano escuro para contraste
        primary: generateShades('orange'),
        // Superfícies
        surface: {
          0: '#121212',       // fundo principal
          50: '#1a1a1a',      // fundo de cards
          100: '#222222',     // seções
          200: '#2c2c2c',
          300: '#383838',
          400: '#4b4b4b',
          500: '#ffffff',     // textos secundários
          600: '#757575',
          700: '#9e9e9e',
          800: '#cfcfcf',     // textos principais
          900: '#f5f5f5',
          950: '#fafafa'
        }
      }
    }
  }
});

export default MyPreset;
