import { motion } from "framer-motion";


const skillGroups = [
  {
    title: "Machine Learning & AI",
    color: "bg-pink",
    skills: [
      "Python",
      "scikit-learn",
      "XGBoost",
      "SHAP",
      "RAG / LLMs",
      "MLflow",
      "Groq API",
    ],
  },
  {
    title: "Full-Stack Development",
    color: "bg-skyblue",
    skills: [
      "React",
      "Django",
      "Tailwind CSS",
      "JavaScript",
      "Node.js",
      "Git",
      "MySQL",
      "PostgreSQL",
    ],
  },
  {
    title: "Languages and Tools",
    color: "bg-buttery",
    skills: [
      "c",
      "HTML",
      "CSS",
      "Javascript",
      "Python",
      "R",
      "Figma",
      "Github",
    ],
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


export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6 text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-2"
      >
        Skills
      </motion.h2>
      <div className="w-14 h-1 mx-auto mb-12 rounded bg-[#F1F5F9]" />

      <div className="grid gap-6 max-w-3xl mx-auto sm:grid-cols-1">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            className="bg-[#F1F5F9] rounded-xl2 p-8 shadow-soft border border-[#f1e8fb] text-left"
          >
            <h3 className="text-lg font-semibold text-[#6b4fa0] mb-5 text-center">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-2.5 justify-center">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className={`px-4 py-2 rounded-full text-sm font-semibold text-ink shadow-soft ${group.color}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
