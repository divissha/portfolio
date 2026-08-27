import { useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-base/80 backdrop-blur-md border-b border-lavender">
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#top" className="font-bold text-lg text-ink">
          Divisha Singh
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-ink hover:text-pink-deep transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-block px-5 py-2 rounded-full text-sm font-semibold text-ink bg-gradient-to-r from-pink to-lavender shadow-soft hover:-translate-y-0.5 transition-transform"
        >
          Say hi
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="w-6 h-0.5 bg-ink"></span>
          <span className="w-6 h-0.5 bg-ink"></span>
          <span className="w-6 h-0.5 bg-ink"></span>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul className="md:hidden flex flex-col items-center gap-4 pb-6 bg-base">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
