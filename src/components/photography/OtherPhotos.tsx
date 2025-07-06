import beeeater from "../../assets/photos/beeeater.jpg";
import drongo from "../../assets/photos/drongo.jpg";
import sunset from "../../assets/photos/sunset.jpg";
import flagstaff from "../../assets/photos/flagstaff.jpg";
import kite1 from "../../assets/photos/kite1.jpg";
import kite2 from "../../assets/photos/kite2.jpg";

const OtherPhotos = () => {
  return (
    <div className="relative z-10 px-6 py-10">
      <p className="text-xl md:text-2xl text-gray-300  mx-auto leading-relaxed text-center pb-10">
        While my passion lies in astrophotography, I occasionally enjoy
        capturing the beauty of wildlife and landscapes too
      </p>

      <div className="flex gap-10 justify-center flex-wrap">
        <div>
          <img
            src={beeeater}
            alt="Capturing M42"
            style={{ height: 600 }}
            className="rounded-xl"
          />
          <div className="text-center mt-4 italic">Bee eater</div>
        </div>
        <div>
          <img
            src={drongo}
            alt="Capturing M42"
            style={{ height: 600 }}
            className="rounded-xl"
          />
          <div className="text-center mt-4 italic">Drongo</div>
        </div>
        <div className="w-full" />
        <div>
          <img src={kite1} alt="Capturing M42" className="h-96 rounded-xl" />
          <div className="text-center mt-4 italic">Kite</div>
        </div>
        <div>
          <img src={kite2} alt="Capturing M42" className="h-96 rounded-xl" />
          <div className="text-center mt-4 italic">Kite</div>
        </div>
        <div>
          <img src={sunset} alt="Capturing M42" className="h-96 rounded-xl" />
          <div className="text-center mt-4 italic">Sunset on beach</div>
        </div>
        <div>
          <img
            src={flagstaff}
            alt="Capturing M42"
            className="h-96 rounded-xl"
          />
          <div className="text-center mt-4 italic">
            Flagstaff, Arizona (during trek)
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherPhotos;
