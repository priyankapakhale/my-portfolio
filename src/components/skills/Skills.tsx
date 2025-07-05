const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "React",
      "React Native",
      "Expo",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "Storybook",
      "Accessibility (a11y)",
      "Next.js",
    ],
    icon: "🎨",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express",
      "REST APIs",
      "JWT",
      "Microservices",
      "Serverless Framework",
    ],
    icon: "⚙️",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Database",
    skills: ["MongoDB", "PostgreSQL", "Redis", "MySQL", "Mongoose"],
    icon: "🗄️",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Testing",
    skills: ["Jest", "Cypress", "Test Driver Developement (TDD)"],
    icon: "🧪",
    color: "from-amber-500 to-yellow-500",
  },
  {
    title: "Tools & Cloud",
    skills: [
      "Git",
      "Docker",
      "AWS",
      "CI/CD",
      "Vercel",
      "Postman",
      "Webpack",
      "Github copilot",
      "ChatGPT APIs",
      "Google APIs",
      "Jira",
    ],
    icon: "🚀",
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Other",
    skills: [
      "Agile/Scrum",
      "Monorepo",
      "Design Systems",
      "Performance Optimization",
    ],
    icon: "⚡",
    color: "from-indigo-500 to-purple-500",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Skills & Technologies
        </h2>

        <div className="grid gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center mb-4">
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center text-2xl mr-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <div className="space-y-2 space-x-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="inline-block px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
