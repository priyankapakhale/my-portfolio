export interface IProject {
  name: string;
  description?: string;
  responsibilities: string[];
  technologies: string[];
}

const ProjectCard = ({ project }: { project: IProject }) => {
  return (
    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:border-gray-300 transition-colors duration-200">
      <h4 className="font-semibold text-gray-800 mb-2">{project.name}</h4>
      {project.description && (
        <p className="text-sm text-gray-600 mb-3 italic">
          {project.description}
        </p>
      )}

      <div className="space-y-2 mb-3">
        {project.responsibilities.map((resp, i) => (
          <div key={i} className="flex items-start">
            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
            <span
              className="text-md text-gray-700"
              dangerouslySetInnerHTML={{ __html: resp }}
            />
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-1">
        {project.technologies.map((tech, i) => (
          <span
            key={i}
            className="px-2 py-1 bg-white text-gray-600 rounded-full text-xs border border-gray-200"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
