"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/work", label: "Work" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-black/45 to-black/15 backdrop-blur-lg transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
      <div className="mx-auto max-w-7xl px-10 h-[120px] grid grid-cols-3 items-center">
        
        {/* Left: Name */}
        <div className="justify-self-start">
          <Link href="/">
            <span className="text-sm tracking-widest text-white/80 whitespace-nowrap hover:text-white transition">
              ARON PAUL ORTON
            </span>
          </Link>
        </div>

        {/* Center: Navigation */}
        <nav className="justify-self-center flex gap-12 text-sm tracking-wide text-white/75">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-white transition ${
                pathname === link.href ? "text-white" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right: Invisible spacer for symmetry */}
        <div className="justify-self-end opacity-0 select-none whitespace-nowrap">
          ARON PAUL ORTON
        </div>

      </div>
    </header>
  );
}
