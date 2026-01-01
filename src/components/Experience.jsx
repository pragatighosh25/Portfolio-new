import { motion } from "framer-motion";

const experience = [
  {
    company: "Zuddl",
    role: "Frontend Developer Intern",
    time: "2024",
  },
  {
    company: "House of Geeks",
    role: "UI/UX & Design Coordinator",
    time: "2023 — Present",
  },
];

export default function Experience() {
  return (
    <section className="bg-black text-white px-6 md:px-20 py-32">
      <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-10">
        Experience
      </p>

      <div className="space-y-16">
        {experience.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-between items-start border-b border-white/10 pb-6"
          >
            <div>
              <h4 className="text-2xl font-medium">{item.company}</h4>
              <p className="text-white/60">{item.role}</p>
            </div>
            <span className="text-white/40">{item.time}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
