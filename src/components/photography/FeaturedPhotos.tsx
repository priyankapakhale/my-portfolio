import { Camera, Clock, MapPin, Telescope } from "lucide-react";
import andromedaGalaxy from "../../assets/photos/m31.jpg";
import orionNebula from "../../assets/photos/m42.jpg";

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
      "Captured on a clear night with good conditions, but I realized the focus wasn’t perfect, which slightly impacted the sharpness of the image. Despite that, the nebula’s vibrant colors and structure still came through nicely!",
    description: `Orion Nebula (M42) A stellar nursery located 1,344 light-years
                  away in the constellation Orion. This emission nebula spans 24
                  light-years and is one of the most photographed deep-sky
                  objects. The nebula's brilliant reds and blues come from
                  ionized hydrogen and oxygen gases energized by the hot
                  Trapezium cluster at its heart. Its complex structure of gas
                  filaments and dark dust lanes makes it a favorite target for
                  both visual observers and astrophotographers.`,
  },
  {
    id: 2,
    title: "Andromeda Galaxy (M31)",
    image: andromedaGalaxy,
    location: "Bortle 7, Cloudy sky (Maharashtra)",
    exposure: "31 mins (314 frames, 6 seconds each)",
    date: "Dec 2024",
    distanceFromEarth: "1,344 light years away",
    camera: "Canon 90D",
    telescope: "Explore Scientific 150mm f/5.0 (750mm)",
    experience:
      "Despite the challenging cloudy skies, I was able to capture some detail of the Andromeda Galaxy.",
    description: `Andromeda Galaxy (M31)
Our nearest major galactic neighbor, located 2.5 million light-years away and approaching us at 250,000 mph. This spiral galaxy contains over one trillion stars and spans 220,000 light-years across—more than twice the size of our Milky Way. The galaxy's distinctive spiral arms, bright central bulge, and companion galaxies M32 and M110 create a stunning composition that showcases the grand scale of the universe beyond our own cosmic backyard.`,
  },
];

const FeaturedPhotos = () => {
  return (
    <div className="px-6 pt-12 pb-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Featured Deep Sky Objects
        </h2>
      </div>

      <div className="mb-12 flex flex-col gap-8 justify-center">
        {featuredImages.map((featuredImage) => (
          <div className="flex">
            <div className="relative rounded-2xl overflow-hidden cursor-pointer group flex-1">
              <img
                src={featuredImage.image}
                alt={featuredImage.title}
                className="w-full h-96 md:h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-cyan-400">
                  {featuredImage.title}
                </h3>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2 bg-gray-900/70 px-3 py-1 rounded-full">
                    <MapPin className="w-4 h-4 text-yellow-400" />
                    <span>{featuredImage.location}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-gray-900/70 px-3 py-1 rounded-full">
                    <Clock className="w-4 h-4 text-purple-400" />
                    <span>{featuredImage.exposure}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-gray-900/70 px-3 py-1 rounded-full">
                    <Camera className="w-4 h-4 text-pink-400" />
                    <span>{featuredImage.camera}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-gray-900/70 px-3 py-1 rounded-full">
                    <Telescope className="w-4 h-4 text-green-400" />
                    <span>{featuredImage.telescope}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 p-16 flex flex-col gap-2">
              <h3 className="text-2xl md:text-3xl font-bold mb-2 text-cyan-400">
                {featuredImage.title}
              </h3>
              <div className="italic">{featuredImage.experience}</div>
              <div className="italic">{featuredImage.distanceFromEarth}</div>
              <h4 className="text-blue-300">
                <b>Equipment:</b> Explore Scientific 150mm f/5.0 (750mm focal
                length) + Canon 90D: Stacked and processed
              </h4>
              <div className="text-blue-200">
                <b>Location:</b> {featuredImage.location}
              </div>
              <div className="pt-4 text-blue-200">
                {featuredImage.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedPhotos;
