import { motion } from "framer-motion";


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

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15 },
  }),
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 px-6 text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-2"
      >
        Experience
      </motion.h2>
      <div className="w-14 h-1 mx-auto mb-12 rounded bg-[#F1F5F9]" />

      <div className="max-w-xl mx-auto flex flex-col gap-10 text-left">
        {items.map((item, i) => (
          <motion.div
            key={item.role}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariants}
          >
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
          </motion.div>
        ))}
      </div>
    </section>
  );
}
