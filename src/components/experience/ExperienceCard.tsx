import { Briefcase, Building, Calendar, MapPin } from "lucide-react";

import ProjectCard from "./ProjectCard";
import type { IExperience } from "./experienceData";

const ExperienceCard = ({
  experience,
  index,
}: {
  experience: IExperience;
  index: number;
}) => {
  return (
    <div
      className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
      style={{
        animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`,
      }}
    >
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-pink-100 rounded-lg flex items-center justify-center mr-4">
              <Briefcase className="text-purple-600" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 transition-colors duration-300">
                {experience.role}
              </h3>
              <div className="flex items-center text-purple-600 font-medium">
                <Building size={14} className="mr-2" />
                {experience.company}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:items-end text-sm text-gray-800 bg-gray-50 rounded-md p-3">
          <div className="flex items-center mb-1">
            <Calendar size={14} className="mr-1" />
            {experience.period}
          </div>
          <div className="flex items-center">
            <MapPin size={14} className="mr-1" />
            {experience.location}
          </div>
        </div>
      </div>

      <p className="text-gray-700 mb-4 leading-relaxed">
        {experience.overview}
      </p>

      <div className="space-y-4 mb-4">
        {experience.projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
