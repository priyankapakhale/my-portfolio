import FeaturedProject from "./FeaturedProject";
import ProjectCard from "./ProjectCard";

export interface IProject {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  image: string;
  featured: boolean;
}

const projects: IProject[] = [
  {
    title: "E-commerce Platform",
    description:
      "Full-stack MERN application with payment integration, admin dashboard, and real-time inventory management.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "#",
    live: "#",
    image: "🛍️",
    featured: false,
  },
  {
    title: "Social Media Dashboard",
    description:
      "Real-time analytics dashboard with interactive charts and social media integration.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
    github: "#",
    live: "#",
    image: "📊",
    featured: false,
  },
  {
    title: "Interactive Portfolio Game",
    description:
      "A unique browser-based game that tells my professional story through interactive gameplay. Navigate through different levels representing my career journey, solve coding challenges, and discover my skills in an engaging way.",
    tech: ["React", "TypeScript", "Phaser.js"],
    github: "#",
    live: "#",
    image: "🎮",
    featured: true,
  },
];

const Projects = () => {
  const featuredProject = projects.find((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {featuredProject && (
          <>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Featured Projects
            </h2>
            <FeaturedProject project={featuredProject} />
          </>
        )}
        <div className="grid md:grid-cols-2 gap-8">
          {otherProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
