# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Commands

- `npm run dev` - Start development server (http://localhost:3000)
- `npm run build` - Build production bundle
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Architecture

This is a **Next.js 16 App Router** project with **Supabase** backend integration.

### Key Architecture Details

**Server-Side Data Fetching**: The app uses async Server Components (app/page.tsx) to fetch data directly from Supabase. The `supabase` client instance (lib/supabase.ts) is imported and used in server components - no client-side fetching required for initial page load.

**Environment Variables**: Supabase requires two environment variables (defined in lib/supabase.ts):
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

These must be set in `.env.local` or similar environment file.

**Data Model**: The current implementation uses a `bookmarks` table with columns: `id`, `url`, `title`, `category`, `summary`, `created_at`.

### Styling

- **Tailwind CSS v3** with PostCSS (configured via tailwind.config.js)
- **Custom CSS Variables**: Defined in app/globals.css using `@theme inline` for Next.js v4 compatibility
- **Dark Mode**: Uses `prefers-color-scheme: dark` media query for automatic theme switching

### Project Structure

```
app/
  layout.tsx    # Root layout (zh locale, Geist fonts)
  page.tsx      # Home page (bookmark listing)
lib/
  supabase.ts  # Supabase client singleton
```
