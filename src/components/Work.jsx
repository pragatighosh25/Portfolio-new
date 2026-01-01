import { useState } from "react";
import HoverPreview from "./HoverPreview.jsx";
import { projects } from "../helpers/projects.js";

export default function Work() {
  const [activeProject, setActiveProject] = useState(null);
  
  return (
    
    <section className="bg-black text-white px-20 py-32">
      <div className="space-y-20">
        {projects.map((project) => (
          <div
            key={project.id}
            onMouseEnter={() => setActiveProject(project)}
            onMouseLeave={() => setActiveProject(null)}
            className="cursor-hover"
          >
            <h3 className="text-6xl font-medium">
              {project.title}
            </h3>

            <p className="mt-3 text-white/60">
              {project.subtitle}
            </p>
          </div>
        ))}
      </div>

      {/* THIS LINE IS MANDATORY */}
      <HoverPreview
  image={null}
  active={true}
/>

    </section>
  );
}
