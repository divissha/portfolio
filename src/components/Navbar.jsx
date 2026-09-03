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
    <header
      className="
        fixed top-4 left-1/2 -translate-x-1/2
        w-[92%] max-w-4xl
        z-50
      "
    >
      {/* Main Navbar */}
      <nav
        className="
          relative
          flex items-center justify-between
          px-6 py-3
          bg-base/95 backdrop-blur-md
          border border-lavender
          rounded-full
        "
      >
        {/* Logo */}
        <a
          href="#top"
          className="font-bold text-lg text-ink"
          onClick={() => setOpen(false)}
        >
          Divisha Singh
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="
                  text-sm font-medium text-ink
                  hover:text-pink-deep
                  transition-colors
                "
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Contact Button */}
        <a
          href="#contact"
          className="
            hidden md:inline-block
            px-5 py-2
            rounded-full
            text-sm font-semibold text-ink
            bg-skyblue
            shadow-soft
            hover:-translate-y-0.5
            transition-transform
          "
        >
          Say hi
        </a>

        {/* Mobile Toggle */}
        <button
          className="
            md:hidden
            flex flex-col gap-1.5
            p-2
            rounded-lg
            hover:bg-lavender/30
            transition-colors
          "
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span
            className={`w-6 h-0.5 bg-ink transition-transform ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          />

          <span
            className={`w-6 h-0.5 bg-ink transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />

          <span
            className={`w-6 h-0.5 bg-ink transition-transform ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>

        {/* Mobile Menu */}
        {open && (
          <div
            className="
              absolute
              top-full
              right-0
              mt-3
              w-56
              bg-base/95
              backdrop-blur-md
              border border-lavender
              rounded-2xl
              shadow-soft
              py-4
              md:hidden
            "
          >
            <ul className="flex flex-col">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="
                      block
                      px-6 py-3
                      text-center
                      text-sm
                      font-medium
                      text-ink
                      hover:bg-lavender/30
                      hover:text-pink-deep
                      transition-colors
                    "
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile Say Hi */}
            <div className="px-5 pt-3">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="
                  block
                  w-full
                  px-5 py-2.5
                  rounded-full
                  text-center
                  text-sm font-semibold
                  text-ink
                  bg-skyblue
                  shadow-soft
                "
              >
                Say hi
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}