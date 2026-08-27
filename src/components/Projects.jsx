const projects = [
  {
    title: "Diabetes RAG evidence synthesizer",
    desc: "Synthesizes drug-class evidence for Type 2 diabetes treatment from PubMed abstracts.",
    tags: ["RAG", "Groq", "Chroma"],
    accent: "border-pink-deep",
    link: "#",
  },
  {
    title: "Explainable loan default model",
    desc: "XGBoost default prediction with SHAP, Anchors, and counterfactual explanations.",
    tags: ["XGBoost", "SHAP", "Deepchecks"],
    accent: "border-lavender-deep",
    link: "#",
  },
  {
    title: "Wearable stress insight generator",
    desc: "LLM-powered automated EDA and stress-classification report over sensor data.",
    tags: ["LLMs", "WESAD", "EDA"],
    accent: "border-skyblue-deep",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 text-center bg-gradient-to-b from-[#e9f5ff] to-[#fff9e6]"
    >
      <h2 className="text-3xl font-bold mb-2">Projects</h2>
      <div className="w-14 h-1 mx-auto mb-12 rounded bg-gradient-to-r from-pink-deep to-lavender-deep" />

      <div className="grid gap-6 max-w-4xl mx-auto sm:grid-cols-2 md:grid-cols-3 text-left">
        {projects.map((p) => (
          <a
            key={p.title}
            href={p.link}
            className={`block bg-white rounded-xl2 p-6 shadow-soft border-t-4 ${p.accent} hover:-translate-y-1 transition-transform`}
          >
            <h3 className="font-semibold mb-2">{p.title}</h3>
            <p className="text-sm text-muted mb-4">{p.desc}</p>
            <div className="flex flex-wrap gap-1.5">
              {p.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-full bg-[#f6effe] text-[#6b4fa0]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
