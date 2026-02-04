'use client';

import { useState, useEffect } from 'react';

export type Theme = 'rainbow' | 'minimal' | 'zen' | 'cyberpunk' | 'forest';

const themes = [
  {
    id: 'rainbow' as Theme,
    name: '彩虹',
    icon: '🌈',
    bgClass: 'from-pink-50 via-purple-50 via-blue-50 to-indigo-50',
    headerClass: 'bg-white/80',
    titleGradient: 'from-pink-600 via-purple-600 to-indigo-600',
  },
  {
    id: 'minimal' as Theme,
    name: '极简',
    icon: '⚪',
    bgClass: 'from-gray-50 to-gray-100',
    headerClass: 'bg-white/90',
    titleGradient: 'from-gray-900 to-gray-700',
  },
  {
    id: 'zen' as Theme,
    name: '和风',
    icon: '🌸',
    bgClass: 'from-orange-50 via-pink-50 to-green-50',
    headerClass: 'bg-stone-100/90',
    titleGradient: 'from-amber-700 to-rose-600',
  },
  {
    id: 'cyberpunk' as Theme,
    name: '赛博',
    icon: '🔮',
    bgClass: 'from-gray-900 via-purple-950 to-slate-900',
    headerClass: 'bg-gray-900/90',
    titleGradient: 'from-cyan-400 via-fuchsia-500 to-lime-400',
  },
  {
    id: 'forest' as Theme,
    name: '森林',
    icon: '🌲',
    bgClass: 'from-emerald-50 via-green-50 to-teal-50',
    headerClass: 'bg-emerald-100/90',
    titleGradient: 'from-emerald-700 to-teal-600',
  },
];

interface ThemeSwitcherProps {
  currentTheme: Theme;
  onThemeChange: (theme: Theme) => void;
}

export default function ThemeSwitcher({ currentTheme, onThemeChange }: ThemeSwitcherProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex items-center space-x-2">
      {themes.map((theme) => (
        <button
          key={theme.id}
          onClick={() => onThemeChange(theme.id)}
          className={`
            w-10 h-10 rounded-xl flex items-center justify-center text-lg
            transition-all duration-300 transform hover:scale-110
            ${currentTheme === theme.id
              ? 'ring-2 ring-offset-2 ring-purple-500 shadow-lg scale-110'
              : 'hover:bg-white/50'
            }
          `}
          title={theme.name}
        >
          {theme.icon}
        </button>
      ))}
    </div>
  );
}

export { themes };
