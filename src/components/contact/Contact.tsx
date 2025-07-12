import {
  Calendar,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  User,
} from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Join Your Team
          </h2>

          <p className="text-lg mb-8 max-w-3xl mx-auto leading-relaxed text-gray-600">
            I'm actively seeking new opportunities to contribute to innovative
            projects and grow with a forward-thinking team. Let's discuss how my
            7+ years of MERN stack experience can add value to your
            organization.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="bg-white rounded-2xl px-6 py-8 sm:p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <User className="mr-3 text-purple-600" size={24} />
              Get In Touch
            </h3>

            <div className="space-y-6">
              <div className="flex items-center group">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Mail size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <a
                    href="mailto:pakhalepriyanka0304@gmail.com"
                    className="text-lg font-semibold hover:text-purple-600 transition-colors break-all"
                  >
                    pakhalepriyanka0304@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Phone size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <a
                    href="tel:+918591284096"
                    className="text-lg font-semibold hover:text-purple-600 transition-colors"
                  >
                    (+91) 8591284096
                  </a>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <MapPin size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="text-lg font-semibold">Mumbai, India</p>
                  <p className="text-sm text-gray-500">Open to relocation</p>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Calendar size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Availability</p>
                  <p className="text-lg font-semibold text-green-600">
                    Available Immediately
                  </p>
                  <p className="text-sm text-gray-500">45 days notice period</p>
                </div>
              </div>
            </div>

            {/* Professional Links */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h4 className="font-semibold mb-4">Professional Profiles</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/priyankapakhale/"
                  target="_blank"
                  className="p-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl group"
                >
                  <Linkedin
                    size={20}
                    className="group-hover:rotate-12 transition-transform duration-300"
                  />
                </a>
                <a
                  href="https://github.com/priyankapakhale"
                  target="_blank"
                  className="p-3 bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-full hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl group"
                >
                  <Github
                    size={20}
                    className="group-hover:rotate-12 transition-transform duration-300"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl px-6 py-8 sm:p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Why Choose Me?</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold mb-1">Full Stack Expertise</h4>
                    <p className="text-sm text-gray-600">
                      7+ years of proven MERN stack development experience
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold mb-1">Problem Solver</h4>
                    <p className="text-sm text-gray-600">
                      Track record of delivering scalable solutions under tight
                      deadlines
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold mb-1">Team Player</h4>
                    <p className="text-sm text-gray-600">
                      Excellent collaboration skills and mentoring experience
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <a
                href="mailto:pakhalepriyanka0304@gmail.com?subject=Job Opportunity - Full Stack Developer Position"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl flex items-center justify-center group relative overflow-hidden"
              >
                <Mail size={20} className="mr-3" />
                <span className="relative z-10 whitespace-nowrap">
                  Send Email
                </span>
              </a>

              <a
                href="/assets/docs/resume.pdf"
                download
                className="w-full px-8 py-4 rounded-full text-lg font-semibold border-2 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl flex items-center justify-center border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
              >
                <Download size={20} className="mr-3" />
                <span className="whitespace-nowrap">Download Resume</span>
              </a>

              <a
                href="#"
                className="w-full px-8 py-4 rounded-full text-lg font-semibold border-2 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl flex items-center justify-center border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
              >
                <Calendar size={20} className="mr-3" />
                <span className="whitespace-nowrap">Schedule Interview</span>
              </a>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center p-6 rounded-xl bg-gray-50">
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Open to:</span> Full-time positions,
            Remote work, Hybrid arrangements, Relocation opportunities
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
