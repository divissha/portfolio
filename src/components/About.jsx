import { motion } from "framer-motion";

const cards = [
  {
    icon: "",
    text: "I'm a final-year B.Tech student, who enjoys turning ideas into practical, intelligent applications. I work across machine learning, AI, and web development, building everything from predictive models to complete web applications. I focus on RAG pipelines, interpretable models, LLM integration, and evidence-backed evaluation. I'm curious, methodical, and big on measuring what actually matters. Beyond the modeling side, I enjoy the full lifecycle of turning these ideas into real, working products - designing the data pipelines, building the backend logic, and crafting the interfaces that put them in front of actual users. ",
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
      className="py-24 px-6 text-center "
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
      <div className="w-14 h-1 mx-auto mb-12 rounded bg-[#F1F5F9] " />

      <div className="grid gap-6 max-w-3xl mx-auto sm:grid-cols-2 md:grid-cols-1 ">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            className=" rounded-xl p-8 border border-[#f1e8fb]"
          >
            <div className="text-2xl mb-3">{card.icon}</div>
            <p className="text-lg text-[#F1F5F9]">{card.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}