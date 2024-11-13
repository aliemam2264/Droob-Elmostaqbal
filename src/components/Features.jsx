import videoBox from "../assets/Video Box.png";
import whiteArrow from "../assets/whiteArrow.png";
import features2 from "../assets/features2.png";
import features3 from "../assets/features3.png";
import features4 from "../assets/features4.png";
import { useNavigate } from "react-router-dom";

const Features = () => {
  const nav = useNavigate();
  return (
    <div dir="rtl" className="py-20 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <div>
        <img src={videoBox} alt="video box" />
      </div>
      <div className="flex flex-col lg:flex-row mt-20 w-full gap-10 items-center">
        <div className="w-full lg:w-[50%] text-center lg:text-right">
          <h5 className="text-[#0055D2] text-xl font-bold mb-6">
            مدربين و مدرسين معتمدون
          </h5>
          <h1 className="text-2xl font-bold mb-4">
            نقدم لك الدعم والمتابعة اللازمة للوصول معًا إلى أفضل النتائج.
          </h1>
          <p className="text-base text-[#616161] mb-4">
            نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات
            المطابع ودور النشر.
          </p>

          <button
            onClick={() => nav("/who-we-are")}
            className="flex gap-3 items-center bg-[#0055D2] py-3 px-6 border rounded-xl text-white mx-auto lg:mx-0"
          >
            اعرف المزيد
            <img src={whiteArrow} alt="arrow" />
          </button>
        </div>

        {/* Hide images on mobile screens */}
        <div className="w-full  lg:w-[50%]">
          <img src={features2} alt="feature 2" className="" />
          <div className="flex mt-4 gap-5 overflow-hidden ">
            <img src={features4} alt="feature 4" className="w-[50%]" />
            <img src={features3} alt="feature 3" className="w-[50%]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
