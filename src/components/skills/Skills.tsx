const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "React",
      "React Native",
      "TypeScript",
      "Tailwind CSS",
      "JavaScript",
    ],
    icon: "🎨",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "REST APIs", "JWT", "Microservices"],
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
    title: "Tools & Cloud",
    skills: ["Git", "Docker", "AWS", "Vercel", "Postman"],
    icon: "🚀",
    color: "from-orange-500 to-red-500",
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
              className="group bg-white rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center text-2xl mr-4`}
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
