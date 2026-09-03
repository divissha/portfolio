export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden px-6"
    >
      <div className="relative z-10 max-w-xl">
        <span className="inline-block px-4 py-1.5 rounded-full bg-lavender text-sm font-semibold text-[#6b4fa0] mb-5">
          ML Engineer &amp; Full Stack Developer
        </span>

        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text">
          Hi, I&apos;m Divisha Singh
        </h1>

        <p className="text-lg text-muted mb-8">
          I build the models, the backend, and the interface, turning machine
          learning ideas into complete, working products.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="
              w-full sm:w-auto
              px-7 py-3.5
              rounded-full
              font-bold text-ink
              bg-pink
              hover:-translate-y-1
              transition-transform
            "
          >
            See my projects
          </a>

          <a
            href="/resume.pdf"
            download
            className="
              w-full sm:w-auto
              px-7 py-3.5
              rounded-full
              font-bold text-ink
              bg-pink
              hover:-translate-y-1
              transition-transform
            "
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}