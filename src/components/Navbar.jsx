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
    <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-4xl z-50 bg-base/95 backdrop-blur-md border border-lavender rounded-full ">
      <nav className="flex items-center justify-between px-6 py-3">
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
          className="hidden md:inline-block px-5 py-2 rounded-full text-sm font-semibold text-ink bg-skyblue shadow-soft hover:-translate-y-0.5 transition-transform"
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
        <ul className="md:hidden flex flex-col items-center gap-4 pb-5 bg-base rounded-b-2xl">
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