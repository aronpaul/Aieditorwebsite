"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Shell from "./Shell";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/work", label: "Work" },
    { href: "/ai-editor", label: "AI Sequence Editor" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/78 backdrop-blur-xl border-b border-white/10">
      <Shell className="pt-5 md:pt-6">
        <div className="flex items-center justify-between px-0 pb-5">
          <div className="flex items-center gap-12">
            <Link
              href="/"
              className="text-white text-[14px] md:text-[16px] tracking-[0.22em] uppercase whitespace-nowrap hover:text-white/80 transition"
            >
              Aron Paul Orton
            </Link>

            <nav className="hidden md:flex items-center gap-10 text-[12px] tracking-[0.18em] uppercase text-white/72">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  className={`hover:text-white transition ${pathname === link.href ? "text-white" : ""}`}
                  href={link.href}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center gap-2 text-[11px] tracking-[0.24em] uppercase text-white/80 hover:text-white transition whitespace-nowrap"
            >
              Get in touch <span className="opacity-60">→</span>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-white/90 hover:text-white transition"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 border-b border-white/10 pb-5">
            <nav className="flex flex-col gap-4 pt-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-white/80 text-xs tracking-[0.22em] uppercase hover:text-white transition ${pathname === link.href ? "text-white" : ""}`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white text-xs tracking-[0.22em] uppercase hover:text-white transition mt-2"
              >
                Get in touch →
              </Link>
            </nav>
          </div>
        )}
      </Shell>
    </header>
  );
}
