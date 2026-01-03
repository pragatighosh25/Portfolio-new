import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import HoverPreview from "./HoverPreview.jsx";
import { projects } from "../helpers/projects.js";

export default function Work() {
  const [activeProject, setActiveProject] = useState(null);
  const openProject = (project) => {
    window.open(project.links.demo, "_blank");
  };

  return (
    <section className="bg-black text-white px-6 md:px-20 py-28 relative">
      <div className="space-y-12">
        {projects.map((project) => {
          const isActive = activeProject?.id === project.id;

          return (
            <motion.div
              key={project.id}
              layout
              onMouseEnter={() => setActiveProject(project)}
              onMouseLeave={() => setActiveProject(null)}
              onClick={() => openProject(project)}
              className="group cursor-pointer"
              transition={{
                layout: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
              }}
            >
              <div className="flex items-start justify-between gap-12">
                {/* LEFT */}
                <div className="max-w-3xl">
                  <h3 className="text-4xl md:text-5xl font-medium">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-white/60">{project.subtitle}</p>

                  <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/40">
                    <span>{project.year}</span>
                    <span>{project.category}</span>
                    <span>{project.stack.slice(0, 3).join(" · ")}</span>
                  </div>

                  {/* EXPANDING DESCRIPTION */}
                  {isActive && (
                    <motion.p
                      layout
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.25 }}
                      className="mt-5 max-w-2xl text-white/50"
                    >
                      {project.description}
                    </motion.p>
                  )}
                </div>

                {/* RIGHT ICON */}
                <ArrowUpRight
                  size={40}
                  strokeWidth={1.5}
                  onClick={(e) => {
                    e.stopPropagation();
                    openProject(project);
                  }}
                  className={`transition-all duration-300 ${
                    isActive
                      ? "text-white translate-x-1 -translate-y-1"
                      : "text-white/30"
                  }`}
                />
              </div>

              {/* Divider */}
              <div className="mt-6 h-px w-full bg-white/10" />
            </motion.div>
          );
        })}
      </div>

      <HoverPreview image={activeProject?.preview} />
    </section>
  );
}
