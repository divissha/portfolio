const skills = [
  { name: "Python", color: "bg-pink" },
  { name: "XGBoost", color: "bg-lavender" },
  { name: "SHAP", color: "bg-skyblue" },
  { name: "RAG / LLMs", color: "bg-buttery" },
  { name: "scikit-learn", color: "bg-pink" },
  { name: "MLflow", color: "bg-lavender" },
  { name: "Groq API", color: "bg-skyblue" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6 text-center bg-gradient-to-b from-[#f6effe] to-[#e9f5ff]"
    >
      <h2 className="text-3xl font-bold mb-2">Skills</h2>
      <div className="w-14 h-1 mx-auto mb-12 rounded bg-gradient-to-r from-pink-deep to-lavender-deep" />

      <div className="flex flex-wrap justify-center gap-3.5 max-w-2xl mx-auto">
        {skills.map((skill) => (
          <span
            key={skill.name}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold text-ink shadow-soft ${skill.color}`}
          >
            {skill.name}
          </span>
        ))}
      </div>
    </section>
  );
}
