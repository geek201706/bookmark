'use client';

import { useState } from 'react';
import ThemeSwitcher, { Theme, themes } from './ThemeSwitcher';

interface Bookmark {
  id: string;
  url: string;
  title: string | null;
  category: string | null;
  summary: string | null;
  created_at: string;
}

interface BookmarksGridProps {
  bookmarks: Bookmark[];
}

// Gradient configurations for each theme
const themeGradients = {
  rainbow: [
    'from-pink-400 to-rose-500',
    'from-purple-400 to-indigo-500',
    'from-blue-400 to-cyan-500',
    'from-teal-400 to-emerald-500',
    'from-orange-400 to-amber-500',
    'from-red-400 to-pink-500',
    'from-violet-400 to-purple-500',
    'from-fuchsia-400 to-pink-500',
    'from-cyan-400 to-blue-500',
  ],
  minimal: [
    'from-gray-400 to-gray-600',
    'from-gray-500 to-gray-700',
    'from-gray-400 to-slate-600',
    'from-slate-400 to-gray-600',
    'from-gray-500 to-zinc-700',
    'from-zinc-400 to-gray-600',
    'from-gray-400 to-stone-600',
    'from-stone-400 to-gray-600',
    'from-neutral-400 to-gray-600',
  ],
  zen: [
    'from-pink-300 to-rose-400',
    'from-green-300 to-emerald-400',
    'from-amber-300 to-orange-400',
    'from-red-300 to-pink-400',
    'from-teal-300 to-cyan-400',
    'from-lime-300 to-green-400',
    'from-orange-300 to-amber-400',
    'from-rose-300 to-pink-400',
    'from-emerald-300 to-teal-400',
  ],
  cyberpunk: [
    'from-cyan-400 to-blue-500',
    'from-fuchsia-400 to-pink-500',
    'from-lime-400 to-green-500',
    'from-violet-400 to-purple-500',
    'from-pink-400 to-rose-500',
    'from-blue-400 to-indigo-500',
    'from-green-400 to-emerald-500',
    'from-purple-400 to-violet-500',
    'from-yellow-400 to-orange-500',
  ],
  forest: [
    'from-emerald-400 to-green-500',
    'from-green-400 to-teal-500',
    'from-teal-400 to-cyan-500',
    'from-lime-400 to-emerald-500',
    'from-green-500 to-emerald-600',
    'from-teal-500 to-green-600',
    'from-emerald-500 to-teal-600',
    'from-cyan-400 to-teal-500',
    'from-green-400 to-lime-500',
  ],
};

const backgroundBlobs = {
  rainbow: [
    { color: 'bg-pink-300', top: '20', left: '10', delay: '', opacity: 'opacity-30' },
    { color: 'bg-purple-300', top: '40', right: '10', delay: 'animation-delay-2000', opacity: 'opacity-30' },
    { color: 'bg-indigo-300', bottom: '20', left: '1/2', delay: 'animation-delay-4000', opacity: 'opacity-30' },
  ],
  minimal: [] as Array<{color: string; top?: string; bottom?: string; left?: string; right?: string; delay: string; opacity: string}>,
  zen: [
    { color: 'bg-pink-200', top: '20', left: '10', delay: '', opacity: 'opacity-30' },
    { color: 'bg-green-200', top: '40', right: '10', delay: 'animation-delay-2000', opacity: 'opacity-30' },
    { color: 'bg-amber-200', bottom: '20', left: '1/2', delay: 'animation-delay-4000', opacity: 'opacity-30' },
  ],
  cyberpunk: [
    { color: 'bg-cyan-500', top: '20', left: '10', delay: '', opacity: 'opacity-20' },
    { color: 'bg-fuchsia-500', top: '40', right: '10', delay: 'animation-delay-2000', opacity: 'opacity-20' },
    { color: 'bg-lime-500', bottom: '20', left: '1/2', delay: 'animation-delay-4000', opacity: 'opacity-20' },
  ],
  forest: [
    { color: 'bg-emerald-300', top: '20', left: '10', delay: '', opacity: 'opacity-30' },
    { color: 'bg-green-300', top: '40', right: '10', delay: 'animation-delay-2000', opacity: 'opacity-30' },
    { color: 'bg-teal-300', bottom: '20', left: '1/2', delay: 'animation-delay-4000', opacity: 'opacity-30' },
  ],
};

