const items = [
  {
    role: "Your role / internship title",
    org: "Company name — Remote",
    period: "Month – Month Year",
    points: [
      "Point about a responsibility or contribution.",
      "Point about a result or skill applied.",
    ],
  },
  {
    role: "Personal projects & learning",
    org: "Ongoing",
    period: "",
    points: [
      "Built ML projects spanning RAG, explainability, and LLM benchmarking.",
      "Practiced end-to-end delivery: data prep, modeling, evaluation, deployment.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 px-6 text-center bg-gradient-to-b from-[#fff9e6] to-pink"
    >
      <h2 className="text-3xl font-bold mb-2">Experience</h2>
      <div className="w-14 h-1 mx-auto mb-12 rounded bg-gradient-to-r from-pink-deep to-lavender-deep" />

      <div className="max-w-xl mx-auto flex flex-col gap-10 text-left">
        {items.map((item) => (
          <div key={item.role}>
            <h3 className="font-semibold text-center">{item.role}</h3>
            <p className="text-sm text-muted text-center">
              {item.org}
              {item.period && ` — ${item.period}`}
            </p>
            <ul className="mt-3 list-disc list-inside text-sm text-ink space-y-1">
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
