"use client";

import Link from "next/link";

interface FooterProps {
  email: string;
}

export default function Footer({ email }: FooterProps) {
  return (
    <footer className="border-t border-gray-900 py-14 px-6 md:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[88rem] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm font-light text-gray-500">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
          <a
            href={`mailto:${email}`}
            className="hover:text-white transition-colors"
          >
            {email}
          </a>
          <Link href="/ai-editor" className="hover:text-white transition-colors uppercase tracking-[0.16em] text-[11px]">
            AI Editor
          </Link>
        </div>
        <span>© {new Date().getFullYear()} Aron Paul Orton</span>
      </div>
    </footer>
  );
}
