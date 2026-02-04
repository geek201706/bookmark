// app/page.tsx
import { supabase } from '@/lib/supabase';
import BookmarksGrid from '@/components/BookmarksGrid';

interface Bookmark {
  id: string;
  url: string;
  title: string | null;
  category: string | null;
  summary: string | null;
  created_at: string;
}

export default async function HomePage() {
  const { data: bookmarks, error } = await supabase
    .from('bookmarks')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching bookmarks:', error);
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 flex items-center justify-center">
        <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-2xl max-w-md text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">加载失败</h2>
          <p className="text-gray-600">请稍后重试</p>
        </div>
      </div>
    );
  }

  return <BookmarksGrid bookmarks={bookmarks || []} />;
}
