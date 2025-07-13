import React, { useEffect } from "react";
import AnimatedBackground from "./AnimatedBackground";
import Heading from "./Heading";
import FeaturedPhotos from "./FeaturedPhotos";
import OtherPhotos from "./OtherPhotos";

const Photography: React.FC = () => {
  useEffect(() => window.scrollTo({ top: 0, behavior: "smooth" }), []);

  return (
    <section
      id="photography"
      className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden"
    >
      <AnimatedBackground />
      <div className="relative z-10">
        <Heading />
        <FeaturedPhotos />
        <OtherPhotos />
      </div>
    </section>
  );
};

export default Photography;
