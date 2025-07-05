import { Gamepad2, Github, Play } from "lucide-react";
import type { IProject } from "./Projects";

const FeaturedProject = ({ project }: { project: IProject }) => {
  return (
    <div className="mb-16 bg-white rounded-2xl overflow-hidden shadow-2xl group">
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="p-8 lg:p-12">
          <div className="flex items-center mb-4">
            <Gamepad2 className="text-purple-600 mr-3" size={28} />
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
              Featured Project
            </span>
          </div>

          <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
          <p className="text-lg mb-6 text-gray-600">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 text-sm rounded-full bg-gray-200 text-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex space-x-4">
            <a
              href="#"
              className="flex items-center px-6 py-3 rounded-full shadow-lg group"
            >
              <Play size={18} className="mr-2" />
              <span className="font-semibold">Play Game</span>
            </a>
            <a
              href="#"
              className="flex items-center px-6 py-3 rounded-full shadow-lg"
            >
              <Github size={18} className="mr-2" />
              <span className="font-semibold">View Code</span>
            </a>
          </div>
        </div>

        <div className="lg:p-8 p-4">
          <div className="h-80 rounded-xl flex items-center justify-center text-8xl shadow-lg">
            🎮
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;
