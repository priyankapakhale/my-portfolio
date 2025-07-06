import { Telescope } from "lucide-react";
import capturingM42 from "../../assets/photos/capturingM42.png";
import meWithTelescope from "../../assets/photos/meWithTelescope.png";
import gear from "../../assets/photos/gear.png";

const Heading = () => {
  return (
    <div className="relative z-10 px-6 pt-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Telescope size={56} />
            <h1 className="text-4xl md:text-6xl font-bold">Astrophotography</h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            When I'm not building applications, I'm capturing the cosmos.
            <br className="hidden md:block" />
            Combining technical precision with artistic vision to reveal the
            hidden beauty of deep space.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
          <img
            src={meWithTelescope}
            alt="Me with telescope"
            className="w-full md:w-1/3 rounded-xl object-contain max-h-96"
          />
          <img
            src={capturingM42}
            alt="Capturing M42"
            className="w-full md:w-1/3 rounded-xl object-contain max-h-96"
          />
          <img
            src={gear}
            alt="My gear"
            className="w-full md:w-1/3 rounded-xl object-contain max-h-96"
          />
        </div>
      </div>
    </div>
  );
};

export default Heading;
