import {
  Code,
  Database,
  Github,
  Globe,
  Linkedin,
  Mail,
  Server,
} from "lucide-react";
import LinkButton from "./LinkButton";
import Para from "./Para";
import DomainCard from "./DomainCard";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="">About Me</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <Para>
              I'm a passionate Full Stack Developer with over 7 years of
              experience building scalable web applications. My expertise lies
              in the MERN stack, where I've helped businesses transform their
              ideas into robust digital solutions.
            </Para>
            <Para>
              From crafting pixel-perfect user interfaces to architecting
              complex backend systems, I bring a holistic approach to web
              development. I'm also working on an interactive portfolio game
              that showcases my skills in a unique way.
            </Para>
            <div className="flex space-x-4 pt-4">
              <LinkButton url="#">
                <Github
                  size={20}
                  className="group-hover:rotate-12 transition-transform duration-300"
                />
              </LinkButton>
              <LinkButton url="#">
                <Linkedin
                  size={20}
                  className="group-hover:rotate-12 transition-transform duration-300"
                />
              </LinkButton>
              <LinkButton url="#">
                <Mail
                  size={20}
                  className="group-hover:rotate-12 transition-transform duration-300"
                />
              </LinkButton>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <DomainCard
              title="Frontend"
              subtitle="React, React Native, Next.js, TypeScript"
              icon={<Code className="text-purple-600 mb-4" size={32} />}
            />
            <DomainCard
              title="Backend"
              subtitle="Node.js, Express, REST API"
              icon={<Server className="text-blue-600 mb-4" size={32} />}
            />
            <DomainCard
              title="Database"
              subtitle="MongoDB, PostgreSQL"
              icon={<Database className="text-green-600 mb-4" size={32} />}
            />
            <DomainCard
              title="Tools"
              subtitle="Git, Docker, AWS"
              icon={<Globe className="text-pink-600 mb-4" size={32} />}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
