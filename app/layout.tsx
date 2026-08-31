import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Deginald | Portrait & Mini Session Photography",
  description:
    "Mini session portrait photography — $75 sessions, 5 edited images, on-location shoots.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600;9..144,700&family=Archivo:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0c0b09] text-[#f2ede4] antialiased">
        {children}
      </body>
    </html>
  );
}
