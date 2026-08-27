export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 text-center bg-base">
      <h2 className="text-3xl font-bold mb-2">Let&apos;s connect</h2>
      <div className="w-14 h-1 mx-auto mb-10 rounded bg-gradient-to-r from-pink-deep to-lavender-deep" />

      <form className="max-w-md mx-auto flex flex-col gap-4 text-left">
        <input
          type="text"
          placeholder="Your name"
          className="px-4 py-3 rounded-xl border border-lavender focus:outline-none focus:ring-2 focus:ring-lavender-deep"
        />
        <input
          type="email"
          placeholder="Your email"
          className="px-4 py-3 rounded-xl border border-lavender focus:outline-none focus:ring-2 focus:ring-lavender-deep"
        />
        <textarea
          placeholder="Your message"
          rows="4"
          className="px-4 py-3 rounded-xl border border-lavender focus:outline-none focus:ring-2 focus:ring-lavender-deep"
        />
        <button
          type="submit"
          className="px-6 py-3 rounded-full font-semibold text-ink bg-gradient-to-r from-pink via-lavender to-skyblue shadow-soft hover:-translate-y-0.5 transition-transform"
        >
          Send message
        </button>
      </form>
    </section>
  );
}
