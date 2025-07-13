import { Camera, Clock, Eye, MapPin, Star, Telescope } from "lucide-react";
import andromedaGalaxy from "../../assets/photos/m31.jpg";
import orionNebula from "../../assets/photos/m42.jpg";
const FeaturedPhotos = () => {
  const featuredImages = [
    {
      id: 1,
      title: "Orion Nebula (M42)",
      image: orionNebula,
      location: "Bortle 4-5 Site, Clear Sky (Maharashtra)",
      exposure: "10 mins (100 frames, 6 seconds each)",
      date: "Nov 2024",
      distanceFromEarth: "1,344 light years away",
      camera: "Canon 90D",
      telescope: "Explore Scientific 150mm f/5.0 (750mm)",
      experience:
        "Captured on a clear night with good conditions, but I realized the focus wasn't perfect, which slightly impacted the sharpness of the image. Despite that, the nebula's vibrant colors and structure still came through nicely!",
      description:
        "Orion Nebula (M42) - A stellar nursery located 1,344 light-years away in the constellation Orion. This emission nebula spans 24 light-years and is one of the most photographed deep-sky objects. The nebula's brilliant reds and blues come from ionized hydrogen and oxygen gases energized by the hot Trapezium cluster at its heart.",
      difficulty: "Intermediate",
      conditions: "Clear Sky",
    },
    {
      id: 2,
      title: "Andromeda Galaxy (M31)",
      image: andromedaGalaxy,
      location: "Bortle 7, Cloudy sky (Maharashtra)",
      exposure: "31 mins (314 frames, 6 seconds each)",
      date: "Dec 2024",
      distanceFromEarth: "2.5 million light years away",
      camera: "Canon 90D",
      telescope: "Explore Scientific 150mm f/5.0 (750mm)",
      experience:
        "Despite the challenging cloudy skies, I was able to capture some detail of the Andromeda Galaxy.",
      description:
        "Andromeda Galaxy (M31) - Our nearest major galactic neighbor, located 2.5 million light-years away and approaching us at 250,000 mph. This spiral galaxy contains over one trillion stars and spans 220,000 light-years across—more than twice the size of our Milky Way.",
      difficulty: "Advanced",
      conditions: "Challenging",
    },
  ];

  return (
    <div className="px-6 pt-16 pb-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Featured Deep Sky Objects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of my most challenging and rewarding astrophotography
            captures
          </p>
        </div>

        <div className="space-y-20">
          {featuredImages.map((image, index) => (
            <div
              key={image.id}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-12 items-center`}
            >
              {/* Image Section */}
              <div className="flex-1 group">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-cyan-500/25 transition-all duration-500">
                  <img
                    src={image.image}
                    alt={image.title}
                    className="w-full h-[400px] lg:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Overlay with quick stats */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            image.difficulty === "Advanced"
                              ? "bg-red-500/20 text-red-300"
                              : "bg-yellow-500/20 text-yellow-300"
                          }`}
                        >
                          {image.difficulty}
                        </span>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            image.conditions === "Challenging"
                              ? "bg-orange-500/20 text-orange-300"
                              : "bg-green-500/20 text-green-300"
                          }`}
                        >
                          {image.conditions}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-cyan-400 mb-2">
                        {image.title}
                      </h3>
                      <p className="text-gray-300 text-sm">
                        {image.distanceFromEarth}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Details Section */}
              <div className="flex-1 space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-cyan-400 mb-2 lg:hidden">
                    {image.title}
                  </h3>
                  <h3 className="text-3xl font-bold text-cyan-400 mb-2 hidden lg:block">
                    {image.title}
                  </h3>
                  <p className="text-gray-400 text-lg italic mb-4">
                    {image.distanceFromEarth}
                  </p>
                </div>

                {/* Technical Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg border border-gray-700/50">
                    <MapPin className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-400">Location</p>
                      <p className="text-sm text-gray-200">{image.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg border border-gray-700/50">
                    <Clock className="w-5 h-5 text-purple-400 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-400">Exposure</p>
                      <p className="text-sm text-gray-200">{image.exposure}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg border border-gray-700/50">
                    <Camera className="w-5 h-5 text-pink-400 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-400">Camera</p>
                      <p className="text-sm text-gray-200">{image.camera}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg border border-gray-700/50">
                    <Telescope className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-400">Telescope</p>
                      <p className="text-sm text-gray-200">{image.telescope}</p>
                    </div>
                  </div>
                </div>

                {/* Experience & Description */}
                <div className="space-y-4">
                  <div className="p-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg border border-cyan-500/20">
                    <h4 className="text-cyan-400 font-semibold mb-2 flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      Capture Experience
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed italic">
                      {image.experience}
                    </p>
                  </div>

                  <div className="p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20">
                    <h4 className="text-purple-400 font-semibold mb-2 flex items-center gap-2">
                      <Star className="w-4 h-4" />
                      About This Object
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {image.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedPhotos;
