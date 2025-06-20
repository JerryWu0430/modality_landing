import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Modality",
  description: "Try on anything instantly with AI-powered virtual try-on technology. No models, no shoots, no delays.",
  icons: {
    icon: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
