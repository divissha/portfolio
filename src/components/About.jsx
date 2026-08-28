import { motion } from "framer-motion";

const cards = [
  {
    icon: "",
    title: "Who I am",
    text: "A final-year B.Tech student, who enjoys turning ideas into practical, intelligent applications. I work across machine learning, AI, and web development, building everything from predictive models to complete web applications.",
  },
  {
    icon: "",
    title: "What I focus on",
    text: "RAG pipelines, interpretable models, LLM integration, evidence-backed evaluation, and full-stack development.",
  },
  {
    icon: "",
    title: "How I work",
    text: "Curious, methodical, and big on measuring what actually matters.",
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


export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 text-center bg-gradient-to-b from-base to-[#f6effe]"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-2"
      >
        About me
      </motion.h2>
      <div className="w-14 h-1 mx-auto mb-12 rounded bg-gradient-to-r from-pink-deep to-lavender-deep" />

      <div className="grid gap-6 max-w-4xl mx-auto sm:grid-cols-2 md:grid-cols-3">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            className="bg-white rounded-xl2 p-8 shadow-soft border border-[#f1e8fb]"
          >
            <div className="text-2xl mb-3">{card.icon}</div>
            <h3 className="text-lg font-semibold text-[#6b4fa0] mb-2">
              {card.title}
            </h3>
            <p className="text-sm text-muted">{card.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}