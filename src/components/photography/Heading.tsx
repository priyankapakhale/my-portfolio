import { Telescope } from "lucide-react";
import capturingM42 from "../../assets/photos/capturingM42.png";
import meWithTelescope from "../../assets/photos/meWithTelescope.png";
import gear from "../../assets/photos/gear.png";
import { useEffect, useState } from "react";

const Heading = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative z-10 px-6 pt-16 pb-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div
            className={`flex items-center justify-center gap-4 mb-8 transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="relative">
              <Telescope size={64} className="text-cyan-400 animate-pulse" />
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-bounce" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Astrophotography
            </h1>
          </div>
          <p
            className={`text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            When I'm not building applications, I'm capturing the cosmos.
            <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-semibold">
              Combining technical precision with artistic vision
            </span>{" "}
            to reveal the hidden beauty of deep space.
          </p>
        </div>

        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-center transform transition-all duration-1000 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {[
            {
              src: meWithTelescope,
              alt: "Me with telescope",
              label: "Me with telescope",
            },
            {
              src: capturingM42,
              alt: "Capturing M42",
              label: "Capturing the Shot",
            },
            {
              src: gear,
              alt: "My gear",
              label: "Equipment & Gear",
            },
          ].map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-2xl"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full object-cover group-hover:scale-110 transition-transform duration-700"
                style={{ height: 500 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-lg font-semibold text-cyan-400 mb-2"></h3>
                <p className="text-sm text-gray-300">{image.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Heading;
