import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";


const FORM_ENDPOINT = "https://formspree.io/f/mjyvvgqr";


const socialLinks = [
  {
    label: "Gmail",
    href: "mailto:youremail@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/your-username",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/divissha",
    icon: Github,
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.target),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 px-6 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-2"
      >
        Let&apos;s connect
      </motion.h2>
      <div className="w-14 h-1 mx-auto mb-10 rounded bg-[#F1F5F9]" />




      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center gap-4 mb-10"
      >
        {socialLinks.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            aria-label={label}
            className="w-11 h-11 flex items-center justify-center rounded-full bg-lavender text-ink shadow-soft hover:-translate-y-1 hover:bg-pink transition-all"
          >
            <Icon size={20} />
          </a>
        ))}
      </motion.div>


      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="max-w-md mx-auto flex flex-col gap-4 text-left"
      >
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          required
          className="px-4 py-3 rounded-xl border border-lavender focus:outline-none focus:ring-2 focus:ring-lavender-deep"
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={formData.email}
          onChange={handleChange}
          required
          className="px-4 py-3 rounded-xl border border-lavender focus:outline-none focus:ring-2 focus:ring-lavender-deep"
        />
        <textarea
          name="message"
          placeholder="Your message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
          className="px-4 py-3 rounded-xl border border-lavender focus:outline-none focus:ring-2 focus:ring-lavender-deep"
        />

        <button
          type="submit"
          disabled={status === "submitting"}
          className="px-6 py-3 rounded-full font-semibold text-ink bg-skyblue shadow-soft hover:-translate-y-0.5 transition-transform disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
        >
          {status === "submitting" ? "Sending..." : "Send message"}
        </button>

        {status === "success" && (
          <p className="text-sm text-center text-green-600 font-medium">
            Thanks! Your message has been sent — I&apos;ll get back to you soon.
          </p>
        )}
        {status === "error" && (
          <p className="text-sm text-center text-red-500 font-medium">
            Something went wrong. Please try again, or email me directly.
          </p>
        )}
      </motion.form>
    </section>
  );
}