export default function BookmarksGrid({ bookmarks }: BookmarksGridProps) {
  const [currentTheme, setCurrentTheme] = useState<Theme>('rainbow');

  const theme = themes.find(t => t.id === currentTheme)!;
  const gradients = themeGradients[currentTheme];
  const blobs = backgroundBlobs[currentTheme];
  const isDark = currentTheme === 'cyberpunk';

  return (
    <main className={`min-h-screen bg-gradient-to-br ${theme.bgClass} transition-all duration-500`}>
      {/* Animated Background Blobs */}
      {blobs.length > 0 && (
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {blobs.map((blob, i) => (
            <div
              key={i}
              className={`absolute w-72 h-72 ${blob.color} rounded-full mix-blend-multiply filter blur-xl ${blob.opacity} animate-blob ${blob.delay}`}
              style={{ top: blob.top ? `${blob.top}%` : undefined, bottom: blob.bottom ? `${blob.bottom}%` : undefined, left: blob.left ? `${blob.left === '1/2' ? '50%' : blob.left + 'px'}` : undefined, right: blob.right ? `${blob.right}px` : undefined }}
            ></div>
          ))}
        </div>
      )}

      {/* Header */}
      <header className={`sticky top-0 z-20 ${theme.headerClass} backdrop-blur-xl border-b ${isDark ? 'border-gray-700' : 'border-gray-200/50'} shadow-sm transition-all duration-500`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${theme.titleGradient} flex items-center justify-center shadow-lg`}>
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
              </div>
              <div>
                <h1 className={`text-3xl font-bold bg-gradient-to-r ${theme.titleGradient} bg-clip-text text-transparent`}>
                  我的书签
                </h1>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>收集你的网络宝藏</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              {bookmarks.length > 0 && (
                <div className={`text-sm font-medium bg-gradient-to-r ${currentTheme === 'rainbow' ? 'from-pink-100 to-purple-100 text-purple-700' : currentTheme === 'cyberpunk' ? 'from-cyan-900 to-fuchsia-900 text-cyan-300' : currentTheme === 'zen' ? 'from-pink-100 to-amber-100 text-amber-700' : currentTheme === 'forest' ? 'from-emerald-100 to-teal-100 text-emerald-700' : 'from-gray-100 to-gray-200 text-gray-700'} px-5 py-2.5 rounded-full shadow-sm`}>
                  {bookmarks.length} 个书签
                </div>
              )}
              <ThemeSwitcher currentTheme={currentTheme} onThemeChange={setCurrentTheme} />
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {bookmarks.length === 0 ? (
          <div className="text-center py-20">
            <div className={`w-32 h-32 mx-auto mb-8 rounded-3xl bg-gradient-to-br ${theme.titleGradient} flex items-center justify-center shadow-2xl`}>
              <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
            </div>
            <h2 className={`text-3xl font-bold ${isDark ? 'text-gray-100' : 'text-gray-800'} mb-3`}>暂无书签</h2>
            <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>开始收集你的第一个网络宝藏吧 ✨</p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {bookmarks.map((bookmark, index: number) => {
              const gradient = gradients[index % gradients.length];
              return (
                <div
                  key={bookmark.id}
                  className={`group relative backdrop-blur-sm rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border overflow-hidden ${isDark ? 'bg-gray-800/90 border-gray-700' : 'bg-white/90 border-gray-100'}`}
                >
                  {/* Gradient Top Bar */}
                  <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${gradient}`}></div>

                  {/* Header */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex-1">
                      <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br ${gradient} text-white mb-3 shadow-md`}>
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                        </svg>
                      </div>
                      <h2 className={`text-xl font-bold mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
                        {bookmark.title || '无标题'}
                      </h2>
                      {bookmark.category && (
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${gradient} text-white shadow-sm`}>
                          <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                          </svg>
                          {bookmark.category}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Summary */}
                  {bookmark.summary && (
                    <p className={`mb-5 leading-relaxed line-clamp-3 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {bookmark.summary}
                    </p>
                  )}

                  {/* URL */}
                  <a
                    href={bookmark.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center font-medium text-sm mb-5 group/link ${isDark ? 'text-gray-300 hover:text-cyan-400' : 'text-gray-700 hover:text-transparent hover:bg-gradient-to-r hover:from-pink-600 hover:to-purple-600 hover:bg-clip-text'} transition-all`}
                  >
                    <svg className={`w-4 h-4 mr-2 ${isDark ? 'text-gray-500 group-hover/link:text-cyan-500' : 'text-gray-400 group-hover/link:text-pink-500'} transition-colors`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <span className="truncate flex-1">{bookmark.url}</span>
                  </a>

                  {/* Footer */}
                  <div className={`flex items-center justify-between pt-4 border-t ${isDark ? 'border-gray-700' : 'border-gray-100'}`}>
                    <div className={`flex items-center text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                      <svg className="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{new Date(bookmark.created_at).toLocaleString('zh-CN', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}</span>
                    </div>
                    <button className={`p-2 rounded-xl transition-all ${isDark ? 'hover:bg-gray-700 text-gray-500 hover:text-cyan-400' : 'hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50 text-gray-400 hover:text-purple-600'}`}>
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                      </svg>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}
