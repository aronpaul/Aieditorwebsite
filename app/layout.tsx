import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../src/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aron Paul Orton | AI Sequence Editor for Film, Commercial, and Sequence Work",
  description: "Veteran film and commercial editor using AI-native workflows for cinematic post-production, AI-enhanced editing, sequence direction, and premium creative execution.",
  keywords: [
    "AI editor",
    "AI film editor",
    "AI video editor",
    "commercial editor",
    "AI commercial editor",
    "AI-native editor",
    "sequence director",
    "AI post production",
    "film editor",
    "AI filmmaking"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: "Aron Paul Orton",
        jobTitle: "AI Sequence Editor",
        description:
          "Veteran film and commercial editor using AI-native workflows for cinematic post-production, sequence direction, and premium creative execution.",
        url: "https://aronpaulorton.com",
        email: "mailto:aorton@mac.com",
        knowsAbout: [
          "AI editing",
          "Film editing",
          "Commercial editing",
          "AI post production",
          "Sequence direction",
          "Cinematic workflows"
        ]
      },
      {
        "@type": "WebSite",
        name: "Aron Paul Orton",
        url: "https://aronpaulorton.com",
        description:
          "Portfolio and business site for Aron Paul Orton, AI editor for film, commercial, and sequence work."
      }
    ]
  };

  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Header />
        {children}
      </body>
    </html>
  );
}
