export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden px-6"
    >
      <div className="absolute w-96 h-96 bg-pink rounded-full blur-3xl opacity-50 -top-16 -left-16" />
      <div className="absolute w-[420px] h-[420px] bg-lavender rounded-full blur-3xl opacity-50 top-1/4 -right-24" />
      <div className="absolute w-80 h-80 bg-skyblue rounded-full blur-3xl opacity-50 bottom-0 left-1/4" />
      <div className="absolute w-64 h-64 bg-buttery rounded-full blur-3xl opacity-50 bottom-10 right-1/5" />

      <div className="relative z-10 max-w-xl">
        <span className="inline-block px-4 py-1.5 rounded-full bg-lavender text-sm font-semibold text-[#6b4fa0] mb-5">
          ML Engineer &amp; Full Stack Developer
        </span>

        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-pink-deep via-lavender-deep to-skyblue-deep bg-clip-text text-transparent">
          Hi, I&apos;m Divisha Singh
        </h1>

        <p className="text-lg text-muted mb-8">
          I build the models, the backend, and the interface, turning machine learning ideas into complete, working products.
        </p>

        <a
          href="#projects"
          className="inline-block px-8 py-3.5 rounded-full font-bold text-ink bg-gradient-to-r from-pink via-lavender to-skyblue shadow-soft hover:-translate-y-1 transition-transform"
        >
          See my projects
        </a>
      </div>
    </section>
  );
}
