import { ExternalLink, Github } from "lucide-react";
import type { IProject } from "./Projects";

const ProjectCard = ({ project }: { project: IProject }) => {
  return (
    <div className="rounded-xl overflow-hidden bg-white  shadow-lg group">
      <div className="h-48 flex items-center justify-center text-6xl">
        {project.image}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
        <p className="text-sm mb-4 leading-relaxed text-gray-600">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 text-xs rounded-full bg-gray-200 text-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex space-x-4">
          <a
            href={project.github}
            className="flex items-center text-purple-600"
          >
            <Github size={16} className="mr-2" />
            <span className="text-sm font-semibold">Code</span>
          </a>
          <a href={project.live} className="flex items-center text-blue-600">
            <ExternalLink size={16} className="mr-2" />
            <span className="text-sm font-semibold">Live Demo</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
