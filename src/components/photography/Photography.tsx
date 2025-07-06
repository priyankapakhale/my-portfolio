import { useEffect } from "react";
import AnimatedBackground from "./AnimatedBackground";
import FeaturedPhotos from "./FeaturedPhotos";
import Heading from "./Heading";
import OtherPhotos from "./OtherPhotos";

const Photography = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative">
      <AnimatedBackground />
      <Heading />
      <FeaturedPhotos />
      <OtherPhotos />
    </div>
  );
};

export default Photography;
