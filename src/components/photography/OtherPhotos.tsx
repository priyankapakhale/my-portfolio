import beeeater from "../../assets/photos/beeeater.jpg";
import drongo from "../../assets/photos/drongo.jpg";
// @ts-expect-error des
import sunset from "../../assets/photos/sunset.JPG";
// @ts-expect-error des
import flagstaff from "../../assets/photos/flagstaff.JPG";
// @ts-expect-error des
import kite1 from "../../assets/photos/kite1.JPG";
// @ts-expect-error des
import kite2 from "../../assets/photos/kite2.JPG";

const portraitPhotos = [
  {
    src: beeeater,
    alt: "Bee eater",
    caption: "Bee eater",
    type: "wildlife",
    orientation: "portrait",
  },
  {
    src: drongo,
    alt: "Drongo",
    caption: "Drongo",
    type: "wildlife",
    orientation: "portrait",
  },
];

const landscapePhotos = [
  {
    src: kite1,
    alt: "Kite",
    caption: "Kite",
    type: "landscape",
    orientation: "landscape",
  },
  {
    src: kite2,
    alt: "Kite",
    caption: "Kite",
    type: "landscape",
    orientation: "landscape",
  },
  {
    src: sunset,
    alt: "Sunset on beach",
    caption: "Sunset on beach",
    type: "landscape",
    orientation: "landscape",
  },
  {
    src: flagstaff,
    alt: "Flagstaff, Arizona during trek",
    caption: "Flagstaff, Arizona (during trek)",
    type: "landscape",
    orientation: "landscape",
  },
];

const OtherPhotos: React.FC = () => (
  <div className="relative z-10 px-6 py-16">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
          Beyond the Stars
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          While my passion lies in astrophotography, I occasionally enjoy
          capturing the beauty of wildlife and landscapes too
        </p>
      </div>

      {/* Wildlife Photos - Portrait Orientation */}
      <div className="mb-16">
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-start max-w-4xl mx-auto">
          {portraitPhotos.map((photo, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-green-500/25 transition-all duration-500 flex-1 max-w-sm mx-auto"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-[500px] sm:h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-6 right-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="text-xl font-semibold text-green-400">
                  {photo.caption}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Landscape Photos - Landscape Orientation */}
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {landscapePhotos.map((photo, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-blue-500/25 transition-all duration-500"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-4 right-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="text-lg font-semibold text-blue-400">
                  {photo.caption}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default OtherPhotos;
