// app/layout.tsx
import './globals.css';
import '@/lib/fontawesome'; 

import type { Metadata } from 'next';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'The Old Reliable',
  description: 'Consolas, Juegos y más...',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        {/* Fuente pixelada */}
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
          rel="stylesheet"
        />
        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ5ZtI6WjvRxkKqUFpCq1E9ZL1FZ6hN1ZNh3z9KfXKZ1uYqWjUuZx+E6Isb3r9ts8BQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className="flex flex-col min-h-screen bg-white text-black">
        <NavBar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
