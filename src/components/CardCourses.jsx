import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const CardCourses = ({ icon, name, desc, button, img, price, date }) => {
  const nav = useNavigate();
  return (
    <div
      dir="rtl"
      className="bg-[#ffffff] w-full sm:w-[300px] shadow-md rounded-xl"
    >
      <img
        src={icon}
        alt=""
        className="rounded-t-xl h-[200px] sm:h-[180px] w-full"
      />
      <div className="flex flex-col gap-3 mt-4 px-4">
        <h1 className="font-bold mb-3 text-base sm:text-lg">{name}</h1>
        <p className="text-[#616161] text-xs sm:text-sm mb-3">{desc}</p>
        <div className="flex gap-2 items-center mb-3">
          <img src={img} alt="Rating" className="w-[20%] sm:w-[30%]" />
          <p className="text-[#616161] text-xs sm:text-sm">42/862 تقييم</p>
        </div>
        <div className="flex gap-2 items-center justify-between mb-3">
          <p className="text-[#616161] text-xs sm:text-sm text-nowrap">
            {date}
          </p>
          <p className="text-[#0055D2] text-sm sm:text-xl font-bold">{price}</p>
        </div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <button
            onClick={() => nav("/test")}
            className="bg-[#0055D2] text-white py-1 px-2 sm:py-2 rounded flex-1"
          >
            {button}
          </button>
          <button className="bg-white border border-[#0055D2] font-semibold text-[#0055D2] py-1 px-2 sm:py-2 rounded flex-1">
            التسجيل
          </button>
        </div>
      </div>
    </div>
  );
};

CardCourses.propTypes = {
  icon: PropTypes.node.isRequired,
  name: PropTypes.node.isRequired,
  desc: PropTypes.node.isRequired,
  button: PropTypes.node.isRequired,
  img: PropTypes.node.isRequired,
  price: PropTypes.node.isRequired,
  date: PropTypes.node.isRequired,
};

export default CardCourses;
