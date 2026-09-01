import { motion } from "framer-motion";

const certifications = [
  {
    title: "Artificial Intelligence & Robotics Trainee",
    issuer: "Center for Intelligent Robotics, IIIT Allahabad",
    date: "Jul 2025 - Aug 2025",
    points: [
      "Completed a two-week intensive training program in Artificial Intelligence and Robotics.",
      "Gained exposure to AI fundamentals, machine learning concepts, intelligent systems, and robotics applications.",
      "Participated in hands-on learning activities and practical sessions focused on AI-driven solutions.",
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

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-24 px-6 text-center "
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-2"
      >
        Certifications
      </motion.h2>
      <div className="w-14 h-1 mx-auto mb-12 rounded bg-[#F1F5F9]" />

      <div className="grid gap-6 max-w-4xl mx-auto sm:grid-cols-2 md:grid-cols-1 text-left">
        {certifications.map((cert, i) => (
          <motion.a
            key={cert.title + cert.date}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            whileHover={{ scale: 1.03, y: -6 }}
            className="block bg-white rounded-xl2 p-6  border border-[#f1e8fb]"
          >
            <div className="text-2xl mb-3"></div>
            <h3 className="font-semibold text-[#0F172A] mb-1">{cert.title}</h3>
            <p className="text-sm text-muted mb-1">{cert.issuer}</p>
            <p className="text-sm mb-7 text-[#6b4fa0] font-medium">{cert.date}</p>
            <ul className="list-disc list-inside text-sm text-ink space-y-1">
              {cert.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </motion.a>
        ))}
      </div>
    </section>
  );
}