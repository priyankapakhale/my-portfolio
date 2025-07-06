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

const OtherPhotos = () => {
  return (
    <div className="relative z-10 px-4 sm:px-6 py-10">
      <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mx-auto leading-relaxed text-center p-6 sm:p-10">
        While my passion lies in astrophotography, I occasionally enjoy
        capturing the beauty of wildlife and landscapes too
      </p>

      {/* Portrait photos (bee eater and drongo) */}
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 justify-center mb-8 sm:mb-12">
        <div className="w-full sm:flex-1 sm:max-w-sm mx-auto sm:mx-0">
          <img
            src={beeeater}
            alt="Bee eater"
            className="w-full h-96 sm:w-auto sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] object-cover rounded-xl sm:mx-auto"
          />
          <div className="text-center mt-4 italic text-gray-300">Bee eater</div>
        </div>
        <div className="w-full sm:flex-1 sm:max-w-sm mx-auto sm:mx-0">
          <img
            src={drongo}
            alt="Drongo"
            className="w-full h-96 sm:w-auto sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] object-cover rounded-xl sm:mx-auto"
          />
          <div className="text-center mt-4 italic text-gray-300">Drongo</div>
        </div>
      </div>

      {/* Landscape photos in a grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8 justify-items-center">
        <div className="w-full max-w-sm">
          <img
            src={kite1}
            alt="Kite flying"
            className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover rounded-xl"
          />
          <div className="text-center mt-4 italic text-gray-300">Kite</div>
        </div>
        <div className="w-full max-w-sm">
          <img
            src={kite2}
            alt="Kite flying"
            className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover rounded-xl"
          />
          <div className="text-center mt-4 italic text-gray-300">Kite</div>
        </div>
        <div className="w-full max-w-sm">
          <img
            src={sunset}
            alt="Sunset on beach"
            className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover rounded-xl"
          />
          <div className="text-center mt-4 italic text-gray-300">
            Sunset on beach
          </div>
        </div>
        <div className="w-full max-w-sm">
          <img
            src={flagstaff}
            alt="Flagstaff, Arizona during trek"
            className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover rounded-xl"
          />
          <div className="text-center mt-4 italic text-gray-300">
            Flagstaff, Arizona (during trek)
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherPhotos;
