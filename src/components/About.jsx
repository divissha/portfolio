const cards = [
  {
    icon: "🌸",
    title: "Who I am",
    text: "A builder who likes ML systems that explain themselves, not just predict.",
  },
  {
    icon: "💡",
    title: "What I focus on",
    text: "RAG pipelines, interpretable models, and evidence-backed evaluation.",
  },
  {
    icon: "✨",
    title: "How I work",
    text: "Curious, methodical, and big on measuring what actually matters.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 text-center bg-gradient-to-b from-base to-[#f6effe]"
    >
      <h2 className="text-3xl font-bold mb-2">About me</h2>
      <div className="w-14 h-1 mx-auto mb-12 rounded bg-gradient-to-r from-pink-deep to-lavender-deep" />

      <div className="grid gap-6 max-w-4xl mx-auto sm:grid-cols-2 md:grid-cols-3">
        {cards.map((card) => (
          <div
            key={card.title}
            className="bg-white rounded-xl2 p-8 shadow-soft border border-[#f1e8fb]"
          >
            <div className="text-2xl mb-3">{card.icon}</div>
            <h3 className="text-lg font-semibold text-[#6b4fa0] mb-2">
              {card.title}
            </h3>
            <p className="text-sm text-muted">{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
