import { motion } from "framer-motion";


const projects = [
  {
    title: "Diabetes RAG evidence synthesizer",
    desc: "Synthesizes drug-class evidence for Type 2 diabetes treatment from PubMed abstracts.",
    tags: ["RAG", "Groq", "Chroma"],
    accent: "border-buttery",
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
  {
    title: "",
    desc: "LLM-powered automated EDA and stress-classification report over sensor data.",
    tags: ["LLMs", "WESAD", "EDA"],
    accent: "border-pink-deep",
    link: "#",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15 },
  }),
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-2"
      >
        Projects
      </motion.h2>
      <div className="w-14 h-1 mx-auto mb-12 rounded bg-[#F1F5F9]" />

      <div className="grid gap-6 max-w-4xl mx-auto sm:grid-cols-2 md:grid-cols-2 text-left">
        {projects.map((p, i) => (
          <motion.a
            key={p.title}
            href={p.link}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            whileHover={{ scale: 1.03, y: -6 }}
            className={`block bg-[#F1F5F9] rounded-xl2 p-6 shadow-soft border-t-4 ${p.accent}`}
          >
            <h3 className="font-semibold text-[#0F172A] mb-2">{p.title}</h3>
            <p className="text-sm text-[#475569] mb-4">{p.desc}</p>
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
          </motion.a>
        ))}
      </div>
    </section>
  );
}
