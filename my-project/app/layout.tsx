'use client'
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";
import NavBar from '@/components/NavBar'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
          <head>
            {/* Fuente pixelada Press Start 2P */}
            <link
              href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
              rel="stylesheet"
            />
            {/* Font Awesome Icons */}
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
              integrity="sha512-1ycn6Ica999LkUV+xyxK5XekYIXb5vDOM1g4YbNvZpmt7AjV34V1uH4n7x6JqKMekBc9Dgcw51AuvrFzV8C+2g=="
              crossOrigin="anonymous"
              referrerPolicy="no-referrer"
            />
          </head>
          <body className="flex flex-col min-h-screen">
            <NavBar />
            <main className="flex-grow">{children}</main>
          </body>

        </html>
  );
}
